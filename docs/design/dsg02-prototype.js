(() => {
  const root = document.getElementById("screen-root");
  const frame = document.getElementById("device-frame");
  const stateSelect = document.getElementById("state");
  const screens = {
    home: { title: "Trang chủ", active: "home" },
    list: { title: "Các loại nhựa", active: "list" },
    detail: { title: "Chi tiết PET", active: "list" },
    sorting: { title: "Cách phân loại", active: "sorting" },
    map: { title: "Bản đồ / danh sách", active: "map" }
  };
  let currentScreen = "home";
  let currentState = "default";

  const codes = [
    ["01", "PET", "Chai đồ uống có nhãn phù hợp"],
    ["02", "HDPE", "Một số can, chai có ký hiệu"],
    ["03", "PVC", "Một số ống, bao bì có ký hiệu"],
    ["04", "LDPE", "Túi hoặc màng có ký hiệu"],
    ["05", "PP", "Một số hộp, nắp có ký hiệu"],
    ["06", "PS", "Một số cốc hoặc hộp có ký hiệu"],
    ["07", "OTHER", "Vật liệu khác hoặc pha trộn"]
  ];

  const bottle = (compact = false) => `
    <svg class="bottle-art ${compact ? "bottle-art--compact" : ""}" viewBox="0 0 180 300" role="img" aria-label="Hình minh họa chai nhựa dạng vector">
      <path d="M68 24h44v26l14 18v190c0 13-10 23-23 23H77c-13 0-23-10-23-23V68l14-18z" fill="#fffefa" stroke="#193F2A" stroke-width="3"/>
      <path d="M68 51h44M57 108h68M56 215h69" fill="none" stroke="#357A54" stroke-width="2"/>
      <path d="M74 24v-12h32v12" fill="#BCE1B8" stroke="#193F2A" stroke-width="3"/>
      <rect x="69" y="129" width="42" height="38" rx="2" fill="#E7F0E7" stroke="#357A54"/>
      <text x="90" y="145" text-anchor="middle" fill="#193F2A" font-family="system-ui,sans-serif" font-size="8" font-weight="700">MẪU</text>
      <text x="90" y="158" text-anchor="middle" fill="#193F2A" font-family="system-ui,sans-serif" font-size="11" font-weight="700">01</text>
      <path d="M65 77q25-12 50 0" fill="none" stroke="#D7DCCF" stroke-width="3"/>
    </svg>`;

  const navItems = [
    ["home", "Trang chủ"], ["list", "Các loại nhựa"], ["sorting", "Cách phân loại"], ["map", "Điểm thu gom"]
  ];

  function routeLink(screen, label, extra = "") {
    return `<a href="#${screen}" data-screen="${screen}" ${extra}>${label}</a>`;
  }

  function header(active) {
    const links = navItems.map(([key, label]) => routeLink(key, label, key === active ? 'aria-current="page"' : "")).join("");
    const mobileLinks = navItems.map(([key, label]) => routeLink(key, `${label}<span aria-hidden="true">↗</span>`, key === active ? 'aria-current="page"' : "")).join("");
    return `
      <div class="notice-strip">Bản thiết kế minh họa · Nội dung cần rà soát trước khi công bố</div>
      <header class="site-header">
        <a class="brand" href="#home" data-screen="home" aria-label="Nhựa Xanh Hà Nội — về trang chủ">
          <span class="brand__name">Nhựa Xanh Hà Nội</span><span class="brand__tag">SỔ TAY VẬT LIỆU ĐÔ THỊ</span>
        </a>
        <nav class="site-nav" aria-label="Điều hướng chính">${links}</nav>
        <a class="primary-link header-cta" href="#map" data-screen="map">Tìm điểm thu gom <span aria-hidden="true">↗</span></a>
        <button class="menu-toggle" type="button" aria-label="Mở menu" aria-expanded="false"><span class="menu-icon" aria-hidden="true"></span></button>
        <nav class="mobile-menu" aria-label="Điều hướng điện thoại" data-open="false">
          ${mobileLinks}
          <a class="primary-link" href="#map" data-screen="map">Tìm điểm thu gom <span aria-hidden="true">↗</span></a>
        </nav>
      </header>`;
  }

  function footer() {
    return `
      <footer class="site-footer">
        <div class="footer-lead"><h2>Tìm hiểu trước khi bỏ đi.</h2><p>Nhận diện vật liệu, chuẩn bị phù hợp và kiểm tra yêu cầu của nơi tiếp nhận.</p></div>
        <div class="footer-group"><h3>KHÁM PHÁ</h3>${routeLink("list", "Các loại nhựa")}${routeLink("sorting", "Cách phân loại")}</div>
        <div class="footer-group"><h3>TẠI HÀ NỘI</h3>${routeLink("map", "Điểm thu gom")}<a href="#map" data-screen="map">Danh sách điểm</a></div>
        <div class="footer-group"><h3>LƯU Ý</h3><p class="footer-note">Mã nhựa cho biết loại vật liệu; không bảo đảm mọi địa điểm đều nhận.</p></div>
        <div class="footer-bottom"><span>Nhựa Xanh Hà Nội · tên làm việc</span><span>Thiết kế minh họa · chưa phải dịch vụ đã xác minh</span></div>
      </footer>`;
  }

  function stateCallout() {
    const messages = {
      default: "",
      loading: '<span class="state-callout__icon" aria-hidden="true">···</span><span><strong>Trạng thái đang tải</strong> — nội dung vẫn có thể đọc; các dòng mờ minh họa phần đang chờ.</span><span class="mini-skeletons" aria-hidden="true"><i></i><i></i><i></i></span>',
      empty: '<span class="state-callout__icon" aria-hidden="true">○</span><span><strong>Trạng thái rỗng</strong> — giữ lời giải thích, đường khôi phục và không hiển thị dữ liệu mẫu như dữ liệu thật.</span>',
      error: '<span class="state-callout__icon" aria-hidden="true">!</span><span><strong>Trạng thái lỗi</strong> — báo vấn đề và giữ lối truy cập danh sách/nội dung cốt lõi.</span>',
      selected: '<span class="state-callout__icon" aria-hidden="true">↗</span><span><strong>Trạng thái chọn</strong> — minh họa tương tác; nội dung điểm thu gom bên dưới chỉ là khung placeholder, không phải địa điểm thật.</span>'
    };
    const tone = currentState === "error" ? "error" : currentState === "loading" ? "loading" : "default";
    return `<div class="container"><div class="state-callout" data-visible="${currentState !== "default"}" data-tone="${tone}" role="status">${messages[currentState]}</div></div>`;
  }

  function home() {
    const tiles = codes.map(([n, code, name]) => code === "PET"
      ? `<a class="resin-tile" href="#detail" data-screen="detail"><span class="resin-tile__number">MÃ ${n}</span><span class="resin-tile__code">${code}</span><span class="resin-tile__name">${name}</span></a>`
      : `<div class="resin-tile"><span class="resin-tile__number">MÃ ${n}</span><span class="resin-tile__code">${code}</span><span class="resin-tile__name">${name}</span></div>`).join("");
    return `
      <div class="container">
        <section class="home-hero">
          <div class="home-hero__copy">
            <p class="eyebrow">SỔ TAY VẬT LIỆU · HÀ NỘI</p>
            <h1 class="display-title">Hiểu về nhựa.<br>Sống xanh hơn.</h1>
            <p class="lede">Tìm hiểu ký hiệu trên vật dụng, chuẩn bị phù hợp và kiểm tra thông tin nơi tiếp nhận.</p>
            <div class="home-hero__actions">
              <a class="primary-link" href="#list" data-screen="list">Khám phá 7 loại nhựa <span aria-hidden="true">↗</span></a>
              <a class="secondary-link" href="#map" data-screen="map">Tìm điểm thu gom</a>
            </div>
            <div class="annotation"><span class="annotation__mark" aria-hidden="true"></span><span>Mã vật liệu giúp nhận diện; khả năng tiếp nhận phụ thuộc từng điểm thu gom.</span></div>
          </div>
          <figure class="still-life">
            <span class="caption-tag caption-tag--one">01 · KÝ HIỆU VẬT LIỆU</span><span class="caption-line" aria-hidden="true"></span>
            ${bottle()}
            <figcaption class="caption-tag caption-tag--two">Hình minh họa tự dựng · không phải ảnh</figcaption>
          </figure>
        </section>
        <section class="home-index" aria-labelledby="home-index-title">
          <div class="section-heading"><div><span class="serial">01 / MỤC LỤC</span><h2 id="home-index-title">Bảy mã nhận diện</h2></div><p>Ký hiệu trên bao bì là điểm bắt đầu để tìm hiểu vật liệu.</p></div>
          <div class="resin-index">${tiles}</div>
        </section>
        <section class="home-actions" aria-label="Bước tiếp theo">
          <article class="editorial-block"><span class="editorial-block__num">02</span><div><h3>Chuẩn bị theo yêu cầu</h3><p>Không phải mọi vật liệu đều được tiếp nhận theo cùng một cách. Hãy kiểm tra hướng dẫn trước khi chuyển giao.</p><a class="text-link" href="#sorting" data-screen="sorting">Xem cách phân loại ↗</a></div></article>
          <article class="editorial-block"><span class="editorial-block__num">03</span><div><h3>Tìm nơi tiếp nhận</h3><p>Danh sách chỉ hiển thị địa điểm có thông tin đã xác minh và được duyệt công bố.</p><a class="text-link" href="#map" data-screen="map">Mở bản đồ thu gom ↗</a></div></article>
        </section>
        <section class="map-teaser"><div><span class="serial">HÀ NỘI / DỮ LIỆU ĐANG BỔ SUNG</span><h2>Thông tin điểm thu gom</h2><p>Chưa có điểm đã xác minh trong bản thiết kế này. Không hiển thị số liệu hoặc vị trí thay thế.</p><a class="text-link" href="#map" data-screen="map">Xem trạng thái dữ liệu ↗</a></div><div class="map-teaser__figure"><span>Chưa có điểm được xác minh</span></div></section>
      </div>`;
  }

  function resinList() {
    const items = codes.map(([n, code, example]) => {
      const isPet = code === "PET";
      return `
      <${isPet ? "a" : "div"} class="resin-row ${isPet ? "resin-row--available" : "resin-row--pending"}" data-code-number="${n}" ${isPet ? 'href="#detail" data-screen="detail" aria-label="Mã 01 PET/PETE, xem màn hình mẫu chi tiết"' : `aria-label="Mã ${n} ${code}, chi tiết đang được biên tập"`}>
        <span class="resin-row__number">${n}</span><span class="resin-row__code">${code}</span>
        <span><span class="resin-row__name">${code === "OTHER" ? "Nhóm vật liệu khác" : `Nhựa ${code}`}</span><span class="resin-row__example">Ví dụ tham khảo: ${example.toLowerCase()}</span>${isPet ? "" : '<span class="resin-row__pending">Chi tiết sẽ được biên tập</span>'}</span><span class="resin-row__arrow" aria-hidden="true">${isPet ? "↗" : ""}</span>
      </${isPet ? "a" : "div"}>`;
    }).join("");
    return `
      <div class="container">
        <div class="breadcrumb"><a href="#home" data-screen="home">Trang chủ</a><span aria-hidden="true">/</span><span>Các loại nhựa</span></div>
        <section class="page-intro"><p class="eyebrow">MỤC LỤC · 01–07</p><h1 class="display-title">7 mã nhận diện nhựa</h1><p class="lede">Bắt đầu bằng cách đọc ký hiệu và kiểm tra thông tin trên bao bì.</p></section>
        <aside class="caution"><span class="caution__mark" aria-hidden="true">!</span><p><strong>Ký hiệu vật liệu không phải cam kết tái chế.</strong>Mã nhựa cho biết nhóm vật liệu; khả năng tiếp nhận còn tùy từng điểm thu gom.</p></aside>
        <div class="resin-toolbar" role="group" aria-label="Lọc nhanh theo mã"><button class="filter-chip is-active" type="button" aria-pressed="true" data-list-filter="all">Tất cả · 7 mã</button><button class="filter-chip" type="button" aria-pressed="false" data-list-filter="123">Mã 1–3</button><button class="filter-chip" type="button" aria-pressed="false" data-list-filter="4567">Mã 4–7</button></div>
        <section class="resin-list" aria-label="Danh sách bảy mã nhựa">${items}</section>
        <section class="note-box screen-state"><strong>Nội dung mẫu cần rà soát</strong>Ví dụ vật dụng trong màn hình là gợi ý biên tập; cần đối chiếu ký hiệu trên sản phẩm trước khi công bố.</section>
        <div style="padding:0 0 50px"><a class="primary-link" href="#sorting" data-screen="sorting">Xem cách phân loại <span aria-hidden="true">↗</span></a></div>
      </div>`;
  }

  function resinDetail() {
    return `
      <div class="container">
        <div class="breadcrumb"><a href="#home" data-screen="home">Trang chủ</a><span aria-hidden="true">/</span><a href="#list" data-screen="list">Các loại nhựa</a><span aria-hidden="true">/</span><span>PET/PETE</span></div>
        <section class="detail-hero">
          <div><span class="code-stamp">01 <span aria-hidden="true">·</span> PET/PETE</span><h1>Nhựa PET/PETE</h1><p class="detail-hero__note">Chai đựng đồ uống là ví dụ thường gặp. Hãy xem ký hiệu vật liệu trên bao bì vì hình dáng bên ngoài không đủ để xác định chính xác.</p></div>
          <figure class="detail-art">${bottle(true)}<figcaption class="detail-art__label">Minh họa chai PET tự dựng · không phải ảnh sản phẩm đã xác minh</figcaption></figure>
        </section>
        <aside class="caution"><span class="caution__mark" aria-hidden="true">!</span><p><strong>Mã 1 không bảo đảm mọi nơi đều tiếp nhận.</strong>Điểm thu gom có thể có yêu cầu riêng; kiểm tra thông tin nơi nhận trước khi di chuyển.</p></aside>
        <div class="detail-columns">
          <div class="detail-content">
            <section><span class="serial">01 / NHẬN DIỆN</span><h2>Kiểm tra ký hiệu trên bao bì</h2><p>Tìm mã vật liệu ở đáy hoặc phần nhãn được nhà sản xuất ghi. Nếu không thấy hoặc không chắc, đừng suy luận chỉ từ hình dáng.</p></section>
            <section><span class="serial">02 / CHUẨN BỊ</span><h2>Làm theo hướng dẫn nơi tiếp nhận</h2><ul><li>Làm rỗng vật dụng trước khi mang đi.</li><li>Việc rửa, để khô hoặc tách nắp/nhãn tùy hướng dẫn của điểm nhận.</li></ul></section>
            <section><span class="serial">03 / LƯU Ý</span><h2>Thành phần phụ có thể khác vật liệu</h2><p>Thân chai, nắp và nhãn có thể không cùng loại vật liệu. Màn hình này là copy khung cần được rà soát cùng ví dụ sản phẩm trước khi công bố.</p></section>
          </div>
          <aside class="detail-aside"><span class="serial">BẠN ĐANG TÌM NƠI NHẬN?</span><h3>Kiểm tra theo từng điểm</h3><p>Loại vật liệu tiếp nhận phải có xác nhận riêng cho địa điểm đó.</p><a class="primary-link" href="#map" data-screen="map">Lọc điểm nhận PET <span aria-hidden="true">↗</span></a></aside>
        </div>
      </div>`;
  }

  function sorting() {
    return `
      <div class="container">
        <div class="breadcrumb"><a href="#home" data-screen="home">Trang chủ</a><span aria-hidden="true">/</span><span>Cách phân loại</span></div>
        <section class="sorting-intro"><p class="eyebrow">HƯỚNG DẪN · 3 BƯỚC</p><h1 class="display-title">Bắt đầu từ món đồ nhựa bạn đang cầm.</h1><p class="lede">Nhận diện vật liệu, chuẩn bị vừa đủ và kiểm tra yêu cầu của nơi tiếp nhận.</p></section>
        <div class="draft-banner"><span class="caution__mark" aria-hidden="true">!</span><span><strong>Bản copy khung cần được rà soát trước khi công bố.</strong>Hướng dẫn địa phương và từng nơi tiếp nhận có thể khác nhau.</span></div>
        <section class="steps" aria-label="Ba bước gợi ý">
          <article class="step"><span class="step__number">01</span><h2>Xác định nhóm rác</h2><p>Tham khảo hướng dẫn phân loại tại địa phương. Không đánh đồng mã nhựa 1–7 với nhóm rác sinh hoạt.</p></article>
          <article class="step"><span class="step__number">02</span><h2>Nhận diện và chuẩn bị</h2><p>Kiểm tra nhãn vật liệu và làm rỗng. Việc làm sạch hoặc tách thành phần phụ tùy yêu cầu nơi nhận.</p></article>
          <article class="step"><span class="step__number">03</span><h2>Kiểm tra nơi tiếp nhận</h2><p>Xác nhận vật liệu, điều kiện và lịch trực tiếp từ nguồn đã kiểm chứng trước khi di chuyển.</p></article>
        </section>
        <section class="check-panel"><div><span class="serial">GHI NHỚ</span><h2>Mã vật liệu là điểm bắt đầu.</h2></div><ul class="check-list"><li><span class="check-mark" aria-hidden="true">✓</span><span>Một ký hiệu không có nghĩa mọi địa điểm đều tiếp nhận.</span></li><li><span class="check-mark" aria-hidden="true">✓</span><span>Không tự tháo nắp, nhãn hay rửa quá mức nếu chưa có yêu cầu.</span></li><li><span class="check-mark" aria-hidden="true">✓</span><span>Với vật dụng lạ hoặc không rõ vật liệu, hãy kiểm tra hướng dẫn cụ thể.</span></li></ul></section>
        <section class="faq" aria-labelledby="faq-title"><div class="section-heading"><div><span class="serial">HỎI ĐÁP</span><h2 id="faq-title">Điều cần phân biệt</h2></div></div><details><summary>Mã nhựa cho biết điều gì?</summary><p>Mã nhận diện hỗ trợ nhận biết nhóm vật liệu. Khả năng thu gom hoặc tái chế phụ thuộc nơi tiếp nhận và quy trình tại địa phương.</p></details><details><summary>Có cần rửa sạch mọi vật dụng không?</summary><p>Yêu cầu chuẩn bị khác nhau. Chỉ làm theo hướng dẫn của nơi nhận; không cần mặc định phải dùng nhiều nước.</p></details><details><summary>Không thấy ký hiệu thì làm gì?</summary><p>Không đoán theo hình dáng. Tìm thông tin từ nhãn hoặc đơn vị tiếp nhận trước khi phân loại.</p></details></section>
        <div style="padding:0 0 52px"><a class="primary-link" href="#map" data-screen="map">Tìm điểm thu gom <span aria-hidden="true">↗</span></a></div>
      </div>`;
  }

  function mapPage() {
    const filters = codes.map(([n, code]) => `<button class="filter-chip" type="button" aria-pressed="false" data-resin-filter="${code}">${code}</button>`).join("");
    return `
      <div class="container">
        <div class="breadcrumb"><a href="#home" data-screen="home">Trang chủ</a><span aria-hidden="true">/</span><span>Điểm thu gom</span></div>
        <section class="map-page-title"><p class="eyebrow">HÀ NỘI · THÔNG TIN ĐÃ XÁC MINH</p><h1>Điểm thu gom tại Hà Nội</h1><p>Dữ liệu sẽ chỉ hiển thị sau khi được kiểm chứng và duyệt công bố. Thiết kế hiện chưa có điểm đã xác minh.</p></section>
        <section class="map-controls" aria-label="Bộ lọc và chế độ xem">
          <div class="map-controls__filters"><span class="map-control-label">LỌC THEO VẬT LIỆU ĐÃ XÁC NHẬN</span>${filters}<button class="filter-chip" type="button" data-clear-filters>Xóa lọc</button></div>
          <div class="view-toggle" role="group" aria-label="Chọn chế độ xem"><button type="button" aria-pressed="true" data-map-view="map">Bản đồ</button><button type="button" aria-pressed="false" data-map-view="list">Danh sách</button></div>
        </section>
        <div class="map-layout" data-view="map">
          <section class="map-panel" aria-label="Bản đồ minh họa, không có vị trí thật">
            <div data-map-variant="default"><div class="map-panel__stamp">Sơ đồ minh họa · chưa có điểm đã xác minh<br>Không đại diện bản đồ địa lý</div><span class="map-panel__compass" aria-hidden="true">BẮC</span><div class="map-panel__empty"><strong>Đang bổ sung dữ liệu</strong><span>Không đặt pin khi chưa có địa điểm được xác minh.</span></div></div>
            <div data-map-variant="loading" hidden class="map-panel__loading"><div class="map-skeleton map-skeleton--wide"></div><div class="map-skeleton map-skeleton--short"></div><span class="map-loading-label">Đang tải lớp bản đồ minh họa…</span></div>
            <div data-map-variant="error" hidden class="map-panel__error"><strong>Bản đồ hiện chưa tải được.</strong><span>Bạn vẫn có thể xem danh sách bên cạnh.</span></div>
            <div data-map-variant="selected" hidden class="map-panel__selected"><span class="map-panel__stamp">Mẫu trạng thái chọn · không biểu thị địa điểm hay tọa độ</span><span class="sample-pin" aria-hidden="true">+</span></div>
          </section>
          <section class="map-list-panel" aria-label="Danh sách điểm thu gom đã xác minh"><h2>Danh sách điểm</h2><p class="map-list-panel__count">0 điểm đã xác minh trong bản thiết kế</p>
            <div class="no-results"><span class="no-results__number">—</span><h3>Chưa có điểm phù hợp</h3><p>Danh sách sẽ xuất hiện khi địa chỉ, vật liệu tiếp nhận và thông tin hoạt động được xác minh.</p><button class="text-link" type="button" data-clear-filters>Xóa bộ lọc ↗</button></div>
            <div class="selected-template" hidden data-selected-template><span class="selected-template__badge">KHUNG NỘI DUNG · KHÔNG PHẢI ĐỊA ĐIỂM THẬT</span><h3>Tên điểm</h3><p>Địa chỉ đã xác minh sẽ hiển thị ở đây.</p><p>Thông tin nhận vật liệu cần nguồn xác nhận.</p><p>Giờ tiếp nhận chỉ hiển thị khi có nguồn.</p><span class="disabled-action" aria-disabled="true">Chỉ đường — đang vô hiệu</span></div>
          </section>
        </div>
        <p class="map-footnote">Khi có dữ liệu công bố: ghi nguồn, ngày kiểm tra và thông tin bản đồ phù hợp. Không dùng sơ đồ này làm dữ liệu dẫn đường.</p>
      </div>`;
  }

  function screenBody(key) {
    return key === "home" ? home() : key === "list" ? resinList() : key === "detail" ? resinDetail() : key === "sorting" ? sorting() : mapPage();
  }

  function render() {
    const screen = screens[currentScreen];
    root.innerHTML = `<div class="site" data-screen="${currentScreen}" data-state="${currentState}">${header(screen.active)}${stateCallout()}<main class="site-main" id="main-content">${screenBody(currentScreen)}</main>${footer()}</div>`;
    document.title = `${screen.title} · Nhựa Xanh Hà Nội — prototype DSG-02`;
    const activeTab = document.querySelector(`[role="tab"][data-screen="${currentScreen}"]`);
    document.querySelectorAll('[role="tab"][data-screen]').forEach(tab => {
      const active = tab === activeTab;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    const panel = root.querySelector(".site-main");
    if (panel) panel.setAttribute("aria-label", screen.title);
  }

  function setScreen(key, focus = false) {
    if (!screens[key]) return;
    currentScreen = key;
    render();
    if (focus) root.focus({ preventScroll: true });
  }

  function setState(next) {
    currentState = next;
    render();
    if (currentScreen === "map") {
      const selected = root.querySelector("[data-selected-template]");
      const noResults = root.querySelector(".no-results");
      if (selected && noResults) {
        selected.hidden = next !== "selected";
        noResults.hidden = next === "selected";
      }
      const layout = root.querySelector(".map-layout");
      if (layout) layout.dataset.state = next;
      root.querySelectorAll("[data-map-variant]").forEach(variant => { variant.hidden = variant.dataset.mapVariant !== (next === "error" ? "error" : next === "loading" ? "loading" : next === "selected" ? "selected" : "default"); });
    }
  }

  document.querySelectorAll("[data-screen]").forEach(control => {
    if (control.matches('[role="tab"]')) return;
    control.addEventListener("click", event => {
      event.preventDefault();
      setScreen(control.dataset.screen, true);
    });
  });

  document.querySelectorAll('[role="tab"][data-screen]').forEach(tab => {
    tab.addEventListener("click", () => setScreen(tab.dataset.screen));
    tab.addEventListener("keydown", event => {
      const tabs = [...document.querySelectorAll('[role="tab"][data-screen]')];
      const i = tabs.indexOf(tab);
      const next = event.key === "ArrowRight" ? (i + 1) % tabs.length : event.key === "ArrowLeft" ? (i - 1 + tabs.length) % tabs.length : -1;
      if (next >= 0) { event.preventDefault(); tabs[next].focus(); setScreen(tabs[next].dataset.screen); }
    });
  });

  document.querySelectorAll("[data-viewport]").forEach(button => {
    if (!button.matches("button")) return;
    button.addEventListener("click", () => {
      const viewport = button.dataset.viewport;
      frame.dataset.viewport = viewport;
      document.querySelectorAll("button[data-viewport]").forEach(item => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      document.querySelector(".preview-area").scrollTo({ left: 0, top: 0, behavior: "smooth" });
    });
  });

  stateSelect.addEventListener("change", () => setState(stateSelect.value));

  root.addEventListener("click", event => {
    const route = event.target.closest("[data-screen]");
    if (route) {
      event.preventDefault();
      setScreen(route.dataset.screen, true);
      return;
    }
    const menu = event.target.closest(".menu-toggle");
    if (menu) {
      const links = root.querySelector(".mobile-menu");
      const open = links.dataset.open !== "true";
      links.dataset.open = String(open);
      menu.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
      return;
    }
    const filter = event.target.closest("[data-resin-filter]");
    if (filter) {
      filter.setAttribute("aria-pressed", filter.getAttribute("aria-pressed") !== "true" ? "true" : "false");
      filter.classList.toggle("is-active", filter.getAttribute("aria-pressed") === "true");
      return;
    }
    const listFilter = event.target.closest("[data-list-filter]");
    if (listFilter) {
      root.querySelectorAll("[data-list-filter]").forEach(item => {
        const active = item === listFilter;
        item.setAttribute("aria-pressed", String(active));
        item.classList.toggle("is-active", active);
      });
      const group = listFilter.dataset.listFilter;
      root.querySelectorAll(".resin-row[data-code-number]").forEach(row => {
        const number = Number(row.dataset.codeNumber);
        row.hidden = group === "123" ? number > 3 : group === "4567" ? number < 4 : false;
      });
      return;
    }
    if (event.target.closest("[data-clear-filters]")) {
      root.querySelectorAll("[data-resin-filter]").forEach(item => { item.setAttribute("aria-pressed", "false"); item.classList.remove("is-active"); });
      stateSelect.value = "empty";
      setState("empty");
      return;
    }
    const view = event.target.closest("[data-map-view]");
    if (view) {
      const layout = root.querySelector(".map-layout");
      layout.dataset.view = view.dataset.mapView;
      root.querySelectorAll("[data-map-view]").forEach(item => item.setAttribute("aria-pressed", String(item === view)));
    }
  });

  root.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      const menu = root.querySelector('.menu-toggle[aria-expanded="true"]');
      if (menu) { menu.click(); menu.focus(); }
    }
  });

  render();
})();

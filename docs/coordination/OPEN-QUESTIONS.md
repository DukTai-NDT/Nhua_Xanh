# Open questions and human answers

**How to use:** Codex adds one short numbered record; the human answers under `Human answer`. Change `status` from `OPEN` to `ANSWERED` when answer is documented. If the answer changes product scope or requires approval, add a linked entry to `DECISIONS.md`. Do not ask again for answers already in `docs/nhua-xanh-hanoi-v1-spec/12-DECISIONS-RISKS.md`.

## Already answered — see existing spec 12

The repo already records answers on customer/demo nature, temporary branding/generated images, Hanoi-only coverage, student audience, Vietnamese-only language, no analytics, no CMS, no production yet, free design tools, and willingness to display data-in-progress. Those answers are the current input, but do not grant permission to misrepresent unverified locations as operating.

## Q-001 — Clarify labels for candidate demo points

- Status: `OPEN` (non-blocking for map wireframe; blocks public claim that candidates are operational).
- Asked by: Data Steward / PO.
- Context: Existing spec 12 says research real Hanoi locations as mock data for customer demo, with 0–2 verified fallback accepted.
- Question: For **customer demo only**, should candidate points be labelled visibly “địa điểm tham khảo — chưa xác minh hoạt động/loại nhựa tiếp nhận”, and never shown as verified?
- PO recommendation: Yes; use a separate `CANDIDATE` type and watermark or clear note in demo preview. No fabricated address/coordinates; cite where each candidate was found.
- Human answer: _Pending human approval of this exact presentation rule._
- Impacts: DAT-01, MAP-01, MAP-02, release gates.

## New question template

```md
## Q-002 — [one clear decision]
- Status: OPEN / ANSWERED / DEFERRED
- Asked by / date:
- Context (link to ticket/spec):
- Question:
- Options, trade-offs, recommended option:
- Human answer (with date):
- Approval/evidence link:
- Impacts:
```

## Q-002 ? Select a DSG-01 concept for the next design stage

- Status: `OPEN` (proposal is ready; no concept selection or G1 approval is recorded).
- Asked by / date: Tech Lead / 2026-10-13.
- Context: `DSG-01` proposal in [PR #4](https://github.com/DukTai-NDT/Nhua_Xanh/pull/4), with two Modern Eco Editorial directions and responsive Header/Footer boards.
- Question: Which direction should Design carry into DSG-02: Concept A ? S? tay v?t li?u, Concept B ? M?c l?c ?? th?, or a requested revision?
- Recommendation: Review both boards and choose or request specific changes. This concept choice is not itself G1 approval; DSG-02 must still deliver the required hi-fi responsive screens, component states, and prototype for human review before FE visual implementation.
- Human answer: _Pending._
- Approval/evidence link: _Pending._
- Impacts: `DSG-02`, `FE-01`, G1.

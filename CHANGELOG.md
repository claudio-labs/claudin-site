## v0.1.11 — 2026-05-06

- perf(memory): add evictOldStubbedMessages to remove fully-stubbed pairs (#15) (5bdbfc1)
- test(memory): add pruneOldToolResults test suite (9 cases) (09d5bbe)
- refactor(memory): extract stubOneBlock, export AnyMessage, fix cutoffIdx guard (fec0d93)
- perf(memory): reduce pruneOldToolResults keepTurns from 6 to 1 (3da090d)
- perf(memory): prune tool_result content older than 6 turns every turn (258da75)
- docs(roadmap): mark 5.7 complete — REPL React state gap closed (9ab73a9) (0814e57)
- perf(memory): apply applyStableStubs to REPL React state after each turn (ROADMAP 5.7) (9ab73a9)
- fix(bash-filter): code quality fixes + 2-space indentation (#14) (5f5808e)
- feat:  tests (2d5aedb)
- chore(bash-filter): plumbing for bash-output-filter v1 (Phase 0) (cb4d6cb)
- docs: bash-output-filter discovery + v1 tech spec (7234b9d)
- fix(providers): retry transient 404s from OpenAI-compat providers (a200d7d)
- fix(providers): use claudio branding in User-Agent for non-Anthropic providers (eed74e1)

## v0.1.10 — 2026-05-05

- fix(cache): skip model-options cache scope for non-local provider URLs (3c1ce42)
- fix(providers): accurate token metrics for OpenAI-compat providers (#13) (41c5b06)
- fix(interrupt): propagate Ctrl+C to exit handler when nothing to cancel (#12) (53b6c6d)
- feat(providers): dynamic model discovery + fixes for OpenAI-compat providers (78c72e7)
- feat: fix cli (7e583ad)
- test(cache): regression tests + bench for cc_workload prefix flip (#11) (a6ed4ba)
- feat(benches): add 11 token-economy measurement scripts (#10) (fc131f8)
- feat(benches): add 5 token-efficiency measurement scripts (#9) (6fed263)
- test(tools): add guard tests + heap probes for lazy-tool registry (759d3a6)
- fix(repl): route Ctrl+C double-press through handleExit to stop ~5s freeze (f4168b1)

## v0.1.9 — 2026-05-04

_No user-facing commits since previous tag._



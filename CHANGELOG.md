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



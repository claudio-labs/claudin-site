## v0.2.3 — 2026-05-14

- docs: rewrite README with features, slash commands, and provider list (c9466b9)
- feat(bash-filter): add gradle, mvn, terraform filters (phase 11) (8374b6e)
- refactor(agents): rename built-in agents and remove Memory column (da2c850)
- feat(agents): show full provider model list in Change model dialog (ebead5f)
- docs: simplify README and tighten LICENSE to personal-use-only terms (91e56a6)
- fix(ink): recover from stdin readable-stream wedge with watchdog (eb22702)
- feat(bash-filter): phase 10 — wget + find specs, measured ROI table (c264fcb)
- feat(usage): collapse Session block into Project total in /config Usage (90a1596)
- fix(schema): trim whitespace and accept leading + in semanticNumber (2eceb6d)
- docs(discovery): add 2026-05 market research, top-10 features, viability and gaps analysis (a0ba400)
- feat(bash-filter): phase 9 — system utilities (ping/rsync/tree/ssh/df/du/dmesg/stat/jq + curl-plain) (de900ae)

## v0.2.2 — 2026-05-13

- feat(tui): redesign prompt input footer with provider/model pills and richer session metrics (0de51ca)

## v0.2.1 — 2026-05-12

- fix(tui): show 10 slash-command suggestions and clear ghost cells under permission dialogs (b9419fb)
- feat(usage): show session + project-total cost in /config Usage tab (79ecbfe)
- fix(permissions): allow 'auto' as a persistable defaultMode (799ca99)
- fix(shutdown): release file watchers from event loop so /exit doesn't hang (e9ed558)
- feat(attribution): drop default Co-Authored-By trailer on commits (91da19d)

## v0.2.0 — 2026-05-11

- feat(agents): per-agent model overrides for built-in, project, and user agents (9357f57)

## v0.1.15 — 2026-05-10

- fix(bash-filter): harden pipeline against compound, env, and replace edge cases (1b060ae)
- feat(agents): add Running/Library tabs to /agents with live background agent monitoring (ba2b8fa)

## v0.1.14 — 2026-05-10

- refactor: remove /logout command in favor of /provider (#26) (3c84490)
- docs: add bash output filter feature documentation with before/after examples (9c6cb2c)
- fix: suppress npm deprecation notification for non-Anthropic packages (0056c47)

## v0.1.13 — 2026-05-09

- ci(release): remove test suite and privacy check, keep only smoke (6609663)
- ci: keep only smoke check in pr-checks workflow (8597a43)
- fix(tests): resolve remaining 274 CI failures — more mock leaks and ReDoS (2a26c92)
- fix(tests): resolve all 293 CI failures — mock leaks, ReDoS, and flaky thresholds (7ad8738)
- fix(openaiShim): filter Anthropic server-side tools before sending to OpenAI-compat providers (fad5768)
- refactor: complete migration of project-level paths from .claude to .claudio (fc31ed3)
- feat(output-filter): phase 6.2 — JS/TS toolchain + tsc + git diff/show (Linux) (915d30e)
- ci: serialize bun test with --max-concurrency=1 to prevent mock leaks (af25e8f)
- feat(output-filter): phase 7 — default-on, /config toggle, performance tip (4fa810c)
- ci: replace flaky per-file test loop with single bun test invocation (7423140)
- perf: reduce startup latency, memory usage, and I/O contention (c64bff7)
- fix(tests): eliminate ESM live-binding leaks and missing afterAll restores across full suite (2d35768)
- fix(codex): force-refresh OAuth token on 401 to handle server-side revocation (d40a967)
- fix(copilot): auto-refresh expired GitHub Copilot tokens without reconnect (05de8b6)
- feat(output-filter): close phase 6.1.6 schema hardening gaps (#24) (caa4651)
- fix(repl): replace boolean exit guard with a 3-state machine to handle stalled shutdown (276c3b6)
- fix(tests): restore BaseSandboxManager static stubs and force-enable LSP gate in dedup test (a5a2aa5)
- chore(deps): upgrade @mendable/firecrawl-js to 4.22.2 for axios 1.15.2 (#23) (03f9762)
- chore: remove gRPC server and its dependencies (#22) (fd421da)
- fix(repl): drop stale local-jsx writes via generation token to unblock /clear and /provider (#21) (83f1c73)
- feat(filters): add container, network, and extended git output filters (#20) (f4b078c)
- feat(filters): add GitHub CLI output filters for issues, PRs, and runs (#19) (5c97675)
- feat(tool):  BashTool integration output filter (#18) (88dcb80)

## v0.1.12 — 2026-05-07

- feat(memory): bench test and otimize memory (c35050a)
- feat: opeain models (fa5070c)
- fix(memory): prune ContentReplacementState orphans on every turn (#17) (e3caa36)
- feat(outputFilter): add Phase 6.1.2 batch — 10 high-ROI bash output filters (#16) (efdce09)

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



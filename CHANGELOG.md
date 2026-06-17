## v0.6.5 — 2026-06-17

- fix(ink): clear vacated rows with end-of-line erase to kill width-drift ghosts (a6c0dd2)
- feat(bridge): enable Remote Control via local credential gate (#84) (7403cc2)
- chore(commands): remove /mobile QR command (5c8bd3d)
- feat(tools): reintroduce LSP tool as read-only, cache-safe (#83) (60bf1ea)

## v0.6.4 — 2026-06-17

- fix(tools): strip bash-output-filter markers before git-op parsing (0b734f1)
- fix(tui): remove blank lines between /context usage grid rows (1546543)
- feat(tools): lean tool prompts for capable model families (#82) (59e9c0c)

## v0.6.3 — 2026-06-16

- feat(tui): multi-host PR/MR status pill (GitHub/GitLab/Gitea) (#81) (edde790)
- feat(tui): connect status-row sides with a dim rule filling the gap (c61bdbc)
- feat(tui): move token/cost row onto the footer byline with Nerd Font dividers (68ecaac)
- feat(tui): effort indicator as a colored Powerline pill beside the model (ee21788)
- feat(tui): square-left/pointed-right pills with seamless junctions (dfb9e5d)
- feat(tui): add color themes with per-theme syntax + stalled-spinner colors (ab76d5c)
- feat(tui): Nerd Font icons + ls-la ordering for @ mention menu (#80) (2247bc8)

## v0.6.2 — 2026-06-15

- feat(tui): collapse parallel file edits under one Update header (2d8261c)

## v0.6.1 — 2026-06-13

- fix(ink): resume offscreen animations when scrolled back into view (2aa4c10)
- feat(spinner): slow the braille orbit to half speed (3ce8cb2)
- feat(spinner): Claudin brand C animation (braille orbit → bold C) + animated dots (99a6c4d)
- perf(streaming): eliminate quadratic re-render work during response streaming (a50ab26)
- fix(config): persist updater edits to projects + heal dangling provider pointers at startup (febf362)
- docs(features): add cache-policy and read-outline feature docs (eda6189)
- fix(update): exempt the default privacy level from the startup version check (918fde9)

## v0.6.0 — 2026-06-12

- fix(query): mid-stream-retry P1s + tombstone persistence race (review follow-ups) (#79) (83d368b)
- feat(effort): cycle effort with Shift+←/→ from the prompt (bf6d642)
- feat(skills): port upstream /code-review (effort levels, cleanups, --fix) (dae2dc5)
- fix(permissions): route always-on-thinking models to the XML auto-mode classifier (3252c43)
- test(cache): harden wiring guards caught weak in review (67c3b67)
- fix(cache): scope the legacy deferred-delta latch to the conversation (A2 review follow-up 3) (d833b8a)
- fix(cache): persist deferred_tools_delta attachments so warm resumes round-trip (A2 review follow-up 2) (a890ef7)
- fix(cache): guard the idle-gap sweep against in-flight queries (S1 review follow-up) (172bad3)
- fix(cache): format-aware legacy latch, settled at the attachments pipeline (A2 review follow-up) (4bbf571)
- test: fix growthbook module-registry poisoning in full-suite runs (d589ba4)
- docs(cache): byte-stability rules from the 2026-06 cache-break audit (add29f3)
- test(cache): request-determinism invariant suite (d515d1b)
- fix(cache): enable deferred-tools delta in the open build, with legacy-session latch (A2) (840f0fc)
- fix(cache): sticky defer latch for LSP tools (A3) (b42a554)
- fix(cache): byte-stable MCP tool pool across reconnects and failures (A1) (4775bb3)
- fix(cache): amortize REPL display eviction + idle-gap sweep (S1) (269e99b)
- fix(cache): persist time-based microcompact via stable stubs (S2) (175c189)
- fix(cache): first-write-wins stub byte registry (S3) (7fb392c)
- fix(prompt): close the env_info staleness gaps found in the #78 review (f1b9c6d)
- feat(prompt): port harness prompt upgrades from upstream, multi-provider aware (#78) (fdb7ec2)

## v0.5.14 — 2026-06-11

- feat(effort): default Opus 4.8 and Fable 5 to high effort on Anthropic (1012bf8)
- fix(launcher): stop leaking jemalloc LD_PRELOAD into child processes (b99e4a5)
- feat(model): enable Claude Fable 5 (claude-fable-5) on the Anthropic provider (353e732)
- feat(copilot): dynamic models, billing/vision headers, native-route gating, GitHub Enterprise (#77) (3f5b768)
- feat(goal): /goal stopping condition via Stop hook with LLM judge (#75) (48c7703)
- feat(loop): ScheduleWakeup tool and sentinel expansion for dynamic /loop (#76) (c3b5248)
- fix(bash-filter): close review findings — raw-stdout consumers, background rewrite disclosure, semantic error gate, docs (ed1627e)
- feat(bash-filter): canonicalize runner prefixes so existing filters cover npx/poetry/uv/pnpm-dlx forms (2c8764b)
- fix(bash-filter): execute rewrites for real, gate matchOutput to atomic commands, harden ReDoS heuristic (4b6786b)

## v0.5.13 — 2026-06-10

- feat(outline): extend Smart Code Navigation to Java, Kotlin, C#, Rust, and Markdown (12fb374)
- fix(read): never cache the file_unchanged dedup stub in the tool-result cache (#74) (0cf6a30)
- fix(read): stand down dedup when the prior Read tool_result was clipped client-side (#73) (e7f3c16)
- fix(read): stand down dedup once server-side clear_tool_uses has fired (#72) (bf79ef8)
- fix(read): cat -n line semantics — no phantom trailing line, offset 0, real empty-file warning (05911c1)
- feat(cache): clip-frontier cache policy — per-provider profiles, default on (#71) (84036b0)
- fix(profile): make cache-ab-bench per-turn deltas real, surface BLOCKED on exit≠0 (1370202)
- test(profile): expand cache-ab-bench to 30 mixed-size files (8e8f5d2)
- fix(agent): surface error summary + live activity in agent footer rows (91bd63b)
- fix(startup): make update banner reactive + harden version-check throttle (a19b224)

## v0.5.12 — 2026-06-08

- fix(agent): unpin footer agent rows from 'Starting…' in default TUI (3ee17c6)
- docs(read): refresh stale "head-tail elided" rationale in Read tool surfaces (9df2ee8)
- refactor(summarizer): drop dead Read head-tail arm (6c571b0)
- fix(agent): show agent badge + live progress from first message in footer (409349d)
- fix(agent): show live progress for foreground sub-agents in footer (f9800fc)

## v0.5.11 — 2026-06-07

- perf(cache): defer prompt-cache marker until trailing tokens ≥ 2048 (17641da)
- fix(ink): clear orphaned rows when a subtree unmounts at constant size (c77d9ed)
- docs(CLAUDE.md): list xAI/Grok in provider overview (68fe480)
- fix(agent): default auto-background agents to off (7c05482)
- fix(spinner): back off to 250ms cadence outside fullscreen mode (816f159)
- fix(agent): curb and surface phantom agent-launch announcements (#70) (69d9abe)
- feat(provider): add xAI / Grok (#69) (124450b)
- feat(oauth): detect OS default browser for OAuth sign-in URLs (99b4f2f)
- fix(codex): harden OAuth refresh + align request shape with codex CLI (bbd4774)

## v0.5.10 — 2026-06-06

- feat(launcher): guard min Node version and warn on CPU-rendered terminals (b42ebcc)
- feat(privacy): default to essential-traffic; suppress Anthropic startup probes (b2be87b)
- fix(coordinator): align agent tree connector under Agents header (9b53bec)
- fix(onboarding): skip Anthropic reachability gate on welcome screen (12bae18)

## v0.5.9 — 2026-06-05

- chore(deps): bump vscode-languageserver-protocol to 3.18 (6fc02dc)
- chore(deps): bump google-auth-library to 10 (aeb448e)
- chore(deps): bump commander to 15 (ESM-only) (47c9ac3)
- chore(deps): bump type-fest and firecrawl-js to latest (367a621)
- chore(deps): bump security and patch-level dependencies (6f99f79)
- feat(thinking): live token counter during redacted thinking via SDK 0.100.1 (c59a99b)

## v0.5.8 — 2026-06-05

- refactor(prompts): invert burden of proof on tool batching rule (fd4ab5f)
- feat(prompts): nudge models to batch independent tool calls (d315f02)
- feat(prompts): discourage tool-call narration by default (1faa3f0)
- feat(agents): fork-by-default subagents + unified footer task cursor (2d4a416)
- docs: rebrand Claudio to Claudin (6245fd7)
- feat(agents): collapse subagent progress, redesign navigator, opt-in result summary (#68) (b66313b)
- feat(prompt): show up to 14 slash-command suggestions (a052fde)
- fix(ink): clear stale cells when a row shrinks at constant width (26a1b7a)
- perf(cold-start): wrap up cold-start waves series (#67) (26fb783)

## v0.5.7 — 2026-06-03

- chore(rebrand): rename npm scope from @claudinlabs to @claudiolabs (1137363)

## v0.5.6 — 2026-06-03

- feat(rebrand) rebrand move .claudio/ to .claudin/ and update CLAUDE.md (#66) (d862c24)

## v0.5.5 — 2026-06-03

- feat(bash-filter): cover java mvn/gradle build, error, and pipe-routing cases (#65) (b2f3069)
- feat(provider): add OpenCode Zen and OpenCode GO presets (4a4e619)

## v0.5.4 — 2026-06-02

- feat(worktree): add baseRef setting and path param to EnterWorktree (fd8aaa8)
- feat(agents): add WebResearcherManager deep-research orchestrator (02adfc3)
- feat(skills): port simplify, verify, run, fewer-permission-prompts built-ins (#64) (302ce52)

## v0.5.3 — 2026-06-01

- feat(bash-filter): filter base command when output is piped to tail/cat (#63) (0313fc0)
- chore(bench): add cache-progression run results (2026-06-01) (2f87c82)
- docs(prompts): nudge against piping Bash output to head/tail/cat (94e613f)
- fix(model): always annotate "(1M context)" on [1m] model labels (631f667)
- feat(model): offer 200k + 1M context variants in /model picker (31128c9)
- style(context): draw connected tree spine in /context lists (bd8150d)
- fix(context): show bundled skills in /context skills listing (d2424df)
- fix(startup): remove blank padding lines, fix textRows dead entry, pass updateNotice to printStartupScreen (4ae3e59)

## v0.5.2 — 2026-06-01

- fix(tests): align cache1hTtl with always-on 1h TTL for first-party/vertex (d811119)
- perf(api): cache SDK client by composite key with single-flight dedup (c6431a1)
- perf(api): resolve provider transport once per retry loop (aaf8c4a)
- perf(tools): eliminate wasteful specialTools schema construction (a322739)

## v0.5.1 — 2026-06-01

- fix(auth): add single-flight dedup to GitHub Copilot token refresh (d97f8cb)
- refactor(glm): trim family addendum to concise bullet points (da08d61)
- refactor(startup): lazy-load tool modules + early init overlap (53c31f3)
- fix(startup): don't clear the terminal on launch by default (e3d8dde)
- fix(model): don't resurface profile model over project "Default" choice (ef5f57b)
- style(startup): trim side padding from the logo art (4fd4869)
- fix(streaming): enable idle watchdog by default (65s) to recover hung streams (31e9a7d)
- perf(cache): always use 1h cache TTL on first-party/vertex (7eeb610)
- perf(memory): compact the every-turn memory instructions (~3.7k → ~0.8k) (f5d14c4)
- perf(tools): enable tool deferral by default on first-party Anthropic (9897d3b)
- perf(tools): let ENABLE_TOOL_SEARCH opt in past the beta kill switch (fa16491)
- perf(memory): ship a compact memory stub until memories exist (2abac6c)
- fix(cache): honor 1h cache TTL by sending the extended-cache-ttl beta (be946c5)
- bench: CLI token-footprint + context-offender mapping (d4df7a1)
- fix(context): render /context as a dismissible panel (7b22ea4)
- refactor(prompts): consolidate system prompt sections (969cd5c)
- feat(effort): simplify slider header to Faster…Smarter (1881140)
- fix(streaming): enable fine-grained tool streaming on Anthropic 1P (726e15e)
- feat(prompts): per-family system-prompt addendums (+ GLM fixes) (#62) (1e253b0)

## v0.5.0 — 2026-05-31

- bench: A/B harness suite + decision history (56efae6)
- refactor(ui): move effortStatusText into PromptInput footer (9989ec8)
- feat(file-read): auto-outline elision + serial-read nudge (03c5bfb)
- feat(context): strip old narration blocks before sending to API (055e7f9)
- fix(openai-shim): normalize reasoning-channel field aliases (2b4c640)
- fix(thinking): tie budget to /effort instead of model output ceiling (400df20)
- fix(thinking): default to budget mode, drop adaptive from UI (5b62423)
- feat(effort): horizontal /effort slider + adaptive mode (#61) (1e65449)
- feat(effort): opt-in xhigh default for Opus 4.8 coding loops (T7.5) (#60) (19e67b8)
- feat(auto-mode): enter plan mode on implicit/interrogative plan requests (#59) (27181e9)
- fix(permissions): normalize model id in classifier-unavailable message (T7.3) (61fca79)
- feat(permissions): degrade auto-mode classifier on deterministic 4xx (T7.2) (#58) (0cfe6d4)
- fix(model): reject sampling params for Opus 4.8, not just 4.7 (#57) (b5ca39f)
- docs(roadmap): add Tier 7 (Opus 4.8) and Spike S1 for prompt/tool adaptation (5cdf345)
- feat(model): promote Opus 4.8 in /model (#56) (1b885d1)
- fix(output-filter): treat 2>&1 and &> as redirection, not compound (#55) (1876b5d)

## v0.4.4 — 2026-05-28

- feat(grep): rewrite GrepTool description with search-strategy (#54) (4ee3f2a)

## v0.4.3 — 2026-05-28

- fix(prompt): drop dead LSP.outgoingCalls ref in FileReadTool (#53) (00b20f3)
- feat(read): add surgical reading strategy to FileReadTool description (#52) (dbb39a2)
- chore: drop /lsp slash command (LSPTool gone) (#51) (8240f08)
- fix(lsp): preserve SERVER_DEFINITIONS order in getBuiltinLspServers (#50) (c4aa523)

## v0.4.2 — 2026-05-27

- docs(roadmap): add Tier 6 — LSP-first agent (b87acd8)
- docs(roadmap): drop T5.10, prefix-invalidation already implemented (c541013)
- test(tools): cover all tools (#49) (26e3920)
- feat(init): unify init prompt, add subagents and guardrails phases (#48) (3e8b9e1)
- refactor(openaiShim): extract 9 leaf modules from openaiShim.ts (#47) (3f1ca2f)
- fix(update): prevent claudio update from hanging on completion regen (2f3fe88)

## v0.4.1 — 2026-05-27

- feat(prompt): fall back to bracket pills when Nerd Font is unavailable (e0d109b)
- fix(ink): defer raw mode shutdown to prevent keystroke echo (2e552d7)
- fix(spinner): replace ✳ glyph that paints wider than one cell on Ghostty (87d3dd9)
- fix(image-processor): fall back to sharp when stubbed napi import succeeds (675795a)
- fix(images): create virtual placement so Ghostty resolves placeholders (34d3f0c)
- feat(images): inline image rendering on Kitty-family terminals (#46) (739657b)
- refactor(tools): extract two-tier TTL cache, apply to WebSearch (dd5895f)
- fix(query): reference params.toolUseContext in queryLoop entry guard (3190713)
- feat(lsp): late diagnostics tail-wait for post-edit publishes (#45) (adf6f9d)
- feat(lsp): 4 write operations (rename, applyCodeAction, renameFile, applyWorkspaceEdit) (#44) (ee026f9)
- docs(discovery): comparative study of oh-my-pi insights for Claudio (fd6bdd9)
- feat(attachments): per-turn background task status reminders (1c50523)
- fix(compact): preserve short and is_error tool_results during age-prune (030a982)
- fix(permissions): enforce plan mode as a hard gate in the engine (330e6dc)

## v0.4.0 — 2026-05-24

- feat(update): replace auto-update with manual notice in startup banner (80bc583)
- fix(agents): align /agents model display with runtime fallback (02838e4)
- refactor(provider): separate /model choice from profile-canonical model (05152df)

## v0.3.8 — 2026-05-23

- fix(cli): polyfill util.markAsUncloneable for Node < 22.4 (6c59c89)

## v0.3.7 — 2026-05-23

- fix(cli): polyfill Promise.withResolvers for Node < 22 (f7e0e74)

## v0.3.6 — 2026-05-23

- fix(codex): allow plaintext credential fallback when keychain unavailable (cfa5467)

## v0.3.5 — 2026-05-23

- fix(build): stub utils/telemetry/instrumentation to prevent @opentelemetry/api runtime error (1a4bc81)

## v0.3.4 — 2026-05-23

- feat(usage): split Usage into Usage + Session tabs, friendlier rate-limit errors (f2166a0)
- feat(bash-filter): expand built-in coverage with 29 new filters (#43) (578be71)
- refactor(api): split claude.ts monolith into focused submodules (#42) (0892d97)
- feat(mcp): default claude.ai connectors to disabled (9e646ed)

## v0.3.3 — 2026-05-22

- refactor(mcp): split client.ts monolith into focused submodules (30b7971)
- refactor(skills): rename /simplify to /code-review (#41) (fb67c5b)

## v0.3.2 — 2026-05-20

- fix(autoUpdater): also update bun global install when npm is the active updater (703e469)

## v0.3.1 — 2026-05-20

- fix(autoUpdater): pass --force to npm install to handle EEXIST on mise-managed bins (50515b6)

## v0.3.0 — 2026-05-20

- feat(memory): skip-routine guidance in extraction prompts (41e4d64)
- docs(discovery): add claude-mem insights review for memory subsystem (d23496b)
- feat(codeOutline): add scanSymbols primitive + outline renderer (#40) (90335e1)
- docs(features): add Smart Code Navigation feature design (7.1) (5347976)

## v0.2.13 — 2026-05-20

- feat(memory): skip-routine guidance in extraction prompts (41e4d64)
- docs(discovery): add claude-mem insights review for memory subsystem (d23496b)
- feat(codeOutline): add scanSymbols primitive + outline renderer (#40) (90335e1)
- docs(features): add Smart Code Navigation feature design (7.1) (5347976)

## v0.2.12 — 2026-05-19

- refactor(attachments): extract pipeline.ts, collapse monolith to barrel (#39) (35d2917)
- refactor(bashParser): extract tokens, lexer, parserContext (#38) (5ac5200)
- refactor(main): extract default-action dispatch (#37) (28f252f)
- refactor(repl): extract Transcript/Status/Dialogs subviews  (#36) (8588b5b)
- refactor(hooks): split monolithic hooks.ts into 9 focused submodules (11d) (849f858)
- refactor(sessionStorage) collapse barrel + pin public surface (#35) (6e4c474)
- refactor(print): move runHeadless (#34) (e4ac773)
- refactor(auto-update): remove in-REPL AutoUpdater polling (be75dd5)

## v0.2.11 — 2026-05-17

- test(messages): characterization tests before 11a split (#33) (b6d2a41)
- ci: fix tests release (d782461)
- feat(plan-mode): surface decisions proactively instead of waiting for ambiguity (1fa758b)
- fix(tests): remove mock.restore() calls that break preload stubs (64f8c3f)
- ci: add bun version diagnostics to pr-checks workflow (10778db)
- test: fix global config contamination and migrate undici-bench sanity tests (a587523)
- fix(lsp+tools): propagar state changes de LSP e GrowthBook para cache de isEnabled() (61a453b)
- perf(startup): paralelizar update check e github token refresh no boot (d7ccb37)
- refactor(api): hoist hot-path regex to module scope (roadmap tier 1.1) (8b0bb87)

## v0.2.10 — 2026-05-16

- chore(license): rewrite as source-available v1.1 under Claudiolabs (85685cf)
- perf(api): per-provider undici dispatcher with h2 fallback (item 11.5) (8640d91)
- bench(undici-pool): matriz de tuning + baseline para item 11.5 (b395898)
- feat(history-picker): preserve state across toggles via React Activity (f878d75)
- chore(mcp): remove dead claudeInChrome references (8cd2ac2)
- chore(tsconfig): drop deprecated baseUrl and ignoreDeprecations (c805a90)
- refactor(schemas): convert eligible unions to discriminatedUnion in coreSchemas (cd709cc)
- feat(refusal): surface server explanation and category in refusal errors (65dc5e2)
- fix(cost): bill 1h prompt-cache writes at correct 2× rate (f6c092b)
- refactor(zod): normalize imports to zod/v4 and add source guard (c0c5225)
- feat(notifications): native OS fallback for terminals without OSC support (8535819)
- docs(claude.md): document claudio vs claudiodev dev convention (2e04959)
- feat(agents): add built-in WebResearcher subagent (#32) (cfd11f3)
- docs(roadmap): add agentic_fetch + OS notifications; archive completed items (c9b0cf7)
- feat(prompt-suggestion): render as inline ghost text gated by follow-up offers (c186668)

## v0.2.9 — 2026-05-15

- fix(auto-update): require .git to flag a source tree, not just a matching package.json (#31) (818e062)

## v0.2.8 — 2026-05-15

- fix(auto-update): detect bun global installs and use bun to update them (#30) (2b7a5fc)

## v0.2.7 — 2026-05-15

- fix(auto-update): skip when install type is unknown or symlinked dev tree (#29) (fa973d3)

## v0.2.6 — 2026-05-15

- fix(build): wipe chunks/ on release builds so npm tarball has no dev duplicates (e4118e2)

## v0.2.5 — 2026-05-15

- feat(auto-update): self-update from npm on startup (#28) (4487b5e)
- fix(autofix-pr): set error name for AutofixPreconditionError (f3c1768)
- fix(build): preserve chunks across dev rebuilds to avoid breaking running CLIs (5e7ecf8)
- fix(commands): register /autofix-pr in the runtime command list (de06042)
- feat(autofix-pr): add precondition guards and shared helpers (#27) (20a29c3)
- chore(ui): abbreviate token status bar labels (8bab1d6)
- feat(banner): show effort level with symbol in startup banner (346e2ad)
- fix(startup): update LOGO_LINES comment to reflect 4-row layout (80dfc55)
- fix(auto-mode): enter plan mode when user explicitly asks to plan (d359d04)

## v0.2.4 — 2026-05-15

- chore(deps): migrate zod 3.25 → 4.4 (7c5cd78)
- feat(markdown): migrate marked 15→18 with task list checkbox support (bcea1b0)
- chore(deps): update typescript from 5.9.3 to 6.0.3 (17e71dd)
- chore(deps): update commander and extra-typings from v12 to v14 (54a1e91)
- chore(deps): update chokidar, diff, https-proxy-agent, and undici (2bce02d)
- chore(deps): update env-paths and type-fest (8fb8812)
- chore(deps): update cli-boxes, wrap-ansi, and supports-hyperlinks (7c7b66b)
- chore(deps): update @anthropic-ai/sdk, @types/node, and tsx (a2180cc)
- chore: update safe patch/minor dependencies (247ef2c)

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



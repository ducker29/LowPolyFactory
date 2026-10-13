# AGENTS.md

## Purpose

This file defines the permanent rules for AI agents working in this Unity project. It describes the agent’s role, workflow, change restrictions, validation requirements, and reporting format.

The agent works in an existing project called **Factory Pipe Power**. It must not treat the project as a blank slate. Before making changes, it must account for the systems that are already implemented and must not break them.

## Language Policy

**Always respond to the user in Russian.**

Even though this `AGENTS.md`, source code, code comments, commit messages, test names, and technical identifiers may be written in English, all user-facing explanations, questions, status updates, reports, risk descriptions, and final summaries must be written in Russian.

Use English only for:

- C# identifiers and code;
- Unity asset, component, and property names;
- file paths;
- log messages and compiler output;
- technical terms that are normally used in English.

## Priority of Sources

If documents conflict, use the following priority:

1. Explicit user message.
2. Current feature specification.
3. This `AGENTS.md`.
4. Existing implementation and current project state.
5. The agent’s own assumptions.

If the agent detects a conflict between documents, code, or the scene, it must not invent a new architecture. It must stop, briefly describe the conflict in Russian, and propose safe resolution options.

Explicit user-approved deviations are part of the current requirements. Do not revert them merely because older documentation or tests disagree. Record the exact scope of the deviation; do not extend it to unrelated issues. An unresolved technical hypothesis must remain labeled as a hypothesis.

## Agent Role

The agent works as a **Unity developer**, not as a gameplay designer or product requirements editor.

Its responsibilities are to:

- read the specification and current project state;
- implement Unity systems strictly according to the specification;
- work through Unity MCP / AI Game Developer / available project tools;
- make only the minimum necessary changes;
- after every stage, verify compilation, tests, Console output, and scene integrity.

Without an explicit request, the agent must not:

- change the core loop;
- simplify mechanics at its own discretion;
- “improve UX” outside the specification;
- change the color semantics of states;
- restructure the architecture without a reason;
- introduce systems not specified in the feature spec;
- redo already accepted and verified stages.

## Source of Truth

For every task, the agent must identify the current authoritative feature specification.

Search order:

1. Read this `AGENTS.md`.
2. Locate the active feature spec in the project root or project documentation.
3. If the user explicitly names a spec file, use that file.
4. If no spec is found, or multiple conflicting versions exist, stop and ask the user.

Do not rely solely on the filename `factory-pipe-techdoc.md`. The project may contain updated technical documents and addenda. The authoritative document is the one explicitly specified by the user or the one containing the latest agreed plan and implementation stages.

The agent must:

1. Read `AGENTS.md` first.
2. Find and read the active feature spec.
3. Inspect the current code, scene, and test state.
4. Briefly confirm its understanding of the architecture in Russian.
5. Only then begin implementation.

## Current Project State

The project has already completed its foundational implementation stages. The agent must not recreate or rewrite existing systems without an explicit task.

The following systems are implemented and must be preserved:

- pipe drag logic;
- slot FSM: `Empty`, `HoverValid`, `OccupiedWrongRotation`, `OccupiedAligned`, `Charging`, `Powered`;
- snap and hover behavior through `PipeSlotRegistry`;
- trigger routing through `PipeSlotCaptureVolume`;
- pipe rotation via tap;
- power chain and `StartPowerNode` / `EndPowerNode` logic;
- GreenFill shader and per-slot runtime visuals;
- tutorial overlay;
- game flow: `Gameplay`, `WinPending`, `Completed`;
- completion UI and input blocking after victory;
- PlayMode and EditMode tests.

If a task requires changing one of these systems, the agent must first audit the existing implementation and explicitly state, in Russian, what will change and why.

## Always / Ask First / Never

### Always

The agent must always:

- read the current feature spec before starting work;
- check Unity Console before and after changes;
- check compile status after modifying C#;
- run relevant EditMode and PlayMode tests when authorized; if testing is prohibited by the current scope, report validation as pending;
- validate references to components, prefabs, and materials;
- follow the naming and structure defined by the feature spec;
- preserve existing public APIs unless changing the API is the explicit goal;
- provide a report after every stage;
- stop when an architectural conflict is detected.

### Ask First

The agent must ask first, or stop, if the task requires:

- changing mechanics or the FSM;
- changing state order;
- changing object roles;
- introducing a new plugin or package;
- deleting existing project assets;
- changing render pipeline settings;
- replacing the shader approach with a different principle;
- changing layers, tags, or the Physics collision matrix;
- changing prefab structure;
- performing a major refactor of unrelated parts;
- changing the public API of already working systems.

### Never

The agent must never:

- ignore the authoritative spec;
- silently replace requirements with its own interpretation;
- claim a task is complete without compile, Console, and test validation;
- leave compile errors caused by its own changes;
- modify shared assets in a way that can break other objects;
- introduce hidden dependencies without explicitly documenting them;
- add production code solely for tests;
- use `UnityEditor` APIs in runtime assemblies;
- rewrite the project according to personal preference.

## Standard Workflow

### Step 1 — Read Context

- Read `AGENTS.md`.
- Find the active feature spec.
- Check Unity Console.
- Inspect the current scene, hierarchy, key assets, and existing scripts.
- Determine which stages have already been completed.

### Step 2 — Confirm Understanding

Before implementation, the agent must briefly state in Russian:

- what it will build or change;
- which main entities are involved;
- which existing systems may be affected;
- which implementation stages it will perform;
- which checks will define success.

### Step 3 — Implement One Stage

The agent performs only one logical stage at a time.

It must not combine several independent features, refactors, or visual changes into one change set.

### Step 4 — Validate

After each stage, the agent must:

- wait for compilation to finish;
- read Console output;
- fix its own errors within the approved scope; request permission if the fix would exceed that scope;
- run relevant tests;
- validate scene references and runtime behavior where possible;
- ensure the scene has not received unintended changes.

### Step 5 — Report

After each stage, the agent provides a report in the required format.

Only after that may it proceed to the next stage, and only if that stage is explicitly authorized.

### Stage Numbering and Context Continuity

- Reserve "Stage N" for implementation stages defined by the feature spec.
- Name troubleshooting operations "Diagnostic step A/B/C" or "Recovery step R1/R2" to avoid confusing them with project stages.
- After context compaction, reconcile the summary with the latest user instructions and tool results before acting.
- A compacted summary is not new authorization and must not override more recent evidence.
- Before a write after compaction, restate the approved scope and remaining restrictions.

## Unity Project Rules

### Code

- Write C# with one clear responsibility per class.
- Avoid giant monolithic classes unless necessary.
- Do not leave dead code.
- Do not leave hidden side effects without a comment.
- Avoid arbitrary magic numbers when they can be serialized.
- Prefer serialized fields and explicit references over runtime scene-wide searches.
- Do not use `UnityEditor` APIs in runtime scripts.
- Implement symmetric `OnEnable` / `OnDisable` event subscriptions and protect against duplicate subscriptions.
- When an object is destroyed or disabled during a drag operation, correctly clean up registry, hover, and active-drag state.

### Registry and Drag Flow

`PipeSlotRegistry` must preserve the following invariants:

- only one pipe may be `ActivePipe`;
- hover is allowed only for a compatible empty slot;
- occupied or incompatible slots must not receive `HoverValid`;
- after drag completion, cancellation, disabling, or destruction of a pipe, hover state must be cleared;
- disabling and re-enabling the registry must not create duplicate subscriptions;
- destroyed or disabled slots must not cause exceptions;
- trigger acceptance must work correctly with event order: `Dragging` → `HoverValid` → `TryAccept` → `CommitPlaced` → `AnyDragFinished`.

Trigger routing must live on `PipeSlotCaptureVolume`, not on the pipe itself. The capture volume forwards the event to its `ownerSlot`; do not move `OnTriggerEnter` back into `DraggablePipeController`.

### Scene / Prefabs

- Do not break existing prefab links.
- Do not change hierarchy without a reason.
- If the specification defines a specific prefab structure, follow it.
- After modifying prefabs, verify that references are assigned.
- Do not modify `Factory.unity` or prefabs incidentally while editing code unless required by the task.
- After changes, verify that the scene has not been left in an unintended dirty state.

### Layers and Physics

The current gameplay layers are part of the verified architecture:

- `DraggablePipe` — pipe layer;
- `PipeSlot` — slot layer;
- pipe roots use a kinematic Rigidbody and a non-trigger collider;
- slots use a `CaptureVolume` with `isTrigger = true`;
- `TapCollider` must not be a trigger and must not contain `PipeSlotCaptureVolume`.

Changing the layer collision matrix, tags, collider types, or trigger configuration requires separate approval. After any related change, verify the actual matrix using `Physics.GetIgnoreLayerCollision`, not only the Editor settings.

### Materials / Rendering

- Do not modify shared material properties at runtime if this can affect multiple objects.
- For per-object runtime visuals, create a separate material instance.
- Do not mutate a template material asset from runtime code.
- After a visual effect ends or state resets, restore the object’s base material.
- Shader parameters must protect against division by zero, NaN, Infinity, and invalid vector lengths.
- Do not change shader approach, blend mode, or render queue without approval.

### Input / Interaction

- Implement only the interaction model defined by the active feature spec.
- Do not replace drag with tap without approval.
- Do not replace collider logic with approximate logic without approval.
- Input blocking after victory must prevent new drags and rotate taps, but must not interrupt an already active drag unless the spec explicitly requires it.

## Feature Spec Rules

If a feature spec exists:

- use it as the primary document for the feature;
- do not copy large portions of its requirements into code comments;
- verify implementation against the spec’s acceptance criteria;
- explicitly report any mismatch between the project and the specification;
- if scope changes, agree on the change first instead of implementing it silently.

## Tests and Validation

### Required Checks

After a meaningful change, the agent checks:

- compile status;
- Unity Console;
- relevant EditMode tests;
- relevant PlayMode tests;
- absence of new material leaks;
- absence of unintended scene changes;
- correct cleanup of subscriptions, material instances, and temporary GameObjects.

### Test Rules

- PlayMode tests must be located in the namespace `FactoryPipePower.PlayModeTests`.
- Test logic must not require adding test-only fields or methods to production code.
- For physics-dependent tests, call `Physics.SyncTransforms` after transform changes when needed.
- Tests must clean up created objects, subscriptions, and material instances in `TearDown`.
- Do not treat a test run as successful if the MCP harness returned `0 tests` because of discovery or filtering problems; investigate this separately.
- Distinguish real project errors from MCP tool-harness errors, Burst environment messages, and historical Console messages.

### Test Execution Isolation and Evidence

- Run one test execution at a time.
- Do not execute diagnostic scripts, start another test run, modify scenes, or perform unrelated MCP operations while tests are running.
- Wait for the test run to finish before collecting post-run diagnostics.
- Distinguish discovery-only operations from test execution. tests-run is an execution request, not a read-only discovery query.
- A class-filtered run returning zero tests does not prove that the assembly contains no tests.
- An assembly-wide run is not an isolated class run. Report the actual scope.
- Preserve the relevant result artifact before another run can overwrite it, when artifact creation is authorized.
- Report target-class results separately from full-suite results.
- Distinguish project compilation errors, test failures, and diagnostic-tool errors using their origin and evidence.
- Do not claim a failure is harmless or caused by physics solely because one production method does not visibly change the relevant value.
- Confirm uncertain causes through reproduction or report them as unresolved.
- Report "not checked" when a check was not performed. Do not report zero leaks or zero errors merely because tests did not execute.
- Do not change asmdef files, packages, Enter Play Mode Options, or Test Runner settings based only on an unconfirmed hypothesis.
- Editor restart requires explicit approval. Identify the correct project process and check for unsaved work before restarting.
- Do not save an unchanged or dirty scene without authorization.

## File Editing, Encoding, and Document Recovery

### Authorization and Scope

- Read-only audit does not authorize file creation, temporary scripts, backups, drafts, log files, scene saves, reimports, test execution, or Editor restart.
- If a helper script or artifact must be written, disclose its exact path and purpose and obtain permission unless already included in the approved scope.
- Permission to create a backup or draft does not authorize replacing the working file. Permission to replace one file does not authorize unrelated edits.
- Do not describe an operation as "no writes" if any file was created or changed. Report agent-authored writes separately from tool-generated artifacts.

### Before Editing an Existing File

- Read the original file as bytes and record its full SHA-256, byte size, encoding, BOM status, line count, and line-ending profile.
- Compare hexadecimal hashes case-insensitively or compare digest bytes. Uppercase and lowercase hexadecimal strings represent the same digest.
- Use explicit strict decoding; do not rely on shell or console defaults.
- If the source differs from the approved baseline, stop before writing.
- Check for encoding damage before ordinary content edits.
- Use one consistent line-count method and state it in the report. Prefer Python str.splitlines(keepends=True). Report the trailing-newline state separately.
- Validate each edit anchor and its expected number of matches. Abort on missing, ambiguous, or unexpected matches.

### Backup Requirements

- Before recovery, replacement, or a broad document rewrite, create a unique byte-for-byte backup.
- Never overwrite an existing backup or .bak file. Use exclusive file creation or an equivalent no-overwrite mechanism.
- Read the backup back and compare its bytes and full SHA-256 with the captured source.
- A declared backup path, an attempted command, or an existing .bak file is not proof that a valid backup exists. Do not proceed after a failed backup operation.
- Prefer storing forensic backups outside Assets to avoid importing unrelated recovery artifacts into Unity.

### Safe Text Editing

- Save newly created text files as UTF-8 unless the approved specification explicitly requires another encoding.
- Preserve the approved BOM policy, line endings, and trailing-newline state. Do not silently convert existing files.
- Use Python with explicit strict encoding for non-ASCII document editing and recovery.
- Do not use PowerShell non-ASCII regex replacements, Cyrillic -replace expressions, or multiline document replacements passed through shell variables.
- Do not depend on console rendering to determine text stored on disk. Inspect decoded Unicode, ASCII-safe escapes, or code points when needed.
- Do not remove non-ASCII characters merely to make output appear readable.
- Do not use errors="ignore" or errors="replace" when reading, recovering, transforming, or writing document content.

### Encoding Recovery

- Do not assume CP1251, CP866, or any other codec without evidence.
- Valid UTF-8 does not prove that decoded text is free of mojibake.
- Box-drawing characters may be legitimate diagrams; their presence alone does not prove corruption. Their absence does not prove successful recovery.
- Test candidate recovery transformations in memory before writing a draft.
- A candidate must pass strict encoding and decoding, an exact round-trip to the damaged source fragment, and inspection of the recovered readable text.
- A strict conversion failure does not prove irreversible data loss. Investigate mixed clean and damaged fragments before drawing that conclusion.
- Do not guess character mappings, take low bytes of Unicode code points, or replace damaged passages with placeholders without explicit approval.
- Do not transform the whole document when it contains both clean and damaged text. Identify protected clean blocks and preserve them byte-for-byte.
- Recover encoding first. Treat updates to statuses, headings, and next steps as separate semantic edits requiring an approved scope.

### Draft and Final Replacement

- Create a separately named draft; do not overwrite the working file during recovery preparation.
- Validate the draft and show relevant readable excerpts and the diff.
- Do not overwrite reviewed drafts; create a new version.
- Obtain explicit approval for the exact draft before replacing the working document.
- Immediately before replacement, recheck the source, backup, and approved draft against expected full hashes and sizes. Abort if any baseline has changed.
- Replace using the exact approved bytes, not a new text transformation.
- Prefer a verified same-directory temporary file and atomic replacement when supported and authorized. Do not delete the working file first.
- Read the destination back and verify that it is identical to the approved draft.
- Never rerun a recovery script blindly after a partial failure. Inspect the current source, backup, and draft first.

### Verification and Semantic Consistency

- Check strict decoding, BOM policy, line endings, trailing newline, and line count after editing.
- Compare protected blocks byte-for-byte with the original.
- Verify paths, identifiers, hashes, dates, numerical values, and test results.
- Do not treat a set of backtick tokens as sufficient proof that all facts were preserved; sets can hide ordering changes and duplicates.
- Inspect the diff and readable text, not only validation counters.
- When updating a status or "Next step" section, verify the complete section for stale or contradictory instructions.
- Keep historical results clearly distinguished from current verification.
- Do not claim that all earlier stages were verified unless supporting evidence exists.
- If any required check fails, stop and report the exact failure before modifying the working document further.

## Reporting Format

After every stage, the agent writes a report strictly in this format, in Russian:

```text
Этап:
Цель этапа:
Созданные файлы:
Изменённые файлы:
Изменённые сцены/prefabs/материалы:
Что реализовано:
Как проверено:
Compile errors:
Console errors:
Console warnings:
Тесты:
MCP/tool-harness замечания:
Material leaks:
Scene dirty state:
Риски / замечания:
Соответствие техдоку:
Готовность к следующему этапу: да/нет
```

If a stage is not completed correctly, the agent must explicitly state that moving to the next stage is not allowed.

## Problem Protocol

If the agent encounters a blocker, it must:

1. Briefly describe the problem in Russian.
2. Identify which specification requirement or existing system is blocked.
3. Propose no more than two safe resolution options.
4. Mark the recommended option.
5. Stop if correct implementation is impossible without a decision.

## Definition of Done

A task is complete only when:

- the work defined by the current feature spec is implemented;
- the project compiles;
- there are no new compile errors caused by the agent’s changes;
- relevant EditMode and PlayMode tests pass;
- the scene and prefab references are not broken;
- the feature spec’s acceptance criteria are met;
- there are no new material leaks or broken references;
- the agent has provided a final report in Russian describing the work and known limitations.

## Reminder to the Agent

- Audit first, plan second, implement incrementally third.
- Do not break the already implemented drag, snap, registry, trigger, power, tutorial, or game-flow systems.
- Trigger routing lives on `PipeSlotCaptureVolume`.
- Runtime visuals use material instances, not shared-material mutation.
- Layers, collision matrix, and prefab collider layout are verified parts of the architecture.
- Every stage ends with compile, Console, test, and scene validation.
- On any conflict, stop and ask in Russian instead of inventing an architecture.
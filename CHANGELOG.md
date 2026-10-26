# Changelog

## 0.1.4 — 2026-10-26

**Fixes**
- **Edit from here works.** Rewinding a conversation no longer fails with "Provider runtime configuration changed", and "Undo file changes from here on" restores your files in a normal project, saving your current files first. The dialog is in plain language.
- **OpenCode works.** Its model list loads, messages get replies, and onboarding only says Ready when OpenCode can actually start.
- **Failed sends are never silent.** A message that couldn't be sent shows the reason with Retry, and the text goes back into the composer.
- **The window keeps responding** after the engine restarts or a provider errors. ⌘R reloads the window, and a small Reload prompt appears if something gets out of sync.
- Commands that were running when the connection ended now show Interrupted.

## 0.1.3 — 2026-10-25

Fixes for the second round of feedback, plus chats without a project.

**New**
- **Chats without a project.** Start a chat from the Chats group or ⌘K → New chat; no folder needed.
- **Racing, end to end.** Write the prompt in the Race dialog, see each racer's status (including when one needs approval), compare the results, keep the best one in your checkout and discard the rest. Racers start from your uncommitted changes.
- **Short generated titles** after the first reply, with Regenerate title in the thread menu.

**Fixes**
- Stop now stops the command the agent was running, and its card shows Stopped.
- Token usage is the turn's real total for every agent, e.g. "45k in (22k cached) · 99 out · 2 calls".
- One approval card for every agent: Approve once, Always allow (in plain words), Decline, and Cancel turn. File edits show as a diff.
- Agent activity: no doubled words or duplicate items, opening a thread marks it read, and Mark all read / Clear.
- Very large pastes attach as a file instead of freezing the window.
- One name per model everywhere (Opus 5.5, not Opus 5-5).
- Importing Codex history works for long sessions and opens what you imported.

## 0.1.2 — 2026-10-25

Faster everywhere, plus fixes for everything reported in the first round of feedback. Thank you!

**Speed**
- Long threads open almost instantly: Bubble loads the latest turns first, with **Show earlier messages** for the rest.
- Starting the app and switching threads is much quicker, especially on remote environments and slow connections.
- Sending a reply right after the agent finishes no longer gets refused while a checkpoint is saving.

**Fixes and improvements**
- Real agent logos, a crisp settings icon, and natural file sorting (2 before 10).
- The model picker shows the model your agent actually runs, everywhere.
- Settings is reorganized into sections, with font presets, sliders and a live preview.
- Usage and limits loads on its own, with one card per agent.
- Edit keyboard shortcuts by pressing keys; conflicts are flagged.
- Notifications are one setting, offered the first time an agent needs you.
- **Race models…** is easy to find in the composer and ⌘K.
- Clear cards for content-filter stops, with Retry, Edit message and Try another model.
- Screen capture asks for permission instead of failing silently.
- Remote-only mode can no longer lock you out, and the window stays usable after switching environments.
- No more Git errors in folders that aren't repositories; Changes offers **Initialize Git**.
- Cleaner ⌘K launcher, readable activity items, plain-language Environments, silent draft saves, and dialogs that close when you click outside.

## 0.1.1 — 2026-10-22

- First public preview for Apple Silicon Macs.
- Install with Homebrew: `brew install --cask huslayer826/tap/bubble-harness`.

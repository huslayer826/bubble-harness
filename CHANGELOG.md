# Changelog

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

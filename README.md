<div align="center">

# ⚡ Quents

**Full Linux environments, one command away.**

[![Status](https://img.shields.io/badge/status-coming%20soon-orange?style=flat-square)](https://quents.dev)
[![Platform](https://img.shields.io/badge/platform-Linux%20%7C%20Termux%20%7C%20WSL2-blue?style=flat-square)](#platform-support)
[![License](https://img.shields.io/badge/license-proprietary-red?style=flat-square)](#license)
[![Website](https://img.shields.io/badge/website-quents.dev-brightgreen?style=flat-square)](https://quents.dev)

</div>

---

## What is Quents?

**Quents** is a self-hosted Linux environment manager that lets you pull, run, and manage full Linux distributions with a single command — on any device, with or without internet.

Think of it as a lightweight, self-hosted environment manager for full distros: Ubuntu, Debian, Alpine, Kali, and more — built for developers, sysadmins, and security researchers.

No VM. No heavy container daemon. Just your distro, your machine, your control.

---

## Features

- **One-command environments** — pull and run full Linux distros instantly
- **Works everywhere** — Linux, Termux (Android), WSL2, ARM/aarch64 devices
- **Offline-first** — full functionality without internet after initial setup
- **Self-hosted** — your data stays on your machine, always
- **Lightweight** — no systemd dependency, no heavy background daemon
- **Cross-architecture** — automatic QEMU emulation for mismatched architectures
- **Web GUI** *(paid)* — browser-based desktop access for GUI distros via noVNC
- **Web dashboard** *(paid)* — manage all your environments from a clean browser interface

---

## Quick Start

```bash
# Pull an environment
quents pull ubuntu

# Run it
quents run ubuntu

# List running environments
quents ps

# Enter a running environment
quents exec myenv bash

# Stop an environment
quents stop myenv

# Remove an environment
quents rm myenv
```

---

## Command Reference

| Command | Description |
|---|---|
| `quents pull <distro>` | Download a distro image |
| `quents images` | List available downloaded images |
| `quents run <image>` | Create and start a new environment |
| `quents create <image>` | Create environment without starting |
| `quents start <name>` | Start a stopped environment |
| `quents stop <name>` | Stop a running environment |
| `quents exec <name> <cmd>` | Run a command inside an environment |
| `quents ps` | List running environments |
| `quents ps -a` | List all environments (running + stopped) |
| `quents rm <name>` | Remove an environment |
| `quents rmi <image>` | Remove a downloaded image |
| `quents snapshot <name>` | Snapshot current environment state |

---

## Platform Support

| Platform | CLI | GUI (paid) |
|---|---|---|
| Linux (x86\_64) | ✅ | ✅ |
| Linux (ARM/aarch64) | ✅ | ✅ |
| Termux (Android) | ✅ | 🔜 |
| WSL2 (Windows) | ✅ | ✅ |
| macOS | 🔜 | 🔜 |

---

## Free vs Paid

### Free — Always Free
- Full CLI lifecycle (`pull` / `run` / `exec` / `stop` / `rm` / `ps`)
- Ubuntu, Debian, Alpine environments
- Up to 3 simultaneous environments
- Works on all supported platforms including Termux
- Full offline support after initial pull
- No account required

### Paid — QuentsLab Pro
- Unlimited environments
- Kali Linux, BlackArch, Parrot OS and more security-focused distros
- Browser-based GUI desktop (noVNC) — access a full desktop from your browser
- Web management dashboard — start, stop, monitor all environments visually
- Priority support
- Team management *(enterprise)*

> **Licensing is hybrid online/offline** — your license is validated once and cached locally as a signed token, so paid features work even without internet connection.

---

## Supported Distros

| Distro | Free | Paid |
|---|---|---|
| Ubuntu | ✅ | ✅ |
| Debian | ✅ | ✅ |
| Alpine | ✅ | ✅ |
| Kali Linux | — | ✅ |
| BlackArch | — | ✅ |
| Parrot OS | — | ✅ |
| More coming | — | 🔜 |

---

## How It Works

Quents uses `chroot` (with root) or `proot` (rootless, e.g. Termux) as its environment backend — meaning no kernel-level virtualization required. Environments are isolated filesystem instances that share your host kernel.

For cross-architecture environments (e.g. running an `aarch64` distro on an `x86_64` host), Quents automatically detects the mismatch and sets up QEMU user-space emulation transparently.

---

## Status

Quents is currently under active development.

- [ ] Core CLI engine
- [ ] Environment lifecycle management
- [ ] Image registry & pull system
- [ ] Snapshot / restore
- [ ] Web dashboard (paid)
- [ ] GUI / noVNC access (paid)
- [ ] License system

👉 **Join the waitlist at [quents.dev](https://quents.dev)**

---

## Contributing

Quents is currently closed-source during early development. Once we launch, contribution guidelines will be published here.

If you have feedback, ideas, or want to report a bug — open an issue or reach out via [quents.dev](https://quents.dev).

---

## License

Quents is proprietary software. The core CLI will be free to use. Paid features require a valid QuentsLab Pro license.

See [LICENSE](./LICENSE) for details.

---

<div align="center">

Made with ☕ by the QuentsLab team · [quents.dev](https://quents.dev)

</div>

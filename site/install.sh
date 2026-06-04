#!/bin/sh
set -e

# Claudin installer — https://claudiolabs.ai
# Usage: curl -fsSL https://claudiolabs.ai/install.sh | sh

PACKAGE="@claudiolabs/claudin@latest"
MIN_NODE=20

cyan='\033[0;36m'
green='\033[0;32m'
yellow='\033[1;33m'
red='\033[0;31m'
reset='\033[0m'

info()    { printf "${cyan}  →${reset} %s\n" "$1"; }
success() { printf "${green}  ✓${reset} %s\n" "$1"; }
warn()    { printf "${yellow}  !${reset} %s\n" "$1"; }
error()   { printf "${red}  ✗${reset} %s\n" "$1" >&2; exit 1; }

printf "\n"
printf "  ${cyan}Claudin${reset} — One coding agent CLI. Any LLM.\n"
printf "  https://claudiolabs.ai\n\n"

# ── Node.js check ─────────────────────────────────────────────────────────────

node_version() {
  node -e "process.exit(parseInt(process.version.slice(1)) < $MIN_NODE ? 1 : 0)" 2>/dev/null
}

if command -v node >/dev/null 2>&1 && node_version; then
  NODE_VER=$(node -e "process.stdout.write(process.version)")
  success "Node.js $NODE_VER detected"
else
  warn "Node.js $MIN_NODE+ not found — installing via nvm"

  if ! command -v curl >/dev/null 2>&1 && ! command -v wget >/dev/null 2>&1; then
    error "curl or wget is required to install nvm"
  fi

  # Install nvm
  NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
  if [ ! -f "$NVM_DIR/nvm.sh" ]; then
    info "Downloading nvm..."
    if command -v curl >/dev/null 2>&1; then
      curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/HEAD/install.sh | sh
    else
      wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/HEAD/install.sh | sh
    fi
  fi

  # Load nvm
  # shellcheck disable=SC1091
  . "$NVM_DIR/nvm.sh"

  info "Installing Node.js $MIN_NODE (LTS)..."
  nvm install "$MIN_NODE" >/dev/null 2>&1
  nvm use "$MIN_NODE" >/dev/null 2>&1
  success "Node.js $(node -e 'process.stdout.write(process.version)') installed"
fi

# ── npm check ─────────────────────────────────────────────────────────────────

if ! command -v npm >/dev/null 2>&1; then
  error "npm not found — please install Node.js $MIN_NODE+ from https://nodejs.org"
fi

# ── Install Claudin ────────────────────────────────────────────────────────────

info "Installing $PACKAGE..."
npm install -g "$PACKAGE" --loglevel=error

printf "\n"
success "Claudin installed successfully!"
printf "\n"
printf "  Run ${cyan}claudin${reset} to get started.\n"
printf "  Docs: https://claudiolabs.ai/docs\n\n"

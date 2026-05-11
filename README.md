# DevLog Project: Month 1 Master Plan

This project serves as a hands-on learning environment for mastering DevOps foundations. We are building a "DevLog" server while progressively implementing core DevOps practices.

## 🚀 Current Project Status: Week 2
- [x] **Week 1: Linux & Networking Foundations**
    - Local Node.js server setup.
    - Bash scripting for startup and cleanup.
    - Permissions management (`chmod`, `chown`).
    - Process monitoring (`ps`, `lsof`, `top`).
- [ ] **Week 2: Docker Deep Dive** (In Progress)
    - [x] Multi-stage Dockerfile optimized with Node 20-alpine.
    - [x] Docker Compose orchestration with MongoDB.
    - [x] Container networking (App talking to DB via service name).
    - [ ] Docker Hub image pushing.

---

## 📅 Month 1 Master Plan: DevOps Foundations

### Week 1 — Linux + Networking (The Base)
Everything in DevOps and AI deployment runs on Linux. Confident navigation is non-negotiable.
- **Day 1-2**: Filesystem & Navigation (`pwd`, `ls`, `cd`, `mkdir`, `rm`, `cp`, `mv`).
- **Day 3-4**: DevOps Specifics (Package management, `systemctl`, `curl`, `ssh`, `vim`).
- **Day 5-7**: Networking Fundamentals (IP, DNS, HTTP/S, Ports, TCP/UDP, OSI Model, Load Balancers, Firewalls).

### Week 2 — Docker Deep Dive
Move from "running Docker" to understanding it deeply.
- **Dockerfile Mastery**: Layer caching, multi-stage builds, non-root users.
- **Docker Compose**: Service orchestration, environment variables, named volumes vs bind mounts.
- **Networking**: Custom networks, container-to-container communication.

### Week 3 — YAML Deeply + GitHub Advanced
- **YAML**: Indentation, data types, anchors, and aliases (used in K8s and Compose).
- **GitHub Professional Workflow**: GitFlow branching, Rebasing vs Merging, Stashing, Conventional Commits.

### Week 4 — GitHub Actions (First CI/CD Pipeline)
Build a real pipeline that automates everything.
- **Structure**: Workflows, Triggers (`on`), Jobs, Steps.
- **Project**: Push code → Run tests → Build Docker Image → Push to Docker Hub.

---

## 🛠 Project Components
- **App**: Node.js HTTP server (`src/server.js`)
- **Database**: MongoDB (via Docker Compose)
- **Scripts**: Automation scripts in `scripts/`
- **Docker**: Production-ready multi-stage `Dockerfile`

## 🚦 How to Run (Current State)
1. Ensure Docker Desktop is running.
2. Start the full stack:
   ```bash
   docker compose up -d
   ```
3. Test the API:
   ```bash
   curl http://localhost:3000/logs
   curl -X POST http://localhost:3000/log
   ```

## 📚 Resources
- [Linux Journey](https://linuxjourney.com)
- [OverTheWire: Bandit](https://overthewire.org/wargames/bandit/)
- [Cloudflare Learning](https://www.cloudflare.com/learning/)
- [TechWorld with Nana (Docker)](https://www.youtube.com/@TechWorldwithNana)

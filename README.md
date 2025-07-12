# 🚀 NodeCloudOps

A **minimal React frontend** served by Nginx in Docker — fully automated end‑to‑end CI/CD pipeline deploying to **AWS Elastic Beanstalk** using GitHub Actions.

While the frontend is intentionally simple, the real magic is in the **infrastructure & automation**:  
✅ Build & test inside Docker  
✅ Push production image to GHCR  
✅ Upload build to S3  
✅ Deploy to AWS Elastic Beanstalk  
✅ All triggered automatically on push to `main`

---

## 🌱 Why minimal frontend?

This project isn’t about fancy UI.  
It’s about **real‑world DevOps**:
- Docker multi‑stage builds
- Automated deployments from GitHub Actions to AWS
- Using S3 & Elastic Beanstalk to serve production apps reliably

> ⚡ *Focus is on reliability, automation & CI/CD best practices — not UI complexity.*

---

## 🐳 Tech stack

| Layer            | Tech                                     
| ---------------- | ---------------------------------------- 
| Frontend         | React.js (with Bootstrap for styling)   
| Web server       | Nginx                                    
| Containerization | Docker (multi‑stage build)               
| CI/CD            | GitHub Actions                           
| Cloud            | AWS Elastic Beanstalk (Single Docker)   
| Registry         | GitHub Container Registry (GHCR)         

---

## ⚙️ CI/CD pipeline overview

> From `git push` → live on AWS in minutes, fully automated.

```mermaid
graph TD
  A[Push to main] --> B[GitHub Actions]
  B --> C[Run tests inside Docker]
  C --> D[Build prod Docker image]
  D --> E[Upload build artifact to S3]
  E --> F[Deploy to Elastic Beanstalk]
  F --> G[Public URL]

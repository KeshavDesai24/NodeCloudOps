# 🚀 NodeCloudOps

A **minimal React frontend** served by Nginx in Docker — fully automated end‑to‑end CI/CD pipeline deploying to **AWS Elastic Beanstalk** using GitHub Actions.

While the frontend is intentionally simple, the real magic is in the **infrastructure & automation**:  
✅ Build & test inside Docker  
✅ Push production image to GHCR  
✅ Upload build to S3  
✅ Deploy to AWS Elastic Beanstalk  
✅ All triggered automatically on push to `main`

------------------------------------------------------------------------------------

## 🌱 Why minimal frontend?

This project isn’t about fancy UI.  
It’s about **real‑world DevOps**:
- Docker multi‑stage builds
- Automated deployments from GitHub Actions to AWS
- Using S3 & Elastic Beanstalk to serve production apps reliably

> ⚡ *Focus is on reliability, automation & CI/CD best practices — not UI complexity.*

---------------------------------------------------------------------------------------

## 🐳 Tech stack

| Layer            | Tech                                     
| ---------------- | ---------------------------------------- 
| Frontend         | React.js (with Bootstrap for styling)   
| Web server       | Nginx                                    
| Containerization | Docker (multi‑stage build)               
| CI/CD            | GitHub Actions                           
| Cloud            | AWS Elastic Beanstalk (Single Docker)   
| Registry         | GitHub Container Registry (GHCR)         

----------------------------------------------------------------------------------------

## ⚙️ CI/CD pipeline overview

> From `git push` → live on AWS in minutes, fully automated.

  A[Push to main] --> B[GitHub Actions]
  B --> C[Run tests inside Docker]
  C --> D[Build prod Docker image]
  D --> E[Upload build artifact to S3]
  E --> F[Deploy to Elastic Beanstalk]
  F --> G[Public URL]

---------------------------------------------------------------------------------------------

🧹 Environment cleanup (cost saving)

After successfully testing the full CI/CD pipeline and deploying the app to **AWS Elastic Beanstalk**,  
I deleted the live environment and related AWS resources to **avoid unnecessary billing**.

Cleaned resources:
- Elastic Beanstalk application & environment
- S3 deployment buckets
- CloudWatch logs
- Load balancer & auto scaling group
- VPC (if custom)
- EC2 instance

> ⚠️ **Note:** Since the Elastic Beanstalk environment no longer exists,  
> further commits (like this README) will cause the deploy step in GitHub Actions to **fail as expected**.  
> This is intentional — the pipeline worked perfectly during actual deployment,  
> and screenshots are included as proof.

By doing this, the project remains cost‑free yet fully demonstrates:
- End‑to‑end automation
- Production‑ready deployment flow
- Cloud resource management & teardown best practices

---------------------------------------------------------------------------------------

✅ Final note

The real goal: **showing DevOps skills, not running a permanent paid service**.  
Pipeline logs & screenshots prove it was deployed live.  
Clean, automated, cost‑aware — just like it should be.


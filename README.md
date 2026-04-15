# Chocolate Website — Containerized Deployment

## Overview

This project demonstrates the containerization and deployment of a static web application using Docker and Nginx. The goal is to simulate a production-style deployment by packaging the application into a portable container and running it on a cloud-based virtual machine.

---

## Key Features

* Containerized static website using Docker
* Lightweight Nginx web server for efficient content delivery
* Deployment on a cloud-hosted Linux server (AWS EC2)
* Port exposure for public accessibility

---

## Technology Stack

* Docker
* Nginx
* AWS EC2 (Ubuntu)
* HTML, CSS, JavaScript

---

## System Architecture

Client Request → EC2 Instance → Docker Engine → Nginx Container → Static Web Content

---

## Getting Started

### Prerequisites

* Docker installed and running
* Git installed

---

### Installation & Setup

#### Clone Repository

```bash
git clone https://github.com/<your-username>/chocolate-app-dockerized.git
cd chocolate-app-dockerized
```

#### Build Docker Image

```bash
docker build -t chocolate-app .
```

#### Run Container

```bash
docker run -d -p 8080:80 --name chocolate-app chocolate-app
```

---

## Application Access

Once the container is running, access the application via:

http://

---

## Deployment Details

* Environment: Ubuntu Server (AWS EC2)
* Container Runtime: Docker
* Web Server: Nginx
* Network Port: 80 (HTTP)

---

## Project Structure

```
.
├── Dockerfile
├── index.html
├── css/
├── js/
├── images/
└── README.md
```

---

## Learning Outcomes

* Practical experience with Docker containerization
* Understanding of how Nginx serves static assets in a containerized environment
* Deployment of containerized applications on cloud infrastructure
* Exposure to basic DevOps practices and workflows

---

## Future Enhancements

* Implement CI/CD pipeline for automated builds and deployment
* Publish Docker image to a container registry (Docker Hub)
* Introduce HTTPS using Nginx and SSL certificates
* Use Docker Compose for multi-container orchestration

---

## Author

**Salisu Abubakar**
Cloud & DevOps Enthusiast

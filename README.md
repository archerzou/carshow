# 🚗 Carsties - Microservices Car Auction Platform

## 🚀 Overview
**Carsties** is a comprehensive car auction platform built with a microservices architecture. This app provides real-time bidding, auction management, and user authentication with a modern, responsive web interface. The platform leverages cutting-edge technologies including .NET Core, Next.js, RabbitMQ messaging, and dual-database architecture (PostgreSQL & MongoDB).

### Home Page
<img src="/screenshots/homepage.png" alt="Carsties Platform" />

### Bid Page
<img src="/screenshots/bidpage.png" alt="bid car" />

### Edit Page
<img src="/screenshots/edit.png" alt="edit auction" />

## 🏗 Architecture Overview

This platform implements a **microservices architecture** with the following services:

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Web App   │────▶│ Gateway Svc  │────▶│ Auction Svc │
│  (Next.js)  │     │   (API GW)   │     │  (gRPC)     │
└─────────────┘     └──────────────┘     └─────────────┘
                           │                     │
                           ▼                     ▼
                    ┌──────────────┐      ┌─────────────┐
                    │ Identity Svc │      │  Search Svc │
                    │   (OAuth)    │      │  (MongoDB)  │
                    └──────────────┘      └─────────────┘
                           │                     │
                           ▼                     ▼
                    ┌──────────────┐      ┌─────────────┐
                    │  PostgreSQL  │      │    Mongo    │
                    └──────────────┘      └─────────────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   RabbitMQ   │◀────┐
                    │  (Message)   │     │
                    └──────────────┘     │
                           │             │
                ┌──────────┼─────────────┘
                ▼          ▼         ▼
         ┌──────────┐ ┌─────────┐ ┌──────────┐
         │  Bid Svc │ │ Notify  │ │  Search  │
         │ (Mongo)  │ │   Svc   │ │   Svc    │
         └──────────┘ └─────────┘ └──────────┘
```

## 🛠 Tech Stack

### Backend Services (.NET Core)
- **Auction Service** - Core auction management with gRPC support
- **Search Service** - Fast search capabilities using MongoDB
- **Identity Service** - OAuth2/OpenID Connect authentication
- **Gateway Service** - API Gateway and request routing
- **Bidding Service** - Real-time bid processing with MongoDB
- **Notification Service** - Event-driven notifications

### Frontend
- **Next.js 15+** - React framework with Server-Side Rendering
- **NextAuth.js** - Authentication and authorization
- **TypeScript** - Type-safe development

### Infrastructure
- **RabbitMQ** - Message broker for asynchronous communication
- **PostgreSQL** - Relational database for auctions and identity
- **MongoDB** - Document database for search and bidding
- **Docker & Docker Compose** - Containerization and orchestration
- **Nginx** - Reverse proxy for routing and SSL termination
- **gRPC** - High-performance inter-service communication

## 🔥 Key Features

### Auction Management
✅ Create, update, and manage car auctions  
✅ Real-time auction status updates  
✅ Automated auction ending and winner determination  
✅ Image upload and gallery management  
✅ Advanced filtering and sorting capabilities

### Bidding System
💰 Real-time bidding with instant updates  
💰 Bid validation and conflict resolution  
💰 Automatic bid notifications  
💰 Bid history and tracking  
💰 gRPC-based high-performance bid processing

### Search & Discovery
🔍 Full-text search across all auctions  
🔍 Advanced filtering (make, model, year, price)  
🔍 MongoDB-powered fast search results  
🔍 Real-time search index updates via RabbitMQ

### Authentication & Security
🔐 OAuth2/OpenID Connect authentication  
🔐 JWT token-based authorization  
🔐 Role-based access control  
🔐 Secure password hashing and storage  
🔐 HTTPS with SSL/TLS support

### Notifications
📧 Real-time event notifications  
📧 Bid accepted/rejected alerts  
📧 Auction ending reminders  
📧 Winner announcements

### Infrastructure Features
⚡ Microservices architecture for scalability  
⚡ Event-driven architecture with RabbitMQ  
⚡ Health checks and service monitoring  
⚡ Docker containerization for easy deployment  
⚡ Nginx reverse proxy with SSL support


### Configure Local Hosts (Required for Development)

#### Windows:
1. Open Notepad as Administrator
2. Open `C:\Windows\System32\drivers\etc\hosts`
3. Add these lines:
```
127.0.0.1    id.carsties.local
127.0.0.1    app.carsties.local
```

#### macOS/Linux:
```bash
sudo nano /etc/hosts

# Add these lines:
127.0.0.1    id.carsties.local
127.0.0.1    app.carsties.local
```

## 🚀 Development
### Local Development (Without Docker)

#### Backend Service:
```bash
cd src/AuctionService
dotnet restore
dotnet run
```

#### Frontend:
```bash
cd frontend/web-app
npm install
npm run dev
```

### Building Docker Images

```bash
# Build all services
docker-compose build

# Stop all services
docker-compose down

# Scale a service
docker-compose up -d
```

### Service-to-Service Communication

Services communicate via:
- **HTTP/REST** - External client requests through gateway
- **gRPC** - High-performance internal communication (Auction ↔ Bidding)
- **RabbitMQ** - Asynchronous event-driven messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
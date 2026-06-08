# JobFinder

![GitHub repo size](https://img.shields.io/github/repo-size/per5ect/JobFinder)
![GitHub stars](https://img.shields.io/github/stars/per5ect/JobFinder?style=social)
![Java](https://img.shields.io/badge/Java-17-orange?logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.3-brightgreen?logo=springboot)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)

**JobFinder** is a full-stack job search platform that connects job seekers with companies. Candidates upload their resume, and the platform uses the **Gemini AI API** to parse and analyze it, then surfaces the most relevant vacancies. Companies can post job listings and review applicants. An admin panel provides full control over the platform.

---

## Documentation

| Document | Link |
|---|---|
| Software Requirements Specification (SRS) | [SRS JobFinder.pdf](SRS%20JobFinder.pdf) |
| Software Design Document (SDD) | [SDD Jobfinder.pdf](SDD%20Jobfinder.pdf) |
| Figma Design | [Open in Figma](https://www.figma.com/design/CLQlBV5p9wejuXqliZ6CZE/JobFinder?node-id=0-1&t=nKr3H12D26vQ6Lv6-1) |

---

## Features

### For Job Seekers
- Register, verify email, and build a profile
- Upload a PDF resume — parsed automatically with **Apache PDFBox**
- AI-powered resume analysis via **Gemini API** — extracts skills and experience
- Browse vacancies matched to the resume with a relevance score
- Search and filter vacancies by keyword, location, and technology stack
- Apply to vacancies with a cover letter
- Save favourite vacancies
- Track application statuses

### For Companies
- Register a company account with email verification
- Post, edit, and manage job vacancies
- Specify required technologies per vacancy
- Review candidates who applied and update application statuses
- Upload a company logo via **Cloudinary**

### For Admins
- Full platform administration panel
- Manage users, companies, vacancies, and technologies
- Moderate content

---

## Architecture

```
┌──────────────┐     HTTP/REST     ┌───────────────────┐     HTTPS      ┌──────────────────┐
│   Frontend   │ ◄───────────────► │     Backend       │ ─────────────► │  Cloudinary API  │
│  React + Vite│                   │  Spring Boot 3    │                │  (file storage)  │
│  Nginx :80   │                   │  Port :8081       │ ─────────────► ├──────────────────┤
└──────────────┘                   └────────┬──────────┘     HTTPS      │   Gemini API     │
                                            │ JPA                       │  (AI analysis)   │
                                   ┌────────▼──────────┐                └──────────────────┘
                                   │   PostgreSQL 16    │
                                   │   Port :5432       │
                                   └───────────────────┘
```

The three core services (Frontend, Backend, PostgreSQL) are orchestrated with **Docker Compose**. The backend additionally integrates two external cloud APIs: **Cloudinary** for storing resumes and company logos, and **Gemini AI** for resume parsing and vacancy matching.

---

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 6 | Build tool & dev server |
| Tailwind CSS 4 | Utility-first styling |
| Redux Toolkit | Global state management |
| React Router 7 | Client-side routing |
| Axios | HTTP client |
| Headless UI | Accessible UI components |
| react-dropzone | Drag-and-drop resume upload |
| jwt-decode | JWT token parsing on client |

### Backend

| Technology | Purpose |
|---|---|
| Spring Boot 3.4.3 | Application framework |
| Java 17 | Language |
| Spring Security + JWT | Authentication & authorization |
| Spring Data JPA + Hibernate | ORM & database access |
| PostgreSQL 16 | Relational database |
| Spring Mail | Email verification |
| Apache PDFBox | PDF resume text extraction |
| Gemini API | AI resume analysis & vacancy matching |
| Cloudinary | Cloud image/file storage |
| Lombok | Boilerplate reduction |

### Infrastructure

| Technology | Purpose |
|---|---|
| Docker & Docker Compose | Containerization & orchestration |
| Nginx | Frontend static file serving & reverse proxy |
| Maven | Backend build tool |

---

## Project Structure

```
JobFinder/
├── docker-compose.yml
├── Frontend/
│   └── JobFinderFrontend/        # React + Vite SPA
│       ├── src/
│       ├── Dockerfile
│       └── nginx.conf
└── Backend/
    └── JobFinderBackend/         # Spring Boot REST API
        ├── src/
        │   └── main/java/.../
        │       ├── config/       # Security, JWT filter, Cloudinary, Email, Seeder
        │       ├── controllers/  # REST controllers
        │       ├── services/     # Business logic
        │       ├── models/       # JPA entities
        │       ├── dto/          # Data transfer objects
        │       ├── repository/   # Spring Data repositories
        │       └── utils/        # GeminiClient, ResumeParser
        ├── Dockerfile
        └── pom.xml
```

### Backend Controllers

| Controller | Responsibility |
|---|---|
| `UserAuthenticationController` | User registration, login, email verification |
| `CompanyAuthenticationController` | Company registration, login, email verification |
| `UserController` | User profile, resume upload, applications, favourites |
| `CompanyController` | Vacancy CRUD, applicant management |
| `PublicController` | Public vacancy listing and search |
| `AdminController` | Admin-only platform management |

---

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) and Docker Compose installed
- Cloudinary account (for file storage)
- Gemini API key (for AI features)
- SMTP credentials (for email verification)

### 1. Clone the repository

```bash
git clone https://github.com/per5ect/JobFinder.git
cd JobFinder
```

### 2. Configure environment variables

Copy the example and fill in your values:

```bash
cp .env.example .env
```

`.env` variables:

```env
# PostgreSQL
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=

# Spring datasource
SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/<POSTGRES_DB>
SPRING_DATASOURCE_USERNAME=
SPRING_DATASOURCE_PASSWORD=

# JWT
JWT_SECRET_KEY=

# Email (SMTP)
SUPPORT_EMAIL=
SUPPORT_PASSWORD=

# Cloudinary
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=

# Gemini AI
GEMINI_API_KEY=
GEMINI_API_URL=
```

### 3. Run with Docker Compose

```bash
docker compose up --build
```

| Service | URL |
|---|---|
| Frontend | http://localhost |
| Backend API | http://localhost:8081 |
| PostgreSQL | localhost:5432 |

---

## Screenshots

<img width="1437" height="698" alt="Home page" src="https://github.com/user-attachments/assets/41714ff5-473b-429b-9ca3-08adb2006714" />
<img width="1430" height="685" alt="Vacancy listing" src="https://github.com/user-attachments/assets/1c867c67-3d4b-49e8-a0a6-91ced0df3e6b" />
<img width="1431" height="700" alt="Vacancy details" src="https://github.com/user-attachments/assets/7c88f066-2a6d-4615-a1ce-e0fef6210fba" />
<img width="1434" height="678" alt="Resume analysis" src="https://github.com/user-attachments/assets/9c1247a0-a0f6-45d2-94fa-fd6abda1bfcd" />
<img width="1162" height="695" alt="AI-matched vacancies" src="https://github.com/user-attachments/assets/49a7b69e-14ec-47e1-a2de-1bb0dda2f967" />
<img width="1436" height="698" alt="Admin panel" src="https://github.com/user-attachments/assets/d0c255bb-9134-49ba-88f5-c303426c5faa" />

---

## License

This project is open-source and available under the [MIT License](LICENSE).

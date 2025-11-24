# Next.js + NestJS AI Voice Assistant Monorepo

Welcome to the AI Voice Support & Assistant monorepo, powered by [Next.js](https://nextjs.org/) and [NestJS](https://nestjs.com/)!  
This repository provides a fullstack TypeScript solution for building intelligent voice-based applications, featuring robust API support and a seamless user experience.

---

## Project Overview

This monorepo brings together:

- **AI-powered voice assistant** capabilities
- Modern TypeScript technologies: Next.js (frontend) + NestJS (backend)
- Simple monorepo management with separate frontend and backend folders
- Pure **npm** workflow — no yarn

---

## Directory Structure

```
.
├── backend/    # NestJS backend API (AI, audio, etc.)
├── frontend/   # Next.js frontend app (UI, voice controls)
├── .gitignore
├── README.md
└── ...
```

- **`backend/`**: Source for the NestJS server, including endpoints for audio/voice processing, AI integration, and authentication.
- **`frontend/`**: The Next.js SPA, with UI for interacting with the AI voice assistant, microphone controls, chat history, and more.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or newer)
- [npm](https://www.npmjs.com/) (v7+ recommended)

### Install Dependencies

From the root folder, install dependencies for each app:

```bash
cd backend
npm install

cd ../frontend
npm install
```

### Development: Run Locally

**Backend (NestJS):**

```bash
cd backend
npm run start:dev
```

> Default: [http://localhost:3001](http://localhost:3001)

**Frontend (Next.js):**

```bash
cd frontend
npm run dev
```

> Default: [http://localhost:3000](http://localhost:3000)

---

## Key Features

- **Voice Recognition:** Capture and process user voice input directly in the browser.
- **AI Assistant:** Natural language processing and conversational capabilities via backend integration.
- **Real-time Communication:** Instant responses and feedback.
- **Modern UI:** Fast, interactive frontend built with Next.js and React.
- **Full TypeScript:** Reliable types throughout the stack.

---

## Scripts

| Directory | Command             | Description            |
| --------- | ------------------- | ---------------------- |
| backend   | `npm run start:dev` | Run NestJS dev server  |
| backend   | `npm run build`     | Build NestJS backend   |
| backend   | `npm test`          | Run backend tests      |
| frontend  | `npm run dev`       | Run Next.js dev server |
| frontend  | `npm run build`     | Build Next.js frontend |
| frontend  | `npm start`         | Start frontend in prod |
| frontend  | `npm test`          | Run frontend tests     |

---

## Environment Configuration

Create a `.env` file in both `backend/` and `frontend/` with the required variables for your setup.  
These may include API keys for AI/voice services, secret keys, and URLs. Check for sample `.env.example` files when available.

---

## Deployment

You may deploy frontend and backend separately to your preferred platforms.

- **Frontend:** Deploy with Vercel, Netlify, or any static/site host.
- **Backend:** Deploy with Heroku, AWS, Render, DigitalOcean, etc.

Both apps can be containerized for Docker-based or cloud-native deployments.

---

## Contributing

We welcome contributions!  
Open an issue or submit a pull request to help advance AI voice interaction for everyone.

---

## License

This project is [MIT licensed](LICENSE).

---

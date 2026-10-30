# ⚡ Modern Full-Stack MERN Portfolio

A high-performance, responsive personal portfolio built with the complete **MERN Stack** (**M**ongoDB Atlas, **E**xpress.js, **R**eact 19, **N**ode.js) and **Tailwind CSS**.

---

## 🌟 Key Features

- **Frontend (React 19 + Tailwind CSS + Lucide Icons + Vite):**
  - Modern hero section with typewriter title animations and social links.
  - Interactive Project Showcase with category filters (Full Stack, Frontend, Backend).
  - Categorized Technical Skills with animated proficiency meters.
  - Experience & Education timeline toggle.
  - Live Contact Form that sends data directly to the Express backend and saves to MongoDB Atlas.
  - Dark / Light mode toggle with persistent state in `localStorage`.
  - Real-time MongoDB connection status badge in the navbar.
  - Seamless fallback data mode so the UI works immediately even before connecting to the cloud database.

- **Backend (Node.js + Express.js + Mongoose):**
  - Clean modular architecture (Routes, Controllers, Models, Config).
  - RESTful API endpoints for Projects, Skills, Profile, and Contact inquiries.
  - Automatic fallback handler: if MongoDB URI isn't configured, the backend automatically serves built-in mock data so nothing breaks.
  - Database seed script (`npm run seed`) to populate MongoDB Atlas with 1 click.

---

## 📁 Project Architecture

```
Portfolio/
├── backend/
│   ├── config/
│   │   └── db.js               # Resilient MongoDB Atlas connection
│   ├── controllers/            # Profile, Projects, Skills, Contact handlers
│   ├── models/                 # Mongoose schemas (Project, Skill, Profile, ContactMessage)
│   ├── routes/                 # Express REST endpoints
│   ├── data/
│   │   ├── seedData.js         # Initial mock and seed data
│   │   └── seed.js             # Database seeder script
│   ├── server.js               # Express entrypoint
│   └── .env                    # Environment variables (PORT, MONGO_URI)
│
├── frontend/
│   ├── src/
│   │   ├── components/         # Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer
│   │   ├── context/            # ThemeContext (Dark / Light mode)
│   │   ├── services/           # API fetch client
│   │   ├── App.jsx             # Main portfolio layout
│   │   └── main.jsx
│   ├── vite.config.js          # Vite config with backend proxy
│   └── package.json
│
├── package.json                # Root package with unified dev runner
└── README.md
```

---

## 🚀 Quick Start (Running Locally)

### 1. Start Both Backend & Frontend Concurrently

From the root directory, simply run:

```bash
npm run dev
```

- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend API:** [http://localhost:5000](http://localhost:5000)
- **Health Check:** [http://localhost:5000/api/health](http://localhost:5000/api/health)

*(You can also run them separately with `npm run dev:backend` and `npm run dev:frontend`)*

---

## ☁️ Connecting MongoDB Atlas (Free Cloud Database)

To connect your own MongoDB Atlas cluster and store real contact form messages:

1. Sign up for free at [cloud.mongodb.com](https://cloud.mongodb.com).
2. Create a free **M0 Shared Cluster**.
3. Under **Database Access**, create a user with username and password.
4. Under **Network Access**, allow access from anywhere (`0.0.0.0/0`).
5. Click **Connect** → **Drivers** (Node.js) and copy your connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```
6. Open `backend/.env` and replace `MONGO_URI` with your connection string:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://yourUser:yourPassword@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   NODE_ENV=development
   ```
7. Seed your database with the default projects, skills, and profile:
   ```bash
   npm run seed
   ```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Health & MongoDB connection check |
| `GET` | `/api/profile` | Get portfolio bio, statistics, and social links |
| `PUT` | `/api/profile` | Update profile information |
| `GET` | `/api/projects` | Get all projects (query by `?category=` or `?featured=true`) |
| `POST` | `/api/projects` | Add a new project |
| `PUT` | `/api/projects/:id` | Update an existing project |
| `DELETE` | `/api/projects/:id` | Remove a project |
| `GET` | `/api/skills` | Get all technical skills |
| `POST` | `/api/skills` | Add a new skill |
| `POST` | `/api/contact` | Submit a message from the contact form |
| `GET` | `/api/contact` | View all submitted contact messages |

---

## 🎨 Customizing Your Portfolio

- **Your Name & Bio:** Edit [backend/data/seedData.js](file:///c:/Users/Admin/Music/Portfolio/backend/data/seedData.js) or update via the API.
- **Your Projects:** Add or modify project entries in [backend/data/seedData.js](file:///c:/Users/Admin/Music/Portfolio/backend/data/seedData.js).
- **Your Skills:** Customize tech stack proficiency and categories in [backend/data/seedData.js](file:///c:/Users/Admin/Music/Portfolio/backend/data/seedData.js).
- **Styling & Theme:** Configured using Tailwind CSS in [frontend/src/index.css](file:///c:/Users/Admin/Music/Portfolio/frontend/src/index.css).

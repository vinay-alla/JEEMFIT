# JEEMFIT
stay fit and fine.
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:22c55e,100:16a34a&height=200&section=header&text=JEEMFIT&fontSize=80&fontColor=ffffff&fontAlignY=38&desc=Precision%20Fitness%20Management%20%26%20Performance%20Tracking&descAlignY=60&descSize=18&animation=fadeIn" width="100%"/>

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active%20Development-22c55e?style=for-the-badge&labelColor=0a0a0a" />
  <img src="https://img.shields.io/badge/Version-1.0.0-16a34a?style=for-the-badge&labelColor=0a0a0a" />
  <img src="https://img.shields.io/badge/License-MIT-a855f7?style=for-the-badge&labelColor=0a0a0a" />
  <img src="https://img.shields.io/badge/UI-Neo--Dark%20Theme-38bdf8?style=for-the-badge&labelColor=0a0a0a" />
  <img src="https://img.shields.io/badge/PRs-Welcome-f59e0b?style=for-the-badge&labelColor=0a0a0a" />
</p>

<br/>

> **JEEMFIT** is a high-performance, dark-themed fitness ecosystem designed for both elite athletes and gym owners.  
> It streamlines the workout experience while providing deep analytical insights into daily health metrics.

<br/>

[![Explore Features](#-key-features)](##-key-features) &nbsp;•&nbsp; [View Screenshots](#-screenshots) &nbsp;•&nbsp; [Quick Start](#-getting-started) &nbsp;•&nbsp; [Tech Stack](#-tech-stack) &nbsp;•&nbsp; [Report Bug](https://github.com/your-username/jeemfit/issues)

</div>

---

## 📸 Screenshots

<p align="center">
  <i>⚡ Neo-Dark aesthetic with high-contrast neon accents — built for performance, day and night.</i>
</p>

<br/>

### 🔐 Authentication — Secure Entry Point

<div align="center">
  <img width="1920" height="931" alt="Image" src="https://github.com/user-attachments/assets/6000cf36-f1f5-42fa-ab6f-8f3dcb4f1f77" />

  <br/><br/>
  <p><b>Minimalist login interface</b> with Google OAuth 2.0 integration, JWT sessions, and role-based access control.<br/>
  Split-layout design: cinematic gym atmosphere left, clean sign-in form right.</p>
</div>

<br/>

### 📊 Performance Dashboard — Command Center

<div align="center">
  <img width="1920" height="857" alt="Image" src="https://github.com/user-attachments/assets/7683b7a0-987e-46cd-b51a-ec256f10a87f" />
  <br/><br/>
  <p><b>Real-time tracking</b> of calories burned, hydration, sleep cycles, and live workout checklists.<br/>
  Daily Progress rings for Calories · Protein · Water — all in one unified view.</p>
</div>

---

## 🚀 Key Features

<table>
  <tr>
    <td width="50%" valign="top">

### 👤 Athlete Experience

| Feature | Detail |
|:--------|:-------|
| 🔥 **Calorie Tracker** | Real-time burn monitoring with trend % |
| 👟 **Step Counter** | Daily step goals with 8%+ growth tracking |
| 💧 **Hydration Log** | 2.4L daily target with visual progress |
| 🌙 **Sleep Tracker** | Hours logged with quality analysis |
| 🏋️ **Workout Logger** | Sets · Reps · Live completion checklist |
| 🥗 **Nutrition Rings** | Macro-nutrient goals: Calories · Protein · Water |
| 📅 **Schedule View** | Class bookings and personal training slots |

</td>
<td width="50%" valign="top">

### 🏢 Gym Management

| Feature | Detail |
|:--------|:-------|
| 🏢 **Admin Panel** | Full operational control hub |
| 👥 **Member Manager** | Profiles, subscriptions, attendance |
| 🧑‍🏫 **Trainer Portal** | Staff management and scheduling |
| 💳 **Payment Tracking** | Revenue, dues, billing history |
| 📦 **Inventory Control** | Equipment health and availability |
| 📈 **Analytics Board** | Growth metrics and engagement data |
| 📲 **Attendance System** | QR-based or manual member check-in |

</td>
  </tr>
</table>

---

## 🛠 Tech Stack

<div align="center">

| Layer | Technology |
| :---: | :---: |
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) ![Recharts](https://img.shields.io/badge/Recharts-22c55e?style=flat-square&logo=chart.js&logoColor=white) ![Lucide](https://img.shields.io/badge/Lucide_Icons-a855f7?style=flat-square) |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) |
| **Database** | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white) |
| **Auth** | ![Google OAuth](https://img.shields.io/badge/Google_OAuth_2.0-4285F4?style=flat-square&logo=google&logoColor=white) |
| **Dev Tools** | ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white) |

</div>

---

## 📁 Project Structure

```
jeemfit/
├── 📁 client/                  # React frontend
│   ├── 📁 src/
│   │   ├── 📁 components/      # Reusable UI components
│   │   ├── 📁 pages/           # Route-level pages
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Workouts.jsx
│   │   │   ├── Nutrition.jsx
│   │   │   └── Admin/
│   │   ├── 📁 hooks/           # Custom React hooks
│   │   └── 📁 utils/           # Helper functions
├── 📁 server/                  # Node.js + Express backend
│   ├── 📁 routes/              # API route handlers
│   ├── 📁 controllers/         # Business logic
│   ├── 📁 models/              # DB models (Postgres/Mongo)
│   └── 📁 middleware/          # Auth, validation
├── 📁 assets/                  # Screenshots & media
│   ├── login.png
│   └── dashboard.png
├── .env.example
├── package.json
└── README.md
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** v18+
- **PostgreSQL** or **MongoDB**
- A **Google Cloud** project with OAuth 2.0 credentials
- **npm** or **yarn**

### ⚡ Quick Start

**1. Clone the repository**
```bash
git clone https://github.com/your-username/jeemfit.git
cd jeemfit
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure environment variables**
```bash
cp .env.example .env
```

```env
# Auth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_super_secret_key

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/jeemfit
MONGODB_URI=mongodb://localhost:27017/jeemfit   # optional

# Server
PORT=5000
CLIENT_URL=http://localhost:3000
```

**4. Run database migrations**
```bash
npm run db:migrate
```

**5. Start the development server**
```bash
npm run dev
```

> 🟢 App running at **http://localhost:3000**

---

## 🗺 Roadmap

- [x] Authentication (Google OAuth + Email)
- [x] Member Dashboard with live metrics
- [x] Workout logger with completion tracking
- [x] Nutrition progress rings
- [x] Admin panel with member management
- [ ] 📱 Mobile app (React Native)
- [ ] 🤖 AI-based workout recommendations
- [ ] 📊 Advanced analytics with export (PDF/CSV)
- [ ] 🏆 Leaderboards and social challenges
- [ ] 🔔 Push notifications for goals

---

## 🤝 Contributing

Contributions are what make open source amazing. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:22c55e,100:16a34a&height=120&section=footer&animation=fadeIn" width="100%"/>

**Made with 💪 by the JEEMFIT Team**

⭐ Star this repo if JEEMFIT helped you — it means a lot!

[![GitHub Stars](https://img.shields.io/github/stars/your-username/jeemfit?style=social)](https://github.com/your-username/jeemfit)
[![GitHub Forks](https://img.shields.io/github/forks/your-username/jeemfit?style=social)](https://github.com/your-username/jeemfit/fork)

</div>

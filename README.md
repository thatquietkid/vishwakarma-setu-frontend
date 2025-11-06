# 🏗️ Vishwakarma Setu - B2B Machinery Marketplace

This is the official **frontend repository** for **Vishwakarma Setu**, a single-page application (SPA) serving as the trusted **B2B marketplace for verified, used industrial machinery**.  
It provides a secure and reliable platform for **Buyers**, **Sellers**, and **Partners**.

---

## ✨ Features

- **Multi-Page Navigation:** Seamless routing using React Router between Landing, Login, and Sign-Up pages.  
- **Component-Based Architecture:** Organized, reusable UI components such as Navbar and Footer.  
- **Responsive Design:** Fully responsive layout built with Tailwind CSS for desktop, tablet, and mobile.  
- **Modern Tooling:** Powered by Vite for fast development and Hot Module Replacement (HMR).  

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Framework** | React |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **Routing** | React Router |
| **Forms** | @tailwindcss/forms |

---

## 📁 Project Structure

```

src/
├── App.jsx             # Main app component, handles routing
├── index.css           # Global styles & Tailwind directives
├── main.jsx            # Main entry point, sets up React Router
│
├── components/
│   ├── layout/         # Reusable components (Navbar.jsx, Footer.jsx)
│   └── landing/        # Components used only on the landing page
│
└── pages/
├── LandingPage.jsx   # The main homepage (/)
├── LoginPage.jsx     # The login page (/login)
└── SignUpPage.jsx    # The registration page (/signup)

````

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

- Node.js **v18 or newer**  
- npm (comes with Node.js)

---

### Installation

**1. Clone the repository:**

```bash
git clone https://github.com/thatquietkid/vishwakarma-setu.git
```

**2. Navigate to the project directory:**

```bash
cd vishwakarma-setu
```

**3. Install dependencies:**

```bash
npm install
```

---

## 🧩 Available Scripts

### Start the development server

Runs the app in development mode with HMR.
Open [http://localhost:5173](http://localhost:5173) in your browser.

```bash
npm run dev
```

### Build for production

Bundles and optimizes the app for production.
Output files are generated in the `dist/` folder.

```bash
npm run build
```

### Lint the code

Checks for linting errors and automatically fixes them when possible.

```bash
npm run lint
```

---

## 📜 License

This project is licensed under the [**MIT License**](LICENSE) — feel free to use and modify it as needed.
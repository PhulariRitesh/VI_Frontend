# Product Listing & Filtering App

This project is a React-based frontend application built.

## 🚀 Live Demo

🔗 Deployed URL: [http://viintern-aih856ar3-ritesh-prakashrao-phularis-projects.vercel.app/](https://viintern-4646tf61x-ritesh-prakashrao-phularis-projects.vercel.app/)

---

## 📌 Features

- Fetches product data from a public dummy API
- Uses mock API behavior with `Promise` and `setTimeout`
- Displays products in a tabular format
- Inline editable product title
- Ability to delete product rows
- Column-wise filters:
  - Brand
  - Category
  - Price range
  - Rating range
- Filters dynamically update based on other selected filters
- Reset filters option
- Loading state and basic error handling
- Displays “No results found” when filters return empty data

---

## 🛠️ Tech Stack

- **React** (Functional Components & Hooks)
- **TypeScript**
- **Vite**
- **CSS** (basic styling)

No third-party table or filter libraries were used, as required by the assignment.

---

## 📂 Project Structure
```
src/
├─ App.tsx 
├─ main.tsx
└─ App.css
```

The main application state is managed in `App.tsx`, while UI responsibilities are divided into smaller, focused components.

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v18 or v20 recommended)
- npm

### Run Locally

```bash
npm install
npm run dev

Open http://localhost:5173 in your browser.

🏗️ Build for Production
npm run build


This command generates a dist/ folder containing the production build.

🌐 Deployment

The application is deployed on Vercel using GitHub integration.

Framework: Vite

Build Command: npm run build

Output Directory: dist

Node.js Version: 20.x

Environment Variables: Not required

🧠 Development Approach

Began with a single-file implementation to ensure functionality

Refactored into multiple components once logic grew

Maintained a simple state management approach using React hooks

Focused on readability and clarity over complex abstractions

Followed the assignment constraints closely

⚠️ Challenges Faced

Implementing dynamic filters dependent on other active filters

Managing inline editing without excessive updates

Resolving build and deployment issues caused by experimental tooling

These were resolved by simplifying logic, isolating responsibilities, and using stable configurations.

📌 Notes

No AI-generated code was used in this project

All logic was implemented manually in line with assignment guidelines

The project can be extended further with pagination or backend integration



# Product Listing & Filtering App

This project is a React-based frontend application built as part of an intern assignment.  
The objective was to demonstrate API handling, state management, table rendering, and dynamic filtering without using third-party table libraries.

---

## 🚀 Live Demo

🔗 Deployed URL:  
https://viintern-4646tf61x-ritesh-prakashrao-phularis-projects.vercel.app/

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
- Displays **“No results found”** when filters return empty data

---

## 🛠️ Tech Stack

- **React** (Functional Components & Hooks)
- **TypeScript**
- **Vite**
- **CSS** (basic styling)

No third-party table or filter libraries were used, as required by the assignment.



## 📂 Project Structure
```
src/
├─ App.tsx // Main state & orchestration
├─ main.tsx // Application entry point
└─ App.css // Basic styling
```



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
bash
Copy code
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

Refactored gradually as logic grew

Used React hooks for simple and predictable state management

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

👤 Author
Ritesh Phulari

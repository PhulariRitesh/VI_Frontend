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
src/
├─ api/
│ └─ products.ts // Mock API logic
├─ components/
│ ├─ Filters.tsx // Filter dropdowns
│ ├─ ProductTable.tsx // Table rendering
│ └─ EditableTitle.tsx // Inline title editing
├─ App.tsx // Main state & orchestration
├─ main.tsx
└─ App.css

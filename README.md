# Product Listing & Filtering App

This project is a React-based frontend application built as part of an intern assignment.  
---

## Live Demo

🔗 Deployed URL:  
https://viintern-4646tf61x-ritesh-prakashrao-phularis-projects.vercel.app/

---

##  Features

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

##  Tech Stack

- **React** (Functional Components & Hooks)
- **TypeScript**
- **Vite**
- **CSS** (basic styling)

No third-party table or filter libraries were used, as required by the assignment.



## Project Structure
```
src/
├─ App.tsx // Main state & orchestration
├─ main.tsx // Application entry point
└─ App.css // Basic styling
```



##  Setup Instructions

### Prerequisites
- Node.js (v18 or v20 recommended)
- npm

### Run Locally

```bash
npm install
npm run dev
Open http://localhost:5173 in your browser.


```
```
 Deployment
The application is deployed on Vercel using GitHub integration.

Framework: Vite

Build Command: npm run build

Output Directory: dist

Node.js Version: 20.x

Environment Variables: Not required

```


👤 Author
Ritesh Phulari

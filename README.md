# Project Management Login Page

A beautiful, pixel-perfect, fully responsive login page built with **React + Vite + Tailwind CSS**.

![Desktop Preview](https://via.placeholder.com/800x500?text=Desktop+Split+View)
![Mobile Preview](https://via.placeholder.com/400x700?text=Mobile+View)

## ✨ Features

- **Pixel-accurate UI** matching the provided design references
- **Seamless responsiveness** — perfect desktop split view & mobile glassmorphic card
- Password visibility toggle ("Show"/"Hide")
- Social login buttons (Google & Facebook) with demo functionality
- Modern glassmorphism effect on mobile
- Clean, maintainable, and production-ready code

---

## 🚀 Why This Project?

This project was created to deliver a **high-fidelity, production-grade login interface** that perfectly replicates the given design for both desktop and mobile views. It demonstrates modern React practices, excellent responsive design, and attention to UI/UX details.

### Why This Structure?

I chose this folder structure for the following reasons:

| Folder              | Purpose |
|---------------------|--------|
| `src/components/`   | Reusable UI components (`InputField`, `SocialButtons`) |
| `src/pages/`        | Page-level components (keeps `Login.jsx` focused) |
| `src/styles/`       | Custom CSS files (if Tailwind is not enough) |
| `src/App.jsx`       | Root component (keeps it minimal) |
| `src/main.jsx`      | Entry point |

**Benefits of this structure:**
- **Scalability** — Easy to add more pages/components later
- **Separation of Concerns** — Form logic, inputs, and layout are cleanly separated
- **Maintainability** — Senior-level organization followed in real-world projects
- **Reusability** — `InputField` can be used across the entire application

---

## 🎯 What I Did to Achieve Perfect Responsiveness

- Used **mobile-first** approach with Tailwind CSS
- Implemented `lg` breakpoint (`1024px`) for desktop split layout
- Used `flex-col lg:flex-row` for smooth layout transformation
- Added negative margin (`-mt-24`) on mobile for elegant glass card overlap
- Used different hero image rendering logic for mobile and desktop
- Ensured proper `min-h-screen`, `100vh`, and flexible layouts
- Tested thoroughly across screen sizes for zero layout breaks

---

## 🛠 Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- Google Fonts (Inter)

---

## 📁 Project Structure

```bash
src/
 ├── components/
 │   ├── InputField.jsx          # Reusable input with show/hide password
 │   └── SocialButtons.jsx       # Google & Facebook buttons
 ├── pages/
 │   └── Login.jsx               # Main login page with layout logic
 ├── styles/
 │   └── login.css               # Additional custom styles
 ├── App.jsx
 └── main.jsx

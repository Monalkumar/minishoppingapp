# 🛒 Mini E-Commerce App

A mini e-commerce web application built using React, Fake Store API, and Context API.  
This project demonstrates product listing, product detail view, cart management, and state persistence using localStorage.

---

## 🚀 Features

- Product listing from Fake Store API
- Product detail page
- Add to cart functionality
- Cart drawer with quantity update & remove item
- Cart badge in navbar
- State persistence using localStorage
- Responsive UI (mobile + desktop)

---

## 🧠 Tech Stack

- React (Hooks)
- Context API (State Management)
- React Router
- SCSS Modules
- Vite
- Fake Store API

---

## 📦 Installation

```bash
npm install
npm run dev



## Architectural Decision

One key architectural decision I made in this project was choosing **React Context API with localStorage** for state management instead of using Redux.

I considered two approaches:

### 1. Redux (or Redux Toolkit)
Redux would provide a more structured and scalable state management system with features like middleware, dev tools, and strict state flow. It is commonly used in large-scale applications where state complexity is high.

### 2. Context API + localStorage (Chosen Approach)
Since this project is a mini e-commerce application with a relatively small and focused state (mainly cart management), I chose Context API combined with localStorage. This approach allowed me to keep the implementation lightweight, avoid unnecessary boilerplate, and maintain faster development speed while still ensuring global state access across components.

To ensure persistence, I integrated localStorage so that cart data survives page refresh. The cart state is initialized from localStorage on app load and updated automatically whenever changes occur. This ensures a consistent user experience without requiring backend storage.

This decision helped maintain simplicity while still meeting all functional requirements like cart updates, quantity management, and UI synchronization across components.

---

## What I would improve with more time

If I had more time, I would focus on improving code structure, performance, and user experience.

First, I would add proper loading skeletons and error boundaries instead of simple text-based loading states. This would improve perceived performance and make the UI more production-like.

Second, I would refactor the component structure further by extracting more reusable UI components such as ProductCard, QuantitySelector, and CartItem for better maintainability.

Third, I would improve accessibility by adding proper ARIA labels, keyboard navigation support, and better focus handling in the cart drawer.

Finally, I would add unit tests for critical cart logic (add, remove, quantity updates) and improve animations for smoother transitions in the cart drawer and product interactions.

Overall, the focus of this project was to keep the architecture simple, functional, and scalable enough for a small production-like application while leaving room for future improvements.

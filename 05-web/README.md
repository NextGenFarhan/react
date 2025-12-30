# React Router Layout Project
This is a simple React application built using **React Router DOM** and **Tailwind CSS**.  
The project demonstrates how to use a **common layout (Header + Footer)** with multiple pages using `<Outlet />`.

---
## Features
- React Router DOM based routing
- Common Layout with Header & Footer
- Active navigation using `NavLink`
- Multiple pages:
  - Home
  - About
  - Contact
  - Github
  - Dynamic User Route
- Responsive UI using Tailwind CSS
- Reusable components

---
## Tech Stack
- React
- React Router DOM
- Tailwind CSS
- Vite

---
## Routing Concept
- `Layout.jsx` contains:
  - Header
  - `<Outlet />`
  - Footer
- Pages are rendered inside `<Outlet />`
- `NavLink` is used for active link styling
- Dynamic routing example =  /user/:id


---
## Pages Overview

### Home
- Hero section
- Images
- Download button
### About
- Image with content section
- Responsive layout
### Contact
- Contact details
- Simple form UI
### User
- Dynamic route using `useParams()`


---
## Important Notes
- Avoid using `<a>` tag for navigation as it reload the page
    = Use `Link` from `react-router-dom`
- Use `NavLink` to get access to `isActive`
- `<Outlet />` helps render child routes inside layout

---
## 👨‍💻 Author
**Farhan Khan**  
- GitHub: https://github.com/NextGenFarhan

---

## License
This project is open source and available under the MIT License.

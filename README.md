# **Dev Frontend – React Application**

A production-ready React SPA engineered to integrate seamlessly with the Dev Backend microservice. This application provides CRUD workflows for students and user authentication, leveraging modern React best practices, responsive UI patterns, token-based client-state management, and fully cloud-ready deployment architecture.

---

## **1. Technical Overview**

This system is built for cloud deployment and integrates directly with the backend API at:

```
https://dev-backend-4oow.onrender.com
```

The system is capable of running both locally and in production without configuration changes due to the environment-based API routing model. The architecture focuses on maintainability, modularity, and scalability, making it suitable for professional-grade application development.

---

## **2. Technology Stack**

| Component  | Technology                   |
| ---------- | ---------------------------- |
| Framework  | React                        |
| Build Tool | Vite                         |
| Routing    | React Router                 |
| API Calls  | Axios                        |
| Hosting    | Vercel                       |
| State      | Local Storage + Custom Hooks |

The app delivers a lightweight, fast, and scalable front-end runtime environment optimized for cloud usage.

---

## **3. Core Features**

* Authentication workflow with login and registration
* Token storage, session persistence, and logout mechanics
* Dynamic CRUD interface for student management
* REST integration using centralized Axios client
* Fully reusable UI components and pages

---

## **4. System Requirements**

| Requirement     | Version     |
| --------------- | ----------- |
| Node.js         | 18+         |
| Package Manager | npm or yarn |

---

## **5. Local Execution**

### **Clone the repository**

```bash
git clone <repo-url>
cd dev-frontend
```

### **Install dependencies**

```bash
npm install
```

### **Run locally**

```bash
npm run dev
```

Application will be available at:

```
http://localhost:5173
```

---

## **6. Environment Variables**

The app uses environment variables for API routing:

### In local:

```
VITE_API_BASE_URL=http://localhost:8080
```

### In production:

```
VITE_API_BASE_URL=https://dev-backend-4oow.onrender.com
```

These must be configured in Vercel dashboard for production.

---

## **7. Build for Production**

Run:

```bash
npm run build
```

Generated build files reside in:

```
/dist
```

These can be deployed on any CDN, cloud provider, or static hosting infrastructure.

---

## **8. Vercel Deployment**

This app is validated for Vercel deployment:

### Steps:

1. Commit your code to GitHub
2. Import repo into Vercel
3. Set environment variable:

```
VITE_API_BASE_URL=https://dev-backend-4oow.onrender.com
```

4. Deploy

No further configuration required.

---

## **9. Folder Structure**

```
src/
  api/
    axiosClient.js
  components/
    Navbar.jsx
    StudentCard.jsx
    StudentModal.jsx
  hooks/
    useAuth.js
  pages/
    Login.jsx
    Register.jsx
    Dashboard.jsx
  App.jsx
  index.css
  main.js
```

The architecture follows clean-separation principles and enables component reuse and independent testing.

---

## **10. Integration with Backend**

REST APIs are accessed using the centralized Axios client:

```js
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});
```

Endpoints consumed:

* `/api/auth/login`
* `/api/auth/register`
* `/api/students`

This ensures a clean interface and decouples networking from the component layer.

---

## **11. Capabilities and UX Flow**

### On login:

* Token is stored in LocalStorage
* Navbar updates dynamically
* User is routed to dashboard

### CRUD operations:

* Add/Edit/Delete students
* State refreshes automatically

### UI:

* Fully responsive and clean design
* No dependencies on external UI frameworks

---

## **12. Production Architecture Considerations**

The system is engineered to scale into:

* JWT authentication integration
* Role-based access control
* Pagination and filtering for students
* Mobile-first UI patterns
* Error boundary and retries

Component-level modularity ensures clean future extensibility.

---


This README positions your frontend as professionally structured, cloud-ready, and deployable using industry-standard workflows.

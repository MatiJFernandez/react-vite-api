# 🦄 Unicorns & Products App

Este proyecto es una SPA (Single Page Application) construida con **React + Vite**, que permite gestionar un CRUD de unicornios y otro de productos. Se aplicaron buenas prácticas de modularización, manejo de formularios, rutas y contexto.

---

## 🚀 Instalación y ejecución

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/MatiJFernandez/react-vite-api.git
   cd nombre-del-repo
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar el proyecto:**

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**

   Visitar [http://localhost:5173](http://localhost:5173) o el link que muestre la consola.

---

## 📁 Estructura del proyecto

```
src/
│
├── context/              // Contexto global de unicornios
│   └── UnicornContext.jsx
│
├── unicorns/             // Módulo de unicornios (usa contexto)
│   ├── UnicornsView.jsx
│   ├── UnicornForm.jsx
│   └── index.jsx
│
├── products/             // Módulo de productos (independiente)
│   ├── ProductsView.jsx
│   ├── ProductForm.jsx
│   ├── productsData.js
│   └── index.jsx
│
├── App.jsx               // Ruteo principal
└── main.jsx              // Punto de entrada
```

---

## ✅ Tecnologías usadas

- **React + Vite**
- **React Router DOM**
- **Context API**
- **Formik + Yup** (para formularios con validaciones)
- **PrimeReact** (estilos)
- **localStorage** (persistencia simple)
- **Toasts y animaciones** (bonus)

---

## 📌 Notas

- El CRUD de unicornios usa Context para manejar el estado global.
- El CRUD de productos es completamente independiente (usa useState).
- Las rutas están organizadas por módulos: `/unicornios` y `/productos`.

---

# 🦄 Unicorns & Products App

Aplicación web (SPA) construida con **React + Vite** para gestionar dos CRUDs: uno de unicornios y otro de productos. El proyecto está modularizado, utiliza buenas prácticas de React y es ideal para aprender sobre manejo de estado, rutas, formularios y consumo de APIs.

---

## 🚀 ¿Cómo ejecutar el proyecto?

### 1. Clona el repositorio

```bash
git clone https://github.com/MatiJFernandez/react-vite-api.git
cd consumirAPI
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Configura la API de unicornios

El CRUD de unicornios utiliza la API gratuita de [crudcrud.com](https://crudcrud.com/).  
**IMPORTANTE:** El token de la API expira cada 24 horas.  
Si ves errores de red o CORS, ve a [crudcrud.com](https://crudcrud.com/) y copia un nuevo token.  
Luego, reemplázalo en el archivo:

```
src/api/api.js

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/TU_NUEVO_TOKEN_AQUI",
});
```

### 4. Ejecuta la app en modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 📁 Estructura del proyecto

```
src/
│
├── context/              // Contexto global de unicornios
│   └── UnicornContext.jsx
│
├── unicorns/             // CRUD de unicornios (usa API y Context)
│   ├── UnicornsView.jsx
│   ├── UnicornForm.jsx
│   └── index.jsx
│
├── products/             // CRUD de productos (usa localStorage)
│   ├── ProductsView.jsx
│   ├── ProductForm.jsx
│   └── index.jsx
│
├── components/           // Componentes reutilizables (BaseListView, BaseForm, Navbar)
├── App.jsx               // Ruteo principal
└── main.jsx              // Punto de entrada
```

---

## ✅ Tecnologías y librerías principales

- **React + Vite** (estructura y rendimiento)
- **React Router DOM** (ruteo)
- **Context API** (estado global de unicornios)
- **Formik + Yup** (formularios y validaciones)
- **PrimeReact** y **TailwindCSS** (estilos)
- **localStorage** (persistencia de productos)
- **Axios** (peticiones HTTP)
- **jsPDF** (exportar unicornios a PDF)
- **React Toastify** (notificaciones)

---

## 📝 Notas importantes

- El CRUD de unicornios usa una API REST (crudcrud.com) y requiere token válido.
- El CRUD de productos es local, usando localStorage.
- Puedes crear, editar, eliminar y listar tanto unicornios como productos.
- El código está modularizado y es fácil de extender.
- Si tienes problemas con la API, revisa el token y los mensajes de error en la consola.

---

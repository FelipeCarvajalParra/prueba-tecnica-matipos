# Frontend – Prueba Técnica Matipos

Este proyecto corresponde al **frontend** de la Prueba Técnica Matipos.  
Es una aplicación web desarrollada con **React** y **Tailwind CSS**, que consume una API REST construida en **ASP.NET Core**.

## 🧩 Tecnologías utilizadas

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- Fetch API

## 📁 Estructura del proyecto

```
frontend
├── public
├── src
│   ├── components
│   │   ├── Documentation.jsx
│   │   ├── Form.jsx
│   │   └── Table.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## ⚙️ Requisitos previos

- Node.js (v18 o superior)
- npm 
- Backend en ejecución

## ▶️ Ejecución del proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Levantar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible por defecto en:

```
http://localhost:5173
```

## 🔌 Configuración de la API

El frontend se comunica con el backend mediante la siguiente URL base:

```
http://localhost:5261/api/person
```

Esta configuración se encuentra definida directamente en el archivo `App.jsx`.

## 🧪 Funcionalidades principales

- Listado de personas
- Registro de nuevas personas
- Edición de personas existentes
- Eliminación de personas
- Validaciones básicas de formulario
- Manejo de estados de carga y errores

## 🎨 Interfaz

La interfaz está construida con **Tailwind CSS**, manteniendo un diseño limpio, responsivo y enfocado en la usabilidad.

## 📌 Notas

- El frontend depende completamente de que el backend esté activo.
- No se utiliza estado global; el manejo de estado se realiza con hooks de React (`useState`, `useEffect`).

---

Proyecto desarrollado como parte de la **Prueba Técnica Matipos**.
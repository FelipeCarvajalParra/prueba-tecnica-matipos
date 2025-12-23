# 🧪 Prueba Técnica – Matipos

Este repositorio contiene el desarrollo de una **aplicación web full stack** realizada como prueba técnica para **Matipos**.  
La solución implementa un **CRUD de personas**, separando claramente el frontend y el backend, siguiendo buenas prácticas de arquitectura, validación y organización del código.

---

## 📁 Estructura del proyecto

```
prueba-tecnica-matipos
├── backend      # API REST desarrollada en ASP.NET Core (C#)
└── frontend     # Aplicación web desarrollada en React + TailwindCSS
```

---

## 🛠 Tecnologías utilizadas

### Backend
- ASP.NET Core
- C#
- Arquitectura en capas (Controllers, Services, Repositories)
- FluentValidation
- API REST

### Frontend
- React
- Vite
- TailwindCSS
- JavaScript (ES6+)
- Fetch API

---

## ⚙️ Requisitos previos

Antes de ejecutar el proyecto asegúrate de tener instalado:

- .NET SDK 8 o superior
- Node.js 18 o superior
- npm

---

## 🚀 Ejecución del proyecto

### Backend

```bash
cd backend
dotnet restore
dotnet run
```

La API quedará disponible por defecto en:

```
http://localhost:5261
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

La aplicación web estará disponible en:

```
http://localhost:5173
```

---

## 🔗 Comunicación Frontend – Backend

El frontend consume la API REST del backend mediante peticiones HTTP usando `fetch`.  
La URL base de la API está configurada directamente en el frontend:

```
http://localhost:5261/api/person
```

---

## 📄 Documentación adicional

- El **backend** cuenta con su propio README con detalles de arquitectura y endpoints.
- El **frontend** incluye un README con instrucciones específicas de instalación y ejecución.

---

## 👤 Autor

**Felipe Carvajal Parra**  
Desarrollador de Software Full Stack  

- GitHub: https://github.com/FelipeCarvajalParra
- LinkedIn: https://www.linkedin.com/in/felipe-carvajal-parra/

---

## 📌 Notas finales

Este proyecto fue desarrollado con enfoque en:
- claridad del código
- separación de responsabilidades
- validaciones de negocio
- experiencia de usuario básica pero limpia

Forma parte de una evaluación técnica y no representa un producto final en producción.
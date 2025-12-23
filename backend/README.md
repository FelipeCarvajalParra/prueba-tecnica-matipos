# 📦 Backend — Prueba Técnica Matipos

Backend correspondiente a la **prueba técnica de Matipos**, desarrollado como una **API REST** en **ASP.NET Core (C#)** para la gestión de personas.

El proyecto implementa un CRUD completo y sigue una arquitectura organizada por capas, facilitando el mantenimiento y la escalabilidad.

---

## 🚀 Tecnologías utilizadas

- ASP.NET Core  
- .NET 10  
- C#  
- FluentValidation  
- API REST  

---

## 📂 Estructura del proyecto

```
backend
├── Controllers
│   └── PersonController.cs
├── Models
│   └── Person.cs
├── Repositories
│   └── IPersonRepository.cs
├── Services
│   └── PersonService.cs
├── Validators
│   └── PersonValidator.cs
├── Program.cs
├── appsettings.json
└── appsettings.Development.json
```

---

## 🧠 Modelo de datos

```
Person
- Id
- Name
- LastName
- Email
- Document
- Age
```

---

## 🌐 Endpoints disponibles

Base URL local:

```
http://localhost:5261/api/person
```

- GET    `/api/person`
- GET    `/api/person/{id}`
- GET    `/api/person/search`
- POST   `/api/person`
- PUT    `/api/person`
- DELETE `/api/person/{id}`

---

## ▶️ Ejecución del proyecto

### Requisitos

- .NET SDK 10 o superior

### Pasos

Desde la carpeta `backend`:

```bash
dotnet restore
dotnet run
```

La API quedará disponible en:

```
http://localhost:5261
```

---

## 🧪 Pruebas

En la raíz del proyecto se incluye el archivo `Person_API.postman_collection.json`, el cual puede importarse en Postman para facilitar la ejecución y prueba de los endpoints disponibles en la API.

---

## 📌 Observaciones

- Backend preparado para ser consumido por un frontend en React.
- Validaciones implementadas con FluentValidation.
- Arquitectura clara y orientada a buenas prácticas.
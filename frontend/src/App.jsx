import { useEffect, useState } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import Documentation from "./components/Documentation";

const BASE_URL = "http://localhost:5261/api/person";

export default function App() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPerson, setEditingPerson] = useState(null);

  // GET ALL
  useEffect(() => {
    const loadPersons = async () => {
      try {
        const res = await fetch(BASE_URL);

        if (!res.ok) {
          alert("Error al cargar personas");
          return;
        }

        const data = await res.json();
        setPersons(data);
      } catch (error) {
        alert("Error de conexión");
      } finally {
        setLoading(false);
      }
    };

    loadPersons();
  }, []);

  // POST / PUT
  const addItem = async (item) => {
    if (editingPerson) {
      updateItem(item);
      return;
    }

    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });

      if (res.status === 409) {
        alert("El email ya existe");
        return;
      }

      if (!res.ok) {
        const errorText = await res.text();
        alert(errorText);
        return;
      }

      const created = await res.json();
      setPersons([...persons, created]);
      alert("Persona creada correctamente");
    } catch {
      alert("Error al crear persona");
    }
  };

  // PUT
  const updateItem = async (item) => {
    try {
      const res = await fetch(BASE_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });

      if (res.status === 404) {
        alert("Persona no encontrada");
        return;
      }

      if (!res.ok) {
        alert("Error al actualizar");
        return;
      }

      setPersons(
        persons.map((p) => (p.id === item.id ? item : p))
      );

      alert("Persona actualizada");
      setEditingPerson(null);
    } catch {
      alert("Error al actualizar persona");
    }
  };

  // DELETE
  const deleteItem = async (id) => {
    const confirmacion = confirm("¿Eliminar esta persona?");
    if (!confirmacion) return;

    try {
      const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });

      if (res.status === 404) {
        alert("Persona no encontrada");
        return;
      }

      if (!res.ok) {
        alert("No se pudo eliminar");
        return;
      }

      setPersons(persons.filter((p) => p.id !== id));
      alert("Persona eliminada");
    } catch {
      alert("Error al eliminar persona");
    }
  };

  const handleEdit = (person) => {
    setEditingPerson(person);
  };

  const cancelEdit = () => {
    setEditingPerson(null);
  };

  return (
    <div className="min-h-screen w-full bg-[#F2F4F8] p-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#0046CC]">
          Prueba técnica Matipos
        </h1>

        <p className="text-gray-700 mt-2">
          Aplicación web desarrollada con React y TailwindCSS, conectada a una API REST
          construida en ASP.NET Core (C#). Puedes ver el código fuente en{" "}
          <a
            href="https://github.com/FelipeCarvajalParra/prueba-tecnica-matipos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 font-medium"
          >
            GitHub
          </a>.
        </p>
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        <Form
          onSubmit={addItem}
          editingPerson={editingPerson}
          onCancel={cancelEdit}
        />

        <Table
          persons={persons}
          loading={loading}
          onEdit={handleEdit}
          onDelete={deleteItem}
        />
      </div>

      {/* Documentation */}
      <div className="max-w-7xl mx-auto flex justify-center mt-10">
        <Documentation />
      </div>
    </div>
  );
}

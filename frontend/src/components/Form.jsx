import { useState, useEffect } from "react";

export default function Form({ onSubmit, editingPerson, onCancel }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [document, setDocument] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingPerson) {
      setName(editingPerson.name);
      setLastName(editingPerson.lastName);
      setEmail(editingPerson.email);
      setDocument(editingPerson.document);
      setAge(editingPerson.age);
    }
  }, [editingPerson]);

  const clearForm = () => {
    setName("");
    setLastName("");
    setEmail("");
    setDocument("");
    setAge("");
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !lastName.trim()) {
      setError("Nombre y apellido son obligatorios");
      return;
    }

    if (!email.includes("@")) {
      setError("El email no es válido");
      return;
    }

    if (!document.trim()) {
      setError("El documento es obligatorio");
      return;
    }

    if (!age || Number(age) <= 0) {
      setError("La edad debe ser mayor a 0");
      return;
    }

    const payload = {
      name,
      lastName,
      email,
      document,
      age: Number(age),
    };

    if (editingPerson) {
      onSubmit({ id: editingPerson.id, ...payload });
    } else {
      onSubmit(payload);
    }

    clearForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white shadow-md rounded-xl p-6 space-y-4 border border-gray-200"
    >
      <h2 className="text-center text-xl font-semibold text-[#0046CC]">
        {editingPerson ? "Editar Persona" : "Registrar Persona"}
      </h2>

      <div>
        <label className="text-sm font-medium text-gray-700">Nombre</label>
        <input
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Apellido</label>
        <input
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Apellido"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="correo@ejemplo.com"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Documento</label>
        <input
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={document}
          onChange={(e) => setDocument(e.target.value)}
          placeholder="Número de documento"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Edad</label>
        <input
          type="number"
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Edad"
        />
      </div>

      <button className="w-full bg-[#0046CC] text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
        {editingPerson ? "Actualizar" : "Agregar"}
      </button>

      {editingPerson && (
        <button
          type="button"
          onClick={() => {
            clearForm();
            onCancel();
          }}
          className="w-full bg-gray-400 text-white py-2 rounded-lg font-medium hover:bg-gray-500 transition"
        >
          Cancelar
        </button>
      )}

      {error && (
        <p className="text-center text-red-500 font-medium">{error}</p>
      )}
    </form>
  );
}

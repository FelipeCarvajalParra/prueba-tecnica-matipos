import React from "react";

export default function Table({ persons, loading, onDelete, onEdit }) {

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center">
        <span className="text-gray-700 font-medium">Cargando personas…</span>
      </div>
    );
  }

  if (!persons || persons.length === 0) {
    return (
      <div className="rounded-xl shadow-md bg-white w-full">
        <table className="w-full text-center">
          <thead className="bg-[#E8F0FF]">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold text-[#0046CC]">ID</th>
              <th className="px-4 py-3 text-sm font-semibold text-[#0046CC]">Nombre</th>
              <th className="px-4 py-3 text-sm font-semibold text-[#0046CC]">Documento</th>
              <th className="px-4 py-3 text-sm font-semibold text-[#0046CC]">Email</th>
              <th className="px-4 py-3 text-sm font-semibold text-[#0046CC]">Edad</th>
              <th className="px-4 py-3 text-sm font-semibold text-[#0046CC]">Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-gray-200">
              <td colSpan="6" className="px-4 py-12 text-gray-600">
                <p className="text-gray-700 text-base font-medium mb-2">
                  No hay personas registradas
                </p>
                <p className="text-sm text-gray-500">
                  Usa el formulario para agregar nuevas personas.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="rounded-xl shadow-md bg-white w-full overflow-x-auto">
      <table className="w-full text-center table-fixed">
        <thead className="bg-[#E8F0FF]">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-[#0046CC] w-[60px]">
              ID
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-[#0046CC] w-[200px]">
              Nombre completo
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-[#0046CC] w-[160px]">
              Documento
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-[#0046CC] w-[260px]">
              Email
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-[#0046CC] w-[80px]">
              Edad
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-[#0046CC] w-[120px]">
              Acciones
            </th>
          </tr>
        </thead>

        <tbody>
          {persons.map((p) => (
            <tr
              key={p.id}
              className="border-t border-gray-200 hover:bg-[#F9FAFB] transition-colors"
            >
              <td className="px-4 py-3 text-sm text-gray-700">
                {p.id}
              </td>

              <td className="px-4 py-3 text-sm text-gray-900 font-medium truncate">
                {p.name} {p.lastName}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700 truncate">
                {p.document}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700 truncate">
                {p.email}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {p.age}
              </td>

              <td className="px-4 py-3 flex items-center justify-center gap-4">
                <button
                  onClick={() => onEdit(p)}
                  className="w-8 h-8 rounded-md bg-[#FFF3C4] border border-yellow-300 hover:bg-yellow-200 transition flex items-center justify-center"
                  title="Editar"
                >
                  <img
                    src="https://www.svgrepo.com/show/521620/edit.svg"
                    className="w-4 h-4"
                    alt="Editar"
                  />
                </button>

                <button
                  onClick={() => onDelete(p.id)}
                  className="w-8 h-8 rounded-md bg-[#FFE2E2] border border-red-300 hover:bg-red-200 transition flex items-center justify-center"
                  title="Eliminar"
                >
                  <img
                    src="https://www.svgrepo.com/show/533014/trash-blank.svg"
                    className="w-4 h-4"
                    alt="Eliminar"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

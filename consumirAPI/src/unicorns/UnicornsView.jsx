import { useUnicorns } from "../context/UnicornContext";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const UnicornsView = () => {
  const { unicorns, deleteUnicorn } = useUnicorns();
  const navigate = useNavigate();
  const toast = useRef(null);

  const [selectedUnicorns, setSelectedUnicorns] = useState(null);

  const handleDelete = (id) => {
    deleteUnicorn(id);
    toast.current.show({ severity: "success", summary: "Eliminado", detail: "Unicornio eliminado", life: 3000 });
  };

  return (
    <div className="p-6">
      <h2 className="text-center text-2xl font-bold mb-6">Lista de Unicornios</h2>
      <div className="text-center mb-6">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          onClick={() => navigate("/unicornios/crear")}
        >
          Crear Nuevo
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {unicorns.map((unicorn) => (
          <div key={unicorn.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{unicorn.nombre}</h3>
            <p className="text-gray-700 mb-4">Edad: {unicorn.edad}</p>
            <p className="text-gray-600 mb-4">Color: {unicorn.color}</p>
            <div className="flex gap-2">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
                onClick={() => navigate(`/unicornios/editar/${unicorn.id}`)}
              >
                Editar
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
                onClick={() => handleDelete(unicorn.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnicornsView;

// Este archivo define un componente base reutilizable para mostrar listas de elementos.

const BaseListView = ({ title, items, onEdit, onDelete, fields, createPath }) => {
  return (
    <div className="p-6">
      <h2 className="text-center text-2xl font-bold mb-6">{title}</h2>
      <div className="text-center mb-6">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          onClick={() => (window.location.href = createPath)}
        >
          Crear Nuevo
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id ? item.id : item._id} className="border rounded-lg p-4 shadow-md">
            {fields.map(({ name, label }) => (
              <p key={`${item.id ? item.id : item._id}-${name}`} className="text-gray-700 mb-2">
                <strong>{label}:</strong> {item[name]}
              </p>
            ))}
            <div className="flex gap-2">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
                onClick={() => onEdit(item.id ? item.id : item._id)}
              >
                Editar
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
                onClick={() => onDelete(item.id ? item.id : item._id)}
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

export default BaseListView;
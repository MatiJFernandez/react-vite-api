// Este archivo muestra una lista de unicornios y permite exportarlos a PDF, editarlos o eliminarlos.
import BaseListView from "../components/BaseListView";
import { useNavigate } from "react-router-dom";
import { useUnicorns } from "../context/UnicornContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

const UnicornsView = () => {
  const { unicorns, deleteUnicorn } = useUnicorns();
  const navigate = useNavigate();
  const toast = useRef(null);

  const exportToPDF = () => {
    const doc = new jsPDF();

    // Encabezados con la nueva columna "Estado"
    const headers = [["Nombre", "Color", "Poder", "Edad", "Estado"]];

    // Datos de los unicornios con la columna "Estado" incluida
    const data = unicorns.map((u) => [
      u.nombre,
      u.color,
      u.poder,
      u.edad,
      u.estado || 'N/A', // Si no hay estado, se asigna "N/A"
    ]);

    // Configuración de autoTable para la personalización
    autoTable(doc, {
      head: headers,
      body: data,
      styles: {
        fontSize: 10, // Tamaño de la fuente
        cellPadding: 2, // Espaciado dentro de las celdas
      },
      headStyles: {
        fillColor: [22, 160, 133], // Color de fondo de los encabezados (verde claro)
        textColor: [255, 255, 255], // Color del texto (blanco)
        fontStyle: 'bold', // Estilo de fuente para los encabezados (negrita)
      },
      bodyStyles: {
        fillColor: [255, 255, 255], // Color de fondo de las filas
        textColor: [0, 0, 0], // Color del texto (negro)
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245], // Color alterno para las filas (gris claro)
      },
      margin: { top: 20, left: 10, right: 10 }, // Márgenes del PDF
    });

    // Guardar el archivo PDF
    doc.save("unicornios.pdf");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <Toast ref={toast} />
        <h2 className="text-center text-3xl font-extrabold mb-8 text-indigo-700 drop-shadow">Lista de Unicornios</h2>
        <div className="flex justify-end mb-6">
          <button
            onClick={exportToPDF}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-200"
          >
            <span className="pi pi-file-pdf text-lg"></span>
            Exportar PDF
          </button>
        </div>
        <BaseListView
          title=""
          items={unicorns}
          onEdit={(id) => navigate(`/unicornios/editar/${id}`)}
          onDelete={async (id) => {
            await deleteUnicorn(id);
            if (toast.current) {
              toast.current.show({ severity: 'success', summary: 'Unicornio eliminado', detail: 'El unicornio ha sido eliminado correctamente', life: 3000 });
            }
          }}
          fields={[
            { name: "nombre", label: "Nombre" },
            { name: "edad", label: "Edad" },
            { name: "color", label: "Color" },
            { name: "poder", label: "Poder" },
          ]}
          createPath="/unicornios/crear"
        />
      </div>
    </div>
  );
};

export default UnicornsView;

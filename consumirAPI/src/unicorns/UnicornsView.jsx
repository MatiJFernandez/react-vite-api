// Este archivo muestra una lista de unicornios y permite exportarlos a PDF, editarlos o eliminarlos.
import BaseListView from "../components/BaseListView";
import { useNavigate } from "react-router-dom";
import { useUnicorns } from "../context/UnicornContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const UnicornsView = () => {
  const { unicorns, deleteUnicorn } = useUnicorns();
  const navigate = useNavigate();

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
    <>
      <button onClick={exportToPDF} className="btn btn-primary">
        Exportar PDF
      </button>
      <BaseListView
        title="Lista de Unicornios"
        items={unicorns}
        onEdit={(id) => navigate(`/unicornios/editar/${id}`)}
        onDelete={deleteUnicorn}
        fields={[
          { name: "nombre", label: "Nombre" },
          { name: "edad", label: "Edad" },
          { name: "color", label: "Color" },
          { name: "poder", label: "Poder" },
        ]}
        createPath="/unicornios/crear"
      />
    </>
  );
};

export default UnicornsView;

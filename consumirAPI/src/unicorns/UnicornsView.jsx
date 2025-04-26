import { useUnicorns } from "../context/UnicornContext";
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { useRef, useState } from 'react';

const UnicornsView = () => {
  const { unicorns, deleteUnicorn } = useUnicorns();
  const navigate = useNavigate();
  const toast = useRef(null); 

  const [selectedUnicorns, setSelectedUnicorns] = useState(null);

  const handleDelete = (id) => {
    deleteUnicorn(id);
    toast.current.show({ severity: 'success', summary: 'Eliminado', detail: 'Unicornio eliminado', life: 3000 });
  };

  return (
    <div className="unicorns-container">
      <Toast ref={toast} />

      <h2>Unicornios</h2>

      <Button label="Crear Nuevo" icon="pi pi-plus" onClick={() => navigate("/unicornios/crear")} className="p-button-success" />

      <DataTable value={unicorns} paginator rows={5} selection={selectedUnicorns} onSelectionChange={e => setSelectedUnicorns(e.value)}>
        <Column field="nombre" header="Nombre" />
        <Column field="edad" header="Edad" />
        <Column field="color" header="Color" />
        <Column body={(rowData) => (
          <>
            <Button label="Editar" icon="pi pi-pencil" onClick={() => navigate(`/unicornios/editar/${rowData.id}`)} className="p-button-info p-mr-2" />
            <Button label="Eliminar" icon="pi pi-trash" onClick={() => handleDelete(rowData.id)} className="p-button-danger" />
          </>
        )} header="Acciones" />
      </DataTable>
    </div>
  );
};

export default UnicornsView;

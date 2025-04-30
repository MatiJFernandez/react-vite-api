import BaseListView from "../components/BaseListView";
import { useNavigate } from "react-router-dom";
import { useUnicorns } from "../context/UnicornContext";

const UnicornsView = () => {
  const { unicorns, deleteUnicorn } = useUnicorns();
  const navigate = useNavigate();

  return (
    <BaseListView
      title="Lista de Unicornios"
      items={unicorns}
      onEdit={(id) => navigate(`/unicornios/editar/${id}`)}
      onDelete={deleteUnicorn}
      fields={[
        { name: "nombre", label: "Nombre" },
        { name: "edad", label: "Edad" },
        { name: "color", label: "Color" },
      ]}
      createPath="/unicornios/crear"
    />
  );
};

export default UnicornsView;

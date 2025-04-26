import { useUnicorns } from "../context/UnicornContext";
import { useNavigate } from "react-router-dom";

const UnicornsView = () => {
  const { unicorns, deleteUnicorn } = useUnicorns();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Unicornios</h2>
      <button onClick={() => navigate("/unicornios/crear")}>Crear Nuevo</button>
      <table>
        <thead>
          <tr><th>Nombre</th><th>Edad</th><th>Color</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          {unicorns.map(u => (
            <tr key={u.id}>
              <td>{u.nombre}</td>
              <td>{u.edad}</td>
              <td>{u.color}</td>
              <td>
                <button onClick={() => navigate(`/unicornios/editar/${u.id}`)}>Editar</button>
                <button onClick={() => deleteUnicorn(u.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnicornsView;

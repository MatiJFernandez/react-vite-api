import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // CORREGIDO
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Empresa</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

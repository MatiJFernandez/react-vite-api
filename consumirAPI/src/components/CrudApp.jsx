import { useState, useEffect } from 'react';

const API_URL = 'https://api.restful-api.dev/objects';

export default function CrudApp() {
  const [name, setName] = useState('');
  const [features, setFeatures] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [objects, setObjects] = useState([]); // Lista de objetos guardados
  const [selectedId, setSelectedId] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedObjects = JSON.parse(localStorage.getItem('objects')) || [];
    setObjects(storedObjects);
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const data = {
      name,
      data: { features, price: Number(price), year: Number(year) },
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      
      const updatedObjects = [...objects, { id: result.id, name }];
      localStorage.setItem('objects', JSON.stringify(updatedObjects));
      setObjects(updatedObjects);
      setMessage('Objeto creado con éxito!');
    } catch (error) {
      console.error('Error al crear:', error);
    }
  };

  const handleUpdate = async () => {
    if (!selectedId) return alert('Selecciona un objeto para actualizar');

    const data = { data: { features, price: Number(price) } };

    try {
      const response = await fetch(`${API_URL}/${selectedId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setMessage('Objeto actualizado!');
      console.log(result);
    } catch (error) {
      console.error('Error al actualizar:', error);
    }
  };

  const handleDelete = async () => {
    if (!selectedId) return alert('Selecciona un objeto para eliminar');

    try {
      await fetch(`${API_URL}/${selectedId}`, { method: 'DELETE' });
      
      const updatedObjects = objects.filter(obj => obj.id !== selectedId);
      localStorage.setItem('objects', JSON.stringify(updatedObjects));
      setObjects(updatedObjects);
      setSelectedId(null);
      setMessage('Objeto eliminado con éxito!');
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };

  return (
    <div>
      <h1>CRUD API REST</h1>

      {/* Formulario de Creación */}
      <form onSubmit={handleCreate}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" required />
        <input value={features} onChange={(e) => setFeatures(e.target.value)} placeholder="Características" required />
        <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Precio" type="number" required />
        <input value={year} onChange={(e) => setYear(e.target.value)} placeholder="Año" type="number" required />
        <button type="submit">Crear</button>
      </form>

      {/* Lista de Objetos Guardados */}
      <h2>Objetos Creados</h2>
      <ul>
        {objects.map((obj) => (
          <li key={obj.id} onClick={() => setSelectedId(obj.id)}>
            {obj.name} (ID: {obj.id}) {selectedId === obj.id && '✅'}
          </li>
        ))}
      </ul>

      {/* Botones de Actualizar y Eliminar */}
      {selectedId && (
        <div>
          <button onClick={handleUpdate}>Actualizar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}

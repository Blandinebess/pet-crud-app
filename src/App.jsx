import { useEffect, useState } from "react";
import { fetchPets } from "./components/dynamo.js";
import { addPet } from "./components/dynamo.js";
import { deletePet } from "./components/dynamo.js";


function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function loadPets() {
      try {
        const data = await fetchPets();
        setPets(data);
      } catch (err) {
        console.error("Error loading pets:", err);
      }
    }
    loadPets();
  }, []);

  async function handleAddPet(pet) {
    try {
      await addPet(pet);
      const updatedPets = await fetchPets();
      setPets(updatedPets);
    } catch (err) {
      console.error("Error adding pet:", err);
    }
  }

  // Inside App JSX:
  // <AddPetForm onAdd={handleAddPet} />;

  async function handleDelete(id) {
    try {
      await deletePet(id);
      setPets(await fetchPets());
    } catch (err) {
      console.error("Delete error:", err);
    }
  }
  

  return (
    <div>
      <h1>Pet List</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            {pet.name} - Age: {pet.age} - Status: {pet.status}
            <button onClick={() => handleDelete(pet.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    
  );
}
<button onClick={() => handleDelete(pet.id)}>Delete</button>;

export default App;

import PetList from "./components/PetList";

function App() {
  const pets = [
    { name: "Buddy", type: "Dog" },
    { name: "Mittens", type: "Cat" },
    { name: "Goldie", type: "Fish" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <PetList pets={pets} />
    </div>
  );
}

export default App;

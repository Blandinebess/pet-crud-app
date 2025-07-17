function AddPetForm({ onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd({ name, age, status });
    setName("");
    setAge("");
    setStatus("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button type="submit">Add Pet</button>
    </form>
  );
}

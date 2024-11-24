import { useEffect, useState } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (name.length < 1) {
      setError("Name is required");
      return;
    }

    setError("");
  }, [name]);

  return (
    <form>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      {error && <p>{error}</p>}
    </form>
  );
};

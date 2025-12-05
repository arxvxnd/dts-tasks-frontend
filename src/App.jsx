import { useState } from "react";
import { createTask } from "./api/tasks";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [dueDate, setDueDate] = useState("");

  const [createdTask, setCreatedTask] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setCreatedTask(null);

    const payload = {
      title,
      description: description || null,
      status,
      due_date_time: dueDate
    };

    try {
      const task = await createTask(payload);
      setCreatedTask(task);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

return (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#121212",
      padding: "1rem"
    }}
  >
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        padding: "2rem",
        borderRadius: "8px",
        background: "#1e1e1e",
        color: "#f2f2f2",
        border: "1px solid #333",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#fff" }}>
        Create a Task
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <label style={{ fontWeight: "bold" }}>Title:</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "1rem",
            borderRadius: "4px",
            border: "1px solid #444",
            background: "#2a2a2a",
            color: "#fff"
          }}
        />

        {/* Description */}
        <label style={{ fontWeight: "bold" }}>Description (optional):</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "1rem",
            borderRadius: "4px",
            border: "1px solid #444",
            background: "#2a2a2a",
            color: "#fff"
          }}
        />

        {/* Status */}
        <label style={{ fontWeight: "bold" }}>Status:</label>
        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "1rem",
            borderRadius: "4px",
            border: "1px solid #444",
            background: "#2a2a2a",
            color: "#fff"
          }}
        >
          <option value="pending">pending</option>
          <option value="in_progress">in_progress</option>
          <option value="completed">completed</option>
        </select>

        {/* Due Date */}
        <label style={{ fontWeight: "bold" }}>Due Date/Time:</label>
        <input
          type="datetime-local"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "1.5rem",
            borderRadius: "4px",
            border: "1px solid #444",
            background: "#2a2a2a",
            color: "#fff"
          }}
        />

        {/* Button */}
        <button
          disabled={loading}
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: loading ? "#555" : "#2b6cb0",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold"
          }}
        >
          {loading ? "Creating..." : "Create Task"}
        </button>
      </form>

      {/* Error */}
      {error && (
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1rem",
            background: "#4a0000",
            color: "#ff9b9b",
            borderRadius: "4px",
            border: "1px solid #660000"
          }}
        >
          Error: {error}
        </div>
      )}

      {/* Success */}
      {createdTask && (
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1rem",
            background: "#003044",
            color: "#bce6ff",
            borderRadius: "4px",
            border: "1px solid #00506e"
          }}
        >
          <h3>Task Created:</h3>
          <pre style={{ color: "#bce6ff" }}>
            {JSON.stringify(createdTask, null, 2)}
          </pre>
        </div>
      )}
    </div>
  </div>
);
}

export default App;
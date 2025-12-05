const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function createTask(payload) {
  const response = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to create task");
  }

  return data.task;
}

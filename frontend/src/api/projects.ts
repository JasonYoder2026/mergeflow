export const API_URL = import.meta.env.VITE_API_URL;

export async function getProjects() {
  const res = await fetch(`${API_URL}/api/projects`);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export async function createProject(project: {name: string; description: string}) {
  const res = await fetch(`${API_URL}/api/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project)
  });
  if (!res.ok) throw new Error("Failed to create project");
  return res.json();
}

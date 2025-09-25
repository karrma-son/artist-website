const API_URL = "http://localhost:5000/api/art";

export async function getAllArtworks() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function getArtworkById(id: number) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createArtwork(data: any) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function updateArtwork(id: number, data: any) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function deleteArtwork(id: number) {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return res.json();
}

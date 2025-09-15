export default async function requestProfiles() {
  try {
    const response = await fetch("http://localhost:3000/profile", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status} e ${response.statusText}`)
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Errro na requisição!");
    return null
  }
}
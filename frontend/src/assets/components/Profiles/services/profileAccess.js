export default async function getProfileAccess(id) {
    try {
        const response = await fetch(`http://localhost:3000/profile/${id}/access`)

        if (!response.ok) {
            throw new Error(`Erro ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Erro: " + err);
        return null;
    }
}
const API_ENDPOINT=import.meta.env.VITE_API_ENDPOINT
const API_KEY=import.meta.env.VITE_API_KEY
const CONTENT_TYPE=import.meta.env.VITE_CONTENT_TYPE

export async function get({ params }) {
    // the `id` parameter is available because this file is called [id].js
    const { id } = params;

    const url = `${API_ENDPOINT}/${id}?extend=true`
    const headers = new Headers();
    headers.append('Content-Type', `${CONTENT_TYPE}`)
    headers.append('x-api-key',`${API_KEY}`)
    const article = await fetch(url, {
        headers: headers,
    })

    const json = await article.json();

    if (article) {
        return {
            body: {...json}
        };
    }
}

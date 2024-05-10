import axios from "axios";

export async function fetchImages(query, page) {
  const API_KEY = import.meta.env.VITE_REACT_APP_UNSPLAH_API_KEY;
  const baseUrl = "https://api.unsplash.com/photos";

  const params = new URLSearchParams({
    client_id: API_KEY,
    per_page: 12,
    query: query,
    page: page,
  });

  try {
    const response = await axios.get(`${baseUrl}?${params}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

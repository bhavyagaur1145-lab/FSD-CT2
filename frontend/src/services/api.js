import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

const uploadBaseUrl = API_BASE_URL.replace(/\/api\/?$/, "");

export const getImageUrl = (fileName) =>
  fileName ? `${uploadBaseUrl}/uploads/${fileName}` : "";

export const placeholderImage =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
      <rect width="600" height="400" fill="#dbeafe"/>
      <circle cx="300" cy="145" r="68" fill="#93c5fd"/>
      <rect x="170" y="240" width="260" height="92" rx="46" fill="#60a5fa"/>
      <text x="300" y="360" text-anchor="middle" font-size="26" font-family="Arial, sans-serif" fill="#1e3a8a">
        No Image
      </text>
    </svg>
  `);

export default api;

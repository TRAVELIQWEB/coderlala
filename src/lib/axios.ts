import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!baseURL) {
  // Logs a clear, early signal in dev instead of a confusing
  // "Network Error" once a request is actually attempted.
  console.error(
    '[axios] NEXT_PUBLIC_BACKEND_URL is not set. Add it to .env.local and restart the dev server.'
  );
}

const api = axios.create({
  baseURL: baseURL || '', // falls back to relative paths if unset, rather than crashing the app
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default api;
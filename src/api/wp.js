import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

const client = axios.create({
  baseURL: API_BASE,
  timeout: 12000,
  headers: {
    Accept: "application/json"
  }
});

/**
 * WordPress endpoints used:
 * - /posts
 * - /posts?slug={slug}
 * - /pages
 * - /pages?slug={slug}
 * - /media/{id}
 * For custom data (services), create custom endpoints or ACF to expose JSON.
 */

export async function fetchPosts({ page = 1, per_page = 10 } = {}) {
  const res = await client.get("/posts", { params: { page, per_page } });
  return { data: res.data, total: parseInt(res.headers["x-wp-total"] || 0), totalPages: parseInt(res.headers["x-wp-totalpages"] || 0) };
}

export async function fetchPostBySlug(slug) {
  const res = await client.get("/posts", { params: { slug } });
  return res.data[0] || null;
}

export async function fetchPagesBySlug(slug) {
  const res = await client.get("/pages", { params: { slug } });
  return res.data[0] || null;
}

export async function fetchMedia(id) {
  const res = await client.get(`/media/${id}`);
  return res.data;
}

/* Example: If you expose /wp-json/custom/v1/services or a CPT endpoint, fetch that:
export async function fetchServices() {
  const res = await client.get('/custom/v1/services');
  return res.data;
}
*/

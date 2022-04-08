// GET /images
import api from "./api";

export const get = () => api.get("/images/search", { params: { limit: 10 } });

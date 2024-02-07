import { folders } from "./data";

const api = {
  get: () => new Promise((resolve) => setTimeout(() => resolve(folders), 3000)),
};

export default api;

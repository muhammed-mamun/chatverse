import axios from "axios";

const customAxios = {
  post: async (...args) => {
    try {
      const res = await axios.post(...args);
      return res;
    } catch (e) {
      return e.response;
    }
  },
  get: async (...args) => {
    try {
      const res = await axios.get(...args);
      return res;
    } catch (e) {
      return e.response;
    }
  },
  put: async (...args) => {
    try {
      const res = await axios.put(...args);
      return res;
    } catch (e) {
      return e.response;
    }
  },
  delete: async (...args) => {
    try {
      const res = await axios.delete(...args);
      return res;
    } catch (e) {
      return e.response;
    }
  },
};

export default customAxios;

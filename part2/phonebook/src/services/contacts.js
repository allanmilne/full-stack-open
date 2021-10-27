import axios from "axios";

const baseURL = "http://localhost:3001/contacts";

const getAll = () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

const create = (newContactObject) => {
  const request = axios.post(baseURL, newContactObject);
  return request.then((response) => response.data);
};

export default {
  getAll,
  create
}

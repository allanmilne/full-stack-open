import axios from "axios";

const baseURL = "http://localhost:3001/contacts";

const create = (newContactObject) => {
  const request = axios.post(baseURL, newContactObject);
  return request.then((response) => response.data);
};

const getAll = () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

const update = (id, contactObject) => {
  const request = axios.put(`${baseURL}/${id}`, contactObject);
  return request.then((response) => response.data);
};

const deleteContact = (id) => {
  const request = axios.delete(`${baseURL}/${id}`);
  return request.then((response) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  create,
  getAll,
  update,
  deleteContact
};

import axios from "axios";

const baseURL = "http://localhost:3001/notes";

export const getAll = () => {
  const request = axios.get(baseURL);
  const nonExistingNote = {
    id: 1000,
    content: "This note is not saved to the server",
    date: "2019-05-20T19:20:14.298Z",
    important: true
  }
  return request.then((response) => response.data.concat(nonExistingNote));
};

const create = (newObject) => {
  const request = axios.post(baseURL, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseURL}/${id}`, newObject);
  return request.then((response) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  update,
  create,
};

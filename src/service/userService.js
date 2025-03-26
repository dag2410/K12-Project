import * as httpRequest from "@/utils/httpRequest";

export const getAll = async () => {
  const response = await httpRequest.get("/users");
  return response;
};

export const getOne = async (id) => {
  const response = await httpRequest.get(`/users/${id}`);
  return response;
};

export default {
  getAll,
  getOne,
};

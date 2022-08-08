import axios from "axios";

const API_ORIGIN = import.meta.env.VITE_API_ORIGIN;

export async function fetchOperations() {
  const res = await axios.get(`${API_ORIGIN}/api/v1/operations`);
  return res.data.operations;
}

export async function fetchOperationById(opId) {
  const res = await axios.get(`${API_ORIGIN}/api/v1/operations/${opId}`);
  return res.data.operation[0];
}

export function deleteOperation(opId) {
  return axios.delete(`${API_ORIGIN}/api/v1/operations/${opId}`);
}

export async function createOperation(opData) {
  return axios.post(`${API_ORIGIN}/api/v1/operations`, opData);
}

export async function updateOperation(opId, opData) {
  return axios.patch(`${API_ORIGIN}/api/v1/operations/${opId}`, opData);
}

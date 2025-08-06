import axios from "axios";

const BASE_URL = "http://localhost:8000/api/portfolio"; // Use your local backend

export const getSummary = async () => {
  try {
    return await axios.get(`${BASE_URL}/summary`);
  } catch (err) {
    throw new Error("Failed to load portfolio summary");
  }
};
export const getHoldings = async () => {
  try {
    return await axios.get(`${BASE_URL}/holdings`);
  } catch (err) {
    throw new Error("Failed to load portfolio holdings");
  }
};
export const getAllocation = async () => {
  try {
    return await axios.get(`${BASE_URL}/allocation`);
  } catch (err) {
    throw new Error("Failed to load portfolio allocation");
  }
};
export const getPerformance = async () => {
  try {
    return await axios.get(`${BASE_URL}/performance`);
  } catch (err) {
    throw new Error("Failed to load portfolio performance");
  }
};

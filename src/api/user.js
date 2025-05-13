import api from ".";

// Create

// Read
export const getAllUser = async () => {
  return api.get("users").then((response) => response.data);
};

// Update

// Delete

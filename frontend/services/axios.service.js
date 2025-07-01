import axios from "axios";
export const registerUser = async (uri, data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/${uri}`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const loginUser = async (uri, data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/${uri}`,
      data
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
    throw error.response;
  }
};
export const createChat = async (uri, token, userId) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/${uri}`,
      { userId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error.response);
    throw error;
  }
};
export const getChat = async (uri, token, userId) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/${uri}/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const getSingleChat = async (uri, token, id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/${uri}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const handleResponse = async (uri, token, data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/${uri}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
export const editTitle = async (uri, id, token, title) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_SERVER_URL}/${uri}/${id}`,
      { title },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
export const deleteChat = async (uri, id, token) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_SERVER_URL}/${uri}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

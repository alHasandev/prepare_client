import axios from "axios";

const url = "http://localhost:5000/items";

export const getItems = async (itemID = "") => {
  try {
    const res = await axios.get(`${url}/${itemID}`);

    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const postItem = async (data) => {
  try {
    const res = await axios.post(url, data);

    return res.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const patchItem = async (itemID, data) => {
  try {
    const res = await axios.patch(`${url}/${itemID}`, data);

    return res.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const deleteItem = async (itemID) => {
  try {
    const res = await axios.delete(`${url}/${itemID}`);

    return res.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};

import { toast } from "react-toastify";

// Get wish list from localStorage
const getStoredList = () => {
  const storedListStr = localStorage.getItem('wish-list');
  if (storedListStr) {
    return JSON.parse(storedListStr);
  }
  return [];
};

// Add to wish list
const setStoredList = (id) => {
  const storedList = getStoredList();
  if (storedList.includes(id)) {
    toast("Book already exists");
  } else {
    storedList.push(id); // add to the array
    localStorage.setItem('wish-list', JSON.stringify(storedList));
    toast("Added to wishlist!");
  }
};

const getReadStoredList = () => {
  const storedListStr = localStorage.getItem('read-list');
  if (storedListStr) {
    return JSON.parse(storedListStr);
  }
  return [];
};

const setReadStoredList = (id) => {
  const storedList = getReadStoredList();
  if (storedList.includes(id)) {
    toast("Book already exists");
  } else {
    storedList.push(id); // add to the array
    localStorage.setItem('read-list', JSON.stringify(storedList));
    toast("Added to read-list!");
  }
};

export { getStoredList, setStoredList, setReadStoredList, getReadStoredList };
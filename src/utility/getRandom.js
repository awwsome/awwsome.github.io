const getRandom = (array) => {
  let item = array[Math.floor(Math.random() * array.length)];
  return item;
};

export default getRandom;

const formatNumber = (num) => {
  if (typeof num === 'number') {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {
    return num;
  }
};

export default formatNumber;
const idGen = () => {
  const rand = Math.floor((Math.random() * 100) + 1);
  const d = new Date();
  return `${d.getMinutes()}${d.getSeconds()}${d.getMilliseconds()}${d.getUTCMilliseconds()}${rand}`;
};

export default idGen;

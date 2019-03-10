export default (value) => {
  if (!value) return '';

  return Math.round(value * 100) / 100;
};

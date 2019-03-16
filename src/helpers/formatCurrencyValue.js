export default (value) => {
  if (!value || Number(value) <= 0) return '';

  return Math.round(value * 100) / 100;
};

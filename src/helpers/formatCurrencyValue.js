export default (value) => {
  debugger;
  if (!value || Number(value) <= 0) return '';

  return Math.round(value * 100) / 100;
};

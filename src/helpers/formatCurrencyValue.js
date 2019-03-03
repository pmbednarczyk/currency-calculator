export default (value) => {
  const strippedTextValue = value.replace(/\D/g, '');
  const formattedValue = strippedTextValue ? parseInt(strippedTextValue, 10) : 0;

  return formattedValue.toLocaleString('en-US');
};

export default (
  rates,
  isCurrencyToSellType,
  amount,
  isCurrencyToBuyLabelChanged,
  currencyToSellStateAmount,
) => {
  if (!amount) return '';
  const { rate } = rates.currencyToBuy;
  let convertedAmount;

  if (isCurrencyToBuyLabelChanged) {
    convertedAmount = currencyToSellStateAmount * rate;
  }

  if (isCurrencyToSellType && !isCurrencyToBuyLabelChanged) {
    convertedAmount = amount * rate;
  }

  if (!isCurrencyToSellType && !isCurrencyToBuyLabelChanged) {
    convertedAmount = amount / rate;
  }

  if (String(convertedAmount).includes('.')) return convertedAmount.toFixed(2);

  return convertedAmount;
};

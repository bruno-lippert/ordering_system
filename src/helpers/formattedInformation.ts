export function priceFormatting(price: number) {
  if (price === undefined || price === null) {
    return "";
  }
  return `R$ ${price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

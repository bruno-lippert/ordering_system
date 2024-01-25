export function priceFormatting(price: number): string {
  if (price === undefined || price === null) {
    return "";
  }
  return `${price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).replace('.', ',')}`;
}

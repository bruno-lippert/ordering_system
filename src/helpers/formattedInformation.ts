export function priceFormatting(price: string): number {
  const newPrice = `${price}`.replace(',', '.')
  return Number(newPrice);
}

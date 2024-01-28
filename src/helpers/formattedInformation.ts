export function priceFormatting(price: string) {
  let newPrice = `${price}`.replace('.', ',')
  if (!newPrice.includes(',')) {
    // Adiciona ",00" no final da string
    newPrice += ',00';
  }
  return newPrice;
}
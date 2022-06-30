// export const formatPrice = (number) => {
//   return new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'INR',
//   }).format(number / 100)
// }
export const formatPrice = (number) => {
  const newNumber = (number / 1).toLocaleString('en-NG', {
    style: 'currency',
    currency: 'INR',
  })
  return newNumber
}

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  if (type === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}

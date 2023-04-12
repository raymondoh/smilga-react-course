// export const formatPrice = number => {
//   const newNumber = Intl.NumberFormat("en-GB", {
//     style: "currency",
//     currency: "GBP",
//   }).format(number / 100);
//   return newNumber;
// };

export const formatPrice = number => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map(item => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};

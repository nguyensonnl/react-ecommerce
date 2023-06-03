export const numberFormat = (num) => {
  let nf = new Intl.NumberFormat();
  return nf.format(num);
};

// export const currency = (money = 0) =>{
//   return new Intl.NumberFormat().format(money);
// }

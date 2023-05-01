export const numberFormat = (num) => {
  let nf = new Intl.NumberFormat();
  return nf.format(num);
};

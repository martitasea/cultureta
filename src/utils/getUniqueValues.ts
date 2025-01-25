export const getUniqueValues = (array: Array<string | undefined>) => {
  const dataArr = new Set(array.filter(item => item !== undefined));
  return [...dataArr];
};
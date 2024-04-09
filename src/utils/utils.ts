export const calculateHeight = (value: number, max: number) => {
  let height = (value / max) * 100;
  return height;
};

export const formatNumber = (num: number) => {
  if (num >= 1000) {
    const formattedNum = (num / 1000).toFixed(1);
    return `$${formattedNum}k`;
  } else {
    return `$${num.toString()}`;
  }
};

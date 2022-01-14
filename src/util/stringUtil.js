export const truncateString = (str, length = 10, start = 3, end = 3) => {
  if (str.length >= length) {
    let startSubString = str.substring(0, start);
    let endSubString = str.substring(str.length - end, str.length);
    return `${startSubString}...${endSubString}`;
  }
  return str;
};

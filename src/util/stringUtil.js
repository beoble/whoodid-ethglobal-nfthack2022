export const truncateString = (str, length = 10, start = 3, end = 3) => {
  if (str.length >= length) {
    let startSubString = str.substring(0, start);
    let endSubString = str.substring(str.length - end, str.length);
    return `${startSubString}...${endSubString}`;
  }
  return str;
};

export const converStringArrayToString = (arr, numToShow = 3, tail = "") => {
  if (arr.length < 0) return;
  let str = arr[0];
  for (let i = 1; i < (arr.length < 3 ? arr.length : numToShow); i++) {
    str += ", " + arr[i];
  }
  if (arr.length > 3) str += " +" + (arr.length - numToShow);
  return str;
};

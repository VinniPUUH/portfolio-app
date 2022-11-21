const checkFalseString = (string: string) => {
  return string === "false" ? false : Boolean(string);
};

export default checkFalseString;

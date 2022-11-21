const DESCRIPTION_MAX_LENGTH = 300;

const actualText = (text: string) => {
  return text.length > DESCRIPTION_MAX_LENGTH
    ? `${text.slice(0, DESCRIPTION_MAX_LENGTH)}...`
    : text;
};

export default actualText;

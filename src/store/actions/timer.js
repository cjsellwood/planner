export const numberInput = (number) => {
  return {
    type: "NUMBER_INPUT",
    number,
  };
};

export const backspaceInput = () => {
  return {
    type: "BACKSPACE_INPUT",
  };
};

export const longBackspaceInput = () => {
  return {
    type: "LONG_BACKSPACE_INPUT",
  };
};

const convertTo32Bit = (n: number) => {
  return (n - (n % 32)).toString(16).padStart(2, "0");
};

export const rgbaToHex = (r: number, g: number, b: number, a: number) => {
  const red = convertTo32Bit(r);
  const green = convertTo32Bit(g);
  const blue = convertTo32Bit(b);
  const alpha = Math.round(a * 255)
    .toString(16)
    .substring(0, 2);
  return `#${red}${green}${blue}${alpha}`;
};

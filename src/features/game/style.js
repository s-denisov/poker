export const centerStyle = (style, horizontally, vertically) => {
  if (horizontally) style.left = '50%';
  if (vertically) style.top = '50%';
  const translationAmount = (bool) => (bool ? '-50%' : '0%');
  style.transform = `translate(${translationAmount(horizontally)}, ${translationAmount(vertically)})`;
  return style;
};

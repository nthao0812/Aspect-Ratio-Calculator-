let ratioWidth = document.getElementById("ratio-width");
let ratioHeight = document.getElementById("ratio-height");
let width = document.getElementById("width");
let height = document.getElementById("height");

let calculateWidth = () => {
  let aspecRatio = ratioWidth.value / ratioHeight.value;
  width.value = parseFloat((height.value * aspecRatio).toFixed(2));
};

let calculateHeight = () => {
  let aspecRatio = ratioWidth.value / ratioHeight.value;
  height.value = parseFloat((width.value / aspecRatio).toFixed(2));
};

height.addEventListener("input", calculateWidth);
width.addEventListener("input", calculateHeight);
ratioHeight.addEventListener("input", calculateWidth);
ratioWidth.addEventListener("input", calculateHeight);

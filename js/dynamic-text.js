// dynamic-text.js

function getLuminance(rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const a = [r, g, b].map((v) => {
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function getAverageRGB(imgEl) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const width = (canvas.width =
    imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width);
  const height = (canvas.height =
    imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height);

  context.drawImage(imgEl, 0, 0, width, height);
  const imageData = context.getImageData(0, 0, width, height);
  const data = imageData.data;
  let r = 0,
    g = 0,
    b = 0;

  for (let i = 0; i < data.length; i += 4) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
  }

  r = Math.floor(r / (data.length / 4));
  g = Math.floor(g / (data.length / 4));
  b = Math.floor(b / (data.length / 4));

  return [r, g, b];
}

function setDynamicTextColor(imageElement, textElement) {
  const rgb = getAverageRGB(imageElement);
  const luminance = getLuminance(rgb);
  const textColor = luminance > 0.5 ? "black" : "white";
  textElement.style.color = textColor;
}

// class="dynamic-text"  => 이 클래스만 원하는 태그에 추가하면 됌.

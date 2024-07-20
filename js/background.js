const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];
const chosenImage = images[Math.floor(Math.random() * 10)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
bgImage.id = "background-image";

// 이미지가 로드된 후에 동적 텍스트 색상 변경 함수를 호출
bgImage.onload = function () {
  if (typeof setDynamicTextColor === "function") {
    const textElement = document.querySelector(".dynamic-text");
    setDynamicTextColor(bgImage, textElement);
  }
};

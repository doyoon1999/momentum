//날씨 정보 스크립트

//상수, 변수 선언

const weatherContainer = document.querySelector("#weather");

//함수정의

/**
 * 위치정보를 성공적으로 불러왔을 때, 호출되는 함수
 * @param {position} position
 */
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d5c73f6cc70a91ce2bab57e4ca7d7a1f&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      const temp = Math.round(data.main.temp);
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}, ${temp}ºC`;
    });
}

/**
 * 위치정보를 불러오는 데 실패했을 때, 호출되는 함수
 */
function onGeoError() {
  alert("Failed to load your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

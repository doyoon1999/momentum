document.addEventListener("DOMContentLoaded", function () {
  const dateDiv = document.getElementById("date");

  function updateDate() {
    const today = new Date();
    const optionsDate = { year: "numeric", month: "long", day: "numeric" };
    const optionsWeekday = { weekday: "long" };

    // 날짜와 요일을 각각 포맷팅
    const date = today.toLocaleDateString(undefined, optionsDate);
    const weekday = today.toLocaleDateString(undefined, optionsWeekday);

    dateDiv.textContent = `${date}, ${weekday}`;
  }

  // 초기 날짜 설정
  updateDate();

  // 매 분마다 날짜를 확인하고 업데이트
  setInterval(function () {
    const previousDate = dateDiv.textContent;
    updateDate();
    const currentDate = dateDiv.textContent;

    if (previousDate !== currentDate) {
      dateDiv.textContent = currentDate;
    }
  }, 60000);
});

function searchGoogle(event) {
  event.preventDefault();
  const queryInput = document.getElementById("searchQueryGoogle");
  const query = queryInput.value;
  const encodedQuery = encodeURIComponent(query);
  const googleSearchURL = `https://www.google.com/search?q=${encodedQuery}`;
  window.open(googleSearchURL, "_blank");
  queryInput.value = "";
}

function searchNaver(event) {
  event.preventDefault();
  const queryInput = document.getElementById("searchQueryNaver");
  const query = queryInput.value;
  const encodedQuery = encodeURIComponent(query);
  const naverSearchURL = `https://search.naver.com/search.naver?query=${encodedQuery}`; // 네이버 검색 URL을 생성합니다.
  window.open(naverSearchURL, "_blank");
  queryInput.value = "";
}

function searchYouTube(event) {
  event.preventDefault();
  const queryInput = document.getElementById("searchQueryYoutube");
  const query = queryInput.value;
  const encodedQuery = encodeURIComponent(query);
  const youtubeSearchURL = `https://www.youtube.com/results?search_query=${encodedQuery}`; // 유튜브 검색 URL을 생성합니다.
  window.open(youtubeSearchURL, "_blank");
  queryInput.value = "";
}

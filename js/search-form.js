function searchGoogle(event) {
  event.preventDefault();
  const query = document.getElementById("searchQuery").value;
  const encodedQuery = encodeURIComponent(query);
  const googleSearchURL = `https://www.google.com/search?q=${encodedQuery}`;
  window.open(googleSearchURL, "_blank");
}

function searchNaver(event) {
  event.preventDefault();
  const query = document.getElementById("searchQuery").value;
  const encodedQuery = encodeURIComponent(query);
  const naverSearchURL = `https://search.naver.com/search.naver?query=${encodedQuery}`; // 네이버 검색 URL을 생성합니다.
  window.open(naverSearchURL, "_blank");
}

function searchYouTube(event) {
  event.preventDefault();
  const query = document.getElementById("searchQuery").value;
  const encodedQuery = encodeURIComponent(query);
  const youtubeSearchURL = `https://www.youtube.com/results?search_query=${encodedQuery}`; // 유튜브 검색 URL을 생성합니다.
  window.open(youtubeSearchURL, "_blank");
}

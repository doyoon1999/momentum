const quotes = [
  {
    quote:
      "그것들을 이루기까지 포기하지 않고 버틴 것. 그게 대단하다고 생각합니다.",
    author: "김계란",
  },
  {
    quote: "남과 비교하지 말고, 발전하기 전의 나와 비교할 것.",
    author: "김계란",
  },
  {
    quote:
      "모두가 당신과 누군가를 비교하려고 하고, 당신이 조바심이 나더라도. 천천히, 그리고 오래가십시오. 그게 강한겁니다.",
    author: "김계란",
  },
  {
    quote:
      "포기하고 싶다고 느껴질 때, 포기하지 마십시오. 포기할까라고 생각될때, 생각하지 마십시오. 생각하는 순간 그 충동은 급속도로 확산됩니다.",
    author: "김계란",
  },
  {
    quote:
      "할 수가 없었기 때문에 포기하는 게 아니라, 포기했기 때문에 할 수 없었던거야.",
    author: "김계란",
  },
  {
    quote:
      "할 수 있는 모든 것을 해보기 전에 포기하지 마십시오. 할 수 있습니다.",
    author: "김계란",
  },
  {
    quote:
      "나와의 싸움에서 이기는 것. 중요하다. 하지만 매번 내게 싸움을 걸 수 있는 용기. 그것이 더 중요하다.",
    author: "매니 파퀴아오",
  },
  {
    quote: "슬픔의 유일한 치료제는 행동이다.",
    author: "헨리 루이스",
  },
  {
    quote:
      "진리란 금과 같아서 불려서 얻어지는 것이 아니라, 금이 아닌 것을 모두 씻어냄으로써 얻어진다.",
    author: "레프 톨스토이",
  },
  {
    quote: "포기하지 마세요. You can do it!",
    author: "GODS",
  },
];

const quoteContainer = document.querySelector("#quote");
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * 10)];

quote.innerText = `"${todayQuote.quote}"`;
author.innerText = `-${todayQuote.author}-`;

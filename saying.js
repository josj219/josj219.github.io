const sayingContainer = document.querySelector(".js-saying"),
    sayingTitle = sayingContainer.querySelector("h3");

const saying = [`"Things work out best for those who make the best of how things work out."`, `"If you are not willing to risk the usual, you will have to settle for the ordinary."`, `"Stop chasing the money and start chasing the passion." `, `"All our dreams can come true if we have the courage to pursue them." `
    , `"No one can make you feel inferior without your consent." `, `"Start where you are. Use what you have. Do what you can." `, `"Success is the sum of small efforts, repeated day-in and day-out."`,
`"행복의 비결은 무엇을 받아들이고 무엇을 흘려보낼 것인지 선택할 힘이 우리 스스로에게 있다는 것을 아는 것입니다."`,`"간단함이 훌륭함의 열쇠다."`,`"아이디어의 좋고 나쁨은 어떻게 실행하느냐에 따라 결정된다."`,`"시도해보지 않고는 누구도 자신이 얼마만큼 해낼 수 있는지 알지 못한다."`]

function getSaying() {
    let sayingNum = Math.floor(Math.random() * saying.length);
    sayingTitle.innerText = `${saying[sayingNum]}`;
}

function init() {
    getSaying();
    setInterval(getSaying, 10000);
}

init();
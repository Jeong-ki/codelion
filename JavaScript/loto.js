// Lotto - 1-45번까지 숫자를 6개

// 번호 뽑기
let ball = function() {
  let chooseBall = Math.floor(Math.random()*(45-1)+1);
  return chooseBall;
}

// li태그 추가
function plusLi(cball) {
  var ul = document.getElementById("nums");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(cball));
  ul.appendChild(li);
}

let num = [];
let cball;

while(num.length < 6) {
  cball = ball();
  if(!(cball in num)) {
    // setTimeout(plusLi, 1000, cball);
    plusLi(cball);
    num.push(cball);
  }
}
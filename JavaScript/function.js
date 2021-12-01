let k = 10;
function viewk(){
  console.log(k);
}
function changek(){
  let k = 20;
  console.log(k);
}

viewk();
changek();
console.log(k);

function add(a = 100, b = 200) { // parameter : a, b
  return a + b;
}
add(10, 20); //  argument: 10, 20

add(undefined, 300); // b에만 값을 넣기, 아래 방법 실무 사용(객체로 들어가는데 어케사용?)
console.log(add({b: 300}));
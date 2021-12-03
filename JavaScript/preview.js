// 맛보기 - this, closure

// 1. this
// function aboutThis() {
//   console.log(this);
// }

// aboutThis();

// let myObj = {
//   val1: 100,
//   func1: function () {
//       console.log(this);
//   }
// }

// myObj.func1();

// 2. closure: 테크닉. 폐쇄된 공간의 데이터에 접근하기 위한
function myFunction(){

  var val1 = "hello";

  return {getVal1 : function(){return val1}} // 변수를 보호하려고 함수로 감쌌다.
}

var val1 = 'gg';
let result = myFunction();
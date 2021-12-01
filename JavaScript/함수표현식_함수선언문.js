// console.log(add(10, 20)); // 호출식

// // 함수 선언식
// // 함수 호이스팅(맨 위로 올라감)
// function add(x, y) {
//   return x + y;
// }

// console.log(mul);
// // 함수 표현식
// // 변수 호이스팅됨(let,const로 호이스팅 안되게 가능)
// var mul = function(a, b) {
//   return a * b;
// }


// let add2 = function(a, b) {
//   return a + b;
// }

// 기명 함수 표현식(named function expression)
var namedFunc = function multiply(a, b) {
  return a * b;
};
// 익명 함수 표현식(anonymous function expression) => 이제 이것도 기명함수
var anonymousFunc = function(a, b) {
  return a * b;
};
// 익명 함수
(function(a, b) {
  return a * b;
});
console.log(namedFunc.name);     // multiply
console.log(anonymousFunc.name); // anonymousFunc
console.log((function(a, b) { return a * b; }).name); // ''
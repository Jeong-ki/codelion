// 1 string 평균값
let a = '5, 4, 10, 2, 5';
let arr = a.split(',');

let result = arr.reduce((acc, v) => {
  return parseInt(acc) + parseInt(v);
});
console.log(result/5);

// 2 각 자리수의 합
let x = [11, 22, 33, 111, 2];
// let sum = 0;
// for(let v of x) {
//   let str = v+"";
//   for(let i of str) {
//     sum += parseInt(i, 10);
//   }
// }
// console.log(sum);
let xs = x.join('');
console.log(xs);
let sum = 0;
for(let z of xs) {
  sum += parseInt(z);
}
console.log(sum);

// 3 - 1 반복문만 사용하여 숫자단위 콤마 찍기
let num = "10000000000";
let money = "";
let mLen = 0;
for(let i=num.length-1; i>=0; i--) {
  money = num[i] + money;
  mLen++;
  if(mLen%3===0 && num[i-1]!==undefined) { 
    money = ',' + money;
  }
}
console.log(money);

// 3 - 3 문자열 뒤집기
let s = 'hello world';
let temp = '';
for(let i=0; i<s.length; i++) {
  temp = s[i] + temp;
}
console.log(temp);
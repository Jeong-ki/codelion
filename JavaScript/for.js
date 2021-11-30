// for문의 다른 형태들
let array = [10, 20, 30, 40, 50];
let i = 0;

// for(; i < array.length;) {
//   console.log(array[i]);
//   i++;
// }

// array.forEach(element => console.log(element * 3));

// for (let j in array) {
//   console.log(array[j]);
// }

let test = 0;
for (let value of array) {
  test += value;
}
console.log(test/5);

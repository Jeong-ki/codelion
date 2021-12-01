let 과일 = ['복숭아', '딸기', '바나나'];
let 제주과일 = ['귤', '한라봉', '천혜향'];

let 자르기 = 과일.slice(1,3);  // 1~2
console.log(자르기);

let 자르기2 = 제주과일.splice(0, 2); // 0~두개, 원본 바뀜
console.log(자르기2);

console.log(과일);
console.log(제주과일);

// let 합치기 = 과일.concat(제주과일);
// console.log(합치기);

// let 정렬 = 과일.sort();
// console.log(정렬);
//객체 (object)

function sum(x, y){
  return x + y;
}

let person = {
  //key: value
  name: '이호준',
  age: 10,
  height : 30,
  weight : 40,
  이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'},
  기능 : sum
}
person.소속 = '바울랩';

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
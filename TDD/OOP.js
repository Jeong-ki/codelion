// 객체지향

// 1. 모듈 패턴 (값을 은닉하기위해 사용)
function Person() {
  let age = 15; // 값을 은닉
  
  return {
    getAge: function(){ return age },
    setAge: function(data){ age = data }
  }
}

const person = Person();
console.log(person.getAge());


// 2. 사용자 정의 타입 패턴 (생성자 함수), 메모리 효율적
function PersonType() {
  this.age = 25;
}

PersonType.prototype.getAge = function() {
  return this.age;
}

const instancePerson = new PersonType();

console.log(instancePerson.getAge());


// 3. 모듈 + 사용자 정의 타입
// function PersonType2() {
//   let age = 35;
  
//   function innerPersonType() { }

//   innerPersonType.prototype.getAge = function () {
//     return age;
//   }

//   return innerPersonType;
// }

// const Person3 = PersonType2();
// const person3 = new Person3();
// console.log(person3.getAge());

// IIFE 패턴으로 만들어보기
const PersonType3 = (function PersonType2() {
  let age = 45;
  
  function innerPersonType() { }

  innerPersonType.prototype.getAge = function () {
    return age;
  }

  return innerPersonType;
})();

const personType3 = new PersonType3(); 
console.log(personType3.getAge());

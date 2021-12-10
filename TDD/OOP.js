// 객체지향

// 1. 모듈 패턴
function Person() {
  let age = 35; // 값을 은닉
  
  return {
    getAge: function(){ return age },
    setAge: function(data){ age = data }
  }
}

const person = Person();
console.log(person.getAge());

// 2. 사용자 정의 타입 패턴 (생성자 함수)
function PersonType() {
  this.age = 35;
}

PersonType.prototype.getAge = function() {
  return this.age;
}

const instancePerson = new PersonType();

console.log(instancePerson.getAge());
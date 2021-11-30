let result = 0;

for(let i=1; i<101; i++) {
  if(i%3===0 || i%5===0) {
    result += i;
  }
}

console.log(result);
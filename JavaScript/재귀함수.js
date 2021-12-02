// ** factorial, reverse, fibonacci

function factorial(n){
  if(n <= 1) {
    return n
  }
  return n * factorial(n-1)
}
// factorial(5) == 5 * factorial(4) == 5 * 24
// factorial(4) == 4 * factorial(3) == 4 * 6
// factorial(3) == 3 * factorial(2) == 3 * 2
// factorial(2) == 2 * factorial(1) == 2 * 1
// factorial(1) == 1


function sigma(n){
  if(n <= 1) {
    return n
  }
  return n + sigma(n-1)
}
// sigma(5) == 5 + sigma(4) == 5 + 10
// sigma(4) == 4 + sigma(3) == 4 + 6
// sigma(3) == 3 + sigma(2) == 3 + 3
// sigma(2) == 2 + sigma(1) == 2 + 1
// sigma(1) == 1


function reverse(text) {
  text += ''
  if(text.length <= 1) {
      return text
  }
  return reverse(text.slice(1)) + text[0]
}
// reverse('hello') == reverse('ello') + 'h' == 'olle' + 'h'
// reverse('ello') == reverse('llo') + 'e' == 'oll' + 'e'
// reverse('llo') == reverse('lo') + 'l' == 'ol' + 'l'
// reverse('lo') == reverse('o') + 'l' == 'o' + 'l'
// reverse('o') == 'o'


// 1, 1, 2, 3, 5, 8, 13, 21
function fib(n){
  if(n <= 2) {
      return n
  }
  return fib(n-1) + fib(n-2)
}
// 왼쪽 function만 따라갔으니
// fib(4) == fib(3) + fib(2)
// fib(3) == fib(2) + fib(1) == 3
// fib(2) == 2
// fib(1) == 1

// 오른쪽 값인 fib(2)를 다시 해야하는 상황!!
// fib(2) == 2


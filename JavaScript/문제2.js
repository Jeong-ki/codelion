// 0~10000까지중 "8"의 개수
let text = '';
let count = 0;

for (let i = 0; i < 10001; i++) {
    text += i;
}
// console.log(text);
for (let i = 0; i < text.length; i++) {
    if (text[i] == '8'){
        count += 1;
    }
}

console.log(count);
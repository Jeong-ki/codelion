const fs = require('fs');
let answer = [];

fs.readFile('./username.csv', 'utf8', (err, data) => {
    // let a = data.split(/, |\n/);
    let a = data.split('\n');
    console.log(a);
    for(let x of a) {
      answer.push(x.split(', '));
    }
    let userData = answer.slice(1);
    for(let y of userData) {
      fs.mkdir(`./${y[0]}`, (err)=>{
        if(err) console.log(err)
      });
    }
    for(let y of userData) {
      fs.writeFile(`./${y[0]}/userinfo.txt`, `
      Username : ${y[0]}
      Identifier : ${y[1]}
      Job : ${y[2]}
      `, (err)=>{
          if(err) console.log(err)
      });
    }
})


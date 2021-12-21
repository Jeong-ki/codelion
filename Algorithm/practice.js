// class Stack {
//   constructor() {
//     this.arr = [];
//   }

//   push(data) {
//     this.arr.push(data);
//   }

//   // pop 기본 값 설정(마지막 값 삭제)
//   pop(index = this.arr.length - 1) {
//     if(index === this.arr.length - 1) {
//       return this.arr.pop();
//     }

//     // pop(index) 인덱스에 위치한 값 삭제
//     return this.arr.splice(index, 1);
//   }

//   empty() {
//     if(this.arr.length === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   top() {
//     return this.arr[this.arr.length - 1];
//   }

//   bottom() {
//     return this.arr[0];
//   }
// }

// // 테스트
// let s = new Stack();
// s.push(10);
// s.push(20);
// s.push(30);
// s.push(100);
// s.push(200);
// s.push(300);

// s.pop();
// s.pop(2);

// s.empty();
// s.top();
// s.bottom();

// // ------------------------------------------------------------

// // 연결리스트의 형태 구현, 아래와 같은 형태가 되어야함
// const list = {
//   head: {
//     value: 90,
//     next: {
//       value: 2,
//       next: {
//         value: 77,
//         next: {
//           value: 35,
//           next: null
//         }
//       }
//     }
//   }
// }

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }


// class LinkedList {
//   constructor() {
//     let init = new Node('init');
//     this.head = init;
//     this.tail = init;

//     this.현재노드 = undefined;
//     this.데이터수 = 0;
//   }

//   length() {
//     return this.데이터수;
//   }

//   append(data) {
//     let 새로운노드 = new Node(data);
//     this.tail.next = 새로운노드; // null이었던 tail의 next가 새로운 노드가 됨
//     this.tail = 새로운노드; // tail이 새로운 노드가 됨
//     this.데이터수 += 1;
//   }
// }

// // console
// l = new LinkedList();
// l.append(1);
// l.append(2);
// l.append(3);
// l.append(10);
// l.append(20);
// l.append(30);
// l.length()

// const fillZero = (n, arr) => { return ' '.repeat(n - arr.length) + arr };

// function solution(n, arr1, arr2) {
//   let answer = [];
//   let line;
//   for(let i=0; i<n; i++) {
//     line = (arr1[i] | arr2[i]).toString(2).replace(/1/g, '#').replace(/0/g, ' ');
//     // console.log(fillZero(n, line)); 
//     answer.push(fillZero(n, line));
//   }
//   return answer;
// }

// (9 | 30).toString(2).replace(/1/g, '#').replace(/0/g, ' ');

// solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]);


// Tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    let init = new Node(data);
    this.root = init;
    this.데이터수 = 0;
  }

  length() {
    return this.데이터수;
  }

  insert(data) {
    let 새로운노드 = new Node(data);
    let 순회용현재노드 = this.root;

    while(순회용현재노드) {
      // 중복된 값 탈락
      if(data === 순회용현재노드.data) return;

      if(data < 순회용현재노드.data) {
        // 들어온 데이터가 작으면 왼쪽에
        // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야한다.
        if(!순회용현재노드.left) {
          순회용현재노드.left = 새로운노드;
          return;
        }
        순회용현재노드 = 순회용현재노드.left;
      }
      if(data > 순회용현재노드.data) {
        // 들어온 데이터가 크면 오른쪽에
        // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야한다.
        if(!순회용현재노드.right) {
          순회용현재노드.right = 새로운노드;
          return;
        }
        순회용현재노드 = 순회용현재노드.right;
      }
    }
    this.데이터수 += 1;
  }

  DFS() {
    let 결과값 = [];
    let 스택 = [this.root];

    while(스택.length !== 0) {
      let current = 스택.pop();
      if(current.right) {
        스택.push(current.right);
      }
      if(current.left) {
        스택.push(current.left);
      }
      결과값.push(current.data);
    }
    return 결과값;
  }
  
  BFS(){
    let 결과값 = [];
    let 큐 = [this.root];

    while (큐.length !== 0) {
      let current = 큐.shift();
      if(current.left) {
        큐.push(current.left);
      }
      if(current.right) {
        큐.push(current.right);
      }
      결과값.push(current.data);
    }
    return 결과값;
  }
}

let t = new Tree(5); // root노드는 처음에!!
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);


let record = [
  "Enter uid1234 Muzi", 
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan"
];

function solution(record) {
  let result = [];
  let answer = [];
  let 유저정보 = {};

  for(const iterator of record) {
    const [상태, 아이디, 닉네임] = iterator.split(' ');
    if(상태 === 'Enter') {
      유저정보[아이디] = 닉네임;
      result.push([아이디, '님이 들어왔습니다.']);
    } else if (상태 === 'Leave') {
      result.push([아이디, '님이 나갔습니다.']);
    } else if (상태 === 'Change') {
      유저정보[아이디] = 닉네임;
    }
  }
  for(const [아이디, 메시지] of result) {
    answer.push(유저정보[아이디] + 메시지)
  }
  return answer;
}

solution(record);
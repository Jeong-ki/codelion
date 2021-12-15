class Stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
  }

  // pop 기본 값 설정(마지막 값 삭제)
  pop(index = this.arr.length - 1) {
    if(index === this.arr.length - 1) {
      return this.arr.pop();
    }

    // pop(index) 인덱스에 위치한 값 삭제
    return this.arr.splice(index, 1);
  }

  empty() {
    if(this.arr.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  bottom() {
    return this.arr[0];
  }
}

// 테스트
let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);

s.pop();
s.pop(2);

s.empty();
s.top();
s.bottom();

// ------------------------------------------------------------

// 연결리스트의 형태 구현, 아래와 같은 형태가 되어야함
const list = {
  head: {
    value: 90,
    next: {
      value: 2,
      next: {
        value: 77,
        next: {
          value: 35,
          next: null
        }
      }
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    let init = new Node('init');
    this.head = init;
    this.tail = init;

    this.현재노드 = undefined;
    this.데이터수 = 0;
  }

  length() {
    return this.데이터수;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    this.tail.next = 새로운노드; // null이었던 tail의 next가 새로운 노드가 됨
    this.tail = 새로운노드; // tail이 새로운 노드가 됨
    this.데이터수 += 1;
  }
}

// console
l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.length()

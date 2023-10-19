class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      let prevNode = currentNode;

      while (currentNode.next) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = null;
      this.tail = prevNode;
    }
    this.length--;
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    this.head = this.head.next;
    this.length--;
    return this;
  }

  //get by index basically
  get(index) {
    if (index < 0 || index >= this.length) return null;
    else {
      let count = 0;
      let current = this.head;

      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    }
  }

  set(val, index) {
    let foundNode = this.get(index);
    if (!foundNode) return false;
    else {
      foundNode.value = val;
      return true;
    }
  }

  insert(value, index) {
    let newNode = new Node(value);
    if (index < 0 || index > this.length)
      return false; // we not target = here because we have push method to push on last
    else if (index === 0) return this.unshift(value);
    else if (index === this.length) return this.push(value);
    else {
      let previousNode = this.get(index - 1);
      newNode.next = previousNode.next; // still previous k next m atual value h jo hme newNode k next m daalni h
      previousNode.next = newNode;
      this.length++;
      return this;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    else if (index === 0) this.shift();
    else if (index === this.length - 1) this.pop();
    else {
      let previousNode = this.get(index);
      let temp = previousNode.next;
      previousNode.next = temp.next;
      this.length--;
      return this;
    }
  }
}

let myLinkedList = new LinkedList();
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.pop();
myLinkedList.unshift(7);
myLinkedList.shift();
myLinkedList.push(13);
myLinkedList.get(1); // what is on 1st index
// console.log(myLinkedList.get(3));
myLinkedList.set(7, 2); // set 7 on 2nd index
// console.log(myLinkedList.set(7, 2));

myLinkedList.insert(6, 2); // insert 6 on 2nd index
myLinkedList.insert(2, 0); // insert 6 on 0 index - internally it uses unshift
myLinkedList.insert(8, 5); // insert 8 on 5th index - internally it uses push

myLinkedList.remove(0); // remove from front
myLinkedList.remove(4); // remove from last
myLinkedList.remove(1); // remove from middle
console.log(myLinkedList);

class Node {
   constructor(data){
    this.data = data;
    this.next = null;
    this.prev = null;
   }
}

let head = new Node(10)
let second = new Node(20)
let third = new Node(30)
let forth = new Node(40)
let fifth = new Node(50)

head.next = second;
second.next = third;
third.next = forth;
forth.next = fifth;

function printList(head){
    let temp = head;
    while(temp != null){
        console.log(temp.data);
        temp = temp.next
    }
}

printList(head)

console.log("-----------Reverse Linked list------------------ ")


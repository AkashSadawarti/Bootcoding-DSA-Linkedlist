class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head = new Node(10);
let second = new Node(20);
let third = new Node(30);
let forth = new Node(40);
let fifth = new Node(50);

head.next = second;
second.next = third;
third.next = forth;
forth.next = fifth;
fifth.next = null;

function getMiddleNode(head){
   let fastptr = head;
   let slowptr = head;
   while(fastptr != null && fastptr.next != null){
    fastptr = fastptr.next.next;
    slowptr = slowptr.next;
   }
   //return node from middle element
   return slowptr;
   //return only middle node 
   return slowptr.data;
}
let res = getMiddleNode(head);
console.log(res);
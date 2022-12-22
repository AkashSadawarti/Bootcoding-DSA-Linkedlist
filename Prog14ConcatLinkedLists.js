//Linked list 1 
console.log('-----------------------linkedlist 1-------------------')
class Node1 {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head1 = new Node1(10)
let second = new Node1(20)
let third = new Node1(30)
let fouth = new Node1(40)

head1.next = second;
second.next = third;
third.next = fouth;

function printLinkedlist1(head1) {
    let temp = head1;
    while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
    }
}
printLinkedlist1(head1);
console.log('---------------------LinkedList 2--------------------------')

let head2 = new Node1(101);
let fifth = new Node1(102);
let sixth = new Node1(103);
let seventh = new Node1(104);

head2.next = fifth;
fifth.next = sixth;
sixth.next = seventh;

function printLinkedlist2(head2){
    let temp = head2;
    while(temp != null){
        console.log(temp.data);
        temp = temp.next;
    }
}
printLinkedlist2(head2)
console.log('---------------------Concated linked list----------------')

function concatlinkedlist(head1,head2){
    t1 = head1;
    t2 = head2;
    while(t1.next != null)
    {
        t1 = t1.next;
    }
    t1.next = t2;
   
    printLinkedlist1(head1) 
}

concatlinkedlist(head1,head2)
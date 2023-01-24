class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head = new Node(10)
let scecond = new Node(20)
let third = new Node(30)
let forth = new Node(40)
let fifth = new Node(50)

head.next = second;
second.next = third;
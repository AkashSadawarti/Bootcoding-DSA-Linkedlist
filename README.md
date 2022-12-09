# Bootcoding-DSA-Linkedlist
##  Linked List..?
#### A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers. In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list. For eg refer Fig.1 below
### Linked List Diagram:

![LinkedList](https://user-images.githubusercontent.com/96038145/206668505-7990f68a-2827-4eb2-ae02-180396703d40.png)

#### To Print linked list :
![Node1](https://user-images.githubusercontent.com/96038145/206672209-32db78d8-d57e-4403-80cf-2027269cfc8a.png)
  #####     fig. Node Diagram
```
//Class is created for first node with data  : NODE 1
class Node{

constructor(data ){
   this.data = data
   this.next = null;         
}
}

//Defining nodes with its values

let head = new Node(10)
let second = new Node(20)
let third = new Node(30)
let fourth = new Node(40)

//Nodes path is defined eg Node1(head)-->node2-->node3-->node4 

head.next = second;    eg. Node1(head)-->node2
second.next = third;   eg. Node1(head)-->node2-->node3
third.next = fourth;   eg. Node1(head)-->node2-->node3-->node4

//Program for node to continue next until it becomes null.

function printlist(head){
let temp = head
while(temp != null){
console.log(temp.data);
temp = temp.next;
  }
}
printlist(head)
```
#### Output Result of Linked nodes : 
![LinkedLIst3 drawio](https://user-images.githubusercontent.com/96038145/206674865-e5c5d228-f6c2-45ae-9a31-337c0d69587d.png)

### Deletion Last Node :
In this Program, last node of linked list will be removed, Node 4 will be null. Refer below diagram 

![DeleteLastNode drawio](https://user-images.githubusercontent.com/96038145/206678792-62e1edea-f4e6-48b8-979a-0b2a093b5a39.png)
#### Code:
```
function deletelastNode(head){
    console.log("DELETE Last Node")
     temp = head
     while(temp != null){
        if(temp.next != null && temp.next.next == null){
            temp.next = null;
        }
        temp = temp.next;
     }
     printlist(head)
    } 
    printlist(head)
deletelastNode(head)
```
### Deletion First Node :
In this Program, First node of Linked list will be removed, Node 1 will be null. Refer below diagram

![DeleteFirstnode drawio](https://user-images.githubusercontent.com/96038145/206683651-5e44cbd3-4690-48cb-8068-41ac5dcfa9ca.png)
#### Code :
steps : 1) Assigning head to second node. i.e Head = head.next (Head will become Second Node).
```  
 //Delete First node from list
    function deletefirstnode(head){
        console.log('Delete first node')
        head = head.next;
        printnodelist(head);
    }
     printnodelist(head)
    deletefirstnode(head);
```
### Insertion First Node :
In this Program, new node will be added in linked list,for eg. New node will become head and and hold reference of previous head. Refer below diagram 
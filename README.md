# Bootcoding-DSA-Linkedlist
##  Linked List..?
#### A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers. In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list. For eg refer Fig.1 below
### Linked List Diagram:

![LinkedList](https://user-images.githubusercontent.com/96038145/206668505-7990f68a-2827-4eb2-ae02-180396703d40.png)

#### To Print linked list :
![Node1](https://user-images.githubusercontent.com/96038145/206672209-32db78d8-d57e-4403-80cf-2027269cfc8a.png)
  #####     fig. Node Diagram
```
//Class is created for first node with data as parameter  : NODE 1
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
// method to print list

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
- Initialise head(first node) in temp variable. i.e. ```temp = head```
- Traversing a linked list till the last node of list.
- if condition checks the next two nodes starting from head to be null i.e. ```temp.next.next == null``` 
- If condition satisfies it would stores next element to be null i.e ```temp.next = null``` which eventually eliminates the next node. 

```
//Delete last Node
function deletelastNode(head){
    console.log("DELETE Last Node")
     temp = head
     while(temp != null){
        if(temp.next != null && temp.next.next == null){
            temp.next = null;
        }
        temp = temp.next;
     }
     printlist(head)    //Method to print linked list
    } 
    printlist(head)
deletelastNode(head)
```
### Deletion First Node :
In this Program, First node of Linked list will be removed, Node 1 will be null. Refer below diagram
![DeleteFirstnode drawio (3)](https://user-images.githubusercontent.com/96038145/206852455-5eb96de6-fb73-44f0-9459-78b4df9e3c95.png)

#### Code :
- Assigning head to second node. i.e ```Head = head.next``` (Head will become Second Node).
```  
 //Delete First node from list
    function deletefirstnode(head){
        console.log('Delete first node')
        head = head.next;
        printlist(head);      //Method to print linked list
    }
     printnodelist(head)
    deletefirstnode(head);
```
### Insertion First Node :
In this Program, new node will be added in linked list in first position,for eg. New node will become head and and hold reference of previous head. Refer below diagram 

#### Insertion Diagram :
![InsertNewNode drawio](https://user-images.githubusercontent.com/96038145/206739951-64eeadeb-144b-48a9-a06b-775274538487.png)

#### Code :
- Define a new node i.e ```let newNode = new Node(200)```
- New node is initialised as new head and previous head is next node as``` newNode.next = head``` and ```head = newNode```.
- Print method is called to print new linked list. 
```
//Insert new node in first position
 function InsertnewNode(head){
        console.log("Insert new Node First")
        let newNode = new Node(200)
        newNode.next = head;
        head = newNode
        printlist(head)  //Method to print linked list
    }
    InsertnewNode(head)
```
### Insertion Last Node : 
In this Program, new node will be added in linked list in last position,for eg. New node will become last Node of linked list. Refer below diagram 

#### Insertion Diagram :
![DeleteFirstnode drawio (5)](https://user-images.githubusercontent.com/96038145/206852677-250fae5b-ad7a-4ba6-aad6-09f983c891c4.png)

#### Code :
- Create a new node. i.e ``` let lastNode = new Node(500)```.
- Initialise head in any temporary variable. i.e. let ```t = head``` and traverse the linked list using while loop till last node.
- As the last node is identified assign newly created node to last node of linked list. i.e ```t.next = lastNode```
- ```printlist()``` method is called to print newly modified list.
```
    //insert Node in last position
    function Insertlastnode(head){
        console.log("Insert new node Last")
        let lastNode = new Node(501)
        let t = head;
        while(t.next != null){    
            t = t.next
            }
            t.next = lastNode
        printlist(head)        //Method to print linked list
    }
    Insertlastnode(head)
```

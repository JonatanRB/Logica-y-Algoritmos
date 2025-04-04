class LinkedListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{

    constructor(){
        this.head = LinkedList();
    }

    appendElemet(nodo){
        if(this.head.next === null){
            this.head.next = node;
            return
        }
        let currentNode = this.head.node;
        while(currentNode != null){
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }

    printAllData(){
        let currentNode = this.head;
    }
}

const nodo1 = new LinkedListNode(2);
const node2 = new LinkedListNode(5);

console.log(nodo1, node2);

node2.next = node2;

console.log(nodo1);


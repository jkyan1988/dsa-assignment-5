// Problem #1: Merge Sort
// Description: Congratulations! You were just hired to be a junior backend engineer at Hanawilo! As the first task at Hanawilo, your manager has asked you to implement a sorting algorithm using the Merge sort of the payloads coming back from the MongoDB database. The website currently is running a very slow sorting algorithm and it is driving away customers due to the slowness, therefore, as your first task, he has assigned you to rewrite the sorting algorithm for this payload returned from the MongoDB API fetch call.
// He has asked to return the following data in two sorting options:
// 1.Merge sort (ascending order) by the rank
// 2.Merge sort (ascending order) by the ratings AND rank
// Please see below for the data returned from the database
// const data = {
//     results: {
//         payload: [
//             {
//                 profile: {
//                     name: 'Tony',
//                     rank: 9,
//                     favorites: [
//                         {
//                             title: 'Spider-Man',
//                             rating: 5
//                         },
//                         {
//                             title: 'Spongebob',
//                             rating: 9
//                         }
//                     ]
//                 }
//             },
//             {
//                 profile: {
//                     name: 'John',
//                     rank: 2,
//                     favorites: [
//                         {
//                             title: 'Hulk',
//                             rating: 1
//                         },
//                         {
//                             title: 'Top Gun',
//                             rating: 8
//                         }
//                     ]
//                 }
//             }
//         ]
//     }
// }
// console.log(data.results.payload[1].profile.rank)
// data.results.payload[1].profile.rank


// split the array of payload into two arrays
// compare the ranking of each array
// merge the array back 

// const sortThisByRank = data.results.payload.sort(
//     (rankA, rankB) => rankA.profile.rank - rankB.profile.rank,
// )
// console.log(sortThisByRank)

// const mergesort = (sortThisByRank) => {

//     let left = sortThisByRank[0]
//     let right = sortThisByRank[1]

// }
// console.log(mergesort(sortThisByRank))

// Problem #2: Singly Linked List: 
// Please construct the two classes with the appropriate properties for the Node and SLL, then for the SLL, 
// please write the methods for: 
// Push()
// Pop()

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }
    push(val) {
        let newNode = newNode(val)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++;
        return this
    }
    pop() {
        if (!this.head) return;

        let current = this.head
        let newTail = current

        while (current.next) {
            newTail = current
            current = current.next
        }

        this.tail = newTail

        this.tail.next = null

        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        return current
    }
}



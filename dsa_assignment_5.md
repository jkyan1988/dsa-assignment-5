<h1>WEEK 5 ASSIGNMENT</h1>

Directions: Please answer the following questions on a VS-Code Editor page. Push up the code to a branch on GitHub called: week5
Due: Saturday by 11 AM CST<br><br>


Problem #1: Merge Sort<br>
Description: Congratulations! You were just hired to be a junior backend engineer at Hanawilo! As the first
task at Hanawilo, your manager has asked you to implement a sorting algorithm using the Merge sort of the
payloads coming back from the MongoDB database. The website currently is running a very slow sorting
algorithm and it is driving away customers due to the slowness, therefore, as your first task, he has assigned
you to rewrite the sorting algorithm for this payload returned from the MongoDB API fetch call.<br>
He has asked to return the following data in two sorting options:<br>
1.Merge sort (ascending order) by the rank<br>
2.Merge sort (ascending order) by the ratings AND rank<br>
Please see below for the data returned from the database<br>

    const data = {
        results: {
            payload: [
                {
                    profile: {
                            name: 'Tony',
                            rank: 9,
                            favorites: [
                                {
                                    title: 'Spider-Man',
                                    rating: 5
                                },
                                {
                                    title: 'Spongebob',
                                    rating: 9
                                }
                            ]
                    }
                },
                {
                    profile: {
                            name: 'John',
                            rank: 2,
                            favorites: [
                                {
                                    title: 'Hulk',
                                    rating: 1
                                },
                                {
                                    title: 'Top Gun',
                                    rating: 8
                                }
                            ]
                    }
                }
            ]
        }
    }

Problem #2: Singly Linked List: 
Please construct the two classes with the appropriate properties for the Node and SLL, then for the SLL, 
please write the methods for: <br>
Push()<br>
Pop()<br>

Solution:

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


Problem #3: Please solve this pattern using time complexity of O(n) and using the CORRECT PATTERN!

<img src="assignment_5_problem_3.jpg" alt="">

Solution

    /**
    * @param {number[]} height
    * @return {number}
    */
    // height = [1, 8, 6, 2, 5, 4, 8, 3, 7] // 49
    // height = [1, 1] // 1
    const maxArea = (height) => {

        let left = 0
        let right = height.length - 1

        let maxWater = 0

        while (left < right) {

            let minHeight = Math.min(height[left], height[right])

            maxWater = Math.max(maxWater, minHeight * (right - left))

            if (height[left] < height[right]) {
                left++
            } else {
                right--
            }
        }
        return maxWater
    };

    console.log(maxArea(height)) 
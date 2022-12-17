// Problem #1: Merge Sort
// Description: Congratulations! You were just hired to be a junior backend engineer at Hanawilo! As the first task at Hanawilo, your manager has asked you to implement a sorting algorithm using the Merge sort of the payloads coming back from the MongoDB database. The website currently is running a very slow sorting algorithm and it is driving away customers due to the slowness, therefore, as your first task, he has assigned you to rewrite the sorting algorithm for this payload returned from the MongoDB API fetch call.
// He has asked to return the following data in two sorting options:
// 1.Merge sort (ascending order) by the rank
// 2.Merge sort (ascending order) by the ratings AND rank
// Please see below for the data returned from the database
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
// console.log(data.results.payload[1].profile.rank)
// data.results.payload[1].profile.rank


// split the array of payload into two arrays
// compare the ranking of each array
// merge the array back 

function merge(arr1, arr2) {
    // Create a new empty array to store the merged result
    let merged = [];

    // Set variables to track the current index in each array
    let i = 0;
    let j = 0;

    // Loop while there are still elements in either array
    while (i < arr1.length || j < arr2.length) {
        // If both arrays have elements, compare the elements and add the smaller one to the merged array
        if (i < arr1.length && j < arr2.length) {
            if (arr1[i].profile.favorites[0].rating < arr2[j].profile.favorites[0].rating ||
                (arr1[i].profile.favorites[0].rating === arr2[j].profile.favorites[0].rating && arr1[i].profile.rank < arr2[j].profile.rank)) {
                merged.push(arr1[i]);
                i++;
            } else {
                merged.push(arr2[j]);
                j++;
            }

            // If only the first array has elements, add its element to the merged array
        } else if (i < arr1.length) {
            merged.push(arr1[i]);
            i++;

            // If only the second array has elements, add its element to the merged array
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // Return the merged array
    return merged;
}

function mergeSort(arr) {
    // If the array has only one element, return it
    if (arr.length === 1) {
        return arr;
    }

    // Split the array into two halves
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    // Recursively sort the left and right halves
    left = mergeSort(left);
    right = mergeSort(right);

    // Merge the sorted left and right halves and return the result
    return merge(left, right);
}

// Use the mergeSort function to sort the array of objects by rating and then by rank
// let sortedData = mergeSort(data.results.payload);
let sortedData = mergeSort(data.profile.rank);

console.log(sortedData)

// Problem #2: Singly Linked List: 
// Please construct the two classes with the appropriate properties for the Node and SLL, then for the SLL, 
// please write the methods for: 
// Push()
// Pop()

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = null;
//     }
//     push(val) {
//         let newNode = newNode(val)

//         if (!this.head) {
//             this.head = newNode
//             this.tail = newNode
//         } else {
//             this.tail.next = newNode
//             this.tail = newNode
//         }

//         this.length++;
//         return this
//     }
//     pop() {
//         if (!this.head) return;

//         let current = this.head
//         let newTail = current

//         while (current.next) {
//             newTail = current
//             current = current.next
//         }

//         this.tail = newTail

//         this.tail.next = null

//         this.length--

//         if (this.length === 0) {
//             this.head = null
//             this.tail = null
//         }

//         return current
//     }
// }


// Problem #3: Please solve this pattern using time complexity of O(n) and using the CORRECT PATTERN!

//    /**
//     * @param {number[]} height
//     * @return {number}
//     */
// pointers??
// height defined
// height = [1, 8, 6, 2, 5, 4, 8, 3, 7] // 49
// // height = [1, 1] // 1
// const maxArea = (height) => {
//     // two points left and right
//     let left = 0
//     let right = height.length - 1
//     // set max area to 0
//     let maxWater = 0
//     // while condition for left < right
//     while (left < right) {
//         // determine the lesser of two points
//         let minHeight = Math.min(height[left], height[right])
//         // determine max area between max and min height of the two points
//         maxWater = Math.max(maxWater, minHeight * (right - left))
//         // conditional to keep points going 
//         if (height[left] < height[right]) {
//             left++
//         } else {
//             right--
//         }
//     }
//     return maxWater
// };

// console.log(maxArea(height)) 
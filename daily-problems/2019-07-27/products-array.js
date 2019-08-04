'use strict'

/*
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at 
index i of the new array is the product of all the numbers in the original 
array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be
[120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would
be [2, 3, 6].

Follow-up: what if you can't use division?
*/

const productArray = (arr) => {
    let newArr = []
    for(let i=0; i<arr.length; i++){
        let val = 1;
        for(let j=0; j<arr.length; j++){
            if(j != i){
                val *= arr[j]
            }
        }
        newArr[i] = val
    }
    return newArr
}

let a1 = [1, 2, 3, 4, 5]
let a2 = [3, 2, 1]

console.log(a1)
console.log(productArray(a1))

console.log(a2)
console.log(productArray(a2))
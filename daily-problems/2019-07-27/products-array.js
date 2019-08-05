#!/usr/bin/env node

'use strict'

/**
 * Returns a new array where each each element at index i of the 
 * new array is the product of all the numbers in the original array
 * except the one at i.
 * 
 * @param {Array} arr
 * @returns {Array} New array.
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

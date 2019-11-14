#!/usr/bin/env node

'use strict'

/**
 * 
 * @param {Array<Integer>} arr 
 */
const findLowestPositiveInteger = (arr) => {
    let lpi = 1
    arr.forEach(value => {
        console.log(`lpi: ${lpi}, value: ${value}`)
        if(value > 0 && value <= lpi){
            lpi++
        }
    })

    console.log(`given array: %j`,arr)
    console.log(`The lowest positive integer is: ${lpi}`)
    console.log()
}

findLowestPositiveInteger([3, 4, -1, 1])
findLowestPositiveInteger([-1, -5, -89])
findLowestPositiveInteger([1, 2, 0])

const findLowestPositiveIntegerWithReduce = (acc,value) => {
    if(acc < 0){
        acc = 1
    }
    
    if(value > 0 && value <= acc){
        acc++
    }
    return acc
}

let answer = [-1, -5, -89].reduce(findLowestPositiveIntegerWithReduce)
console.log(`answer: ${answer}`)
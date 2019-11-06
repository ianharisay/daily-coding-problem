#!/usr/bin/env node

'use strict'

const nvl = (n, val) => {
    if (n == null) {
        return val
    }
    return n
}

/**
 * 
 * @param {Array<Integer>} arr 
 */
const nextLowestPositiveInteger = (arr) => {
    let lpi =  arr.reduce((acc,val) => {
        if(val > acc){
            acc = val + 1
        }
        return acc > 0 ? acc : 1
    })

    console.log(`given array: %j`,arr)
    console.log(`next lowest positive integer is: ${lpi}`)
    console.log()
}

nextLowestPositiveInteger([3, 4, -1, 1])

nextLowestPositiveInteger([-1, -5, -89])

nextLowestPositiveInteger([1, 2, 0])



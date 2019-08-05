#!/usr/bin/env node

'use strict'

let arrays = [[10, 15, 30], [12, 15, 20], [17, 20, 32]]
let combined = []
arrays.forEach((ele) => {
    console.log(ele)
    combined = combined.concat(ele).sort()
})

console.log(combined.sort())

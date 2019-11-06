# Daily Coding Problem

This project houses my solutions to the Daily Coding Problems site.

---
#### 2019-07-26

This problem was recently asked by Google.

Given a list of numbers and a number `k`, return whether any two numbers from the list add up to `k`.

For example, given `[10, 15, 3, 7]` and `k` of `17`, return true since `10 + 7` is `17`.

Bonus: Can you do this in one pass?

---
#### 2019-07-27

This problem was asked by Uber.

Given an array of integers, return a new array such that each element at 
index `i` of the new array is the product of all the numbers in the original array except the one at `i`.

For example, if our input was `[1, 2, 3, 4, 5]`, the expected output would be
`[120, 60, 40, 30, 24]`. If our input was `[3, 2, 1]`, the expected output would
be `[2, 3, 6]`.

Follow-up: what if you can't use division?

[Solution](./2019/2019-07-27/products-array.js)

---
#### 2019-07-28

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class
```
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```
The following test should pass:
```
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
```

[Solution](./2019/2019-07-28/combine-and-sort-arrays.js)

---
#### 2019-07-30

This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input `[3, 4, -1, 1]` should give `2`. The input `[1, 2, 0]` should give `3`.

You can modify the input array in-place.

[Solution](./2019/2019-07-30/solution.js)

---
#### 2019-08-03

Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:
``` 
   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
```

---
#### 2019-08-03

This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be `0` or negative.

For example, `[2, 4, 6, 2, 5]` should return `13`, since we pick `2`, `6`, and `5`. `[5, 1, 1, 5]` should return `10`, since we pick `5` and `5`.

Follow-up: Can you do this in O(N) time and constant space?

---
#### 2019-08-05

This problem was asked by Apple.

Implement a job scheduler which takes in a function `f` and an integer `n`, and calls `f` after `n` milliseconds.

---
#### 2019-09-29 [Easy]

This problem was asked by Amazon.

Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.

For example, given the following matrix:
```
[[1,  2,  3,  4,  5],
 [6,  7,  8,  9,  10],
 [11, 12, 13, 14, 15],
 [16, 17, 18, 19, 20]]
```
You should print out the following:
```
1
2
3
4
5
10
15
20
19
18
17
16
11
6
7
8
9
14
13
12
```

---
#### 2019-11-02 [Medium]

This problem was asked by Microsoft.

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example, given `[100, 4, 200, 1, 3, 2]`, the longest consecutive element sequence is `[1, 2, 3, 4]`. 
Return its length: `4`.

Your algorithm should run in `O(n)` complexity.

---
#### 2019-11-03 [Easy]

This problem was asked by Google.

You are in an infinite 2D grid where you can move in any of the 8 directions:
```
 (x,y) to
    (x+1, y),
    (x - 1, y),
    (x, y+1),
    (x, y-1),
    (x-1, y-1),
    (x+1,y+1),
    (x-1,y+1),
    (x+1,y-1)
```
You are given a sequence of points and the order in which you need to cover the points. Give the minimum number of steps in which you can achieve it. You start from the first point.

Example:
```
Input: [(0, 0), (1, 1), (1, 2)]
Output: 2
```
It takes 1 step to move from `(0, 0)` to `(1, 1)`. It takes one more step to move from `(1, 1)` to `(1, 2)`.

---
#### 2019-11-04 [Easy]

This problem was asked by Alibaba.

Given an even number (greater than 2), return two prime numbers whose sum will be equal to the given number.

A solution will always exist. See [Goldbach’s conjecture](https://en.wikipedia.org/wiki/Goldbach%27s_conjecture).

Example:
```
Input: 4
Output: 2 + 2 = 4
```
If there are more than one solution possible, return the lexicographically smaller solution.

If [a, b] is one solution with a <= b, and [c, d] is another solution with c <= d, then
```
[a, b] < [c, d]
```
If a < c OR a==c AND b < d.

---
#### 2019-11-05 [Medium]

This problem was asked by Lyft.

Given a list of integers and a number K, return which contiguous elements of the list sum to K.

For example, if the list is [1, 2, 3, 4, 5] and K is 9, then it should return [2, 3, 4], since 2 + 3 + 4 = 9.
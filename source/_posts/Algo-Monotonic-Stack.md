---
title: Monotonic Stack
index_img: /images/coding/algorithm.jpeg
banner_img: /images/coding/algorithm.jpeg
excerpt: A stack whose elements are monotonically increasing or decreasing
categories: Algorithms
tags:
  - Coding
  - Data Structure
date: 2025-02-22 17:27:56
updated: 2025-02-22 17:27:56
---

## Definition
**Monotonic Stack** maintaining elemenst in either increasing or decreasing order. It is commonly used to efficiency solve problems such as finding the next greater or smaller element in an array etc.

![Monotonic Stack](/images/coding/MonotonicStack.png)

### Types of Monotonic Stack

Monotonic Stacks can be broadly classified into two types: 

* Monotonic Increasing Stack  
* Monotonic Decreasing Stack

#### Monotonic Increasing Stack
> A **Monotonically Increasing Stac**k is a stack where elements are placed in increasing order from the bottom to the top. Each new element added to the stack is **greater than or equal to** the one below it. If a new element is smaller, we remove elements from the top of the stack until we find one that is smaller or equal to the new element, or until the stack is empty. This ensures that the stack always stays in **increasing order**.

To achieve a monotonic increasing stack, you can follow these step-by-step approaches:

```
* Initialize an empty stack.
* Iterate through the elements and for each element:
    * while stack is not empty AND top of stack > the current element
        * pop element from the stack
    * Push the current element onto the stack.
* At the end of the iteration, the stack will contain the monotonic increasing order of elements.
```

#### Monotonic Decreasing Stack
> A **Monotonically Decreasing Stack** is a stack where elements are placed in decreasing order from the bottom to the top. Each new element added to the stack must be **smaller than or equal to** the one below it. If a new element is greater than top of stack then we remove elements from the top of the stack until we find one that is greater or equal to the new element, or until the stack is empty. This ensures that the stack always stays in **decreasing order**.

To achieve a monotonic decreasing stack, you can follow these step-by-step approaches:

```
* Start with an empty stack.
* Iterate through the elements of the input array.
    * While stack is not empty AND top of stack < current element:
        * pop element from the stack
    * Push the current element onto the stack.
* After iterating through all the elements, the stack will contain the elements in monotonic decreasing order.
```

### Costs
|       | Worst Case |
| ----- | ---------- |
| space | $O(n)$     |
| time  | $O(n)$     |

### Suitable situation

- Finding the next greater element
- Finding the next smaller element
- ...

### Strength & Weaknesses

**Strength:**  

* Efficient for finding the next greater or smaller element in an array.
* Useful for solving a variety of problems, such as finding the nearest smaller element or calculating the maximum area of histograms.
* In many cases, the time complexity of algorithms using monotonic stacks is linear, making them efficient for processing large datasets.

**Weaknesses:**  

* Requires extra space to store the stack.
* May not be intuitive for beginners to understand and implement.

## Relevant Coding Questions

- [LC84. Largest Rectangle in Histogram](https://leetcode.cn/problems/largest-rectangle-in-histogram/description/)

## References
- [Monotonic Stack](https://liuzhenglaichn.gitbook.io/algorithm/monotonic-stack)
- [Geeksforgeeks: Introduction to Monotonic Stack](https://www.geeksforgeeks.org/introduction-to-monotonic-stack-2/)

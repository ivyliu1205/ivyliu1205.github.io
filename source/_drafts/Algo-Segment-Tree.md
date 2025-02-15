---
title: Segment Tree
index_img: /images/coding/algorithm.jpeg
banner_img: /images/2025.01/sum-segment-tree.png
excerpt: A Segment Tree is a data structure that stores information about array intervals as a tree.
categories: Algorithms
tags:
  - Coding
  - Data Structure
date: 2025-01-02 22:25:07
updated: 2025-01-02 22:25:07
---
## Definition
{% note info %}
A **Segment Tree** is a data structure that stores information about array intervals as a tree. This allows answering range queries over an array efficiently, while still being flexible enough to allow quick modification of the array. This includes finding the sum of consecutive array elements  
$a[l ... r]$ , or finding the minimum element in a such a range in  
$O(\log n)$  time. Between answering such queries, the Segment Tree allows modifying the array by replacing one element, or even changing the elements of a whole subsegment (e.g. assigning all elements  
$a[l ... r]$  to any value, or adding a value to all element in the subsegment).

One important property of Segment Trees is that they require only a linear amount of memory. 
{% endnote %}

### Costs
|        | Worst Case |
| ------ | ---------- |
| space  |            |
| insert |            |
| lookup |            |

### Suitable situation

### Strength & Weaknesses

**Strength:**
- XX
- XX

**Weaknesses:**
- XX
- XX

## Relevant Coding Questions

#### [Lc 307. Range Sum Query - Mutable](https://leetcode.cn/problems/range-sum-query-mutable/)

- [画图解释](https://leetcode.cn/problems/range-sum-query-mutable/solution/xian-duan-shu-zu-shou-hui-tu-xiang-yi-qing-er-chu-/)
- [Python代码](https://leetcode.cn/problems/range-sum-query-mutable/solution/shu-zhuang-shu-zu-xian-duan-shu-pythonsh-tjn5/)

## Similar Data Structures


## References
- [Algorithms for Competitive Programming](https://cp-algorithms.com/data_structures/segment_tree.html)
- [OI Wiki: 线段树](https://oi-wiki.org/ds/seg/)

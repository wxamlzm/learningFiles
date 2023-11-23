/*
 * @Author: zd
 * @Date: 2023-11-23 14:47:43
 * @LastEditors: zd
 * @LastEditTime: 2023-11-23 14:51:00
 * @FilePath: \learningFiles\note\面试题\js\faltArray.js
 * @Description: 将数组扁平化并去除其中的重复数据，最终的到一个升序且不重复的数组
 */

const arr = [
  [1, 2, 3],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10
]

function flattenArray (arr) {
  return arr.reduce((flat, current) => {
    return flat.concat(Array.isArray(current) ? flattenArray(current) : current)
  }, [])
}

const newArranty = flattenArray(arr)
console.log(newArranty)

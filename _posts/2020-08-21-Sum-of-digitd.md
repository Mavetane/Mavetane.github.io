---
layout: Post
titile: Sum of digits Digital/Robot
date: 2020-08-21
---

Collen Maphike

# Description of kata

Digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
he digital root of a positive integer is found by summing the digits of the integer. If the resulting value is a single digit then that digit is the digital root. If the resulting value contains two or more digits, those digits are summed and the process is repeated. This is continued as long as necessary to obtain a single digit.

## The steps I took to solve this kata

Steps:

1.Find out all the digits of a number
2.Add all the number one by one
3.If the final sum is double digit, add again to make it single digit
4.The result obtained in single digit is the Digital root of number

### The solution itself

function digital_root(n) {
  if (String(n).length === 1) return n

  const numberDestructured = [...String(n)]
  const total = numberDestructured.reduce(
    (accumulator, current) => accumulator + Number(current),
    0
  )

  return digital_root(total)
}
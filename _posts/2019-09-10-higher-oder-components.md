---
layout: post
title: Higher Order Components (HOC)
date: 2019-09-10
---

Collen Maphike

# What is a HOC

A higher-order function is a function that accepts another function as an argument. The goal of this pattern is to decompose the logic into simpler and smaller functions that can be reused. A rule of thumb is a function does just one task and does it well. This also avoids side effects (changing anything that is not owned by the function), and makes debugging and maintance a whole lot easier. A HOC take another component as argument and returns something.

## Await and React Promise

The promise consturctor takes one argument, a callback with two parameters, resolve and reject. Do something within, perhaps async, then call resolve if everything worked, otherwise call reject. Like throw in plain old JavaScript, it's customary, but not required, to reject with an Error boject. Promise are cleaner wway for running asychronous tasks to look more like synchronus and also provide catching mechanism which are not in callbacks. Promises are built over callbacks. Promises are built over callbacks. Promises are a very mighty abstraction, allow cleaner and better, funtional code with less error-prone boilerplate. I wouldrecomment to get the flow of how stuff works and think in terms of promises way.



---
layout: post
title: Redux thunk
date: 2020-02-21
---

Collen Maphike

# What is a thunk?

A thunk is a subroutine used to add an additional calculation into another subroutine. They are used to setback calculations until the calculatoins  results is needed elsewhere.
They have different other applications in the compiler code generation and modular programming.

## How does it work?

It is done in source code by wrapping an argument in an anonymous function that has no params of its own, thus preventing the expression from being evaluated until a receiving function calls the anonymous function.

## Alternatives to redux thunk

Redux-saga, Redux observable, and Vuex..
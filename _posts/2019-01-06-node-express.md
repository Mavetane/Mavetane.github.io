---
layout: post
title: Express/ Node.js
date: 2019-01-06
---

Collen Maphike

# What is express?

Express is a popular unopinionated web framework, written in JavaScript and hosted within the Node.js runtime environment. The module explains some of the key benefits of this framework, how to set up your development environment.

## Fallthrough

When this option is true, client errors such as a bad request or requests to a non-existent file will cause this middleware to simply call next() to invoke the next middleware in the stack. When false, these errors(even 404s), will invoke next(err).
Set this option to true so you can map multiple physical directoires to the same web address or for routes to fill non-existent files.
Use false if you have mounted this middleware at a path designed to be strictly a single file system directory, which allows for short-circuting 404s for less overhead. This middleware will also reply to all methods

## Setheaders

For this option, specify a function to set custom repsonse headers. Alterations to the headers must occur synchronously.
---
layout: post
title: Passing state between components
date: 2019-07-29
---
Collen Maphike

#Router tag

The Router itself you can put in whatever place you want -- but it makes the most sense to pick a pretty top-level part of your app, so usually in the render method of your App.js file. But in react, passing state (or helper methods) is where all the power comes from, it's what makes React so reactive. So you will want to use first code snippet ot get the functionality you want. The Route path in that code is using the render method to pass an inline function which will render the Homepage.

## Passing the whole dang state
 
Sometimes, when writing React, it's hard to keep the code **DRY**. You may find yourself writing this.state a ton of times while passing specific state pieces to the componets you want. 

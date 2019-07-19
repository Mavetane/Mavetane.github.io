---
layout: post
title: React and Redux
date: 2019-07-16
---

Collen Maphike


#React and Redux

Redux is a terribly simple library for state management, and has made working with React more manageable for everyone. However, there are a lot of cases where people blindly follow boilerplate code to integrate redux with their React application without understanding all the moving parts involved.

There is an entire library, called *react-redux* whose sole purpose is to seamlessly integrate redux’s state management into a React application. I feel that it’s important to know what’s going on when you do something that essentially forms the backbone of your application.

##React and Redux on their own

At this point it’s hard for some to believe, but redux and React are actually two separate libraries which can and have been used completely independent of each other.
There is no way anyone can directly modify the store. The only way to do so is through reducers, and the only way to trigger reducers is to dispatch actions.
On the other hand, when we want to retrieve data, we do not get it directly from the store. Instead, we get a snapshot of the data in the store at any point in time using store.getState() , which gives us the “state” of the application as on the time at which we called the getState method.

Redux is a powerful tool and even more so when combined with React. It really helps to know why each part of the react-redux library is used, and hopefully after reading this post, react and redux are clear enough.

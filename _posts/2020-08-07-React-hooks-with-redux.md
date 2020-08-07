---
layout: post
title: React Hooks and Redux
date: 2020-08-07
---

Collen Maphike

# React Hooks

There are some things in life that are actually good and by good I mean really good..
This week was quite fair on my side. There was less work but a lot of self introspection and it all went pretty well and I can't complain much, Like wise they who complain the most suffer the list.

For quite a long time I have been struggling with react, not the basics though but the fundamental parts of react like connecting redux store with a react app. To be honest even the redux setup was a mingle in my head, I don't know if I will right by comparing it to a chromatin network in a cell. Speaking of cells lets take a step further to chemistry and please don't get me wrong I found this on the **2018 react conference video**, "For a long time scientists believed that an atom was the smallest particle on the world until an electron was discovered". From that I can conclude with "Hooks are my life saver"

## Hooks with redux

Just today I figured how easy I could connect my redux store with react hooks.. In the reaction of setting up redux for a react app consider hooks an enzyme which provides an alternative part. I had a jaw dropping experience bare with me: Firstly I had to install react and react-redux, then I went to the index.js file of my react app and imported the _provider_ and _createStore_. Secondly I created my rootReducer File and within that file I initialized my state, created a rootReducer function and specified my actions.. To be frank folks this was the funnest thing I ever did on my own.

Hooks works magic from the _App.js_, I mean you only need to import two things which are: _useSelector_ and _useDispatch_. From there I will leave you to the suspense but it was a great experience and from that I can boldly say "Bye-Bye Vanilla react, Hello Hooks".

---
layout: post
title: Redux persist
date: 2019-09-16
---

Collen Maphike

# What is redux persist?

Redux persist is a library allowing to save the redux store in the local storage of your browser. ... This article illustrates, with a basic example, how persistence works with your Redux store, then focus on the persisted store's transformation across code versions and app uses.

The App will have two Reducers: authReducer and counterReducer. In our store.js file, we can Blacklist or Whitelist reducers to persist data from only specific reducers. In our case, we are only going to persist the data from the authReducer.
To test that Redux Persist is working in our app, we can click the login button (Status should change to true) and increase the counter to 5. When we refresh our app, the Logged In status should remain true (Whitelisted) and the counter should be reset to 0 (Blacklisted).
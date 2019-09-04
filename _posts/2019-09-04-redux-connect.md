---
layout: post
title: Connect()
date: 2019-08-04
---

Collen Maphike

# Connect()

The connect function connects a React component to a Redux store. It provides its connected component with the pieces of the data it needs from the store, and the functions it use to dispatch actions to the store. It does not modify the component class passed to it; instead, it returns a new, connected class that wraps the component you passed in. It takes in two parameters which is *mapStateToProps()* and &*mapDispatchToProps()*, they deal with your Redux store's *state* and *dispatch*, respectively. *state* and *dispatch* will be supplied to your *mapStateToProps* and *mapDispatchToProps* functions as first argument.

The returns of *mapStateToProps* and mapDispatchToProps are referred to internally as *stateProps* and *dispatchProps*, respectively. They will be supplied to mergeProps , if defined, as the first and the second argument, where the third argument will be *ownProps. The combined result, commonly referred to as *mergedProps*, will then be supplied to your connected component.

## mapStateToProps()

If a mapStateToProps function is specified, the new wrapper component will subscribe to Redux store updates. This means that any time the store is updated,  *mapStateToProps* will be called. The results of *mapStateToProps* must be a plain object, which will be merged into the wrapped component's props. If you don't want to subscribe to store updates, pass **null** or **undefined** in place of *mapStateToProps*.
A *mapStateToProps* function takes a maximum of two parameters. The number of declared function parameters affects when it will be called. This also determines whether the function will receive ownProps.
If your *mapStateToProps* function is declarwed as taking one parameter, it will be called whenever the store state changes, and given the store state as the only parameter

If your *mapStateToProps function is declared as taking two parameters, it will be called whenever the store state changes or when the wrapper component receives new props (based on shallow equality comparisons). It will be given the store state as the first parameter, and the wrapper components props as the second parameter. The second parameter is normally referred to as *ownProps* by convention.
This function returns an object, this object, normally referred to as *stateProps*, will be merged as props to your connected component. If you define mergeProps, it will be supplied as the first parameter to *mergeProps*, the return of the *mapStateToProps determine whether the connected component will re-render.
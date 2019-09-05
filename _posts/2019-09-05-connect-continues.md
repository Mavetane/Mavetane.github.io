---
layout: post
title: Connect continues
date: 2019-09-05
---

Collen Maphike

# mapDispatchToProps

Convectionally called *mapDispatchToProps*, this second parameter to *connect()* may either be an object, a function, or not supplied. Your component will recieve *dipatch* by default when you do not supply the second parameter to *connect()*. If you define a *mapDispatchToProps* as a function, it will be called with a maximum of two parameters. And if your *mapStateToProps()* is decalred as a function taking one parameter, it will be given the dispatch of your store.

If your *mapDispatchToProps* function is decalred as taking two parameters, it will be called with dispatch as the first parameter and the props passed to the wrapper component as the second parameter, and will be re-invoked whenever the connnected component receives new props. The second parameter is normally referred to as *ownProps* by convention. The number of declared function parameters of *mapDispatchToProps*  determines whether they receive ownProps. 

## Returns

Your *mapDispatchToProps* functions are expected to return an object. Each fields of the object should be a function, calling which is expected to dispatch an action to the store. The return of your *mapDispatchToProps* functions are regarded as *dispatchProps*. It will be merged as props to your connected component.  If you define *mergeProps* , it will be supplied as the second parameter to *mergeProps. You may define *mapStateToProps* as a factory function, you return a function instead of an object. In this case your returned function will be treated as the real *mapStateToProps* or *mapDispatchToProps*, and be called in subsequent calls.
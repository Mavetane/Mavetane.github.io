---
layout: post
title: Low cohesion and Coupling
date: 2019-10-18
---

Collen Maphike

# Low Coupling

High coupling would mean that your module knows the way too much about the inner workings of other modules. Modules that know too much about other modules make changes hard to coordinate and make modules brittle. If Module A knows much about Module B, changes to the internals of Module B may break functionality in Module A.

By aiming for low coupling, you can easily make changes to the internals of modules without worrying about their impact on other modules in the system. Low coupling also makes it easier to design, write, and test code since our modules are not interdependent on each other. We also get the benefit of easy to reuse and compose-able modules. Problems are also isolated to small, self-contained units of code.

# High Cohesion

Cohesion often refers to how the elements of a module belong together. Realted code should be close to each other to make it highly cohesive. Easy to maintain code usually has high cohesion. The elements withing the module are directly related to the functionality that module is meant to provide. By keeping high cohesion within our code, we end up trying DRY code and reduce duplication of knowledge in our modules. We can easily design , write, and test our code since the code for a module is all located together and works together.

Low cohesion would mean that the code that makes up some functionality is spread out all over your code-base. Not only is it hard to discover what code is related to your module, it is difficult to jump between different modules and keep track of all the code in your head.
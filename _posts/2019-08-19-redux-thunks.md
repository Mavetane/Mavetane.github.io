---
layout: post
title: Redux thunk
date: 2019-08-19
---

Collen Maphike

# What is a Thunk?

A thunk is a subroutine used to inject an additional calculation into another subroutine. Thunks are primarily used to delay a calculation until its result is needed, ,or to insert operations at the beginning of the other subroutine.They have a variety of other applications in compiler code generation and modular programming.

Functional programming languages have also allowed programmers to explicitly generate thunks. This is done in *source code* by wrapping an argument expression in an anonymous function that has no parameters of its own. This prevents the expression from being evaluated until a receiving function calls the anonymous function, thereby  achieving the same effect as call-by-name. The adoption of anonymous functions into other programming languages has made this capability widely available.

On systems that lack automatic **virtual memory** hardware, thunks can limited form of virtual memory known as **overlays**. With overlays, a developer divides a program's code into segments that can be loaded and unloaded independently, and identifies the **entry points** into each segment. A segment that calls into another segment must do so indirectly via a **branch table**. When a segment is in memory, its branch table entries jump into the segment. When a segment is unloaded, its entries are replaced with "reload thunks" that can reload it on demand.

Similarly, systems that can **dynamically link** several modules into a program at run-time can relay on thunks as bridges between the modules. Each module has a table of thunks that it uses to call the routines it needs from other modules. The linker can fill in these tables based on the locations of the modules in memory, without having to keep track of each external call in each module.
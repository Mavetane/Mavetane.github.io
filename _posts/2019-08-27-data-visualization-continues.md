---
layout: post
title: Data visualization with 3d (PART 2)
date: 2019-08-27
---

Collen Maphike

# Technical principles
Embedded within an HTML webpage, the JavaScript D3.js library uses pre-built JavaScript functionsto select elements, create SVG objects, style them, or add transitions, dynamic effects or tooltips to them. These objects can also be widely styled using CSS. Large datasets can be easily bound to SVG objects using simple D3.js functions to generate rich text/graphic charts and diagrams. The data can be in various formats, most commonly **JSON**,comma-separated values (CSV) or **geoJSON**, but,if required, JavaScript functions can be written to read other data formats.

# Selections
The central priciple of D3.js is to enable the programmer to first use a CSS-style selector to select a given set of Documents Object Model(DOM) nodes, then use operators to manipulate them in a similar manner to **jQuery**. The selection can be based on tag, class, identifier, attribute, or place in the hierarchy. Once elements are selected, one can apply operations to them. This includes getting and setting attributes, display texts, and styles. Elements may also be added and removed. This process of modifying, creating and removing HTML elements can be made dependent on data, which is the basic concept of D3.js.

# Transitions
By declaring a transition, values for attributes and styles can be smoothly interpolated over a certain time.

# Data-binding
For more advanced users, loaded data drives teh creation of elements. D3.js loads a given dataset, then, for each of its elements, creates and SVG object with associated properties (shape, colors, values) adn behaviors (transitions, events).

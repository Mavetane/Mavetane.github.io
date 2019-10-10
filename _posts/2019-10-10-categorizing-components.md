---
layout: post;
title: Categorizing components
date: 2019-10-10
---

Collen Maphike

# What makes a component smart or dumb?

Smart components are app level components that perform functions and manage data while dumb components focus solely on the UI.

## Characteristics of a smart component

Manipulates data, Smart components can fetch, capture changes and pass down application data. Call redux, lifecycle methods,APIs, Libraries etc. These components are called smart for a reason! They are responsible for managing state and knowing when to re-render a component. Rarely includes styling, Since dumb components focus on styling, it allows the smart component to focus on functionality without the clutter of styles too.

## Characteristics of a dumb component

Focus on UI, Almost all basic UI components should be considered dumb components. Examples include loaders, modals, buttons, inputs, etc. Accept props, Dumb components accept props to allow them to be dynamic and reusable. For example, you might send the title of a button in props from the parent component to allow it to have a unique name. Other UI packages, like Reactstrap, dumb components do not require dependencies.
The only instance where a dumb component has state is for manipulating the UI itself, not application data. Some examples of where dumb component might have state would be button groups, tabs, switches and other UI elements that do not impact the data, only the UI.

### Reusability

Though we can write out a similar component multiple times in different locations of an app, we can save a great deal of time by building a reusable component that accepts props. Think of an app that includes sign up, sign in, forgot password, account settings, and for kicks, an event sign up form. That's a lot of inputs! Rather than building this inputout for every required instance, we can create a reusable dumb component to import into each screen and send props from the parent component to make each input dynamic.
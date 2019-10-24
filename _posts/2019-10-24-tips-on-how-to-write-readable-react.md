---
layout: post
titile: How to write a highly React code
date: 2019-10-24
---

Collen Maphike

## Always use prop-types to define all the props in your components

prop-types is runtime type checking for React props and similar objects. prop-types will help you check if the desired type of prop is getting passed into your component or not. If the proper type of a specific prop is not passed into your component, then the package will throw a warning in the console of your browser.
"Warning: Failed prop type: Invalid prop `message` of type `string` supplied to `Hello`, expected `array`.
    in Hello". From the above message it is pretty clear that we are passing a string to the Hello component but the component expects the prop message to be of type array.

## Use displayName to define a particular name to your component

The display name string is used in debugging messages. If you don't use displayNames in your components, you should use if from now on. Normally, If you debug your component using the React developer tools, you will see the components because its infered from the name of the function or class that defines the component.
However if you have a situation, where you have two components with the same name (button,dropdown, etc.), then you might need to rename your components. Ohterwise, you won't be able to distinguish between them. One can always solve this problem by using the displayName.

## Use a linter to make your code easier to review

If you care about your sanity, then you should use a linter on your codebase. Linters will help you make code similar to other fellow developers in your company. By follow a strict set of rules, you can be certain that the whole code base will be consistent.
For instance, you can force other developers to use semicolons at the end of a line. If they don't, then the linter will throw an error or a warning based on your settings.

## Review your code before creating a pull request

Whether you are fixing a bug or developing a new feature, chances are that you'll push your changes and create a pull request quickly when you're in a hurry.
The problem with that is you don't even get to review your own changes. As a result, you might miss some places which you can refactor and make it better.

## Your first draft is not always the best one

Many of us already know this. The first iteration is not always the best one. You should look at your first iteration of coding and think about the features that you might have missed.
One way to fix this could be doing a Test Driven Development which I wrote off in other blog posts, which is a great practice but is seldom followed. If you follow a TDD approach, you first iteration can be the best one. But you should look for a better approach.

Take your time to think about how you want to proceed even before writing a single line of code and when you're done with implementing a feature or fixing a bug, look at your changes and think how you can make it better.
 

---
layout: post
title: Basic Data Structures
date: 2019-05-07
---

Collen Maphike


## Remove Items Using Splice()

Ok, so we've learned how to remove elements from the beginning and end of arrays using shift() and pop(), but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where splice() comes in. splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.

splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of splice() are integers which represent indexes, or positions, of the array that splice() is being called upon. And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0. splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:
    let array = ['today', 'was', 'not', 'so', 'great'];

    array.splice(2, 2);
    // remove 2 elements beginning with the 3rd element
    // array now equals ['today', 'was', 'great']

splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

    let array = ['I', 'am', 'feeling', 'really', 'happy'];

    let newArray = array.splice(3, 2);
    // newArray equals ['really', 'happy']


## Add Items Using splice()
Remember in the last challenge we mentioned that splice() can take up to three parameters? Well, we can go one step further with splice() — in addition to removing elements, we can use that third parameter, which represents one or more elements, to add them as well. This can be incredibly useful for quickly switching out an element, or a set of elements, for another. For instance, let's say you're storing a color scheme for a set of DOM elements in an array, and want to dynamically change a color based on some action:

    function colorChange(arr, index, newColor) {
      arr.splice(index, 1, newColor);
      return arr;
    }

    let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];

    colorScheme = colorChange(colorScheme, 2, '#332327');
    // we have removed '#bb7e8c' and added '#332327' in its place
    // colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']

This function takes an array of hex values, an index at which to remove an element, and the new color to replace the removed element with. The return value is an array containing a newly modified color scheme! While this example is a bit oversimplified, we can see the value that utilizing splice() to its maximum potential can have.

## Copy Array Items Using splice()

The next method we will cover is slice(). slice(), rather than modifying an array, copies, or extracts, a given number of elements to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). Consider this:

    let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

    let todaysWeather = weatherConditions.slice(1, 3);
    // todaysWeather equals ['snow', 'sleet'];
    // weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

In effect, we have created a new array by extracting elements from an existing array.
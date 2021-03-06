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


##  Copy an Array with the Spread Operator

While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ...

In practice, we can use the spread operator to copy an array like so:

    let thisArray = [true, true, undefined, false, null];
    let thatArray = [...thisArray];
    // thatArray equals [true, true, undefined, false, null]
    // thisArray remains unchanged, and is identical to thatArray


## Combine Arrays with the Spread Operator

Another huge advantage of the spread operator, is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation extremely simple:

    let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

    let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
    // thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.

##  Check For The Presence of an Element With indexOf()

Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

For example:

    let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

    fruits.indexOf('dates') // returns -1
    fruits.indexOf('oranges') // returns 2
    fruits.indexOf('pears') // returns 1, the first index at which the element exists
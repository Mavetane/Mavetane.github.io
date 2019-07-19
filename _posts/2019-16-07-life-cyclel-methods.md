---
layout: post
title: React life-cycle methods
date: 2019-07-16
---

Collen Maphike

##componentWillMount

Your component is going to appear on the screen very shortly. That chunky render function, with all its beautifully off-putting JSX, is about to be called. What do you want to do?
The answer is… probably not much. Sorry to start off slow, but componentWillMount is a bit of a dud.
The thing about componentWillMount is that there is no component to play with yet, so you can’t do anything involving the DOM.
Also, nothing has changed since your component’s constructor was called, which is where you should be setting up your component’s default configuration anyway.

##componentDidMount

ComponentDidMount is also where you can do all the fun things you couldn’t do when there was no component to play with.Basically, here you want to do all the setup you couldn’t do without a DOM, and start getting all the data you need.


##componentWillReceiveProps

Our component was doing just fine, when all of a sudden a stream of new props arrive to mess things up.
Perhaps some data that was loaded in by a parent component’s componentDidMount finally arrived, and is being passed down.
Before our component does anything with the new props, componentWillReceiveProps is called, with the next props as the argument.

##shouldComponentUpdate

We have new props. Typical React dogma says that when a component receives new props, or new state, it should update.
But our component is a little bit anxious and is going to ask permission first.
shouldComponentUpdate should always return a boolean — an answer to the question, “should I re-render?” Yes, little component, you should. The default is that it always returns true.

##componentWillUpdate

If you were using shouldComponentUpdate AND needed to do something when props change, componentWillUpdate makes sense. But it’s probably not going to give you a whole lot of additional utility.
Most Common Use Case: Used instead of componentWillReceiveProps on a component that also has shouldComponentUpdate (but no access to previous props).

##componentDidUpdate

So if our component is receiving more props than those relevant to our canvas, we don’t want to waste time redrawing the canvas every time it updates.
That doesn’t mean componentDidUpdate isn’t useful. To go back to our masonry layout example, we want to rearrange the grid after the DOM itself updates — so we use componentDidUpdate to do so.

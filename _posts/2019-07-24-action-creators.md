---
layout: post
title: Action creators
date: 2019-07-24
---

Collen Maphike

# Action creator
An action creator is a function that creates and returns an action. When writing basic Redux, an action creator simply returns an action. You would typically dispatch the action to your store immediately. Although realistically, you'll be doing this via dispatch properties that are passed into a React component.

Action creators can also be asychoronous and have side-effects.

## Action type
An action type is a string that simply describes the type of an action. They're commonly stored as constants or collected in enumerations to help reduce typos and because programmers love organizing.

### Action 
An action is like a message that we send (i.e *dispatch*) to our central Redux store.It can literally be anything. They are the only source of information for the store, One can send them to the store using *store.dispatch()*.
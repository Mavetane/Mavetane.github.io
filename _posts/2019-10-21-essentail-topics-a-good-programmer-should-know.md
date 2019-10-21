---
layout: post
titile: Essential topics a good programmer should know
date: 2019-10-21
---

Collen Maphike

# Testing

There are countless testing frameworks that provide different levels of rigor and suit different priorities.  The core idea of testing for me is thinking about your solution in practical terms. How will this piece of code integrate with a larger body (if there even is one)? What will a new developer assume this code can do, or will want it to do 3 months into development, 6 months into production, 2 years later etc etc.? What will a new developer assume this code can do, or will want it to do 3 months into development, 6 months into production, 2 years later etc etc.? How easy will it be for a new developer (or even me) to understand what this code does (and does not do)?

# Scale

Understand the scale requirements of your project first, and the real scale limitations of your tools/stack/platform etc. next.
Every couple of months, I tumble down the rabbit hole of a new technology or platform or DB etc. after reading press-release nuggets about gajillion ops/sec of xyz server, bazzilion concurrent connections, quadrillions of objects in store and on and on.  Hours of reading (and wide-eyed drooling) later, I still only have to deliver an app that deals with tens of thousands of users, tens of gigs of data etc.  That is, I typically only deal in scales that tools I'm already familiar with can handle with ease.

To be sure, learning about the latest in technology (whatever that means to you) keeps you critically aware of the strengths and weaknesses of the stack you are most familiar with.  But resist the mistake I've often made of assuming (wishing really) that the next new thing is what you need to deliver your next project.
Understanding scale - of your project and the capacities of your stack - has made me more competent in the tools I use as a developer.  It has also made me more sharper at recognizing the scenarios where these tools are not best suited, which in turn as made me a more effective architect.

# Logging

Your stuff will break.  It will break in more creative and horrifying ways that you would think is possible.  Make it easier on yourself to find where its breaking, and under what specific conditions.
You will never log enough of the right information, in the right format, and preserve it for the right length of time.  But you can get better.  Logging is an insidious beast, but planning and implementing it in my projects has taught me a great deal about debugging and maintenance.  In an enterprise environment - particularly when multiple stakeholder systems like customers, vendors and other departments are involved - competent logging can mean the difference between being lauded as a hero and being flogged as the village idiot.

# Organization and Documentation

OOP is fantastic.  So is creating libraries and re-usable code.  In practice, creating a maintainable corpus that is organized in a sensible layout is remarkably difficult.

In my experience, code organization and documentation best-practices are notoriously academic.  Over the course of managing dozens of projects and contributing to lots more, I have found that organizing and documenting code competently is a hallmark differentiator between a newbie and a productive, experienced developer.

# Recursion

Implementing true recursion effectively still puts a smile on my face!  I think its because recursion is one of the earliest computing concepts I actually understood. 

I don't mean to suggest that you can only be an exceptional programmer if you master recursion.  Rather, I submit that exceptional programmers have at least one concept that gives them the warm fuzzies about programming.  Whatever that fuzzie is, it tends to have played a significant part in driving exceptional practitioners to learn and improve.
---
layout: post
title: Four rules of simple design
date: 2019-09-11
---

Collen Maphike

# Simple Design

There is no perfect desing. A desing expresses what an application does at a certain moment in time, but the requirements will change. People will change. People will get new insights as time passes and might come to the conclusion that there is a better way.
The intention of simple design is that it will be easy to change, being adaptable to the changing needs, without making everything configurable. Rather than planning for points in the future where the application will likely change, we can build software that can easily change at any point.

This means that there is more than one design that works, depending on the situation at a certain time. Comparing thoughts and ideas can yield insight into techniques to improve the code. It might be called "simple design" but it's not always simple to put into practise. It takes effort, multiple iterations and new insights to improve it bit by bit.

## Tests pass

If you can't prove that your system works and does what it is required to do then it doesn't really matter if your design is simple or complex. It will also be harder to maintain and bugs tend to creep in undetected.

## Express intent

When you look at a piece of code it should immediately tell you what it does and it shouldn't surprise you. Variable, method, and class names should describe whay they do. This is also refered to as the principle of least astonishment or the element of least surprise.

## No duplication (DRY)

The application shouldn't contain any knowledge duplication, also known as "Don't Repeat Yourself" (DRY). This doesn't mean code duplication in the literal sense. Two loops might look very similar but their intention can be very different. It's about knowledge duplication, duplication of concepts. No duplication of knowledge adn what it represents in the domain and making sure those are isolated in one place.

## Small

The application shouldn't have pieces that you don't need. Remove any dead code, resist the urge to design for the future things you are not sure of you need. Does the application contain parts that seemed a good idea at the time, but was never fulfilled? Time to revise that.
Sometimes it's hard to see similarities in knowledge when being focused on the details. For this reason it's good to occasionally take a step back and evaluate the result.
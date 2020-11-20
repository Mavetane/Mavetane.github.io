---
layout: post
title: React Native and Redux
date: 2020-11-20
---

Collen Maphike


# REACT NATIVE

React Native (also known as RN) is a popular JavaScript-based mobile app framework that allows you to build natively-rendered mobile apps for iOS and Android. The framework lets you create an application for various platforms by using the same codebase.  **www.netguru.com**

The reason I'm writing about react-native this week is I thought I had a problem with configuring redux strore whereas I didn't.. Let's take a quick recap. I created my store and didn't get any redux related errors so I went ahead and ipmlemented redux persist and I had a problem with storage, I turned out react-native required AsyncStorage in stead of just storage itself and I managed to get that out of the way. Do remember I'm from a reactjs background and this react-native app was and still is my first crack at the framework..

So I went ahead and configured redux-dev tools like I would normally do with reactjs just as I opened my debugger on my browser something was off. I mean if you know react-native you're already laughing about it. My store wouldn't show up mind due it was around 10 am in the morning. It took me the whole day to try and fix that issue I even called in some extra help form different eyes but there was no luck.. 

Just as I was about to go to bed the same day a thought struck my mind.. I didn't research if what I was doing was possible or not. I did a quick google search and figured that I was stressing on an impossible task.


Moral of the story is one should always make a research before embarking on a new journey. Not just a research but a thorough research..
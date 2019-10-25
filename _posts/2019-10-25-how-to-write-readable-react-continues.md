---
layout: post
title: How to write readable React continues
date: 2019-10-24
---

Collen Maphike

## Split your code into multiple smaller functions

Splitting your bigger functions into multiple smaller functions will make the smaller functions more reusable. They will also become much easier to test. You can also create many utility files which can help you remove duplicate code from multiple files.

After creating multiple files, look at them and you will see that there are many duplicated lines of code. You can take these lines are create a utility file. You can then reuse the same utility file across multiple files.

## Create mulitple files instead of writing a big file

Reviewing one big file is always harder than reviewing multiple smaller files. If you split your code into multiple smaller files and each file contains only one logic, then it becomes vry easy for the reveiwer to review that file.

## Be very careful while naming files

Another thing you should remember here is that if you name your files according to the job that they perform, it will also help ou in the future as well as other developers to understand what the file is supposed to do

For instance, dropdown.js is a good name but it's very generic and if you use it in multiple places in the same directory, you might name it like topDropdown.js, bottomDropdowwn.js, which is bad. A better way will be to prefix them with the fob that they are supposed to perform. For instance, userDropdown.js, fileDropdown.js, etc.

## Always write tests for your code

I can't stress enough the importance of this point. Tests complete your code.

After developing a feature, you might feel that it works and it does work. But there can be (and most probably will) edge cases where it might not work. Tests will help you identify thos cases.
It's obvious that writing test cases will increase the time that you need to write your code. But, it will always help you eliminate potential bugs that might crop up in the future.
One should take time and write tests if they care about their application

## Don't ever use the error handling lifecycle hook

React 16 introduced a better way of handling errors using a feature called Error Boundaries.
Essentially , error boundries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

If the logic for the fallback UI is present in your ErrorBoundary comonent,then you can encapsulate your component inside that ErrorBoundry component.
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
This is a nice way in which you show a fallback UI for your errors. But you don't need to wrap all your components with an ErrorBoundry compnent. You can put your ErrorBoundry component only in a few strategic places where you need them.
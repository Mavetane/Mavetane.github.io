---
layout: post 
title: Authenticating a User
date: 2020-07-24
---

Collen Maphike

# Authenticating a user

User authentication had been a hard nut to crack for me this week.The first problem I had was creating a local strategy middleware. Then the second problem I encountered was matching the hashed password with the plain text password received from the login route.

## Implementing passport local strategy and comparing the passwords

I created a file where I would implement my local strategy to be fair it wasn't that easy. I'm used to registering users in a database which is quite frank but having to authenticate the users seemed like misison impossible to me. With the help of passportjs documentation I was able to understand and implement the strategy as follows:

    passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
            User.findOne({email: email})
            .then(user => {
                if(!user){
                    return done(null, false, {message: 'Email is not registered'})
                }
                bcrypt.compare(password, user.password, (err, isMatch)=>{
                    if(err) throw err;
                    if(isMatch){
                        return done(null, user)
                    }else{
                        return done(null, false, {message: 'Incorrect Password'})
                    }
                })
            })
            .catch((err)=> console.log(err))
        })
    );

Of course I had to serialize and deserialize the user after implementing the above code. All in all I can say creating this middleware was an eye opener which didn't come that easy folks.

At first I couldn't tell which password was which, I had to research more about bcrypt and during the search I came across bcrypt's built in function *"bcrypt.compare()"*, this kinda threw a relief on my neck for I had known the hard part was almost over. 

I've built projects before or maybe I think I've built some but this one was the hardest of all for me.. I never thought that a login screen would be so complicated from a developers point of view and I'm happy to say: "What doesn't brake you ......." I guess you can finish that off, Bye.






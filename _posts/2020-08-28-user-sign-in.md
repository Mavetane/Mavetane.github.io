---
layout: post
title: User LogIn and Rerouting
date: 2020-08-28
---

Collen Maphike

# User LogIn

Hey there folks my problem for this was signing in the user or we could say loggin in the user.. It was tricky because of the following reasons: I never used Jason Web Token before, I didn't know the token can be decoded and my only friend was google.

To be frank I ran a lot of google searches on how to dycrpt/decode a web token and most of them were unsuccessful to me.. So I had to take a step aback and learn jwt against time which is always my biggest enemy. 
But after a lot of attempts and headaches I was able to get it right but the cost was high.. 
And here is my code : 

export const signin = (loginDetails) => {
  return async dispatch => {
    try {
      const { data } = await axios.post('http://localhost:5000/users/signin', loginDetails)
      if (!data.token) {
        dispatch({ type: AUTH_ERROR, payload: data })
        return
      }
      const decodedToken = jwtDecode(data.token)
      dispatch({ type: AUTH_SAVE_USER, payload: decodedToken })
      dispatch({ type: CHANGE_AUTHORIZATION, payload: true })
      localStorage.setItem("token", data.token)
      history.push('/shopping')
      refreshPage()
    } catch (e) {
      console.log(e)
    }
  }
}


## Rerouting

One can see from the code above that there is a line with *history.push()*. How do I explain this one? I never practised backend with react. The last time I used a template engine because it was easier to implement on my backend than react, as a result of that I had low marks on the test, then I called it quits with view engines. And this time around I had to use Rerouting and local storage which were alien to me for a moment. But once you set your mind right everything falls into place.

There isn't much I can say about Rerouting but it's a fun expereince and I'm looking forward to using it in the near future
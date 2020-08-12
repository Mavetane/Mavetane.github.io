import React, { Component } from 'react';
import { ADD_USER } from '../redux/actions/actionTypes'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';



const Form = () => {

  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [formInfo, setFormInfo] = useState({ name: "", email: "" });

  const onSubmit = e => {
    e.preventDefault()
    console.log("Form INfo", formInfo)
  }

  const handleChange = e => {
    setFormInfo({
      ...formInfo, [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={e => onSubmit(e)}>
        <label>Name:</label>
        <input type="text" value={formInfo.name} onChange={handleChange} name="name" />
        <label>Email:</label>
        <input type="email" value={formInfo.email} onChange={handleChange} name="email" />
        <button onClick={() => dispatch({ type: ADD_USER, payload: formInfo })}>Submit</button>
      </form>
    </div>)
}

export default Form;
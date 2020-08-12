import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT, ADD_USER } from './redux/actions/actionTypes'
import Form from './containers/Form'

const App = () => {
    const counter = useSelector(state => state.counter);
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [formInfo, setFormInfo] = useState({ name: "", email: "" });

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("formInfo", formInfo);
    }
    return (
        <div className="App">
            <div>
                <h1> Counter: {counter} </h1>
                <button onClick={() => dispatch({ type: INCREMENT })}> INCREMENT </button>
                <button onClick={() => dispatch({ type: DECREMENT })}> DECREMENT </button>
            </div>
            <br />
            <div>
                <form onSubmit={(e) => onSubmit(e)}>
                    <label>Name:</label>
                    <input type="text" value={formInfo.name} onChange={e =>
                        setFormInfo({ ...formInfo, [e.target.name]: e.target.value })} name="name" />
                    <input type="email" value={formInfo.email} onChange={e =>
                        setFormInfo({ ...formInfo, [e.target.name]: e.target.value })} name="email" />
                    <button onClick={() => dispatch({ type: ADD_USER, payload: formInfo })}>Submit</button>
                </form>
            </div>
            <Form />
        </div>
    );
}

export default App;
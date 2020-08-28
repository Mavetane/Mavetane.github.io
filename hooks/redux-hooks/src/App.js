import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT, ADD_USER } from './redux/actions/actionTypes'
import Form from './containers/Form'

const App = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();


    return (
        <div className="App">
            <div>
                <h1> Counter: {counter} </h1>
                <button onClick={() => dispatch({ type: INCREMENT })}> INCREMENT </button>
                <button onClick={() => dispatch({ type: DECREMENT })}> DECREMENT </button>
            </div>
            <br />
            <div>
                <Form />
            </div>
        </div>
    );
}

export default App;
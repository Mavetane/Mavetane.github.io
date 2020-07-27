import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm } from 'react-hook-form'
import Counter from './components/Counter';
import Form from './components/Form'


function App() {
  const [count, setCount] = useState(0);
  const [formInfo, setFormInfo] = useState({ name: "", surname: "" })
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log(formInfo)
  };



  return (
    <div className="App">
      <label>Hooks</label>
      <Counter />
      <br />
      <label>Form</label>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input value={formInfo.name}
            onChange={(e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })}
            name="name" />
          <br />
          <label>Surname:</label>
          <input value={formInfo.surname}
            onChange={(e) => setFormInfo({ ...formInfo, [e.target.name]: e.target.value })}
            name="surname" />

        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

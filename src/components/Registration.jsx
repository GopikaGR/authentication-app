import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Registration.css';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setNumber] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Submitted:', { name, email, password });
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type='submit'>Register</button>
        <p>
          Already have an account? <Link to='/'>Go to Home</Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;

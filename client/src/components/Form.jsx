import React, { useState,useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const Form =()=>{
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
 


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  useEffect(() => {
    // Check if the user is logged in when the component mounts
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/'); // Redirect to login page if not logged in
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (userData && (userData.email === formData.email || userData.name === formData.name)) {
        
        navigate('/login');
        return;
      }

      localStorage.setItem('userData', JSON.stringify(formData));
      
      // Simulate login by setting a flag in local storage
      localStorage.setItem('isLoggedIn', true);
      
        console.log(formData)
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.text();
        console.log('Response from server:', data);
       
     
      } else {
        console.error('Failed to submit form');
      
      }
     navigate('/user'); 
  } catch (error) {
    console.error('Error:', error);
  }
    
  };


  return (
    <div className='App'>
      <h1>Submit Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
   
    </div>
  );
}

export default Form;

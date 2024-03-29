import React, { useState } from 'react';

const Form =()=>{
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
    }  catch (error) {
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

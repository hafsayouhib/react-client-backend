
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form'; // Assuming Form component is in Form.js
 // Assuming LoginPage component is in LoginPage.js
import Dashboard from './components/Dashboarduser'; 
import Login  from './components/Login';

const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/login" element={<Login />} />

     
        <Route path="/user" element={<Dashboard />} />
      </Routes>
    
    </Router>
  );
}

export default App;

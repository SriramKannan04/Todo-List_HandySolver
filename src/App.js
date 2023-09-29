import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Todo from './Todo';
function App() 
{
  return (
      <Router>
        <Navbar />
          <Routes>
              <Route path="/Todo" element={<Todo />} />
          </Routes>
      </Router>

  );
}

export default App;

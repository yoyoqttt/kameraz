 
import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
  import HomePage from './pages/HomePage';
  import AddRoomForm from './pages/AddRoomPage';
  import AuthForm from './components/AuthForm';
  import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
       <Router>
           <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddRoomForm />} />
              <Route path="/login" element={<AuthForm isLogin={true}/>} />
              <Route path="/register" element={<AuthForm isLogin={false}/>} />
          </Routes>
      </Router>
  </AuthProvider>
      );
  }

  export default App;
 
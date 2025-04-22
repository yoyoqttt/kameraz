import React, {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { authContext } from '../context/authContext';
import NavDropdown from "../components/NavDown";

 const Header = () => {
       const { token, logout, user } = useContext(authContext);
       const navigate= useNavigate();
       const handleLogout = () => {
         logout();
         navigate('/login');
       }

       return (
        <header className="header">
             <div className="header-content">
               <Link to="/" className="header-logo">Kamra</Link> 
                   <nav className="header-nav"> <NavDropdown />
                   
                   { token ? (
                    
                       <>
                           <span className='user-name'>{user?.name}</span>
                         <button onClick={handleLogout}>Logout</button>
                      </>
                           ) : (
                               <>
                                   <Link to="/login">Login</Link>
                                   <Link to="/register">Register</Link>
                               </>
                               )}
                             
                  </nav>
           </div>
        </header>
       );
   };
 
 export default Header;
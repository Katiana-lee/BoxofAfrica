import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import './Layout.css'

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="App">
      <header>
      <Link to='/products'><img className="head-photo" src={logo} alt="logo"/></Link>
        {/* <Link to='/'><h1>Box of Africa</h1></Link> */}
        {
          currentUser ?
            <>
                {/* <div className="welcome">Welcome, {currentUser.username}</div> */}
              <div className="welcome"> Welcome, {currentUser.username}</div>
              <button className="login" onClick={handleLogout}>Logout</button>
            </>
            :
            <Link  to='/login'>Login/Register</Link>
        }
        <hr />
        {
          currentUser &&
          <>
            <Link to='/products'>Products</Link>
            <Link to='/categories'>Categories</Link>
            <hr />
          </>
        }
      </header>
      {props.children}
    </div>
  )
}

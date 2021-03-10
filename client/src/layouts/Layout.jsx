import React from 'react'
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="App">
      <header>
        <Link to='/'><h1>Box of Africa</h1></Link>
        {
          currentUser ?
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <Link to='/login'>Login/Register</Link>
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
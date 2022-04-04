import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import AppContext from '../context/AppContext';

function Login() {
  const { username, setUsername } = useContext(AppContext);
  const [buttonState, setButtonState] = useState('false')

  const navigate = useNavigate();

  function HandleSubmit(e) {
    e.preventDefault()
    // May be used to fetch a login
    navigate('/') // redirect to main page
  }

  useEffect(() => {
    username.length === 0 ? setButtonState(true) : setButtonState(false); // 
  }, [username])

  return(
    <div>
      <form
        onSubmit={ HandleSubmit }
      >
        <h3>Welcome to Codeleap network</h3>
        <p>Please entrer your username</p>
        <input
          type='text'
          placeholder='John Doe'
          value={ username }
          onChange={ ({t}) => setUsername(t.value)} // save username into 'username' state in provider for future use.
        />
        <button 
        type='submit'
        disabled={ buttonState }
        > 
        ENTER
        </button>
      </form>
    </div>
  )
}
export default Login;
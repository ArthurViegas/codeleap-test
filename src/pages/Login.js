import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import AppContext from '../context/AppContext';
import '../css/login.css';

function Login() {
  const { username, setUsername, setLoged } = useContext(AppContext);
  const [buttonState, setButtonState] = useState('false');

  const navigate = useNavigate();

  function HandleSubmit(e) {
    e.preventDefault();
    try {
      // May be used to fetch a login
      setLoged(true);
      navigate('/'); // redirect to main page
    } catch (error) {
      console.log(error);
      return null;
    };
  };

  useEffect(() => {
    username.length === 0 ? setButtonState(true) : setButtonState(false); // 
  }, [username]);

  return(
    <section className='form-section'>
      <form
        className='login-form'
        onSubmit={ HandleSubmit }
      >
        <h3>Welcome to Codeleap network!</h3>
        <p>Please entrer your username</p>
        <div>
          <input
            type='text'
            placeholder='John Doe'
            value={ username }
            onChange={ ({target}) => setUsername(target.value)} // save username into 'username' state in provider for future use.
          />
          <button 
          type='submit'
          disabled={ buttonState }
          > 
          ENTER
          </button>
        </div>
      </form>
    </section>
  );
};
export default Login;
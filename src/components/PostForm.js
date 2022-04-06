import React, { useEffect, useState } from 'react';
import '../css/main.css';

const maxChars = 200;

const limitChars = (text) => maxChars - text.length; 

function PostForm() {

  const [title, setTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);

  const setButton = () => {
    if (title.length === 0 || postContent.length === 0) return 'disabled-button';
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault()
  }

  useEffect(() => {
    const teste = () => {
      if (title.length !== 0 && postContent.length !== 0) setDisabledButton(false);
      if (title.length === 0 || postContent.length === 0) setDisabledButton(true);
    }
    teste()
  }, [title.length, postContent.length])
  
  return(
    <div className='post-form-container'>
      <form className='post-form'>
        <h3>What's on your mind?</h3>
        <span>Title</span>
        <input
          className='input-title'
          placeholder='Hello world'
          value= { title }
          type='text'
          onChange={ ({target}) => setTitle(target.value)}
          maxLength='50'
          required
        />
        <span>Content</span>
        <textarea
          placeholder='Content here'
          className='textarea'
          onChange={ ({target}) => setPostContent(target.value)}
          maxLength={ maxChars }
          rows="4"
          required
        />
        <footer className='post-form-footer'>
          <div>     
            <p>Limit: { limitChars(postContent) }</p>
            <button
              onClick={ handleSubmit }
              disabled={disabledButton}
              className={ setButton() }
            >
              CREATE
            </button>
          </div>
        </footer>
      </form>
    </div>
  )
}
export default PostForm;
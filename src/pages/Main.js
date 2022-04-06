import React from 'react';
import PostForm from '../components/PostForm';
import '../css/main.css'

function Main() {
  return(
    <main className='main-container'>
      <section className='middle-section'>
        <header className='middle-header'>
          <h3>Codeleap Network</h3>
        </header>
        <PostForm />
      </section>
    </main>
  )
}
export default Main;
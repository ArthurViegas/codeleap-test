import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';
import { requestPosts } from '../actions/codeleapAPI'

function AppProvider({ children }) {
  const [allPosts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const [loged, setLoged] = useState(false); // may be to give unique acces to logged users  

  const getAllPosts = async () => {
    const posts = await requestPosts();
    setPosts(posts.results)
  }
  useEffect(() => {
    getAllPosts();
  }, []);
  return(
    <AppContext.Provider value={ { allPosts, username, setUsername, setLoged } }>
      { children }
      </AppContext.Provider>
  );
};
export default AppProvider

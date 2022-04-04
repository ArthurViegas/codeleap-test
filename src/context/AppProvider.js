import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';
import { requestPosts } from '../actions/codeleapAPI'

function AppProvider({ children }) {
  const [allPosts, setPosts] = useState([]);

  const getAllPosts = async () => {
    const posts = await requestPosts();
    setPosts(posts.results)
  }
  useEffect(() => {
    getAllPosts();
  }, []);
  return(
    <AppContext.Provider value={ { allPosts } }>
      { children }
      </AppContext.Provider>
  );
};
export default AppProvider

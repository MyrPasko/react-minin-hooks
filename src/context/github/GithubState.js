import React, { useReducer } from 'react';
import axios from 'axios';
import githubReducer from './githubReducer';
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from '../types';
import GithubContext from './githubContext';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const baseHttp = `https://api.github.com`;
const creds = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: [],
  };
  // State and dispatch, which is able to change this state.
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (value) => {
    setLoading();

    const response = await axios.get(
      `${baseHttp}/search/users?q=${value}&${creds}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    })
  };

  const getUser = async (name) => {
    setLoading();

    const response = await axios.get(
      `${baseHttp}/users/${name}?${creds}`
    );

    dispatch({
      type: GET_USER,
      payload: response.data,
    })
  };

  const getRepos = async (name) => {
    setLoading();
    const response = await axios.get(
      `${baseHttp}/users/${name}/repos?per_page=5&${creds}`
    );

    dispatch({
      type: GET_REPOS,
      payload: response.data,
    })
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const  setLoading = () => dispatch({ type: SET_LOADING });
  
  const { user, users, repos, loading } = state;

  return (
    <GithubContext.Provider value={{
      searchUsers,
      getUser,
      getRepos,
      clearUsers,
      setLoading,
      user,
      users,
      repos,
      loading,
    }}>
      {children}
    </GithubContext.Provider>
  )
};

export default GithubState;

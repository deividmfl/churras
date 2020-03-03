import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  events: [],
  users: [],
}

// Context
export const GlobalContext = createContext(initialState);

// Provider 
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  // Events
  function newEvent(event) {
    dispatch({
      type: 'NEW_EVENT',
      payload: event,
    });
  }

  function updateEvent(event) {
    dispatch({
      type: 'UPDATE_EVENT',
      payload: event,
    });
  }

  // User
  function newUser(user) {
    dispatch({
      type: 'NEW_USER',
      payload: user,
    });
  }

  function updateUser(user) {
    dispatch({
      type: 'UPDATE_USER',
      payload: user,
    });
  }
  
  function deleteUser(id) {
    dispatch({
      type: 'DELETE_USER',
      payload: id,
    });
  }

  return (<GlobalContext.Provider value={{
    events: state.events,
    users: state.users,
    newEvent,
    updateEvent,
    deleteUser,
    newUser,
    updateUser,
  }}>
    {children}
  </GlobalContext.Provider>);
}

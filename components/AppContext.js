import React, { createContext, useContext, useReducer } from 'react'

const AppContext = createContext()

export const AppProvider = ({ reducer, initialState, children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
)

export const useAppState = () => useContext(AppContext)

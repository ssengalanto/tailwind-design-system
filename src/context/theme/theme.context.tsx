import React, { useReducer, createContext, useContext } from 'react';

import { ThemeActions } from './theme.actions';
import { themeReducer, themeState, ThemeState } from './theme.reducer';

type Dispatch = React.Dispatch<ThemeActions>;

const ThemeStateContext = createContext<ThemeState | undefined>(undefined);
const ThemeDispatchContext = createContext<Dispatch | undefined>(undefined);

const ThemeProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, themeState);
  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>{children}</ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

const useThemeState = (): ThemeState => {
  const context = useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error('useThemeState must be used within a ThemeProvider');
  }
  return context;
};

const useThemeDispatch = (): Dispatch => {
  const context = useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error('useThemeDispatch must be used within a ThemeProvider');
  }
  return context;
};

const useTheme = (): [ThemeState, Dispatch] => [useThemeState(), useThemeDispatch()];

export { ThemeProvider, useTheme };

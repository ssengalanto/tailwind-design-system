import produce, { Draft } from 'immer';

import { ThemeActionTypes, ThemeActions } from './theme.actions';

export interface ThemeState {
  theme: 'light' | 'dark';
}

export const themeState: ThemeState = {
  theme: 'light',
};

export const themeReducer = (state: ThemeState = themeState, action: ThemeActions): ThemeState =>
  produce(state, (draft: Draft<ThemeState>) => {
    switch (action.type) {
      case ThemeActionTypes.SET_DARK_THEME:
        draft.theme = 'dark';
        break;

      case ThemeActionTypes.SET_LIGHT_THEME:
        draft.theme = 'light';
        break;
    }
  });

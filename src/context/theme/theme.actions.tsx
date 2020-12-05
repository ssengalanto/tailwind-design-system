export enum ThemeActionTypes {
  SET_DARK_THEME = '@@theme/SET_DARK_THEME',
  SET_LIGHT_THEME = '@@theme/SET_LIGHT_THEME',
}

export type ThemeActions = SetDarkTheme | SetLightTheme;

interface SetDarkTheme {
  type: ThemeActionTypes.SET_DARK_THEME;
}

interface SetLightTheme {
  type: ThemeActionTypes.SET_LIGHT_THEME;
}

export const setDarkTheme = (): SetDarkTheme => ({
  type: ThemeActionTypes.SET_DARK_THEME,
});

export const setLightTheme = (): SetLightTheme => ({
  type: ThemeActionTypes.SET_LIGHT_THEME,
});

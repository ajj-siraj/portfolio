export const TOGGLE_NAV_THEME = 'TOGGLE_NAV_THEME';

export const toggleNavTheme = (targetElement) => ({
  type: TOGGLE_NAV_THEME,
  targetElement
});
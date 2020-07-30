// export const TOGGLE_NAV_THEME = 'TOGGLE_NAV_THEME';
export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_DONE = 'FETCHING_DONE';

// export const toggleNavTheme = (targetElement) => ({
//   type: TOGGLE_NAV_THEME,
//   targetElement
// });

export const fetchingData = () => ({
  type: FETCHING_DATA,
});

export const fetchingDone = () => ({
  type: FETCHING_DONE,
});
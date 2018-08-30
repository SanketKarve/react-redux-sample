export function loadState() {
  try {
    const state = localStorage.getItem('state');
    if(state === null) {
      return undefined;
    }
    return JSON.parse(state);
  } catch (err) {
    console.info('Session storage cannot be accessed!')
    return undefined;
  }
}

export function saveState(state) {
  try {
    const serailaizedState = JSON.stringify(state);
    localStorage.setItem('state', serailaizedState);
  } catch(err) {
    console.info('Saving state to session storage failed');
  }
}

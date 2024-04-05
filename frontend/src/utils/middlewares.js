export const thunkMiddleware = (store) => (next) => (action) => {
    // si l'action est une fonction...
    if (typeof action === 'function') {
        // on l'exécute avec `dispatch` et `getState` en paramètre
        return action(store.dispatch, store.getState)
    }
    // sinon on envoie l'action au reducer
    return next(action)
}
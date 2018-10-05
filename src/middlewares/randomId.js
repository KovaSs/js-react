export default store => next => action => {
  if (!action.generatedId) return next(action)
  next({
    ...action,
    randomId: (Date.now() + Math.random()).toString()
  })
}
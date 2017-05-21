const logger = store => next => action => {
  console.log(`${action.type} FIRED!`);
  return next(action);
};

export default logger;
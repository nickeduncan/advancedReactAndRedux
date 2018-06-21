export default ({ dispatch }) => next => action => {
  // Check to see if the aciton 
	// has a promise on its 'payload' property
	// If it does, then wait for it to resolve
	// if it doesn't, then send the aciotn on to the
	// next middlware
  if (!action.payload || !action.payload.then) {
		return next(action);
	}
};

import { combineReducers } from 'redux';

const basicReducer = (_, action) => {
  return { ...action.payload };
}

const dictionaryReducer = (state, { _, payload }) => (
  payload ? {
    ...state,
    [payload.id]: payload
  } : {}
);

const rootReducer = combineReducers({
  session: basicReducer,
  user: basicReducer,
  questions: dictionaryReducer,
  options: dictionaryReducer
});

export default rootReducer;

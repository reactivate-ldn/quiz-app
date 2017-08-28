import {
  FETCH_LAST_SESSION,
  SET_SESSION,
  CREATE_USER,
  GET_QUESTION,
  GET_OPTION,
  POST_ANSWER,
  SET_USER
} from '../constants';

export const fetchLastSession = () => ({
  type: FETCH_LAST_SESSION
});

export const setSession = (payload) => ({
  type: SET_SESSION,
  payload
});

export const createUser = (sessionId, name) => ({
  type: CREATE_USER,
  sessionId,
  name
});

export const setUser = (payload) => ({
  type: SET_USER,
  payload
})

export const getQuestion = (sessionId) => ({
  type: GET_QUESTION,
  sessionId
});

export const getOption = (questionId) => ({
  type: GET_OPTION,
  questionId
});

export const postAnser = (questionId, optionId) => ({
  type: POST_ANSWER,
  questionId,
  optionId
});

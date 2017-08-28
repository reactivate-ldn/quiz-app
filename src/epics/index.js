import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import {
  FETCH_LAST_SESSION,
  CREATE_USER,
  GET_QUESTION
} from '../constants';
import { get, post } from 'isomorphic-fetch-rx';
import { setSession, setUser } from '../actions';

const baseUrl = 'http://localhost:8080';

const getUrl = (endpoint) => `${baseUrl}/${endpoint}`;

const fetchLastSessionEpics = (action$) => (
  action$
    .ofType(FETCH_LAST_SESSION)
    .flatMap(() => (
      get(getUrl('session/last'))
        .map(({ data }) => setSession(data))
    ))
);

const createUserEpics = (action$) => (
  action$
    .ofType(CREATE_USER)
    .flatMap(({ sessionId, name }) => (
      post(getUrl('user'), { params: { sessionId, name }})
        .map(({ data }) => setUser(data))
    ))
);

const epics = combineEpics(
  fetchLastSessionEpics,
  createUserEpics
);

export default epics;

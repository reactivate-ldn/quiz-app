import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';

const epics = combineEpics(() => Observable.empty());

export default epics;

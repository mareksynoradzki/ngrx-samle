import {THREAD_LOADED_ACTION, THREAD_SELECTED_ACTION, THREADS_LOADED_ACTION} from '../actions';
import {INITIAL_UI_STATE, UiState} from '../ui-state';

export function uiState(state: UiState = INITIAL_UI_STATE, action: any): UiState {

  switch (action.type) {

    case THREAD_SELECTED_ACTION:
      const newState = Object.assign({}, state);

      newState.currentThreadId = action.payload;
      return newState;

    case THREADS_LOADED_ACTION:
      return Object.assign({}, state, {threads: action.payload});
    case THREAD_LOADED_ACTION:
      return Object.assign({}, state, {currentThread: action.payload});
    default:
      return state;
  }

}

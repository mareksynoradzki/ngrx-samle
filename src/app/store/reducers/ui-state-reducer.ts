import {THREAD_SELECTED_ACTION} from '../actions';
import {INITIAL_UI_STATE, UiState} from '../ui-state';

export function uiState(state: UiState = INITIAL_UI_STATE, action: any): UiState {

  switch (action.type) {

    case THREAD_SELECTED_ACTION:
      const newState = Object.assign({}, state);

      newState.currentThreadId = action.payload;
      return newState;


    default:
      return state;
  }

}

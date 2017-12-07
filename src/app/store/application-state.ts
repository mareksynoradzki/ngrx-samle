import {INITIAL_UI_STATE, UiState} from './ui-state';

export interface ApplicationState {

  uiState: UiState,
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
  uiState: INITIAL_UI_STATE,
};

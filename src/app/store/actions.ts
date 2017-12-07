import {Action} from '@ngrx/store';

export const THREAD_SELECTED_ACTION = 'THREAD_SELECTED_ACTION';

export class ThreadSelectedAction implements Action {

  readonly type = THREAD_SELECTED_ACTION;

  constructor(public payload: number) {

  }
}

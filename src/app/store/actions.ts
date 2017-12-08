import {Action} from '@ngrx/store';
import {Thread} from '../model/thread.m';

export const THREAD_SELECTED_ACTION = 'THREAD_SELECTED_ACTION';
export const THREADS_LOADED_ACTION = 'THREADS_LOADED_ACTION';
export const THREAD_LOADED_ACTION = 'THREAD_LOADED_ACTION';


export class ThreadSelectedAction implements Action {

  readonly type = THREAD_SELECTED_ACTION;

  constructor(public payload: number) {
  }
}

export class ThreadsLoadedAction implements Action {

  readonly type = THREADS_LOADED_ACTION;

  constructor(public payload: Thread[]) {
  }
}

export class ThreadLoadedAction implements Action {

  readonly type = THREAD_LOADED_ACTION;

  constructor(public payload: Thread) {
  }
}

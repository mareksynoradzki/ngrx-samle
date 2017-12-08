import {Thread} from '../model/thread.m';

export interface UiState {
  currentThreadId: number;
  threads: Thread[];
  currentThread: Thread;
}


export const INITIAL_UI_STATE: UiState = {
  currentThreadId: undefined,
  threads: [],
  currentThread: undefined,
};

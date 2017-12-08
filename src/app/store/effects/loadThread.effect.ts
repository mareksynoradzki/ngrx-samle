import {Injectable} from '@angular/core';
import {SampleHttpService} from '../../sample.htt-service';
import {Actions, Effect} from '@ngrx/effects';
import {THREAD_SELECTED_ACTION, ThreadLoadedAction, ThreadSelectedAction} from '../actions';
import {Thread} from '../../model/thread.m';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoadThreadEffect {
  constructor(private actions$: Actions,
              private sampleHttpService: SampleHttpService) {
  }

  @Effect()
  thread$: Observable<ThreadLoadedAction> = this.actions$
    .ofType(THREAD_SELECTED_ACTION)
    .debug('THREAD_SELECTED_ACTION effect')
    .switchMap((a: ThreadSelectedAction) => this.sampleHttpService.fetch(a.payload))
    .map((value: Thread) => new ThreadLoadedAction(value));


}

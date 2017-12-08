import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {ApplicationState} from './store/application-state';
import {ThreadSelectedAction} from './store/actions';
import {Thread} from './model/thread.m';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedThreadId$: Observable<number>
  selectedThread$: Observable<Thread>;

  constructor(private store: Store<ApplicationState>) {
    this.selectedThreadId$ = this.store.select(value => value.uiState.currentThreadId);
    this.selectedThread$ = this.store.select(value => value.uiState.currentThread);
  }

  onChange(value: number) {
    this.store.dispatch(new ThreadSelectedAction(value));
  }
}

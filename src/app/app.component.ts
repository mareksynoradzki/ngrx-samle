import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {ApplicationState} from './store/application-state';
import {ThreadSelectedAction} from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedThread$: Observable<number>

  constructor(private store: Store<ApplicationState>) {
    this.selectedThread$ = this.store.select(value => value.uiState.currentThreadId);
  }

  onChange(value: number) {
    this.store.dispatch(new ThreadSelectedAction(value));
  }
}

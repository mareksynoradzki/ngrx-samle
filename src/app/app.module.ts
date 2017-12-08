import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {uiState} from './store/reducers/ui-state-reducer';
import {INITIAL_APPLICATION_STATE} from './store/application-state';
import {LoadThreadEffect} from './store/effects/loadThread.effect';
import {SampleHttpService} from './sample.htt-service';
import {EffectsModule} from '@ngrx/effects';


const reducers = {
  uiState
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {initialState: INITIAL_APPLICATION_STATE}),
    EffectsModule.forRoot([LoadThreadEffect])
  ],
  providers: [SampleHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

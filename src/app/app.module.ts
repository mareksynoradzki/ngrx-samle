import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {uiState} from './store/reducers/ui-state-reducer';
import {INITIAL_APPLICATION_STATE} from './store/application-state';
import {LoadThreadEffect} from './store/effects/loadThread.effect';
import {SampleHttpService} from './sample.htt-service';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


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
    EffectsModule.forRoot([LoadThreadEffect]),
    StoreDevtoolsModule.instrument({maxAge: 30})
  ],
  providers: [SampleHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

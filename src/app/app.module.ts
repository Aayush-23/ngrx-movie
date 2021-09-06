import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './store/movie.efects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/movie.reducer';
import { MOVIES_STATE_NAME } from './store/movie.selector';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([MovieEffects]),
    StoreModule.forRoot({ movieReducerFn: reducer }),
    StoreModule.forFeature(MOVIES_STATE_NAME, reducer),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

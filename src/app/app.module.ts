import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CounterModule } from './heroes/components/counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [HeroesModule, CounterModule, BrowserModule, CommonModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

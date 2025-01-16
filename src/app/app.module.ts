import { HeroesModule } from './heroes/hero/heroes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { CounterModule } from './counter/counter.module';

import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule, DbzModule, HeroesModule],
  exports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

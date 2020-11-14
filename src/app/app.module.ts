import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiscovergyToastModule } from './discovergy-toast/discovergy-toast.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DiscovergyToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

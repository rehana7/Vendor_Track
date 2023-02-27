import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { ServeComponent } from './serve/serve.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    ServeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    DataComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

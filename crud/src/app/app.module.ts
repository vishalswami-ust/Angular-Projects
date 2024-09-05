import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './delete/delete.component';
import { TokenComponent } from './token/token.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReactiveComponent,
    FormbuilderComponent,
    TestObservableComponent,
    DeleteComponent,
    TokenComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

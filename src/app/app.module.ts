import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { CheckBoxComponent } from './core-ui/check-box/check-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CheckBoxComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const checkBox = createCustomElement(CheckBoxComponent, { injector });
    customElements.define('check-box', checkBox);
  } }

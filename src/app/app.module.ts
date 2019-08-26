import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomDropdownComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
    entryComponents: [CustomDropdownComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const customDropdown = createCustomElement(CustomDropdownComponent, { injector });
    customElements.define('custom-dropdown', customDropdown);
  }

}
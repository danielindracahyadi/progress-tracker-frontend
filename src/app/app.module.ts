import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponentComponent } from './dropdown-component/dropdown-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
    entryComponents: [DropdownComponentComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const customDropdown = createCustomElement(DropdownComponentComponent, { injector });
    customElements.define('custom-dropdown', customDropdown);
    
  }

}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './core-ui/dropdown/dropdown.component';
import { LoginSceneComponent } from './pages/login-scene/login-scene.component';


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    LoginSceneComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
    entryComponents: [DropdownComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const customDropdown = createCustomElement(DropdownComponent, { injector });
    customElements.define('custom-dropdown', customDropdown);
    
  }

}
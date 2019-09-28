import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginSceneRoutingModule } from './login-scene-routing.module';
import { LoginSceneComponent } from './login-scene.component';
import { TextViewComponent } from 'src/app/core-ui/text-view/text-view.component';
import { TextInputComponent } from 'src/app/core-ui/text-input/text-input.component';
import { ButtonComponent } from 'src/app/core-ui/button/button.component';

@NgModule({
  declarations: [
    // LoginSceneComponent,
    // TextViewComponent,
    // TextInputComponent,
    // ButtonComponent
  ],
  imports: [
    CommonModule,
    LoginSceneRoutingModule,
  ],
  exports: [
    // LoginSceneComponent
  ]
})
export class LoginSceneModule { }

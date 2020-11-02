import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';




@NgModule({
  declarations: [
    AuthComponent
  ],
  exports: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    LottieModule.forRoot({ player: () => player })
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
@NgModule({
  declarations: [
    LogoComponent
  ],
  exports: [
    LogoComponent
  ]
})
export class SharedModule { }

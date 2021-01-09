import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastsComponent } from './toasts/toasts.component';
import { ToastComponent } from './toast/toast.component';



@NgModule({
  declarations: [ ToastsComponent, ToastComponent ],
  entryComponents: [
    ToastsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NgSimpleToastModule { }

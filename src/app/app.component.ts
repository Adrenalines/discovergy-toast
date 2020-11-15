import { Component } from '@angular/core';
import { ToastService } from './discovergy-toast/services/toast.service';
import { ToastTypes } from './discovergy-toast/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private toastService: ToastService) { }

  public showToast(): void {
    this.toastService.open({
      heading: 'New heading',
      subheading: 'New subheading',
      message: 'New message',
      type: ToastTypes.Success
    });
  }
}

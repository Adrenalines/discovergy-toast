import { Component } from '@angular/core';
import { DEFAULT_MAX, DEFAULT_TIMEOUT } from './ng-simple-toast/defaults';
import { ToastPositions, ToastTypes } from './ng-simple-toast/models';
import { ToastService } from './ng-simple-toast/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public heading = '';
  public subheading = '';
  public message = '';
  public type = ToastTypes.Success;
  public toastTypes = ToastTypes;
  public timeout = DEFAULT_TIMEOUT;
  public position = ToastPositions.TopRight;
  public toastPositions = ToastPositions;
  public max = DEFAULT_MAX;

  constructor(private toastService: ToastService) { }

  public showToast(): void {
    this.toastService.open({
      heading: this.heading,
      subheading: this.subheading,
      message: this.message,
      type: this.type,
      timeout: this.timeout,
      position: this.position,
      max: this.max
    });
  }
}

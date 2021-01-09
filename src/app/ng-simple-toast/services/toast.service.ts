import { Injectable } from '@angular/core';
import { UserToast } from '../models';
import { ToastListService } from './toast-list.service';
import { ToastLoadingService } from './toast-loading.service';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastListService: ToastListService,
    private toastLoadingService: ToastLoadingService
  ) { }

  public open(toast: UserToast): void {
    if (!toast.heading || !toast.message || !toast.type) {
      return;
    }

    const newToasts = this.toastListService.toasts.getValue();
    newToasts.push({ ...toast, id: Date.now() });
    this.toastListService.toasts.next(newToasts);

    if (!this.toastLoadingService.toastsComponentRef) {
      this.toastLoadingService.loadComponent();
    }
  }
}

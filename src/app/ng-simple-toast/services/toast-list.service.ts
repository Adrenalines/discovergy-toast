import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ToastListService {
  public toasts: BehaviorSubject<Toast[]> = new BehaviorSubject([]);

  constructor() { }

  public deleteToast(deletedToast: Toast): void {
    const newToasts: Toast[] = this.toasts.getValue().filter(toast => toast.id !== deletedToast.id);
    this.toasts.next(newToasts);
  }
}

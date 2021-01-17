import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ToastListService {
  public toasts: BehaviorSubject<Toast[]> = new BehaviorSubject([]);

  constructor() { }

  public deleteToast(deletedToastId: number): void {
    const newToasts: Toast[] = this.toasts.getValue().filter(toast => toast.id !== deletedToastId);
    this.toasts.next(newToasts);
  }
}

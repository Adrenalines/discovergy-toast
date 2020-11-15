import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast } from '../models';
import { toastsStub } from '../stub';

@Injectable({
  providedIn: 'root'
})
export class ToastListService {
  public toasts: BehaviorSubject<Toast[]> = new BehaviorSubject(toastsStub);

  constructor() { }

  public deleteToast(): void {
    const newToasts = this.toasts.getValue();
    newToasts.shift();
    this.toasts.next(newToasts);
  }
}

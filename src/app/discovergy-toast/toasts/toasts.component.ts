import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, SubscriptionLike } from 'rxjs';
import { Toast, ToastPositions } from '../models';
import { toastsStub } from '../stub';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {
  public toasts: BehaviorSubject<Toast[]> = new BehaviorSubject(toastsStub);
  public position = ToastPositions.TopRight;
  public maxCount = 5;

  constructor() { }

  ngOnInit(): void {
  }

  public deleteToast(): void {
    const newToasts = this.toasts.getValue();
    newToasts.shift();
    this.toasts.next(newToasts);
  }

}

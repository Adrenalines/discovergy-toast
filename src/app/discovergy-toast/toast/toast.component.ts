import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import {SubscriptionLike, timer } from 'rxjs';
import { Toast } from '../models';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {
  @Input() public toast: Toast;
  @Output() private deleteToast = new EventEmitter<null>();
  private timeout = 5000;
  private tick: SubscriptionLike;

  constructor() { }

  ngOnInit(): void {
    this.tick = timer(this.timeout).subscribe(
      () => this.deleteToast.emit()
    );
  }

  ngOnDestroy(): void {
    this.tick.unsubscribe();
  }

}

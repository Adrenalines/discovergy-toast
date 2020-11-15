import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SubscriptionLike, timer } from 'rxjs';
import { Toast } from '../models';
import { DEFAULT_TIMEOUT } from '../defaults';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {
  @Input() public toast: Toast = {} as Toast;
  @Output() private deleteToast = new EventEmitter<null>();
  private tick: SubscriptionLike;

  constructor() { }

  ngOnInit(): void {
    this.tick = timer(this.toast?.timeout || DEFAULT_TIMEOUT).subscribe(
      () => this.deleteToast.emit()
    );
  }

  ngOnDestroy(): void {
    this.tick.unsubscribe();
  }

}

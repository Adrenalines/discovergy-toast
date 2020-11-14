import { Component, OnInit } from '@angular/core';
import { Toast } from '../models';
import { toastsStub } from '../stub';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  public toasts: Toast[] = toastsStub;
  public maxToastsCount = 5;

  constructor() { }

  ngOnInit(): void {
  }

}

import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector
} from '@angular/core';
import { ToastsComponent } from '../toasts/toasts.component';
import { Toast } from '../models';
import { ToastListService } from './toast-list.service';

@Injectable({
  providedIn: 'root'
})
export class ToastLoadingService {
  public toastsComponentRef: ComponentRef<ToastsComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private toastListService: ToastListService
  ) { }

  public loadComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ToastsComponent);
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.toastsComponentRef = componentRef;

    const sub = this.toastListService.toasts.subscribe((toasts: Toast[]) => {
      if (this.toastsComponentRef && !toasts.length) {
        this.destroyComponent();
        sub.unsubscribe();
      }
    });
  }

  private destroyComponent(): void {
    this.appRef.detachView(this.toastsComponentRef.hostView);
    this.toastsComponentRef.destroy();
    this.toastsComponentRef = null;
  }
}

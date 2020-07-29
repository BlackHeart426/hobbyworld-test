import { Injectable, TemplateRef  } from '@angular/core';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}): void {
    console.log(options);
    // setTimeout(() => {
    //   this.remove()
    // })
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast): void {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}

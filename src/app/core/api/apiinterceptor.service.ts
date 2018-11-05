import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { } from 'rxjs/add/operator/do';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class APIInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap((resp: any) => {
      if (resp instanceof HttpResponse) {
        console.log('API Interceptor:', resp.status, ' data: ', resp.body);
      }
    }));
  }
}

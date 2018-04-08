import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { MatSnackBar } from '@angular/material';
import { Strings } from './strings';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorHandler implements HttpInterceptor {

  constructor(
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).do(
      (event: HttpEvent<any>) => {

      },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          let message: string;

          switch (err.status) {

            case 401:
              message = Strings.SessionExpired;
              this.router.navigate(['login']);
              break;

            case 404:
              message = Strings[err.error.message];

              if (!message) {
                message = Strings.NotFound;
              }
              break;

            case 500:
              message = Strings.InternalError;
              break;

            default:
              message = Strings.UnknownError;
              break;
          }


          this.snackBar.open(message, Strings.Ok);
        }
      });
  }
}

export const HttpErrorHandlerProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpErrorHandler,
  multi: true,
};

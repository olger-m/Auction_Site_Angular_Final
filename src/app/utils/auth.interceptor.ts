import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError} from 'rxjs';
import { Router } from '@angular/router';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router:Router) { }



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    // let username = "b"
    // let password = "b"
    // let basicAuthHeaderString = "Basic " + window.btoa(username + ':' + password)

    req = req.clone({
      setHeaders: {
        // Authorization: basicAuthHeaderString
      }
      , withCredentials: true
    })


    return next.handle(req).pipe((catchError((error: HttpErrorResponse) => {

      if(error.status === 0 || error.status === 302){
        sessionStorage.clear()
        this.router.navigate(['home'])
      }
      return throwError(() => error)
    })));

  }





}

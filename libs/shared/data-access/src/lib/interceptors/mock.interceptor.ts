import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';
import { isDevMode } from '@angular/core';

export const MockInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  if (!isDevMode()) return next(req);

  ///////////////DEV MODE ONLY/////////////////////
  const clonedRequest = req.clone({
    url: `assets${req.url}.json`,
    method: 'GET',
  });

  return next(clonedRequest).pipe(
    map((event: HttpEvent<unknown>) => {
      if (event instanceof HttpResponse && req.method !== 'GET') {
        return event.clone({ body: req.body });
      }
      return event;
    })
  );
};

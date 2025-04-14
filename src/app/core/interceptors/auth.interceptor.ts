import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token') ?? ''
  req = req.clone({
    setHeaders: {
      'X-Token': token,
    }
  })

  return next(req)
};

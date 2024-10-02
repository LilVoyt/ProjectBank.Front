import { HttpInterceptorFn } from '@angular/common/http';
import { RegisterService } from '../services/register.service';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const registerService = inject(RegisterService);
  
  const myToken = registerService.getToken();
  console.log( "my token", {myToken});

    const authRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${myToken}`)
  })

  return next(authRequest);
};

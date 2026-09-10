import { HttpInterceptorFn } from "@angular/common/http";
import { tap, catchError, throwError } from "rxjs";
import { inject } from "@angular/core";
import { AuthFacade } from "../Facade/auth.facade";
import { Router } from "@angular/router";
export const httpInterceptor : HttpInterceptorFn = (req, next) => {
    const authFacade= inject(AuthFacade)
    const token = authFacade.obterToken();
const router = inject(Router)
    console.log('Request', req.url)

    const novaRec = req.clone({
        setHeaders:{
            Authorization: `Bearer ${token}`,
        }
    });
    return next(novaRec).pipe(
        tap({
            next: (event) => console.log('RESPONSE: ',event),
            error: (error) => console.log('ERRO: ',error)
        }),
        catchError((error) => {
            console.log('ERRO GLOBAL:',error);

            if (error.status === 401) {
    console.warn('Não autorizado. Tente fazer o login novamente.');
        authFacade.deslogar();
                router.navigateByUrl('/login');
}
                if(error.status === 500){
                console.warn('Erro interno do servidor!');
            }
            if(error.status === 404){
                console.warn('URL não encontrada!');
            }
            return throwError(() => error);
            
        }

        ),

    );
}; 
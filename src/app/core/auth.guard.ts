import { CanActivateFn,Router } from "@angular/router";
import { inject } from "@angular/core";
import { AuthFacade } from "./Facade/auth.facade";

export const authGuard: CanActivateFn = () => {
    const authFacade = inject(AuthFacade);
    const router = inject(Router);

    if(authFacade.estaLogado()){
        return true;
    }

    return router.createUrlTree(['/login']);
};
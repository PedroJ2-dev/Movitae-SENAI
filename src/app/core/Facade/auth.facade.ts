import { Injectable, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})

export class AuthFacade {

    private authService = inject(AuthService);

    usuarioAtual = this.authService.usuarioAtual;
    estaLogado = this.authService.estaLogado;
    ehAdmin = this.authService.modoAdmin;

    logar(email: string, senha: string): boolean {
        return this.authService.login(email, senha);
    }

    logout() {
        this.authService.logout();
    }

    obterAssinatura(){
        return this.authService.obterAssinatura();
    }
    validarAssinatura(){
        this.authService.validarAssinatura();
    }

    obterToken() { 
        return this.authService.obterToken();
    }

}
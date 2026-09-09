import { Injectable, computed, signal } from "@angular/core";
import { email } from "@angular/forms/signals";

type Usuario ={
    email:string;
    perfil:'usuario'
};

@Injectable({
    providedIn:'root'
})

export class AuthService{

private usuario = signal<Usuario|null>(null);

usuarioAtual = computed(()=> this.usuario())
    estaLogado = computed(() => this.usuario() !== null)


    login(email: string, senha: string){
        if(!email || !senha){
            return false
        }
this.usuario.set(
        {
            email,
            perfil:'usuario'
        }
    );

    return true;

    }

     logout(){
        this.usuario.set(null);
}
}


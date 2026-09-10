import { Injectable, computed, signal } from "@angular/core";
import { email } from "@angular/forms/signals";
type PerfilUsuario = 'usuario' | 'admin';
type Usuario ={
    email:string;
    perfil:PerfilUsuario
};

@Injectable({
    providedIn:'root'
})

export class AuthService{

private usuario = signal<Usuario | null>(null);
private tokenJwt = signal<string | null>(null);
usuarioAtual = computed(()=> this.usuario())
    estaLogado = computed(() => this.usuario() !== null)
    modoAdmin = computed(() => this.usuario()?.perfil === 'admin')
token = computed(() => this.tokenJwt());


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
obterToken(): string | null {
return this.tokenJwt();
}
obterPerfil(): PerfilUsuario | null {
return this.usuario()?.perfil ?? null;
}
}




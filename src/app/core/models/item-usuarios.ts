export type PerfilUsuario = 'usuario' | 'admin';
export type Usuario = {
    email: string,
    perfil: PerfilUsuario,
    assinante: boolean
};
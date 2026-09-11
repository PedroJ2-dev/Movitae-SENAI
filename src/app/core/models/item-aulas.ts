import { ItemInstrutor } from "./item-instrutores"
import { Usuario } from "./item-usuarios"

export type ItemAula = {
    instrutor: ItemInstrutor,
    alunos: Usuario[],
    titulo: string,
    descricao: string,
    data: string
}
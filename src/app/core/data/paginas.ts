import { ItemPagina } from "../models/item-pagina";

export const PAGINAS: ItemPagina[] = [
    {
        nome: "Academias",
        descricao: "Encontre as academias mais proximas de você.",
        imagen: "imagens/categorias/academia.png",
        alt: "Uma imagen da fachada de uma academia",
        path: "/academias"
    },
    {
        nome: "Aulas",
        descricao: "Se matricule em uma de nossas aulas, e aproveite cada segundo.",
        imagen: "imagens/categorias/aulas.png",
        alt: "Uma imagen de um grupo de pessoas fazendo aeróbico",
        path: "/aulas"
    },
    {
        nome: "Instrutores",
        descricao: "Fale com nossos instrutores, veja os horarios disponiveis e marque uma avaliação fisica!",
        imagen: "imagens/categorias/instrutores.png",
        alt: "Uma imagen de um instrutor ensinando a fazer desenvolvimento de ombro",
        path: "/instrutores"
    },
    {
        nome: "Assinaturas",
        descricao: "Assine nosso plano e tenha acesso a todos nossos aulões e acompanhementos exclusivo.",
        imagen: "imagens/categorias/assinaturas.png",
        alt: "Uma imagen de uma mulher anotando as finanças em um papel",
        path: "/assinaturas"
    },
]
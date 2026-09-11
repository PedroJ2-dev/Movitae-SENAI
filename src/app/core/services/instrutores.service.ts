import { isPlatformBrowser } from "@angular/common";
import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from "@angular/core";

import { ItemInstrutor } from "../models/item-instrutores";


@Injectable({
    providedIn: 'root',
})
export class InstrutoresService {
    private platformId = inject(PLATFORM_ID);

    private readonly chaveStorage = "movitae-instrutores";

    private instrutores = signal<ItemInstrutor[]>(this.carregarInstrutoresSalvo())

    itens = computed(() => this.instrutores())
    nenhumInstrutor = computed(() => this.instrutores().length === 0)


    adicionar(instrutor: ItemInstrutor) {
        this.instrutores.update((listaAtual) => [...listaAtual, instrutor])
    }

    removerPorIndice(indice: number) {
        this.instrutores.update((listaAtual) =>
            listaAtual.filter((_, index) => index !== indice)
        );
    }
    private estaNoNavegador(): boolean {
        return isPlatformBrowser(this.platformId);
    }
    private carregarInstrutoresSalvo(): ItemInstrutor[] {
        if (!this.estaNoNavegador()) {
            return [];
        }
        const dadosSalvos = localStorage.getItem(this.chaveStorage);
        if (!dadosSalvos) {
            return [];
        }
        try {
            return JSON.parse(dadosSalvos) as ItemInstrutor[];
        } catch {
            return [];
        }
    }
    // Salva o carrinho atualizado no navegador.
    private salvarInstrutores(itens: ItemInstrutor[]) {
        if (!this.estaNoNavegador()) {
            return;
        }
        localStorage.setItem(this.chaveStorage, JSON.stringify(itens));
    }

    constructor() {
    effect(() => {
        this.salvarInstrutores(this.instrutores())
    });
}
}
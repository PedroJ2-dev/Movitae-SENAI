import { Injectable, inject } from '@angular/core';

import { InstrutoresService } from '../services/instrutores.service';
import { ItemInstrutor } from '../models/item-instrutores';

@Injectable({
    providedIn: 'root',
})

export class InstrutoresFacade {
    private instrutoresService = inject(InstrutoresService);
    instrutores = this.instrutoresService.itens;
    nenhumInstrutor = this.instrutoresService.nenhumInstrutor;
    
    adicionar(instrutor: ItemInstrutor) {
        this.instrutoresService.adicionar(instrutor);
    }

    removerPorIndice(indice: number) {
        this.instrutoresService.removerPorIndice(indice);
    }
}
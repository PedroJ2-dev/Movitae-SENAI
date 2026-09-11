import { Component, EventEmitter, Output, signal } from '@angular/core';

import { Academias } from '../academias/academias';
import { MatCard, MatCardHeader } from "@angular/material/card";
import { InstrutoresService } from '../../../core/services/instrutores.service';

@Component({
  selector: 'app-lista-academias',
  imports: [Academias],
  templateUrl: './lista-academias.html',
  styleUrl: './lista-academias.scss',
})
export class ListaAcademias {
   
  academiaSelecionada = signal<string | null>(null);
  carregando = signal(true);
  
  academias = [
  {
    nome: 'Unidade Central',
    endereco: 'Rua das Flores, 394 - Centro',
    contato: '(11) 99999-1111',
    imagem: 'https://invexo.com.br/blog/wp-content/uploads/2022/10/equipamentos-smart-fit-copacabana-rio-de-janeiro-1024x576.jpg.webp'
  },
  {
    nome: 'Unidade Jardim XV',
    endereco: 'Av. Brasil, 500 - Jardim XV',
    contato: '(11) 98888-2222',
    imagem: 'https://invexo.com.br/blog/wp-content/uploads/2022/10/equipamentos-smart-fit-copacabana-rio-de-janeiro-1024x576.jpg.webp'
  },
  {
    nome: 'Unidade Vila Nova',
    endereco: 'Rua São Paulo, 250 - Vila Nova',
    contato: '(11) 97777-3333',
    imagem: 'https://invexo.com.br/blog/wp-content/uploads/2022/10/equipamentos-smart-fit-copacabana-rio-de-janeiro-1024x576.jpg.webp'
  },
  {
    nome: 'Unidade Bela Vista',
    endereco: 'Av. Paulista, 850 - Bela Vista',
    contato: '(11) 96666-4444',
    imagem: 'https://invexo.com.br/blog/wp-content/uploads/2022/10/equipamentos-smart-fit-copacabana-rio-de-janeiro-1024x576.jpg.webp'
  },
];
   
  exibirAcademia(nome: string) {
    this.academiaSelecionada.set(nome);
  }

  constructor() {
    
  } 
}

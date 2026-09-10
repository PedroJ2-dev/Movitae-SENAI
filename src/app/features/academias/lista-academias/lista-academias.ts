import { Component } from '@angular/core';

import { Academias } from '../academias/academias';
import { MatCard, MatCardHeader } from "@angular/material/card";

@Component({
  selector: 'app-lista-academias',
  imports: [Academias],
  templateUrl: './lista-academias.html',
  styleUrl: './lista-academias.scss',
})
export class ListaAcademias {
   academias = [
  {
      nome: 'Academia Strong Fit',
      endereco: 'Rua das Flores, 100 - Centro',
      contato: '(11) 99999-1111',
      imagem: 'https://invexo.com.br/blog/wp-content/uploads/2022/10/equipamentos-smart-fit-copacabana-rio-de-janeiro-1024x576.jpg.webp'
    },
    {
      nome: 'Power Gym',
      endereco: 'Av. Brasil, 500 - Jardim América',
      contato: '(11) 98888-2222',
      imagem: 'https://invexo.com.br/blog/wp-content/uploads/2022/10/equipamentos-smart-fit-copacabana-rio-de-janeiro-1024x576.jpg.webp'
    },
    {
      nome: 'Iron Fitness',
      endereco: 'Rua São Paulo, 250 - Vila Nova',
      contato: '(11) 97777-3333',
      imagem: 'https://invexo.com.br/blog/wp-content/uploads/2022/10/equipamentos-smart-fit-copacabana-rio-de-janeiro-1024x576.jpg.webp'
    }
  ];

  selecionarAcademia(){
    
  }
}

import { Component, Input, Output, EventEmitter, Type } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCardActions, MatCardHeader, MatCard, MatCardContent, MatCardTitle, MatCardImage } from '@angular/material/card';

@Component({
  selector: 'app-academias',
  imports: [MatCard, MatButton, MatCardActions, MatCardHeader, MatCardContent, MatCardTitle, MatCardImage],
  templateUrl: './academias.html',
  styleUrl: './academias.scss',
})

export class Academias {
  @Input() nome = ""; 
  @Input() endereco = "";
  @Input() contato = "";
  @Input() imagem = "";

  @Output() academiaSelecionada = new EventEmitter<string>();

  selecionarAcademia(){
    this.academiaSelecionada.emit(this.nome);
  }
}



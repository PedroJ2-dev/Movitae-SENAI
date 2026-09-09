import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatIcon, MatAnchor, RouterLink, MatMenuModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  showFiller = false;
private authservice = inject(AuthService)

  estarLogado= this.authservice.estaLogado
usuario= this.authservice.usuarioAtual;

sair(){
  this.authservice.logout()
}

  @Output() openMenu = new EventEmitter<void>();
}
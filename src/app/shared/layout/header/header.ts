import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { AuthFacade } from '../../../core/Facade/auth.facade';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatIcon, MatAnchor, RouterLink, MatMenuModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  showFiller = false;
  private authFacade = inject(AuthFacade)

  estarLogado = this.authFacade.estaLogado
  usuario = this.authFacade.usuarioAtual;

  sair() {
    this.authFacade.logout()
  }

  @Output() openMenu = new EventEmitter<void>();
}
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { AuthFacade } from '../../../core/Facade/auth.facade';


@Component({
  selector: 'app-assinaturas',
  imports: [MatCardModule, MatIcon],
  templateUrl: './assinaturas.html',
  styleUrl: './assinaturas.scss',
})
export class Assinaturas {
  authFacade = inject(AuthFacade)

  assinar(){
    this.authFacade.validarAssinatura();
    console.log(this.authFacade.usuarioAtual())
  }
}

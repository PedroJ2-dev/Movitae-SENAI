import { Component, inject, Input, Output, EventEmitter} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { InstrutoresFacade } from '../../../core/Facade/instrutores.facade';
import { AuthFacade } from '../../../core/Facade/auth.facade';
import { MatAnchor } from '@angular/material/button';


@Component({
  selector: 'app-instrutores',
  imports: [MatCardModule, MatIcon, MatAnchor],
  templateUrl: './instrutores.html',
  styleUrl: './instrutores.scss',
})

export class Instrutores {
  instrutoresFacade = inject(InstrutoresFacade);
  authFacade = inject(AuthFacade);

  @Input() nome = "";
  @Input() avatar = "";
  @Input() fisico = "";
  @Input() cel = "";

  @Output() remover = new EventEmitter<void>();

  removerInstrutor(){
    this.remover.emit()
  }
}

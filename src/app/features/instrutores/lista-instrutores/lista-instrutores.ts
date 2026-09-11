import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Instrutores } from '../instrutores/instrutores';
import { ItemInstrutor } from '../../../core/models/item-instrutores';
import { InstrutoresFacade } from '../../../core/Facade/instrutores.facade';
import { MatCard } from '@angular/material/card';
import { AuthFacade } from '../../../core/Facade/auth.facade';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-lista-instrutores',
  imports: [
    Instrutores,
    MatCard,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIcon
],
  templateUrl: './lista-instrutores.html',
  styleUrl: './lista-instrutores.scss',
})
export class ListaInstrutores {
  instrutoresFacade = inject(InstrutoresFacade);
  authFacade = inject(AuthFacade);

  instrutores = this.instrutoresFacade.instrutores;
  nenhumInstrutor = this.instrutoresFacade.nenhumInstrutor;
  ehAdmin = this.authFacade.ehAdmin;

  formInstrutor = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(4)]),

    avatar: new FormControl('',[Validators.required, Validators.pattern(/^https?:\/\/.+/)]),

    fisico: new FormControl('',[Validators.required, Validators.pattern(/^https?:\/\/.+/)]),

    cel: new FormControl('', [Validators.required, Validators.minLength(11), comNumeros]),
  });

  adicionarInstrutor(): void {
    if (this.formInstrutor.invalid) {
      this.formInstrutor.markAllAsDirty();
      console.log("chegoaq")
      return;
    }

    const instrutor: ItemInstrutor = {
      nome: this.formInstrutor.controls.nome.value ?? "",
      avatar: this.formInstrutor.controls.avatar.value ?? "",
      fisico: this.formInstrutor.controls.fisico.value ?? "",
      cel: this.formInstrutor.controls.cel.value ?? "",
    };

    this.instrutoresFacade.adicionar(instrutor)
  }
  remover(indice: number){
    console.log("tetestes")
    this.instrutoresFacade.removerPorIndice(indice)
    console.log(indice)
  }
}
function comNumeros(control: AbstractControl): ValidationErrors | null {
  const valor = control.value;
  if (!valor) return null;
  if (!/\d/.test(valor)) {
    return { digitoInvalido: true };
  }
  return null;
}

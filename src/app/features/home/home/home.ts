import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { PAGINAS } from '../../../core/data/paginas';
import { MatCard, MatCardImage } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [MatIcon, MatCard, MatCardImage, MatAnchor, MatButtonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  paginas = PAGINAS;
}

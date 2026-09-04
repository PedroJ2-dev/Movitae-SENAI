import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCardActions } from '@angular/material/card';

@Component({
  selector: 'app-academias',
  imports: [MatCard, MatButton, MatIcon,MatCardActions],
  templateUrl: './academias.html',
  styleUrl: './academias.scss',
})
export class Academias {}

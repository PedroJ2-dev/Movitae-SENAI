import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor } from '@angular/material/button';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, MatIcon, MatAnchor, RouterLink, MatDrawer, MatDrawerContainer],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  showFiller = false;
}

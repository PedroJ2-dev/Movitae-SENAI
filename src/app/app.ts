import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Header } from './shared/layout/header/header';
import { Footer } from './shared/layout/footer/footer';
import { MatDrawerContainer, MatDrawer, MatDrawerContent } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MatDrawerContainer, Footer, MatDrawer, MatDrawerContent, MatIcon, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Movitae');
}

/*
                  =================                 
             =======............-=======            
          =====:.....................-=====         
        ==-         ............       .:===+       
      +==    *@@#     .......    .*@@.   ..====     
     ===    %@@% %    .......   .@@@:*+   ...===    
   ===-:    +@@@@=    ......:    @@@@@     ...===   
   ==-:::.           .:.....:.            .....===  
  ===-:::::..     .::........::.         .......=== 
 ===---:::::::----=:...........--:::..::.........== 
===-----:::::.-==.................-=-............===
===-------:::::..................................===
==---------:::::..................................==
==----------:::::.................................==
===----------:::::...............................===
====----------:::::..............................===
 ====----------:::::............................=== 
   ===-----------:::::........................:===  
    ====----------:::::.....................:===    
      =====--------=      ##   =.........:====      
         ======----=......##...+.....:-=====        
            +=======***********=-=======            
                  ======---========                                
*/


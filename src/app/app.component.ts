import { Component } from '@angular/core';
import {Event, Router,NavigationStart,NavigationEnd,NavigationCancel,NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoadingIndicator = true;
  constructor(private _router: Router){
    this._router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.showLoadingIndicator = true;
      }
      if(routerEvent instanceof NavigationEnd ||
         routerEvent instanceof NavigationError ||
         routerEvent instanceof NavigationCancel

        ){
        this.showLoadingIndicator = false;
      }
    });
  }

}

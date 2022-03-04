import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHostListener]',
})
export class HostListenerDirective {
  @Input('SpecificColumn') SpecificCoulmn: string = '';
  constructor() {}
  @HostListener('click', ['$event'])
 
  onClick(event: MouseEvent): void {
    
      let element = document.querySelector('.btns') as HTMLElement;
      if (element.classList.contains('navbar-inverse')) {
        element.classList.remove('navbar-inverse');
      } else {
        element.classList.add('navbar-inverse');
      }
    
    event.preventDefault;
  }
}

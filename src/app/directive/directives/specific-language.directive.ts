import {
  Directive,
  ElementRef,
  HostListener,
  Input ,
  Output, EventEmitter 
} from '@angular/core';

@Directive({
  selector: '[SpecificLanguage]',
})
export class SpecificLanguageDirective {
  @Input() SpecificLanguage: string;
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  //patternEN: RegExp = new RegExp('^[a-zA-Z0-9 ]+$');
  patternEN: RegExp = new RegExp('^[a-zA-Z0-9]([a-zA-Z0-9 ]+|)$');
  patternAR: RegExp = new RegExp('^[\u0621-\u064A0-9]([\u0621-\u064A0-9 ]+|)$');
  patternENNoNum: RegExp = new RegExp('^[a-zA-Z]([a-zA-Z ]+|)$');
  patternARNoNum: RegExp = new RegExp('^[\u0621-\u064A]([\u0621-\u064A ]+|)$');
  constructor(private elRef: ElementRef) {}

  @HostListener('keypress', ['$event'])
  onKeypress(event: KeyboardEvent) {
    if (this.SpecificLanguage == 'EN') {
      if (!this.patternEN.test(this.elRef.nativeElement.value + event.key)){
       
          this.addNewItem(this.elRef.nativeElement.value + event.key)
          event.preventDefault();
      }
       
    } else if (this.SpecificLanguage == 'AR') {
      if (!this.patternAR.test(this.elRef.nativeElement.value + event.key)){
          this.addNewItem(this.elRef.nativeElement.value + event.key);
          event.preventDefault();
      }
    }
    else if(this.SpecificLanguage == 'ARNoNum')
    {
        if (!this.patternARNoNum.test(this.elRef.nativeElement.value+event.key)){
          this.addNewItem(this.elRef.nativeElement.value + event.key);
          event.preventDefault();
        }
       
    }else if(this.SpecificLanguage == 'ENNoNum')
    {
        if (!this.patternENNoNum.test(this.elRef.nativeElement.value+event.key)){
          this.addNewItem(this.elRef.nativeElement.value + event.key);
          event.preventDefault();
        }
       
    }
  }
}

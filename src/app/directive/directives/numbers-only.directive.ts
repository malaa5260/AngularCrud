import { Directive, ElementRef, HostListener, Input ,Output, EventEmitter} from '@angular/core';

@Directive({
    selector: '[numberOnly]'
})
export class NumbersOnlyDirective {
    @Input('PhoneNumber') PhoneNumber: boolean=false;
    @Output() newItemEvent = new EventEmitter<string>();
    addNewItem(value: string) {
      this.newItemEvent.emit(value);
    }
    patternPhoneNumber1: RegExp = new RegExp('^((01)|(0)$)');
    patternPhoneNumber2: RegExp = new RegExp('^01[0-2|5]$');

    
    constructor(private elRef: ElementRef) {
       // alert("NumbersOnlyDirective");
    }

    @HostListener('keypress', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
            event.preventDefault();
            this.addNewItem(this.elRef.nativeElement.value + event.key)
        }
        else if (this.PhoneNumber) {
            if (this.elRef.nativeElement.value.length >= 11)
                event.preventDefault();
            else if (this.elRef.nativeElement.value.length < 2) {
                if (!this.patternPhoneNumber1.test(this.elRef.nativeElement.value + event.key))
                    event.preventDefault();
            }

            else if (this.elRef.nativeElement.value.length < 3) {
                if (!this.patternPhoneNumber2.test(this.elRef.nativeElement.value + event.key))
                    event.preventDefault();
            }
                    
        }
        //alert(this.elRef.nativeElement.value + event.key + "   " + this.patternPhoneNumber.test(this.elRef.nativeElement.value + event.key));

    }

}

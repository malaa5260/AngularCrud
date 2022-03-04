import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[BlockPaste]'
})
export class PasteDirective {
    @Input() BlockPaste: string;

    patternEN: RegExp = new RegExp('^[a-zA-Z0-9]([a-zA-Z0-9 ]+|)$');
    patternAR: RegExp = new RegExp('^[\u0621-\u064A0-9]([\u0621-\u064A0-9 ]+|)$');

    constructor() { }

    @HostListener('paste', ['$event'])
    onKeypress(event: { clipboardData: { getData: (arg0: string) => any; }; preventDefault: () => void; }) {

        let data = event.clipboardData.getData('text');
        if (this.BlockPaste == 'EN') {
            if (!this.patternEN.test(data))
                event.preventDefault();
        }
        else if (this.BlockPaste == 'AR') {
            if (!this.patternAR.test(data))
                event.preventDefault();
        }

    }

}

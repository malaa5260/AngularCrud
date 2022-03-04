import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { SpecificLanguageDirective } from './directives/specific-language.directive';
import { HostListenerDirective } from './directives/host-listener.directive';
import { PasteDirective } from './directives/paste.directive';

@NgModule({
    declarations: [ SpecificLanguageDirective,NumbersOnlyDirective, HostListenerDirective,PasteDirective],
    exports: [ SpecificLanguageDirective,NumbersOnlyDirective,PasteDirective,HostListenerDirective],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }

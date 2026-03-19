import {Directive, effect, ElementRef, input} from '@angular/core';

@Directive({
  selector: '[mtBasicSpinner]',
  host: {
    '[class.mat-spinner]': 'mtBasicSpinner()',
    '[class.hide-btn-text]': 'hideText() && mtBasicSpinner()',
  },
})
export class MatBasicSpinnerDirective {
  readonly hideText = input(false);
  readonly mtBasicSpinner = input.required<boolean>();

  constructor(elem: ElementRef<HTMLButtonElement>) {
    effect(() => {
      elem.nativeElement.disabled = this.mtBasicSpinner();
    });
  }
}

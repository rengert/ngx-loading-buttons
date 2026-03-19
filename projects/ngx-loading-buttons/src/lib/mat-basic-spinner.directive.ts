import { Directive, ElementRef, HostBinding, Input, input } from '@angular/core';

@Directive({ selector: '[mtBasicSpinner]' })
export class MatBasicSpinnerDirective {
  readonly hideText = input(false);
  @Input() set mtBasicSpinner(loading: boolean) {
    this.loading = loading
    if (this.hideText()) this.textHidden = loading

    this.elem.nativeElement.disabled = loading;
  }

  @HostBinding('class.mat-spinner')
  loading = false

  @HostBinding('class.hide-btn-text')
  textHidden = false

  @HostBinding('disabled')
  get disabled(): boolean {
    return this.mtBasicSpinner;
  }

  constructor(private readonly elem: ElementRef<HTMLButtonElement>) {
  }
}

import { Directive, HostBinding, Input, input } from '@angular/core';

@Directive({ selector: '[mtGlow]',})
export class MatGlowDirective {
  readonly glowColor = input<string>("blue");
  readonly mtGlow = input(false);
  readonly hideText = input(false);

  @Input("class")
  @HostBinding('class')
  get elementClass(): string {
    document.documentElement.style.setProperty('--glow-color', this.glowColor());
    const mtGlow = this.mtGlow();
    if (mtGlow && this.hideText()) {
      return 'mat-glow hide-btn-text';
    } else if (mtGlow) {
      return 'mat-glow';
    }
    return '';
  }

  @HostBinding('disabled')
  get disabled(): boolean {
    return this.mtGlow();
  }
}

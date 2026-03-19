import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'projects/ngx-loading-buttons-playground/src/app/app.component';
import { MatGlowDirective } from './mat-glow.directive';

describe('MatGlowDirective', () => {

  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [
        MatGlowDirective
      ],
      declarations: [AppComponent]
    })
    .createComponent(AppComponent);

    fixture.detectChanges();
  })

  it('should create an instance', () => {
    var element = fixture.debugElement;
    const directive = new MatGlowDirective(element);
    expect(directive).toBeTruthy();
  });

  it('should show glow and text when loading is true', () => {
    fixture.componentInstance.saving.set(true);
    fixture.detectChanges();

    var element: HTMLElement = fixture.nativeElement.querySelector("#glowWithText");
    expect(element.className).toEqual("mat-glow");
  });

  it('should show glow and hide text when loading is true', () => {
    fixture.componentInstance.saving.set(true);
    fixture.detectChanges();

    var element: HTMLElement = fixture.nativeElement.querySelector("#glowWithoutText");
    expect(element.className).toContain("mat-glow");
    expect(element.className).toContain("hide-btn-text");
  });
});

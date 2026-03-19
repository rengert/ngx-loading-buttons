import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
  changeDetection:ChangeDetectionStrategy.Eager
})
export class AppComponent {
  title = 'ngx-loading-buttons-playground';
  saving = signal(false);
  color = "blue";

  click(): void {
    this.saving.set(true);
    setTimeout(() => this.saving.set(false), 3000);
  }
}

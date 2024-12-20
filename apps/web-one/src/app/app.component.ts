import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonGroupComponent, SharedUiComponent } from '@nx19-ng18-mat-apps/shared-ui';

@Component({
  standalone: true,
  imports: [RouterModule, SharedUiComponent, ButtonGroupComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'web-one';
}

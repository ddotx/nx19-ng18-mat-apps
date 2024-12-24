import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormFieldOverrideComponent } from '@nx19-ng18-mat-apps/form-field-override';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  standalone: true,
  imports: [RouterModule, FormFieldOverrideComponent, MatFormFieldModule, MatInputModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'form-one';
}

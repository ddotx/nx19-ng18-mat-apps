import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'lib-button-group',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.scss'
})
export class ButtonGroupComponent {

}

import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogTitle, MatDialogClose } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-web-shared-ui-dialog-override',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './dialog-override.component.html',
  styleUrl: './dialog-override.component.scss'
})
export class DialogOverrideComponent {

}

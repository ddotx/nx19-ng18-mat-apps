import { DOCUMENT } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { ButtonGroupComponent } from '@nx19-ng18-mat-apps/shared-ui';
import { DialogOverrideComponent } from '@nx19-ng18-mat-apps/web-shared-ui';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonGroupComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'web-one';

  constructor(@Inject(DOCUMENT) private document: Document) { }

  readonly dialog = inject(MatDialog);
  private readonly router = inject(Router);


  openDialogOverride(): void {
    this.dialog.open(DialogOverrideComponent, {
      panelClass: 'dialog-container-rec',
    });
  }

  openDialog(): void {
    this.dialog.open(DialogOverrideComponent);
  }

  navigateToUrl() {
    // window.open('https://nx.dev', '_blank');
    this.document.location.href = 'https://nx.dev';
  }
}

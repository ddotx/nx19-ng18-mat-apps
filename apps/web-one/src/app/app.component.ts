import { ApiService } from '@nx19-ng18-mat-apps/web-shared-data-access';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { ButtonGroupComponent } from '@nx19-ng18-mat-apps/shared-ui';
import { DialogOverrideComponent } from '@nx19-ng18-mat-apps/web-shared-ui';
import { CardListComponent, Card } from '@ddotx/ddotdev-ui-controls';
import { assassins } from './data';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonGroupComponent, CardListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'web-one';
  cards: Card[] = assassins;

  constructor(@Inject(DOCUMENT) private document: Document,
    private apiService: ApiService
  ) {
    this.apiService.getAll().subscribe(data => {
      console.log(data);
    });
  }

  readonly dialog = inject(MatDialog);
  private readonly router = inject(Router);
  // private readonly restApiService = inject(RestApiService);


  openDialogOverride(): void {

    this.dialog.open(DialogOverrideComponent, {
      panelClass: ['dialog-container-rec'],
      maxWidth: '100vw',
      minWidth: '80vw'
    });
  }

  openDialog(): void {
    this.dialog.open(DialogOverrideComponent, {
      panelClass: 'dialog-container-capsule',
    });
  }

  navigateToUrl() {
    // window.open('https://nx.dev', '_blank');
    this.document.location.href = 'https://nx.dev';
  }

  onCardChange(cards: Card[]) {
    console.log(cards);
  }
}

import { RestApiService } from './../../../../libs/web/shared/data-access/src/lib/restApi.service';
import { RestApiService } from '@nx19-ng18-mat-apps/web-shared-data-access';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { ButtonGroupComponent } from '@nx19-ng18-mat-apps/shared-ui';
import { DialogOverrideComponent } from '@nx19-ng18-mat-apps/web-shared-ui';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonGroupComponent],
  providers: [
    {
      provide: RestApiService,
      useClass: RestApiService,
    }
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'web-one';

  constructor(@Inject(DOCUMENT) private document: Document,
    private restApiService: RestApiService
  ) { }

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
}

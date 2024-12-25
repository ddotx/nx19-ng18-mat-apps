import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { ApiService, MockApiService, RestApiService } from '@nx19-ng18-mat-apps/web-shared-data-access';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    {
      provide: ApiService,
      useFactory: () => {
        return new MockApiService()
      }
    }
  ],
};

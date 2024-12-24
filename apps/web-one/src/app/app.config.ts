import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { MockApiService, RestApiService } from '@nx19-ng18-mat-apps/web-shared-data-access';
import { isPlatformBrowser } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    {
      provide: RestApiService,
      useFactory: () => {
        if (isPlatformBrowser(12)) {
          return MockApiService;
        }
        return RestApiService
      }
    }
  ],
};

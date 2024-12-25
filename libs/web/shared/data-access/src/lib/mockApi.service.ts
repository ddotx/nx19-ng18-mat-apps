import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MockApiService extends ApiService {
  private readonly data = [
    {
      title: 'Assassins Creed',
      description: 'Altaïr Ibn-La Ahad',
      link: 'https://en.wikipedia.org/wiki/Assassin%27s_Creed_(video_game)',
    },
  ];

  getAll() {
    return of(this.data);
  }
}

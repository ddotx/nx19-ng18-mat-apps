import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({ providedIn: 'root' })
export class RestApiService extends ApiService {

  private readonly http = inject(HttpClient);

  getAll() {
    return this.http.get<Record<string, string>[]>('https://jsonplaceholder.typicode.com/posts');
  }


}

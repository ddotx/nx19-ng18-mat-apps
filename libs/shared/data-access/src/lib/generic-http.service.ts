import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ModelAdapter } from './model-adapter.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class GenericHttpService<T, S> {
  protected url!: string;
  defaultHeaders = new HttpHeaders();
  protected readonly httpClient = inject(HttpClient);

  constructor(private endpoint: string, private baseUrl: string, private adapter: ModelAdapter<T, S>) {
    this.url = this.baseUrl + '/api/' + this.endpoint;
  }

  public get(extraHttpRequestParams?: Partial<HttpHeaders>): Observable<S[]> {
    return this.httpClient
      .get<T[]>(this.url, this.prepareRequestOptions(extraHttpRequestParams))
      .pipe(map((data: T[]) => data.map((item) => this.adapter.fromDto(item) as S)));
  }

  public post(body: S, extraHttpRequestParams?: Partial<HttpHeaders>): Observable<S> {
    return this.httpClient
      .post(`${this.url}`, this.adapter.toDto(body), this.prepareRequestOptions(extraHttpRequestParams))
      .pipe(map((data) => this.adapter.fromDto(data as T) as S)) as Observable<S>;
  }

  /**
   * Append additional API headers to the request if needed
   * @param extraHttpRequestParams
   * @returns
   */
  public prepareRequestOptions(extraHttpRequestParams = {}) {
    return { headers: this.defaultHeaders, ...extraHttpRequestParams };
  }
}

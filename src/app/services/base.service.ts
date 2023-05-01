import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url: string;

  constructor(
    private httpClient: HttpClient) {
    this.url = environment.apiEndpoint;
  }

  public post<ResponseType, SendedType>(item: SendedType, endpoint: string): Observable<ResponseType> {
    return this.httpClient
      .post<ResponseType>(`${this.url}/${endpoint}`, item)
      .pipe(map((data: any) => {
        const result = data as ResponseType;
        return result;
      }));
  }

  public put<ResponseType, SendedType>(item: SendedType, endpoint: string, id: number): Observable<ResponseType> {
    return this.httpClient
      .put<ResponseType>(`${this.url}/${endpoint}/${id}`,
        item)
      .pipe(map((data: any) => {
        const result = data as ResponseType;
        return result;
      }));
  }

  public get<ResponseType>(queryOptions: string, endpoint: string): Observable<ResponseType> {
    let address = `${this.url}/${endpoint}`;
    if (queryOptions) {
      address += `?${queryOptions}`;
    }

    return this.httpClient
      .get(address)
      .pipe(map((data: any) => {
        const result = data as ResponseType;
        return result;
      }));
  }

  public getList<ResponseType>(queryOptions: string, endpoint: string): Observable<ResponseType[]> {
    let address = `${this.url}/${endpoint}`;
    if (queryOptions) {
      address += `?${queryOptions}`;
    }

    return this.httpClient
      .get(address)
      .pipe(map((data: any) => {
        const result = data as ResponseType[];
        return result;
      }));
  }

  delete<ResponseType>(endpointOptions: string, endpoint: string): Observable<ResponseType> {
    let address = `${this.url}/${endpoint}`;
    if (endpointOptions) {
      address += `${endpointOptions}`;
    }

    return this.httpClient
      .delete(address)
      .pipe(map((data: any) => {
        const result = data as ResponseType;
        return result;
      }));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.apiUrl;

  postService() {
    return this.http.get(this.baseUrl);
  }
}

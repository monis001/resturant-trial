import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class HTTPService {

  constructor(private http: HttpClient) {
   
  }

 

  get(url: string, queryParams?: any) {
    return this.http.get(url).toPromise();
  }

  post(url: string, body: any, queryParams = {}) {
    
    return this.http.post(url, body).toPromise();
  }

  put(url, body, queryParams = {}) {
    
    return this.http.put(url, body).toPromise();
  }

  delete(url, body, queryParams?: any) {
   
    return this.http.delete(url).toPromise();
  }

}

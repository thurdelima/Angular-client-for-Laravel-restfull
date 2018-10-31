import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  private url: string;
  private httpOptions: object;

  constructor(private http: HttpClient) {
    console.log('service-constructor');

    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ',
      });
    }
  }

  build (url) {
    this.url = 'http://localhost:8000/api/v1/' + url;
    return this;  
  }

  list () {
    return this.http.get(this.url, this.httpOptions);
  }

  create (data) {
    return this.http.post(this.url, data, this.httpOptions);
  }

  get (id) {
    return this.http.get(this.url + '/' + id, this.httpOptions);
  }

  update (id , data) {
    return this.http.put(this.url + '/' + id, data, this.httpOptions);
  }

  delete (id) {
    return this.http.delete(this.url + '/' + id, this.httpOptions);
  }


}

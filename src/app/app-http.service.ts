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
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMzZTI5NWY4OTRlMTNlOTY1MDRkZGRhMTg2MzFmZDgzMTYxODg5MzhiNTIxN2Q2MzBjMTdjMmRmMjkyMjY1MzUyOTA2OTBhMjc1MDhiMDFkIn0.eyJhdWQiOiI1IiwianRpIjoiYzNlMjk1Zjg5NGUxM2U5NjUwNGRkZGExODYzMWZkODMxNjE4ODkzOGI1MjE3ZDYzMGMxN2MyZGYyOTIyNjUzNTI5MDY5MGEyNzUwOGIwMWQiLCJpYXQiOjE1NDA5NjAyMzEsIm5iZiI6MTU0MDk2MDIzMSwiZXhwIjoxNTcyNDk2MjMwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.hyoxBesPg8roaf-mIz17c_iQ7zkgx9YiPceyzG_UrXqMI1ZomhjXlxYWk_pbF7ymT7gf_JBgMDjEGkrkhPjJN-37Zp7PG-H35vOCwbZYBnZwrmLONg2UT8OmFVBzymGyt2qODefybYJeij1i_ygiQdwLBYWl1y0n_jLORA7PjNoenNpChxZsNaR7kRu0urvDzUEIMVSiVXSdEYPHoc2OG5eBeMASkl8nZW70fph2EkdI8bpcPDqm2q4v0eMbgx3mm6hl-I5IAgnN-LpurwtKxDX6lGFOCC0mJCfiiL-jYJ86pdsBW0uWTEX390hOouHXP2rh67ZTrqxEZqgOleud122ec0YCA2xvBJPQAcEa1uJ4DP7konulYxAh1AShQ-1oNkOBD_840zi7zZ2J6Qeru7n-QrKkjWEUK_aS3VgpAyQbl-kWMTajIVyF6hgafF8OGOe7FxoR3tGq0ENg6wh3v6hRFQ4faLHmDNJx0XjRGQE5yBwf768ljg7kEOeLGQYaGBUSHunx3M4GyXSPNJ9KAzC8rj81dZaE0nGaMTPe8xYFnMkm5_TygOeRv62SV2BIRBnRabMOtMi2L5FP2PAmag9dVvMJyS1GYJL-RAEyv1qFVddSfoh_T5nDsrSjzHlicumHQxFUlG9BqmOaw1v7XQMW9gcXDX5pelgdWl-jDkk',
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

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const base_url = environment.baseUrl;
@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()

      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
  }

  login(email: string, password: string) {
    return this.http.post<any>(
      base_url + '/login/horasXFolioParaImpresion',
      {
        email,
        password
      },
      { headers: this.headers }
    );
  }
}
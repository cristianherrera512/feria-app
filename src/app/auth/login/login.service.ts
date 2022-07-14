import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, Observable, map, of } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private headers: HttpHeaders;
  private _user: User | undefined;

  get user(): User {
    return { ...this._user! };
  }

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()

      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
  }

  verifyLogin(): Observable<boolean> {
    if( !localStorage.getItem('user') ) return of(false);

    return this.http.post<any>(
      baseUrl + '/auth/verifyLogin',
        {
          email: this._user?.Email,
          id: this._user?.ID
        },
        { headers: this.headers }
      )
      .pipe(
        map( res => {
          this._user = res.data[0];
          return true;
        })
      );
      
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(
        baseUrl + '/auth/login',
        {
          email,
          password,
        },
        { headers: this.headers }
      )
      .pipe(
        tap((res) => (this._user = res.data[0])),
        tap((res) => localStorage.setItem('user', JSON.stringify(res.data[0])))
      );
  }

  logout() {
    this._user = undefined;
  }
}

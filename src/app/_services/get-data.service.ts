import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }
  authenticateLogin(email, pwd): Observable<boolean> {

    return this.http.post<{ token: string }>('/api/login', { email: email, pwd: pwd }).pipe(
      map(result => {
        if (result.token) {
          localStorage.setItem('access_token', result.token);
          return true;
        } else { return false; }

      })
    );
  }

  getStudentData() {
    return this.http.get("/api/student");
  }
}

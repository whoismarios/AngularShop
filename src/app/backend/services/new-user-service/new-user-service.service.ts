import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewUserServiceService {

  constructor(private http: HttpClient) { }

  createNewUser(user: any): Observable<any>{
    return this.http.post<any>('http://localhost/AngularShop/new_user.php', user);
  }
}

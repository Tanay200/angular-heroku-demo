import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loadAll()
  {
    return this.http.get("https://angular-material-api.azurewebsites.net/users");
  }
}

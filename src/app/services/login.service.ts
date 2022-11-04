import { HttpClient } from 'module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:3000/login"

  login(usuario: User)
}

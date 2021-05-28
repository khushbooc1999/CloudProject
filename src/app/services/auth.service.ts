import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
   private http:HttpClient
  ) { }

  server_address="http://localhost:5000";


  send_post_request(data)
  {
    return this.http.post(
      this.server_address,
      JSON.stringify(data)
    )

    
  }
}

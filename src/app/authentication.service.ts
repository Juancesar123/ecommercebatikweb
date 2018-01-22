import { Configendpoint } from './configendpoint';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';
@Injectable()
export class AuthenticationService {

  constructor(public http: Http) { }
  SaveDataUser(data){
    return this.http.post(Configendpoint.endpointapi+'/users',data).map((res) => res.json());
  }
  authentication(credential){
    return this.http.post(Configendpoint.endpointapi+'/authentication',credential).map((res) => res.json());
  }
}

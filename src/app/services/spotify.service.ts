import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  /*
  - se pone las credenciales en n buffer para poder estar autorizado en la api
  - se usan las credenciales ya que tuve algunos inconvenientes obteniendo el token
  */

  poolURlS = {
    authorize: 'https://accounts.spotify.com/es-ES/authorize?client_id=' +
      environment.client_id + '&response_type=token' +
      '&redirect_uri=' + encodeURIComponent(environment.redirect_uri) +
      '&expires_in=3600',
    refreshaAcessToken: 'https://accounts.spotify.com/api/token'
  };
  constructor(public http: HttpClient) { }

  getallartist(artist: string) {
    this.upDateToken()
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.basic_url}search?query=${artist}&offset=0&limit=20&type=artist`).subscribe(data => {
        resolve(data)
      }, err => {
        reject(err)
      })
    })
  }

  getallartistsongs(artist: string) {
    this.upDateToken()
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.basic_url}artists/${artist}/top-tracks?market=CO`).subscribe(data => {
        resolve(data)
      }, err => {
        reject(err)
      })
    })
  }



  upDateToken() {
    environment.token = sessionStorage.getItem('token') || '';
  }


  checkTokenSpoLogin() {

    this.checkTokenSpo() || (sessionStorage.setItem('refererURL', location.href), window.location.href = this.poolURlS.authorize);
    let token = sessionStorage.getItem('refererURL').split('=')[1];
    token = token.split('&')[0];
    sessionStorage.setItem('token', token)
    this.upDateToken()
  }

  checkTokenSpo() {
    return !!environment.token;
  }

  tokenRefreshURL() {
    this.checkTokenSpo() && alert('Expiro la sesión');
    environment.token = ''
    sessionStorage.removeItem('token');
    this.checkTokenSpoLogin();
  }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YandexService {

  url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
  keyAPI = "trnsl.1.1.20130922T110455Z.4a9208e68c61a760.f819c1db302ba637c2bea1befa4db9f784e9fbb8";

  constructor(private _http: HttpClient) { }


  translate(text : string, lang : string) {
    let data = "key=" + this.keyAPI + "&text=" + text + "&lang=" + lang;
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this._http.post(this.url, data, { headers: headers });
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';

const allInfo = 'assets/json/products.json';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private _http: Http) { }

  list() {
    return this._http.get(allInfo)
      .pipe(map(response => response.json()))
      // .catch(this.handleError)
  }

  infoSend(data, callback) {
    this._http.post('/send', data).subscribe(
      (res) => {
        console.log("from service send info: ", res);
        callback(res.json());
        console.log(res.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }

  private handleError(error: any, caught: any): any {
    console.log(error, caught)
  }

}

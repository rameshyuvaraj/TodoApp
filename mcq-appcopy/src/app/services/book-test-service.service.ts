import { Student } from './../model/student';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookTestServiceService {

  private headers: HttpHeaders;

  private host: String;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({
      "content-type": "application/json"
    });
    this.host = "http://newstein.in:8000/api/Test"
  }


  // This is a Post call creating a student.
  public post(requestBody: Student): Observable<any> {
    let url: string = this.host + "/bookTest";
    return this.httpClient.post<any>(url, requestBody, { headers: this.headers });
  }

}

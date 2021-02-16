import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import  *  as  data  from  './data-source/user.json';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
		}),
  };
  
  users: any;

  constructor() { }

  getUsers() {
    return data;
  }

  getPlayCardDatas() {
    
  }
  
}

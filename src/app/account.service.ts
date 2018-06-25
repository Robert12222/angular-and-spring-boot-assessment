import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {
  public API = '//localhost:8080';
  public CAR_API = this.API + '/account';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
     return this.http.get('//localhost:8080/cool-accounts');

     get(id: string) {
       return this.http.get(this.ACCOUNT_API + '/' + id);
     }

     save(account: any): Observable<any> {
       let result: Observable<Object>;
       if (account['href']) {
         result = this.http.put(account.href, account);
       } else {
         result = this.http.post(this.ACCOUNT_API, account);
       }
       return result;
     }

     remove(href: string) {
       return this.http.delete(href);
     }
   }

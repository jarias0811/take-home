import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserSubscription} from '../../shared/models/user-subscription';

@Injectable()
export class UserService {
  private PATH = 'api/user';

  constructor(
    private http: HttpClient
  ) {
  }

  subscribeUser(userSubscription: UserSubscription): Observable<any> {
    const body = new HttpParams()
      .set('firstName', userSubscription.firstName)
      .set('lastName', userSubscription.lastName)
      .set('org', userSubscription.org)
      .set('email', userSubscription.email)
      .set('advances', userSubscription.advances)
      .set('alerts', userSubscription.alerts)
      .set('other', userSubscription.alerts);

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(this.PATH, body, options);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _username$: Subject<string> = new Subject<string>();

  public setUsername(value: string) {
    this._username$.next(value);
  }

  public get getUsername(): Observable<string> {
    return this._username$.asObservable();
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  public isLogin() {
    localStorage.setItem('isLoggedIn', 'true');
    // this._isLoggedIn$.next(true);
  }

  //   public get loggedInStatus$(): Observable<boolean> {
  //     return this._isLoggedIn$.asObservable();
  //   }

  public isLogout() {
    localStorage.setItem('isLoggedIn', 'false');
    //  this._isLoggedIn$.next(false);
  }
}

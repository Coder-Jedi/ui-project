import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userType1RankSubject = new BehaviorSubject<number>(5);

  setUserType1Rank(userRank : number) {
    this.userType1RankSubject.next(userRank);
  }

  constructor() { }
}

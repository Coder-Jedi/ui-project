import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { constituencies, userConstituencyRank } from '../data/constituency';
import { ListItem } from '../data/list-item';
import { mps, userMpRank } from '../data/mp';
import { people, userPeopleRank } from '../data/people';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  people : ListItem[] = people;
  userPeopleRank : number = userPeopleRank;
  constituencies: ListItem[] = constituencies;
  userConstituencyRank : number = userConstituencyRank;
  mps: ListItem[] = mps;
  userMpRank : number = userMpRank;

  //activity filter observable/subject
  currActivitySubject = new BehaviorSubject<string>('Video Greeting');
  //show Activity Drawer observable/subject
  showActivityDrawerSubject = new BehaviorSubject<boolean>(false);

  //filter obesrvable/subject
  currFilterSubject = new BehaviorSubject<string[]>(['people']);

  //list-items observable/subject
  itemListSubject = new BehaviorSubject<ListItem[]>([]);

  //user rank observable/subject
  userRankObservable = new BehaviorSubject<number>(0);

  changeFilter(filters:string[]) {
    this.currFilterSubject.next(filters);
  }

  changeActivityFilter(activity:string) {
    this.currActivitySubject.next(activity);
  }
  
  currFilterSub = this.currFilterSubject.subscribe((filters)=> {
    switch (filters[0]) {
      case 'people':
        this.itemListSubject.next(this.people);
        this.userRankObservable.next(this.userPeopleRank);
        break;
      case 'constituency':
        this.itemListSubject.next(this.constituencies);
        this.userRankObservable.next(this.userConstituencyRank);
        break;
      case 'mp':
        this.itemListSubject.next(this.mps);
        this.userRankObservable.next(this.userMpRank);
        break;
      default:
        this.itemListSubject.next([]);
        this.userRankObservable.next(0);
    }
  });
  

  constructor() { }
}

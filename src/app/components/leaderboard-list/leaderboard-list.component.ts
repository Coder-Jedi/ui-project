import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ListItem } from 'src/app/data/list-item';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-leaderboard-list',
  templateUrl: './leaderboard-list.component.html',
  styleUrls: ['./leaderboard-list.component.scss']
})
export class LeaderboardListComponent implements OnInit {

  itemList : ListItem[] = [];
  userRank! : number;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.itemListSubject.subscribe((value)=>{
      this.itemList = value;
    });
    this.dataService.userRankObservable.subscribe((val)=> {
      this.userRank = val;
    });
  }

}

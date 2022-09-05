import { Component, OnInit } from '@angular/core';
import { activities } from 'src/app/data/activity';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-activity-drawer',
  templateUrl: './activity-drawer.component.html',
  styleUrls: ['./activity-drawer.component.scss']
})
export class ActivityDrawerComponent implements OnInit {

  activities : string[] = activities;
  currActivity! : string;
  showActivityDrawer : boolean = false;

  constructor(private dataService : DataService) { }


  ngOnInit(): void {
    this.dataService.currActivitySubject.subscribe((val)=>{
      this.currActivity = val;
    })
    this.dataService.showActivityDrawerSubject.subscribe((val)=>{
      this.showActivityDrawer = val;
    })
  }

  toggleShowActivityDrawer() {
    this.dataService.showActivityDrawerSubject
    .next(!this.dataService.showActivityDrawerSubject.value);
  }

  handleClickFilter(val:string) {
    this.dataService.changeActivityFilter(val);
  }

}

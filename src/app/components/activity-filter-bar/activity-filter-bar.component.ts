import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-activity-filter-bar',
  templateUrl: './activity-filter-bar.component.html',
  styleUrls: ['./activity-filter-bar.component.scss']
})
export class ActivityFilterBarComponent implements OnInit {

  selActivity! : string;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.currActivitySubject.subscribe((val)=>{
      this.selActivity = val;
    });
  }
  toggleActivityDrawer() {
    this.dataService.showActivityDrawerSubject
      .next(!this.dataService.showActivityDrawerSubject.value);
  }

}

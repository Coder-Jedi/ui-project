import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-secondary-filter-item',
  templateUrl: './secondary-filter-item.component.html',
  styleUrls: ['./secondary-filter-item.component.scss']
})
export class SecondaryFilterItemComponent implements OnInit {

  @Input() itemName! : string;
  @Input() isActive! : boolean;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.currFilterSubject.subscribe((value)=>{
      if(value[0]==this.itemName)
        this.isActive = true;
      else
        this.isActive = false;
    });
  }

  onClick() {
    this.dataService.changeFilter([this.itemName]);
  }

}

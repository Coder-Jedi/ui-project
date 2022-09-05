import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ListItem } from 'src/app/data/list-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item! : ListItem;
  @Input() isUser! : boolean;
  @HostBinding('class.user-above50') bindStyle! : boolean;

  constructor() {}

  ngOnInit(): void {
    this.bindStyle = this.isUser && (this.item.rank>50);
  }

}

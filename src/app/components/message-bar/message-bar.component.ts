import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss']
})
export class MessageBarComponent implements OnInit {

  @Input() message! : string;

  constructor() { }

  ngOnInit(): void {
  }

}

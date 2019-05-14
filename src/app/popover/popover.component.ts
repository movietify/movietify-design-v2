import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  items:any;

  constructor() { 
    this.items = [
      {item: 'Beğendiklerim'},
      {item: 'Tavsiye ettiklerim'},
      {item: 'İzlenilmesi gerekenler'},
    ]
  }

  ngOnInit() {}

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.scss']
})
export class CorouselComponent implements OnInit {
  
  @Input()
  public valuesArray: Array<number> = [];

  constructor() { }

  ngOnInit(): void {

    
  }

}

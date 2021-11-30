 import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.scss']
})
export class CorouselComponent implements OnInit, AfterViewInit {

  @ViewChild('carouselContainer') 
  public carouselContainer!: ElementRef<HTMLElement>;
  
  @Input()
  valuesArray: Array<number> = [];

  public index: number = 0;

  constructor() { }
  ngAfterViewInit(): void {
    const element = document.getElementById('card' + this.index);
    element?.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
  }

  ngOnInit(): void {
    
  }

  public scrollRight = (): void  => {

    if(this.index < (this.valuesArray.length - 1))
    {
      this.index++;  
      const element = document.getElementById('card' + this.index);
      element?.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    }
  }

  public scrollLeft = (): void => {
    
    if(this.index > 0) {
      this.index--;   
      const element = document.getElementById('card' + this.index);
      element?.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    
    }   
  }

  public isInTheEnd = ():boolean => { 
    return this.index === (this.valuesArray.length -1);
  } 

  public isInTheStart = ():boolean => {
    return this.index === 0;
  }

}

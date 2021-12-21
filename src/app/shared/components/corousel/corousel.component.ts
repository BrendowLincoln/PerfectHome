 import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.scss']
})
export class CorouselComponent implements OnInit, AfterViewInit {

  @ViewChild('carouselContainer') 
  public carouselContainer!: ElementRef<HTMLElement>;

  @ViewChildren('cards') 
  public cards: QueryList<ElementRef<HTMLElement>> = new QueryList<ElementRef<HTMLElement>>();


  @Input()
  valuesArray: Array<number> = [];

  public index: number = 0;

  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.cards);
    
  }

  ngOnInit(): void {
    
  }

  public scrollRight = (): void  => {

    if(this.index < (this.valuesArray.length - 1))
    {
      this.index++; 
      const element =  this.cards.find((x) => x.nativeElement.id === `card${this.index}`);
      element?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    }
  }

  public scrollLeft = (): void => {
    
    if(this.index > 0) {
      this.index--;   
      const element =  this.cards.find((x) => x.nativeElement.id === `card${this.index}`);
      element?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    
    }   
  }

  public isInTheEnd = ():boolean => { 
    return this.index === (this.valuesArray.length -1);
  } 

  public isInTheStart = ():boolean => {
    return this.index === 0;
  }

}

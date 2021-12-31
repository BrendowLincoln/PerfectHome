 import { ViewportScroller } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Scroll } from '@angular/router';

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

  constructor(private viewportScroller: ViewportScroller, private cdk: ChangeDetectorRef) { }
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    
  }

  public scrollRight = (): void  => {

    if(this.index < (this.valuesArray.length - 1))
    {
      this.index++;
      const element = document.getElementById(`card${this.index}`);
      element?.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
      this.cdk.detectChanges();
    }
  }

  public scrollLeft = (): void => {
    
    if(this.index > 0) {
      this.index--;   
      const element = document.getElementById(`card${this.index}`);
      element?.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
      this.cdk.detectChanges();
    }   
  }

  public isInTheEnd = ():boolean => { 
    return this.index === (this.valuesArray.length -1);
  } 

  public isInTheStart = ():boolean => {
    return this.index === 0;
  }

}

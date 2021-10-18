 import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.scss']
})
export class CorouselComponent implements OnInit {

  @ViewChild('carouselContainer') 
  public carouselContainer!: ElementRef<any>;
  
  @Input()
  valuesArray: Array<number> = [];

  constructor() { }

  ngOnInit(): void {

    
  }


  public scrollRight(): void {
    this.carouselContainer.nativeElement.scrollTo({ left: (this.carouselContainer.nativeElement.scrollLeft + 850), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.carouselContainer.nativeElement.scrollTo({ left: (this.carouselContainer.nativeElement.scrollLeft - 850), behavior: 'smooth' });
  }
}

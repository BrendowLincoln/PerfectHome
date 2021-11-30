import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  constructor() { }

  ngOnInit(): void {
  }


  public scrollTo = ($element: any) => {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", inline: "center", });
  }

}

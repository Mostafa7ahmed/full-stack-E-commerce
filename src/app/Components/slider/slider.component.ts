import { SliderDataService } from './../../Core/Service/slider-data.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent  implements OnInit{
  slides :any[] =[];
  constructor(private _SliderDataService:SliderDataService){}

   ngOnInit(): void {
      this.slides = this._SliderDataService.slides
   }
}

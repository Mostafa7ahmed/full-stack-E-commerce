import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Departmant } from 'src/app/Core/Interface/departmant';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule , RouterLink] ,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
   departments :any[]=[
    
      {
        name:"أدوات المطبخ",
        routePage:"Kitchen"
       },
       {
         name:" أكسسوارات منزلية",
         routePage:"Accessories"
       },
       {
         name:"أدوات منزلية",
         routePage:"HomeTools"
       },
       {
         name:"الكترونيات ",
         routePage:"Electronic"
       },

    
   ];

  routeFooter:any[]=[
    {
     name:"الرئيسية",
     routePage:"home"
    },
    {
      name:"من نحن",
      routePage:"home"
    },
    {
      name:"المنتجات",
      routePage:"products"
    },
    {
      name:"تواصل معنا",
      routePage:"home"
    },
  ]
}

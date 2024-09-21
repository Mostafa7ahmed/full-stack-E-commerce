import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderDataService {

  slides = [
    {
      background: 'assets/Image/Homebanner.png',
      title: 'اكتشف مجموعتنا الجديدة',
      subtitle: 'جديد',
      description: 'أكتشف افضل منتجاتنا الجديدة والراقية التي تناسب ذوقك.',
      buttonText: 'اطلب الأن',
      isActive: true 
    },
    {
      background: 'assets/Image/Homebanner.png',
      title: 'اكتشف مجموعتنا الجديدة',
      subtitle: 'جديد',
      description: 'أكتشف افضل منتجاتنا الجديدة والراقية التي تناسب ذوقك.',
      buttonText: 'اطلب الأن',
      isActive: false 
    },
    {
      background: 'assets/Image/Homebanner.png',
      title: 'اكتشف مجموعتنا الجديدة',
      subtitle: 'جديد',
      description: 'أكتشف افضل منتجاتنا الجديدة والراقية التي تناسب ذوقك.',
      buttonText: 'اطلب الأن',
      isActive: false 
    },


    {
      background: 'assets/Image/Homebanner.png',
      title: 'اكتشف مجموعتنا الجديدة',
      subtitle: 'جديد',
      description: 'أكتشف افضل منتجاتنا الجديدة والراقية التي تناسب ذوقك.',
      buttonText: 'اطلب الأن',
      isActive: false 
    },

  ];

  constructor() { }
}

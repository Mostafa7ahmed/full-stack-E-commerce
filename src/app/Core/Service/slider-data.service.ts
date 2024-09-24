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
      isActive: true  // First slide active by default
    },
    {
      background: 'assets/Image/Homebanner2.png',
      title: 'استمتع بأحدث التقنيات',
      subtitle: 'تكنولوجيا',
      description: 'استمتع بمنتجاتنا التقنية المصممة لتلبية احتياجاتك اليومية.',
      buttonText: 'تسوق الآن',
      isActive: false
    },
    {
      background: 'assets/Image/Homebanner2.png',
      title: 'خصومات هائلة جدا',
      subtitle: 'خصومات',
      description: 'اغتنم الفرصة واحصل على خصومات تصل إلى 50٪ على منتجات مختارة.',
      buttonText: 'اكتشف المزيد',
      isActive: false
    },
    {
      background: 'assets/Image/Homebanner2.png',
      title: ' المنتجات بجودة عالية',
      subtitle: 'مميز',
      description: 'احصل على منتجات مميزة بجودة عالية وبأسعار تنافسية.',
      buttonText: 'تسوق الآن',
      isActive: false
    }
  ];

  constructor() { }
}

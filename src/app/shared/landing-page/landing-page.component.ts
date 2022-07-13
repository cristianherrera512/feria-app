import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styles: [],
})
export class LandingPageComponent implements OnInit {
  images!: any[];
  responsiveOptions;

  constructor() {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];

    this.images = [
      {
        previewImageSrc: '../assets/images/feria1.jpg',
        thumbnailImageSrc: 'assets/images/feria1.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        previewImageSrc: '../assets/images/feria2.jpg',
        thumbnailImageSrc: 'assets/images/feria2.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        previewImageSrc: '../assets/images/feria3.jpg',
        thumbnailImageSrc: 'assets/images/feria3.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
      {
        previewImageSrc: '../assets/images/feria4.jpg',
        thumbnailImageSrc: 'assets/images/feria4.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4',
      },
      {
        previewImageSrc: '../assets/images/feria5.jpg',
        thumbnailImageSrc: 'assets/images/feria5.jpg',
        alt: 'Description for Image 5',
        title: 'Title 5',
      },
    ];
  }

  ngOnInit(): void {}
}

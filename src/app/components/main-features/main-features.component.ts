import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
]);

import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-main-features',
  templateUrl: './main-features.component.html',
  styleUrls: ['./main-features.component.scss'],
})
export class MainFeaturesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  config: SwiperOptions = {
    loop: true,
    autoHeight: true,
    allowTouchMove: false,
    spaceBetween: 20,
    slidesPerView: 'auto',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slideToClickedSlide: true,
    breakpoints: {
      350: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      },
    },
  };
}

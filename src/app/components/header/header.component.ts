import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  AfterContentChecked,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
  HostListener,
  HostBinding,
} from '@angular/core';
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

import { SwiperComponent } from 'swiper/angular';

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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('swiper') swiper: SwiperComponent;

  ngOnInit(): void {}

  config: SwiperOptions = {
    slidesPerView: 3,
    loop: true,
    allowTouchMove: false,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slideToClickedSlide: true,
    breakpoints: {
      340: {
        slidesPerView: 'auto',
        centeredSlides: true,
      },
      480: {
        slidesPerView: 3,
      },
    },
    observer: true,
    observeParents: true,
  };

  ngAfterViewInit() {}
}

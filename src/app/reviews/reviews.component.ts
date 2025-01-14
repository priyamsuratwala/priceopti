import { Component, AfterViewInit, ViewChild, ElementRef, PLATFORM_ID, Inject, HostBinding } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import lottie from 'lottie-web';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements AfterViewInit {
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;

  @HostBinding('attr.id') componentId = 'app-reviews-component';

  rating: number = 3;
  numberOfComments: number | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      lottie.loadAnimation({
        container: this.lottieContainer.nativeElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path:'assets/ratingAnimation.json' 
      });
    }
  }

  getEmoticonColor(value: number): string {
    if (value <= 1) return '#ED4337';
    if (value <= 2) return '#FF8C00';
    if (value <= 3) return '#FFD700';
    if (value <= 4) return '#9ACD32';
    return '#228B22';
  }

  validateNumberOfComments() {
    if (this.numberOfComments !== null) {
      this.numberOfComments = Math.floor(this.numberOfComments);
      if (this.numberOfComments < 1) {
        this.numberOfComments = 1;
      }
    }
  }
}

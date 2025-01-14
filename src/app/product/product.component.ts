import { Component, AfterViewInit, ViewChild, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements AfterViewInit {
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;

  productName: string = '';
  selectedCategory: string = '';
  categories: string[] = [
    'Electronics',
    'Clothing',
    'Books',
    'Home & Garden',
    'Toys',
    'Sports & Outdoors',
    'Beauty & Personal Care',
    'Automotive',
    'Grocery & Gourmet Food',
    'Health & Wellness',
    'Pet Supplies',
    'Jewelry',
    'Office Products',
    'Tools & Home Improvement',
    'Baby',
    'Movies & TV',
    'Music',
    'Video Games',
    'Arts & Crafts',
    'Furniture'
  ];

  private lottie: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      import('lottie-web').then(lottie => {
        this.lottie = lottie.default;
        this.lottie.loadAnimation({
          container: this.lottieContainer.nativeElement,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path:'assets/productAnimation.json' // Adjust the path to where you have stored the animation JSON file
        });
      });
    }
  }
}

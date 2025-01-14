import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PriceComponent } from './price/price.component';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    NavbarComponent, // Import NavbarComponent here
    ProductComponent,
    ReviewsComponent,
    PriceComponent
  ],
  providers: [SharedService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'optiPrice';

  constructor(private sharedService: SharedService) {}

  collectAndSendData() {
    this.sharedService.sendDataToApi().subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
}
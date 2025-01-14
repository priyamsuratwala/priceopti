import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent {
  currentPrice: number = 0;
  predictedPrice: number | null = null;

  constructor(private sharedService: SharedService) {}

  onCurrentPriceChange() {
    this.sharedService.setData('current_price', this.currentPrice);
  }

  predictPrice() {
    this.onCurrentPriceChange(); // Ensure the current price is updated
    this.sharedService.sendDataToApi().subscribe(
      response => {
        console.log('API response:', response); // Debugging: Log the response
        this.predictedPrice = response.predicted_price;
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
}
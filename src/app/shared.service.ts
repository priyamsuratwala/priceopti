import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductData } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiUrl = 'http://127.0.0.1:5000/predict';
  private data: ProductData = {
    title: '',
    categoryName: '',
    stars: 0,
    reviews: 0,
    current_price: 0
  };

  constructor(private http: HttpClient) {}

  setData<K extends keyof ProductData>(key: K, value: ProductData[K]) {
    this.data[key] = value;
    console.log(`Set data: ${key} = ${value}`); // Debugging: Log the data being set
  }

  getData(): ProductData {
    return this.data;
  }

  sendDataToApi(): Observable<any> {
    console.log('Sending data to API:', this.data); // Debugging: Log the data being sent
    return this.http.post<any>(this.apiUrl, this.data);
  }
}
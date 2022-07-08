import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { forecast } from '../../models/forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor(private service: SharedService) { }

  id: number = 0;

  Forecast: any = {};

  ngOnInit(): void {
    this.getForecast(this.id);
  }

  refresh() {
    this.getForecast(this.id);
  }

  getForecast(id: number) {
    this.service.getForecast(id).subscribe(data => {
      this.Forecast = data;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { forecast } from '../../models/forecast';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.css']
})
export class ForecastsComponent implements OnInit {

  constructor(private service: SharedService) { }

  Forecasts: any = [];

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.service.getForecasts().subscribe(data => {
      this.Forecasts = data;
    })
  }
}

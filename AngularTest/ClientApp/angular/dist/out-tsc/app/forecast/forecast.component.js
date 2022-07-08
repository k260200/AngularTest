import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ForecastComponent = class ForecastComponent {
    constructor(service) {
        this.service = service;
        this.id = 0;
        this.Forecast = {};
    }
    ngOnInit() {
        this.getForecast(this.id);
    }
    refresh() {
        this.getForecast(this.id);
    }
    getForecast(id) {
        this.service.getForecast(id).subscribe(data => {
            this.Forecast = data;
        });
    }
};
ForecastComponent = __decorate([
    Component({
        selector: 'app-forecast',
        templateUrl: './forecast.component.html',
        styleUrls: ['./forecast.component.css']
    })
], ForecastComponent);
export { ForecastComponent };
//# sourceMappingURL=forecast.component.js.map
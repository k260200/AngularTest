import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ForecastsComponent = class ForecastsComponent {
    constructor(service) {
        this.service = service;
        this.Forecasts = [];
    }
    ngOnInit() {
        this.refresh();
    }
    refresh() {
        this.service.getForecasts().subscribe(data => {
            this.Forecasts = data;
        });
    }
};
ForecastsComponent = __decorate([
    Component({
        selector: 'app-forecasts',
        templateUrl: './forecasts.component.html',
        styleUrls: ['./forecasts.component.css']
    })
], ForecastsComponent);
export { ForecastsComponent };
//# sourceMappingURL=forecasts.component.js.map
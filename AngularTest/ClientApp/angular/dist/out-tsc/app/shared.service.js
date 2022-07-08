import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let SharedService = class SharedService {
    constructor(http) {
        this.http = http;
        this.ApiUrl = "https://localhost:44360";
    }
    getForecasts() {
        return this.http.get(this.ApiUrl + '/GetAll');
    }
    getForecast(id) {
        return this.http.get(this.ApiUrl + '/Get/' + id);
    }
};
SharedService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SharedService);
export { SharedService };
//# sourceMappingURL=shared.service.js.map
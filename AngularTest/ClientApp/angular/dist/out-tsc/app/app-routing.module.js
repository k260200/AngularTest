import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
import { ForecastsComponent } from './forecasts/forecasts.component';
import { HomeComponent } from './home/home.component';
const routes = [
    { path: 'home', component: HomeComponent },
    { path: 'forecasts', component: ForecastsComponent },
    { path: 'forecast', component: ForecastComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
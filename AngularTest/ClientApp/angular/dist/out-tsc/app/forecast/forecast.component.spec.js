import { TestBed } from '@angular/core/testing';
import { ForecastComponent } from './forecast.component';
describe('ForecastComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ForecastComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ForecastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=forecast.component.spec.js.map
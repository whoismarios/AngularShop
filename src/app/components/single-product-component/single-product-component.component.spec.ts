import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductComponentComponent } from './single-product-component.component';

describe('SingleProductComponentComponent', () => {
  let component: SingleProductComponentComponent;
  let fixture: ComponentFixture<SingleProductComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProductComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

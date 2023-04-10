import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameInputComponentComponent } from './username-input-component.component';

describe('UsernameInputComponentComponent', () => {
  let component: UsernameInputComponentComponent;
  let fixture: ComponentFixture<UsernameInputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameInputComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernameInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

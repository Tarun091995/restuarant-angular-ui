import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOnCodeComponent } from './update-on-code.component';

describe('UpdateOnCodeComponent', () => {
  let component: UpdateOnCodeComponent;
  let fixture: ComponentFixture<UpdateOnCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOnCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOnCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

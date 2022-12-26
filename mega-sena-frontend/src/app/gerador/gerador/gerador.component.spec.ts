import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorComponent } from './gerador.component';

describe('GeradorComponent', () => {
  let component: GeradorComponent;
  let fixture: ComponentFixture<GeradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

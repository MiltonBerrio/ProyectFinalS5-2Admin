import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterwebComponent } from './footerweb.component';

describe('FooterwebComponent', () => {
  let component: FooterwebComponent;
  let fixture: ComponentFixture<FooterwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterwebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

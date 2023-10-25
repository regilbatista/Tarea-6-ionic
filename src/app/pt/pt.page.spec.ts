import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PtPage } from './pt.page';

describe('PtPage', () => {
  let component: PtPage;
  let fixture: ComponentFixture<PtPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

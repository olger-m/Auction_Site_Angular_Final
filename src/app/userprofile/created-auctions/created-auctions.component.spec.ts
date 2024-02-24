import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedAuctionsComponent } from './created-auctions.component';

describe('CreatedAuctionsComponent', () => {
  let component: CreatedAuctionsComponent;
  let fixture: ComponentFixture<CreatedAuctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatedAuctionsComponent]
    });
    fixture = TestBed.createComponent(CreatedAuctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

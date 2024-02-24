import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipatingAuctionsComponent } from './participating-auctions.component';

describe('ParticipatingAuctionsComponent', () => {
  let component: ParticipatingAuctionsComponent;
  let fixture: ComponentFixture<ParticipatingAuctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipatingAuctionsComponent]
    });
    fixture = TestBed.createComponent(ParticipatingAuctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

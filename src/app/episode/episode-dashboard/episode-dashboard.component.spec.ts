import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeDashboardComponent } from './episode-dashboard.component';

describe('EpisodeDashboardComponent', () => {
  let component: EpisodeDashboardComponent;
  let fixture: ComponentFixture<EpisodeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodeDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpisodeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

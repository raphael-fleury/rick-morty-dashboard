import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDashboardComponent } from './character-dashboard.component';

describe('CharacterDashboardComponent', () => {
  let component: CharacterDashboardComponent;
  let fixture: ComponentFixture<CharacterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

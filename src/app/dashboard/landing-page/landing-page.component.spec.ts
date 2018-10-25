import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LandingPageComponent } from './landing-page.component';
import { CardTileComponent } from '../card-tile/card-tile.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageComponent, CardTileComponent],
      imports: [CommonModule, RouterModule.forRoot([]), FlexLayoutModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.menuList = [];
    expect(component).toBeTruthy();
  });
});

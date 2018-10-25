import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { CardTileComponent } from './card-tile.component';
import { APP_BASE_HREF } from '@angular/common';
import { MenuItem } from '../../core';
describe('CardTileComponent', () => {
  let component: CardTileComponent;
  let fixture: ComponentFixture<CardTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardTileComponent],
      imports: [RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTileComponent);
    component = fixture.componentInstance;
    component.menuItem = <MenuItem>{ icon: 'icon-class', link: 'test-link', summary: 'summary', title: 'new title' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

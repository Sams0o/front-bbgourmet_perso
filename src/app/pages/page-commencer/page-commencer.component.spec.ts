import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCommencerComponent } from './page-commencer.component';

describe('PageCommencerComponent', () => {
  let component: PageCommencerComponent;
  let fixture: ComponentFixture<PageCommencerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCommencerComponent]
    });
    fixture = TestBed.createComponent(PageCommencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

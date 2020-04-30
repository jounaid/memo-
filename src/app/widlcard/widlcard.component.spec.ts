import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidlcardComponent } from './widlcard.component';

describe('WidlcardComponent', () => {
  let component: WidlcardComponent;
  let fixture: ComponentFixture<WidlcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidlcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidlcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Produce } from './produce';

describe('Produce', () => {
  let component: Produce;
  let fixture: ComponentFixture<Produce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Produce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Produce);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

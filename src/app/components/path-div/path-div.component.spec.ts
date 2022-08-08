import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathDivComponent } from './path-div.component';

describe('PathDivComponent', () => {
  let component: PathDivComponent;
  let fixture: ComponentFixture<PathDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

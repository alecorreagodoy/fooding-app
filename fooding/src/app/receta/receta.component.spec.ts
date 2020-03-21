import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaComponent } from './receta.component';

describe('RecetaComponent', () => {
  let component: RecetaComponent;
  let fixture: ComponentFixture<RecetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaInversaComponent } from './receta-inversa.component';

describe('RecetaInversaComponent', () => {
  let component: RecetaInversaComponent;
  let fixture: ComponentFixture<RecetaInversaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaInversaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaInversaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

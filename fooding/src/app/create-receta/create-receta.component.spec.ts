import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecetaComponent } from './create-receta.component';

describe('CreateRecetaComponent', () => {
  let component: CreateRecetaComponent;
  let fixture: ComponentFixture<CreateRecetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

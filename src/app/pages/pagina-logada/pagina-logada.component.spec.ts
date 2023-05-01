import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaLogadaComponent } from './pagina-logada.component';

describe('PaginaLogadaComponent', () => {
  let component: PaginaLogadaComponent;
  let fixture: ComponentFixture<PaginaLogadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaLogadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaLogadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

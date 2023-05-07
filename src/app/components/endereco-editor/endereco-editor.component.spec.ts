import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoEditorComponent } from './endereco-editor.component';

describe('EnderecoEditorComponent', () => {
  let component: EnderecoEditorComponent;
  let fixture: ComponentFixture<EnderecoEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnderecoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

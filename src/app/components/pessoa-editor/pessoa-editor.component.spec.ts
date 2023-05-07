import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaEditorComponent } from './pessoa-editor.component';

describe('PessoaEditorComponent', () => {
  let component: PessoaEditorComponent;
  let fixture: ComponentFixture<PessoaEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

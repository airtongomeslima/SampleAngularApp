import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneEditorComponent } from './telefone-editor.component';

describe('TelefoneEditorComponent', () => {
  let component: TelefoneEditorComponent;
  let fixture: ComponentFixture<TelefoneEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefoneEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelefoneEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

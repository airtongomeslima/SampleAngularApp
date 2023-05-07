import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneListEditorComponent } from './telefone-list-editor.component';

describe('TelefoneListEditorComponent', () => {
  let component: TelefoneListEditorComponent;
  let fixture: ComponentFixture<TelefoneListEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefoneListEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelefoneListEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

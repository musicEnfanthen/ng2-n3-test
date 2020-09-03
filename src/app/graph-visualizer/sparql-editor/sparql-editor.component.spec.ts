import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparqlEditorComponent } from './sparql-editor.component';

describe('SparqlEditorComponent', () => {
  let component: SparqlEditorComponent;
  let fixture: ComponentFixture<SparqlEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparqlEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparqlEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

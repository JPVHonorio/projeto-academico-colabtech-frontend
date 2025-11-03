import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaRequisicao } from './nova-requisicao';

describe('NovaRequisicao', () => {
  let component: NovaRequisicao;
  let fixture: ComponentFixture<NovaRequisicao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaRequisicao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaRequisicao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

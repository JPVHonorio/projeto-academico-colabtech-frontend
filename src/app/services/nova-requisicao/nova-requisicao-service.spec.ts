import { TestBed } from '@angular/core/testing';

import { NovaRequisicaoService } from './nova-requisicao-service';

describe('NovaRequisicaoService', () => {
  let service: NovaRequisicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovaRequisicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

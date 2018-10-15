import {TestBed, async, fakeAsync, tick} from '@angular/core/testing';
import {DummyService} from './dummy.service';


describe('DummyService', () => {
  let service: DummyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DummyService]
    });
    // inject the service
    service = TestBed.get(DummyService);
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should be able to use the fs module', () => {
    service.listTemp();
  });
});

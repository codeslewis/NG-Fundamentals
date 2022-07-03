import { TestBed } from '@angular/core/testing';

import { EventRouteActivatorService } from './event-route-activator.service';

describe('EventRouteActivatorService', () => {
  let service: EventRouteActivatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventRouteActivatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

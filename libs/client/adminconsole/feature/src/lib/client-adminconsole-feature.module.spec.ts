import { async, TestBed } from '@angular/core/testing';
import { ClientAdminconsoleFeatureModule } from './client-adminconsole-feature.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ClientAdminconsoleFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientAdminconsoleFeatureModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  
  beforeEach(() => TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [ClientAdminconsoleFeatureModule] }))
  
  it('should have a module definition', () => {
    expect(ClientAdminconsoleFeatureModule).toBeDefined();
  });
});

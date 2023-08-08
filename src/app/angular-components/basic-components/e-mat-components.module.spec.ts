import { EMatComponentsModule } from './e-mat-components.module';

describe('EMatComponentsModule', () => {
  let eMatComponentsModule: EMatComponentsModule;

  beforeEach(() => {
    eMatComponentsModule = new EMatComponentsModule();
  });

  it('should create an instance', () => {
    expect(eMatComponentsModule).toBeTruthy();
  });
});

import { ESharedModule } from './e-shared.module';

describe('EMatSharedModule', () => {
  let eSharedMatModule: ESharedModule;

  beforeEach(() => {
    eSharedMatModule = new ESharedModule();
  });

  it('should create an instance', () => {
    expect(eSharedMatModule).toBeTruthy();
  });
});

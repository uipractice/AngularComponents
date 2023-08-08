import { EModuleModules } from './e-modules.module';

describe('EModuleModule', () => {
  let eModuleModules: EModuleModules;

  beforeEach(() => {
    eModuleModules = new EModuleModules();
  });

  it('should create an instance', () => {
    expect(eModuleModules).toBeTruthy();
  });
});

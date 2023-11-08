import { Test, TestingModule } from '@nestjs/testing';
import { HealthModule } from '../../infrastructure/health.module';
import { HealthController } from '../../infrastructure/controllers/health.controller';

describe('HealthModule', () => {
  it('Should compile the module', async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HealthModule],
    }).compile();

    expect(module).toBeDefined();
    expect(module.get(HealthController)).toBeInstanceOf(HealthController);
  });
});

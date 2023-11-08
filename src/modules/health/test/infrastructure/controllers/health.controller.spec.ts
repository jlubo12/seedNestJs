import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from '../../../infrastructure/controllers/health.controller';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('Should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should return "OK" for request on /', () => {
    expect(controller.getLivenessProbe()).toEqual('OK');
  });
});

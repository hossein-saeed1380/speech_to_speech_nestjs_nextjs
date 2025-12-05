import { Test, TestingModule } from '@nestjs/testing';
import { AiFeaturesGateway } from './aiFeatures.gateway';

describe('AiFeaturesGateway', () => {
  let gateway: AiFeaturesGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AiFeaturesGateway],
    }).compile();

    gateway = module.get<AiFeaturesGateway>(AiFeaturesGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { MensagensController } from './mensagens.controller';

describe('MensagensController', () => {
  let controller: MensagensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MensagensController],
    }).compile();

    controller = module.get<MensagensController>(MensagensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

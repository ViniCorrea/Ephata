import { Test, TestingModule } from '@nestjs/testing';
import { SampleController } from './sample.controller';
import { SampleService } from './sample.service';

describe('AppController', () => {
  let sampleController: SampleController;

  beforeEach(async () => {
    const sampleModule: TestingModule = await Test.createTestingModule({
      controllers: [SampleController],
      providers: [SampleService],
    }).compile();

    sampleController = sampleModule.get<SampleController>(SampleController);
  });

  describe('sample', () => {
    it('should return "Hello World!"', () => {
      expect(sampleController.getHello()).toBe('Hello World!');
    });
  });
});

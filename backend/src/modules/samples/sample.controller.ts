import { Controller, Get } from '@nestjs/common';
import { SampleService } from './sample.service';

@Controller('samples')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get('/hello')
  getHello(): string {
    return this.sampleService.getHello();
  }
}

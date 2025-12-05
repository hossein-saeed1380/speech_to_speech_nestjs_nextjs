import { Module } from '@nestjs/common';
import { AiFeaturesGateway } from './aiFeatures.gateway';
import { AiFeaturesService } from './aiFeatures.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AiFeaturesGateway, AiFeaturesService],
})
export class AiFeaturesModule {}

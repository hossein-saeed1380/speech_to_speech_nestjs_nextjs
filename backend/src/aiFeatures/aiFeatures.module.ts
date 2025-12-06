import { Module } from '@nestjs/common';
import { AiFeaturesGateway } from './aiFeatures.gateway';
import { AiFeaturesService } from './aiFeatures.service';
import { OpenaiModule } from 'src/openai/openai.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [OpenaiModule, PrismaModule],
  controllers: [],
  providers: [AiFeaturesGateway, AiFeaturesService],
})
export class AiFeaturesModule {}

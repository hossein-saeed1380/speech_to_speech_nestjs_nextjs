import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AiFeaturesModule } from './aiFeatures/aiFeatures.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    AiFeaturesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

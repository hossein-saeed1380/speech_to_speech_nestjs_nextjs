import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(readonly configService: ConfigService) {
    const adapter = new PrismaPg({
      password: configService.get('DATABASE_PASS'),
      user: configService.get('DATABASE_USER'),
      host: configService.get('DATABASE_HOST'),
      port: configService.get('DATABASE_PORT'),
      database: configService.get('DATABASE_NAME'),
    });
    super({ adapter });
  }
}

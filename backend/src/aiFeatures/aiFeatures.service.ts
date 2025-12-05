import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

const apiKey = process.env.OPENAPI_KEY;

@Injectable()
export class AiFeaturesService {
  constructor(private prisma: PrismaService) {}

  async takeVoice(audio: any) {
    return 'Hello world!';
  }

  async takeText(text: string) {
    return 'Hello world!';
  }
}

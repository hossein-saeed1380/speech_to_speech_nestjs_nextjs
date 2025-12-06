import { Injectable } from '@nestjs/common';
import { OpenaiService } from 'src/openai/openai.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AiFeaturesService {
  constructor(private prisma: PrismaService, private openaiService: OpenaiService) {}

  async takeVoice(audio: any) {
    const text = await this.openaiService.speechToText(audio);

    const newGeneratedText = await this.openaiService.textToText(text);

    const speech = await this.openaiService.textToSpeech(newGeneratedText);

    return "";
  }

  async takeText(text: string) {
    const newGeneratedText = await this.openaiService.textToText(text);

    return "";
  }
}

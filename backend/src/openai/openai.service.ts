import { Injectable } from "@nestjs/common";
import OpenAI from "openai";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class OpenaiService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
  });
  constructor(private prisma: PrismaService) {}

  async speechToText(audio: any) {
    const response = await this.openai.audio.transcriptions.create({
      model: "gpt-4o-mini",
      file: audio,
    });
    return response.text;
  }

  async textToSpeech(text: string) {
    const response = await this.openai.audio.speech.create({
      input: text,
      model: "gpt-4o-mini",
      voice: "alloy",
    });
    return response.blob() || "";
  }

  async textToText(text: string): Promise<any> {
    const response = await this.openai.responses.create({
      model: "gpt-4o-mini",
      input: text,
    });
    return response;
  }
}
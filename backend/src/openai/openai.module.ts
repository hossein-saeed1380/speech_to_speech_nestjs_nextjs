import { Module } from "@nestjs/common";
import { OpenaiService } from "./openai.service";
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [OpenaiService],
  exports: [OpenaiService],
})
export class OpenaiModule {}
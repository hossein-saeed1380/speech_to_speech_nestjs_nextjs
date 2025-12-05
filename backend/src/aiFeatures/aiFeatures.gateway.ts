import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { AiFeaturesService } from './aiFeatures.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  port: 3001,
})
export class AiFeaturesGateway {
  constructor(private readonly aiFeaturesService: AiFeaturesService) {}

  @SubscribeMessage('voice')
  async handleAudio(client: any, payload: any): Promise<string> {
    return await this.aiFeaturesService.takeVoice(payload);
  }

  @SubscribeMessage('text')
  async handleText(client: any, payload: any): Promise<string> {
    return await this.aiFeaturesService.takeText(payload);
  }
}

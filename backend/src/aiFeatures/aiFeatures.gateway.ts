import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';
import { AiFeaturesService } from './aiFeatures.service';
import { from, map, Observable } from 'rxjs';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  port: 3002,
})
export class AiFeaturesGateway {
  constructor(private readonly aiFeaturesService: AiFeaturesService) {}

  @SubscribeMessage('voice')
  async handleAudio(client: any, payload: any): Promise<string> {
    return await this.aiFeaturesService.takeVoice(payload);
  }

  @SubscribeMessage('text')
  onEvent(@MessageBody() data: string) {
    return this.aiFeaturesService.takeText(data);
  }
}

import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { ICardService } from './ICard.Service';
import { Card } from 'src/models/viewmodel/card/Card';

@Injectable()
export class CardService
    extends Service<Card>
    implements ICardService {
}

import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { ICardNumbersService } from './ICardNumbers.Service';
import { CardNumbers } from 'src/models/viewmodel/cardnumbers/CardNumbers';

@Injectable()
export class CardNumbersService
    extends Service<CardNumbers>
    implements ICardNumbersService {
}

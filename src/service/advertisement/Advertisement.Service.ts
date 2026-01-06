import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { IAdvertisementService } from './IAdvertisement.Service';
import { Advertisement } from 'src/models/viewmodel/advertisement/Advertisement';
@Injectable()
export class AdvertisementService
    extends Service<Advertisement>
    implements IAdvertisementService {
}

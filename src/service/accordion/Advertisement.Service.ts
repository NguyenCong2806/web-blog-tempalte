import { Injectable, Inject } from '@nestjs/common';
import Service from '../Service';
import { Advertisement } from 'src/models/viewmodel/advertisement/Advertisement';
import { IAdvertisementService } from './IAdvertisement.Service';
@Injectable()
export class AdvertisementService
    extends Service<Advertisement>
    implements IAdvertisementService {
}

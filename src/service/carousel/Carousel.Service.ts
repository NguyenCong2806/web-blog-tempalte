import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { ICarouselService } from './ICarousel.Service';
import { Carousel } from 'src/models/viewmodel/carousel/Carousel';
@Injectable()
export class CarouselService
    extends Service<Carousel>
    implements ICarouselService {
}

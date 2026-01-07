import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { IParallaxService } from './IParallax.Service';
import { Parallax } from 'src/models/viewmodel/parallax/Parallax';

@Injectable()
export class ParallaxService
    extends Service<Parallax>
    implements IParallaxService {
}

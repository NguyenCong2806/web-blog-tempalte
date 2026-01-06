import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { IBoxImageTextService } from './IBoxImageText.Service';
import { BoxImageText } from 'src/models/viewmodel/boxImagetext/BoxImageText';
@Injectable()
export class BoxImageTextService
    extends Service<BoxImageText>
    implements IBoxImageTextService {
}

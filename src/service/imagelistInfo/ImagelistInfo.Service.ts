import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { IImageListInfoService } from './IImagelistInfo.Service';
import { ImageListInfo } from 'src/models/viewmodel/imagelistInfo/ImageListInfo';

@Injectable()
export class ImageListInfoService
    extends Service<ImageListInfo>
    implements IImageListInfoService {
}

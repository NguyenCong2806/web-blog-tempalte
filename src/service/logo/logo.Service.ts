import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { ILogoService } from './ILogo.Service';
import { Logo } from 'src/models/viewmodel/logo/Logo';

@Injectable()
export class LogoService
    extends Service<Logo>
    implements ILogoService {
}

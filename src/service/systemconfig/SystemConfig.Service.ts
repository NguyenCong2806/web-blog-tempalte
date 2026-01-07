import { Injectable } from '@nestjs/common';
import Service from '../Service';
import {ISystemConfigService } from './ISystemConfig.Service';
import { SystemConfig } from 'src/models/viewmodel/SystemConfig/systemconfigDto';

@Injectable()
export class SystemConfigService
    extends Service<SystemConfig>
    implements ISystemConfigService {
}

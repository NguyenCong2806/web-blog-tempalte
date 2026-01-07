import { Injectable } from '@nestjs/common';
import Service from '../Service';
import {ITabsService } from './ITabs.Service';
import { Tabs } from 'src/models/viewmodel/tabs/Tabs';

@Injectable()
export class TabsService
    extends Service<Tabs>
    implements ITabsService {
}

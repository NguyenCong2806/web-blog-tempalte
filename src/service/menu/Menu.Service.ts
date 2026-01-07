import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { IMenuService } from './IMenu.Service';
import { Menu } from 'src/models/viewmodel/menu/Menu';
@Injectable()
export class MenuService
    extends Service<Menu>
    implements IMenuService {
}

// src/modules/menu/menu.module.ts
import { Module } from '@nestjs/common';
import { IMenuService } from 'src/service/menu/IMenu.Service';
import { MenuService } from 'src/service/menu/Menu.Service';
@Module({
    imports: [],
    providers: [
        {
            provide: IMenuService,
            useClass: MenuService,
        },
    ],
    exports: [IMenuService],
})
export class MenuModule { }
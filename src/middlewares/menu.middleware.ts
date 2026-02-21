// src/common/middlewares/menu.middleware.ts
import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { endpoint, site } from 'src/config/urlapi';
import { Menu } from 'src/models/viewmodel/menu/Menu';
import { IMenuService } from 'src/service/menu/IMenu.Service';


@Injectable()
export class MenuMiddleware implements NestMiddleware {
    constructor(
        @Inject(IMenuService) private readonly menuService: IMenuService
    ) { }

    async use(req: Request, res: Response, next: NextFunction) {
        try {
            const menus = await this.menuService.findAll(endpoint.menu,site);
            res.locals.menus = menus.item as Menu[];
        } catch (error) {
            res.locals.menus = [];
        }
        next();
    }
}
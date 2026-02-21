// src/common/middlewares/logo.middleware.ts
import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { endpoint, site } from 'src/config/urlapi';
import { Logo } from 'src/models/viewmodel/logo/Logo';
import { ILogoService } from 'src/service/logo/ILogo.Service';
@Injectable()
export class LogoMiddleware implements NestMiddleware {
  // Inject dựa trên Token
  constructor(
     @Inject(ILogoService) private readonly logoService: ILogoService,
) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
       const logos = await this.logoService.findAll(endpoint.logo,site);
        res.locals.logos = logos.item as Logo[];
    } catch (error) {
      res.locals.logos = [];
    }
    next();
  }
}
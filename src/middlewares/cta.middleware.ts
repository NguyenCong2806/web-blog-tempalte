// src/common/middlewares/logo.middleware.ts
import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { endpoint } from 'src/config/urlapi';
import { Cta } from 'src/models/viewmodel/cta/Cta';
import { ICtaService } from 'src/service/cta/ICta.Service';
@Injectable()
export class CtaMiddleware implements NestMiddleware {
  // Inject dựa trên Token
  constructor(
     @Inject(ICtaService) private readonly ctaService: ICtaService,
) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
       const ctas = await this.ctaService.findAll(endpoint.cta);
        res.locals.ctas = ctas.item as Cta[];
    } catch (error) {
      res.locals.ctas = [];
    }
    next();
  }
}
import { Module } from '@nestjs/common';
import { CtaService } from 'src/service/cta/Cta.Service';
import { ICtaService } from 'src/service/cta/ICta.Service';


@Module({
 imports: [],
  providers: [
    {
      provide: ICtaService, 
      useClass: CtaService,
    },
  ],
  exports: [ICtaService],
})
export class CtaModule {}
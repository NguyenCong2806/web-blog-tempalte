import { Module } from '@nestjs/common';
import { ILogoService } from 'src/service/logo/ILogo.Service';
import { LogoService } from 'src/service/logo/logo.Service';


@Module({
 imports: [],
  providers: [
    {
      provide: ILogoService, 
      useClass: LogoService,
    },
  ],
  exports: [ILogoService],
})
export class LogoModule {}
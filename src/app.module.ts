import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './modules/about/about.module';
import { NewsModule } from './modules/news/news.module';
import { ICarouselService } from './service/carousel/ICarousel.Service';
import { CarouselService } from './service/carousel/Carousel.Service';

@Module({
  imports: [
    AboutModule,
    NewsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: ICarouselService,
      useClass: CarouselService,
    },
  ],
  exports: [ICarouselService],
})
export class AppModule { }

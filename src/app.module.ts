import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './modules/about/about.module';
import { NewsModule } from './modules/news/news.module';
import { ICarouselService } from './service/carousel/ICarousel.Service';
import { CarouselService } from './service/carousel/Carousel.Service';
import { IArticleheaderService } from './service/articleheader/IArticleheader.Service';
import { ArticleheaderService } from './service/articleheader/Articleheader.Service';

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
    {
      provide: IArticleheaderService,
      useClass: ArticleheaderService,
    },
  ],
  exports: [
    ICarouselService,
    IArticleheaderService
  ],
})
export class AppModule { }

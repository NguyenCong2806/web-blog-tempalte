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
import { BoxImageTextService } from './service/boxImagetext/BoxImageText.Service';
import { IBoxImageTextService } from './service/boxImagetext/IBoxImageText.Service';
import { CardService } from './service/card/Card.Service';
import { ICardService } from './service/card/ICard.Service';
import { AccordionService } from './service/accordion/Accordion.Service';
import { IAccordionService } from './service/accordion/IAccordion.Service';
import { CardNumbersService } from './service/cardnumbers/CardNumbers.Service';
import { ICardNumbersService } from './service/cardnumbers/ICardNumbers.Service';
import { FeedbackService } from './service/feedback/Feedback.Service';
import { IFeedbackService } from './service/feedback/IFeedback.Service';
import { IMajorsnoteService } from './service/majorsnote/IMajorsnote.Service';
import { MajorsnoteService } from './service/majorsnote/Majorsnote.Service';
import { CtaService } from './service/cta/Cta.Service';
import { ICtaService } from './service/cta/ICta.Service';

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
    {
      provide: IBoxImageTextService,
      useClass: BoxImageTextService,
    },
    {
      provide: ICardService,
      useClass: CardService,
    },
    {
      provide: IAccordionService,
      useClass: AccordionService,
    },
    {
      provide: ICardNumbersService,
      useClass: CardNumbersService,
    },
    {
      provide: IFeedbackService,
      useClass: FeedbackService,
    },
    {
      provide: IMajorsnoteService,
      useClass: MajorsnoteService,
    },
     {
      provide: ICtaService,
      useClass: CtaService,
    }
  ],
  exports: [
    ICarouselService,
    IArticleheaderService
  ],
})
export class AppModule { }

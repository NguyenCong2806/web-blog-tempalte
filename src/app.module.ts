import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './modules/about/about.module';
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
import { LogoService } from './service/logo/logo.Service';
import { ILogoService } from './service/logo/ILogo.Service';
import { LogoModule } from './modules/logo/logo.module';
import { LogoMiddleware } from './middlewares/logo.middleware';
import { MenuModule } from './modules/menu/menu.module';
import { MenuMiddleware } from './middlewares/menu.middleware';
import { ContentModule } from './modules/content/content.module';
import { CtaModule } from './modules/cta/cta.module';
import { CtaMiddleware } from './middlewares/cta.middleware';
import { PageContentModule } from './modules/major/major.module';
import { RegisterModule } from './modules/register/register.module';
import { ContactModule } from './modules/contact/contact.module';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { ModalPopupService } from './service/modalpopup/ModalPopup.Service';
import { IModalPopupService } from './service/modalpopup/IModalPopup.Service';

@Module({
  imports: [
    CtaModule,
    LogoModule,
    MenuModule,
    AboutModule,
    ContentModule,
    PageContentModule,
    RegisterModule,
    ContactModule,
    ScheduleModule,
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
      provide: ILogoService,
      useClass: LogoService,
    }, {
      provide: IModalPopupService,
      useClass: ModalPopupService,
    }
  ],
  exports: [
    ICarouselService,
    IArticleheaderService
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogoMiddleware, MenuMiddleware, CtaMiddleware)
      .forRoutes('*');
  }
}

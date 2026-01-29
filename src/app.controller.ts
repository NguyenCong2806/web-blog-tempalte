import { Controller, Get, Inject, Render } from '@nestjs/common';
import { Carousel } from './models/viewmodel/carousel/Carousel';
import { ArticleHeader } from './models/viewmodel/articleheader/ArticleHeader';
import { BoxImageText } from './models/viewmodel/boxImagetext/BoxImageText';
import { Card } from './models/viewmodel/card/Card';
import { Feedback } from './models/viewmodel/feedback/Feedback';
import { MajorsNote } from './models/viewmodel/majorsnote/MajorsNote';
import { ModalPopup } from './models/viewmodel/modalpopup/ModalPopup';
import { ICarouselService } from './service/carousel/ICarousel.Service';
import { endpoint } from './config/urlapi';
import { IArticleheaderService } from './service/articleheader/IArticleheader.Service';
import { IBoxImageTextService } from './service/boxImagetext/IBoxImageText.Service';
import { ICardService } from './service/card/ICard.Service';
import { IAccordionService } from './service/accordion/IAccordion.Service';
import { ICardNumbersService } from './service/cardnumbers/ICardNumbers.Service';
import { Accordion } from './models/viewmodel/accordion/Accordion';
import { CardNumbers } from './models/viewmodel/cardnumbers/CardNumbers';
import { IFeedbackService } from './service/feedback/IFeedback.Service';
import { IMajorsnoteService } from './service/majorsnote/IMajorsnote.Service';
import { IModalPopupService } from './service/modalpopup/IModalPopup.Service';

@Controller()
export class AppController {
  constructor(
    @Inject(ICarouselService) private readonly carouselService: ICarouselService,
    @Inject(IArticleheaderService) private readonly articleheaderService: IArticleheaderService,
    @Inject(IBoxImageTextService) private readonly boxImageTextService: IBoxImageTextService,
    @Inject(ICardService) private readonly cardService: ICardService,
    @Inject(IAccordionService) private readonly accordionService: IAccordionService,
    @Inject(ICardNumbersService) private readonly cardNumbersService: ICardNumbersService,
    @Inject(IFeedbackService) private readonly feedbackService: IFeedbackService,
    @Inject(IMajorsnoteService) private readonly majorsnoteService : IMajorsnoteService,
    @Inject(IModalPopupService) private readonly modalPopupService : IModalPopupService,
  ) { }

  @Get()
  @Render('index')
  async get(): Promise<object> {
    //data carousel
    const carousels = await this.carouselService.findAll(endpoint.carousel);
    const imageData = carousels.item as Carousel[];
    const heading =  await this.articleheaderService.findAll(endpoint.articleheader);
    const headers = heading.item as ArticleHeader[];
    const boxImageTexts = await this.boxImageTextService.findAll(endpoint.boximagetext);
    const boxImageTextData = boxImageTexts.item as BoxImageText[];
    const cards = await this.cardService.findAll(endpoint.card);
    const cardData = cards.item as Card[];
    const accordions = await this.accordionService.findAll(endpoint.accordion);
    const accordionData = accordions.item as Accordion[];
    const cardNumbers = await this.cardNumbersService.findAll(endpoint.cardnumber);
    const cardnumbers = cardNumbers.item as CardNumbers[];
    const feedbacks = await this.feedbackService.findAll(endpoint.feedback);
    const feedbackData = feedbacks.item as Feedback[];
    const majorsnotes = await this.majorsnoteService.findAll(endpoint.majorsnote);
    const majorsnoteData = majorsnotes.item as MajorsNote[];
    const modalPopups = await this.modalPopupService.findAll(endpoint.modalpopup);
    const modalPopupData = modalPopups.item as ModalPopup[];
   
    return {
      title: "home",
      currentPath: '/',
      carousels: imageData,
      ///section boximagetext
      articleHeaderboxImagetext: headers[0],
      boxImageTexts: boxImageTextData,
      ///section card
      articleHeadercard: headers[1],
      cards: cardData,
      ///section accordion
      articleHeaderaccordion: headers[2],
      accordions: accordionData,
      cardnumbers: cardnumbers,
      ///section majorsnote
      articleHeadermajorsnote: headers[3],
      majorsnotes: majorsnoteData,
      feedbacks: feedbackData,
      modalPopups: modalPopupData
    };
  }
}

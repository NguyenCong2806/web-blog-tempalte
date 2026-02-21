import { Controller, Get, Inject, Render } from '@nestjs/common';
import { Carousel } from './models/viewmodel/carousel/Carousel';
import { ArticleHeader } from './models/viewmodel/articleheader/ArticleHeader';
import { Card } from './models/viewmodel/card/Card';
import { Feedback } from './models/viewmodel/feedback/Feedback';
import { MajorsNote } from './models/viewmodel/majorsnote/MajorsNote';
import { ModalPopup } from './models/viewmodel/modalpopup/ModalPopup';
import { ICarouselService } from './service/carousel/ICarousel.Service';
import { endpoint, site } from './config/urlapi';
import { IArticleheaderService } from './service/articleheader/IArticleheader.Service';
import { ICardService } from './service/card/ICard.Service';
import { IAccordionService } from './service/accordion/IAccordion.Service';
import { ICardNumbersService } from './service/cardnumbers/ICardNumbers.Service';
import { Accordion } from './models/viewmodel/accordion/Accordion';
import { CardNumbers } from './models/viewmodel/cardnumbers/CardNumbers';
import { IFeedbackService } from './service/feedback/IFeedback.Service';
import { IMajorsnoteService } from './service/majorsnote/IMajorsnote.Service';
import { ICoursesService } from './service/courses/ICourses.Service';
import { IModalPopupService } from './service/modalpopup/IModalPopup.Service';
import { Courses } from './models/viewmodel/courses/Courses';

@Controller()
export class AppController {
  constructor(
    @Inject(ICarouselService) private readonly carouselService: ICarouselService,
    @Inject(IArticleheaderService) private readonly articleheaderService: IArticleheaderService,
    @Inject(ICardService) private readonly cardService: ICardService,
    @Inject(IAccordionService) private readonly accordionService: IAccordionService,
    @Inject(ICardNumbersService) private readonly cardNumbersService: ICardNumbersService,
    @Inject(IFeedbackService) private readonly feedbackService: IFeedbackService,
    @Inject(IMajorsnoteService) private readonly majorsnoteService : IMajorsnoteService,
    @Inject(IModalPopupService) private readonly modalPopupService: IModalPopupService,
    @Inject(ICoursesService) private readonly coursesService: ICoursesService
  ) { }

  @Get()
  @Render('index')
  async get(): Promise<object> {
    //data carousel
    const carousels = await this.carouselService.findAll(endpoint.carousel, site);
    const imageData = carousels.item as Carousel[];
    const heading =  await this.articleheaderService.findAll(endpoint.articleheader, site);
    const headers = heading.item as ArticleHeader[];
    const cards = await this.cardService.findAll(endpoint.card, site);
    const cardData = cards.item as Card[];
    const accordions = await this.accordionService.findAll(endpoint.accordion, site);
    const accordionData = accordions.item as Accordion[];
    const cardNumbers = await this.cardNumbersService.findAll(endpoint.cardnumber, site);
    const cardnumbers = cardNumbers.item as CardNumbers[];
    const feedbacks = await this.feedbackService.findAll(endpoint.feedback, site);
    const feedbackData = feedbacks.item as Feedback[];
    const majorsnotes = await this.majorsnoteService.findAll(endpoint.majorsnote, site);
    const majorsnoteData = majorsnotes.item as MajorsNote[];
    const modalPopups = await this.modalPopupService.findAll(endpoint.modalpopup, site);
    const modalPopupData = modalPopups.item as ModalPopup[];
    const courses = await this.coursesService.findAll(endpoint.courses, site);
    const coursesData = courses.item as Courses[];
    
    return {
      title: "home",
      currentPath: '/',
      carousels: imageData,
      ///section courses
      articleHeadecourses: headers[0],
      courses: coursesData,
      ///section card
      articleHeadercard: headers[1],
      cards: cardData,
      ///section accordion
      articleHeaderaccordion: headers[2],
      accordions: accordionData,
      ///section cardnumbers
      articleHeadercardnumbers: headers[3],
      cardnumbers: cardnumbers,
      ///section feedback
      articleHeaderfeedback: headers[4],
      feedbacks: feedbackData,
      ///section majorsnote
      articleHeadermajorsnote: headers[5],
      majorsnotes: majorsnoteData,
      
      modalPopups: modalPopupData,
    };
  }
}

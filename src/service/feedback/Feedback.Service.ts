import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { IFeedbackService } from './IFeedback.Service';
import { Feedback } from 'src/models/viewmodel/feedback/Feedback';

@Injectable()
export class FeedbackService
    extends Service<Feedback>
    implements IFeedbackService {
}

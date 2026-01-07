import { Injectable } from '@nestjs/common';
import Service from '../Service';
import {  IModalPopupService } from './IModalPopup.Service';
import { ModalPopup } from 'src/models/viewmodel/modalpopup/ModalPopup';

@Injectable()
export class ModalPopupService
    extends Service<ModalPopup>
    implements IModalPopupService {
}

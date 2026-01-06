import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { IContactService } from './IContact.Service';
import { Contact } from 'src/models/viewmodel/contact/Contact';

@Injectable()
export class ContactService
    extends Service<Contact>
    implements IContactService {
}

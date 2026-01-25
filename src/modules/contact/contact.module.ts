import { Module } from '@nestjs/common';
import { ContactController } from 'src/controller/contact/contact.controller';


@Module({
    imports: [],
    controllers: [ContactController],
    providers: [

    ],
    exports: [],
})
export class ContactModule { }

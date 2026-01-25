import { Controller, Get, Render } from '@nestjs/common';

@Controller('lien-he')
export class ContactController {
    
    @Get()
    @Render('page/contact-page')
    getContactPage() {
        return {
            title: 'Liên hệ - Trung tâm Đào tạo Trực tuyến',
            currentPath: '/lien-he',
        };
    }
}
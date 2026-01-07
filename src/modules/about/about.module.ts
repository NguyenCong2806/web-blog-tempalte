import { Module } from '@nestjs/common';
import { AboutController } from 'src/controller/about/about.controller';
import { AboutService } from 'src/service/about/About.service';

@Module({
    imports: [],
    controllers: [AboutController],
    providers: [
        AboutService],
    exports: [AboutService],
})
export class AboutModule { }

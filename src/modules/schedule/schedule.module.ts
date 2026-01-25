import { Module } from '@nestjs/common';
import { ScheduleController } from 'src/controller/schedule/schedule.controller';
@Module({
    imports: [],
    controllers: [ScheduleController],
    providers: [

    ],
    exports: [],
})
export class ScheduleModule { }

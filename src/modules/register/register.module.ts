import { Module } from '@nestjs/common';
import { RegisterController } from 'src/controller/register/register.controller';


@Module({
    imports: [],
    controllers: [RegisterController],
    providers: [
    
    ],
    exports: [],
})
export class RegisterModule { }
import { Controller, Get, Render } from '@nestjs/common';

@Controller('khai-giang')
export class ScheduleController {
    
    @Get()
    @Render('page/schedule-page')
    getSchedulePage() {
        const schedules = [
            { 
                location: 'Hà Nội', 
                batch: 'Khóa đầu 2026 (dự kiến)', 
                status: 'Đang cập nhật' 
            },
            { 
                location: 'TP.Hồ Chí Minh', 
                batch: 'Khóa đầu 2026 (dự kiến)', 
                status: 'Đang cập nhật' 
            },
            { 
                location: 'Nhật Bản', 
                batch: 'Khóa đầu 2026 (dự kiến)', 
                status: 'Đang cập nhật' 
            }
        ];

        return {
            title: 'Lịch khai giảng - Đại học từ xa',
            schedules: schedules, // Truyền mảng dữ liệu này xuống View
            currentPath: '/khai-giang',
        };
    }
}
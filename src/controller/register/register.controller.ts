import { Controller, Get, Post, Body, Render } from '@nestjs/common';

@Controller('dang-ky')
export class RegisterController {
    
    // GET: Hiển thị form
    @Get()
    @Render('page/register-page')
    getRegisterPage() {
        // Mock dữ liệu danh sách ngành để đổ vào Dropdown
        const majors = [
            { id: 'ngon-ngu-anh', title: 'Ngôn ngữ Anh' },
            { id: 'quan-tri-kinh-doanh', title: 'Quản trị Kinh doanh' },
            { id: 'cong-nghe-thong-tin', title: 'Công nghệ thông tin' },
            { id: 'luat-kinh-te', title: 'Luật kinh tế' },
            { id: 'ke-toan', title: 'Kế toán' }
        ];

        return {
            title: 'Đăng ký xét tuyển trực tuyến',
            currentPath: '/dang-ky',
            majors: majors // Truyền biến này xuống view
        };
    }

    // POST: Xử lý khi người dùng bấm nút Đăng ký
    @Post()
    async submitRegistration(@Body() body: any) {
        console.log('Dữ liệu đăng ký:', body);
        // Tại đây bạn sẽ gọi Service để lưu vào DB hoặc gửi Email
        
        // Sau khi xong thì redirect hoặc render trang cảm ơn
        return "Đăng ký thành công! Chúng tôi sẽ liên hệ sớm."; 
    }
}
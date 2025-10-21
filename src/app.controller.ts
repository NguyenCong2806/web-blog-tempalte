import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(): object {
    //data carousel
    const imageData = [
      { url: './image/carousel/1.png', alt: 'Ảnh 1', ale: 'Chòa công 1' },
      { url: './image/carousel/2.jpg', alt: 'Ảnh 2', ale: 'Chòa công 2' },
      { url: './image/carousel/3.png', alt: 'Ảnh 3', ale: 'Chòa công 3' },
    ];
    // Heading one
    const heading = {
      head: 'TNU E-LEARNING',
      tit: 'Đào tạo đa ngành, chương trình học tiết kiệm thời gian',
    };
    //data card major
    const majorData = [
      { url: './image/major/1.jpg', title: 'Information Technology', des: 'Ngành IT bao gồm nhiều lĩnh vực khác nhau như phát triển phần mềm, quản trị hệ thống và mạng, an ninh mạng, cơ sở dữ liệu, phân tích dữ liệu, hỗ trợ kỹ thuật, và phát triển web' },
      { url: './image/major/2.jpg', title: 'Electronics Technology', des: 'Ngành IT bao gồm nhiều lĩnh vực khác nhau như phát triển phần mềm, quản trị hệ thống và mạng, an ninh mạng, cơ sở dữ liệu, phân tích dữ liệu, hỗ trợ kỹ thuật, và phát triển web' },
      { url: './image/major/3.jpg', title: 'Business Administration', des: 'Ngành IT bao gồm nhiều lĩnh vực khác nhau như phát triển phần mềm, quản trị hệ thống và mạng, an ninh mạng, cơ sở dữ liệu, phân tích dữ liệu, hỗ trợ kỹ thuật, và phát triển web' },
      { url: './image/major/4.jpg', title: 'Financial law', des: 'Ngành IT bao gồm nhiều lĩnh vực khác nhau như phát triển phần mềm, quản trị hệ thống và mạng, an ninh mạng, cơ sở dữ liệu, phân tích dữ liệu, hỗ trợ kỹ thuật, và phát triển web' },
      { url: './image/major/5.jpg', title: 'E-commerce', des: 'Ngành IT bao gồm nhiều lĩnh vực khác nhau như phát triển phần mềm, quản trị hệ thống và mạng, an ninh mạng, cơ sở dữ liệu, phân tích dữ liệu, hỗ trợ kỹ thuật, và phát triển web' },
      { url: './image/major/6.jpg', title: 'Accounting', des: 'Ngành IT bao gồm nhiều lĩnh vực khác nhau như phát triển phần mềm, quản trị hệ thống và mạng, an ninh mạng, cơ sở dữ liệu, phân tích dữ liệu, hỗ trợ kỹ thuật, và phát triển web' },
      { url: './image/major/7.jpg', title: 'Banking and Finance', des: 'Ngành IT bao gồm nhiều lĩnh vực khác nhau như phát triển phần mềm, quản trị hệ thống và mạng, an ninh mạng, cơ sở dữ liệu, phân tích dữ liệu, hỗ trợ kỹ thuật, và phát triển web' },
      { url: './image/major/8.jpg', title: 'Chinese', des: 'Ngành IT bao gồm nhiều lĩnh vực khác nhau như phát triển phần mềm, quản trị hệ thống và mạng, an ninh mạng, cơ sở dữ liệu, phân tích dữ liệu, hỗ trợ kỹ thuật, và phát triển web' },
    ];
     // Heading one
    const headingtwo = {
      head: 'BẠN NHẬN ĐƯỢC GÌ',
      tit: 'Những giá trị bạn sẽ nhận được từ chương trình của Đại học Thái Nguyên',
    };
    return {
      imagedatas: imageData,
      headings: heading,
      datamajor: majorData,
      headingtwos: headingtwo,
    };
  }
}

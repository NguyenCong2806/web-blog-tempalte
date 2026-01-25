import { Controller, Get, Inject, Render } from '@nestjs/common';
import { Carousel } from './models/viewmodel/carousel/Carousel';
import { Advertisement } from './models/viewmodel/advertisement/Advertisement';
import { ArticleHeader } from './models/viewmodel/articleheader/ArticleHeader';
import { BoxImageText } from './models/viewmodel/boxImagetext/BoxImageText';
import { Card } from './models/viewmodel/card/Card';
import { Contact } from './models/viewmodel/contact/Contact';
import { Courses } from './models/viewmodel/courses/Courses';
import { Expert } from './models/viewmodel/expert/Expert';
import { Feedback } from './models/viewmodel/feedback/Feedback';
import { ImageListInfo } from './models/viewmodel/imagelistInfo/ImageListInfo';
import { MajorsNote } from './models/viewmodel/majorsnote/MajorsNote';
import { ModalPopup } from './models/viewmodel/modalpopup/ModalPopup';
import { Parallax } from './models/viewmodel/parallax/Parallax';
import { Popular } from './models/viewmodel/popular/Popular';
import { Tabs } from './models/viewmodel/tabs/Tabs';
import { ICarouselService } from './service/carousel/ICarousel.Service';
import { endpoint } from './config/urlapi';
import { IArticleheaderService } from './service/articleheader/IArticleheader.Service';
import { IBoxImageTextService } from './service/boxImagetext/IBoxImageText.Service';
import { ICardService } from './service/card/ICard.Service';
import { IAccordionService } from './service/accordion/IAccordion.Service';
import { ICardNumbersService } from './service/cardnumbers/ICardNumbers.Service';
import { Accordion } from './models/viewmodel/accordion/Accordion';
import { CardNumbers } from './models/viewmodel/cardnumbers/CardNumbers';
import { IFeedbackService } from './service/feedback/IFeedback.Service';
import { IMajorsnoteService } from './service/majorsnote/IMajorsnote.Service';
import { IModalPopupService } from './service/modalpopup/IModalPopup.Service';

@Controller()
export class AppController {
  constructor(
    @Inject(ICarouselService) private readonly carouselService: ICarouselService,
    @Inject(IArticleheaderService) private readonly articleheaderService: IArticleheaderService,
    @Inject(IBoxImageTextService) private readonly boxImageTextService: IBoxImageTextService,
    @Inject(ICardService) private readonly cardService: ICardService,
    @Inject(IAccordionService) private readonly accordionService: IAccordionService,
    @Inject(ICardNumbersService) private readonly cardNumbersService: ICardNumbersService,
    @Inject(IFeedbackService) private readonly feedbackService: IFeedbackService,
    @Inject(IMajorsnoteService) private readonly majorsnoteService : IMajorsnoteService,
    @Inject(IModalPopupService) private readonly modalPopupService : IModalPopupService,
  ) { }

  @Get()
  @Render('index')
  async get(): Promise<object> {
    //data carousel
    const carousels = await this.carouselService.findAll(endpoint.carousel);
    const imageData = carousels.item as Carousel[];
    const heading =  await this.articleheaderService.findAll(endpoint.articleheader);
    const headers = heading.item as ArticleHeader[];
    const articleheader = headers[0];
    const boxImageTexts = await this.boxImageTextService.findAll(endpoint.boximagetext);
    const boxImageTextData = boxImageTexts.item as BoxImageText[];
    const cards = await this.cardService.findAll(endpoint.card);
    const cardData = cards.item as Card[];
    const accordions = await this.accordionService.findAll(endpoint.accordion);
    const accordionData = accordions.item as Accordion[];
    const cardNumbers = await this.cardNumbersService.findAll(endpoint.cardnumber);
    const cardnumbers = cardNumbers.item as CardNumbers[];
    const feedbacks = await this.feedbackService.findAll(endpoint.feedback);
    const feedbackData = feedbacks.item as Feedback[];
    const majorsnotes = await this.majorsnoteService.findAll(endpoint.majorsnote);
    const majorsnoteData = majorsnotes.item as MajorsNote[];
    const modalPopups = await this.modalPopupService.findAll(endpoint.modalpopup);
    const modalPopupData = modalPopups.item as ModalPopup[];

    // Heading onee
    const adsData: Advertisement[] = [
      {
        title: "Tuyển sinh Đại học Từ xa 2024",
        image: "./image/major/1.jpg",
        detail: "Cơ hội nhận bằng đại học uy tín, học mọi lúc mọi nơi.",
        location: 1,
        site: "TNU"
      },
      {
        title: "Khai giảng lớp Ngôn ngữ Anh",
        image: "./image/major/2.jpg",
        detail: "Chương trình đào tạo chuẩn quốc tế.",
        location: 2,
        site: "Center"
      }
    ];
    
    const boxData: BoxImageText[] = [
      {
        site: "E-LEARNING",
        heading: "Phương pháp học tập hiện đại 4.0",
        image: "./image/major/1.jpg",
        note: "Hệ thống bài giảng được thiết kế trực quan, sinh động. \nSinh viên có thể học mọi lúc, mọi nơi, trên mọi thiết bị.",
        location: 1,
        position: 1 // Lẻ -> Ảnh TRÁI
      },
      {
        site: "CERTIFICATE",
        heading: "Bằng cấp chính quy - Giá trị trọn đời",
        image: "./image/major/2.jpg",
        note: "Văn bằng tốt nghiệp đại học từ xa có giá trị pháp lý tương đương hệ chính quy. \nĐủ điều kiện học lên Thạc sĩ, Tiến sĩ và thi công chức theo quy định của Nhà nước.",
        location: 2,
        position: 2 // Chẵn -> Ảnh PHẢI
      },
      {
        site: "E-LEARNING",
        heading: "Phương pháp học tập hiện đại 4.0",
        image: "./image/major/1.jpg",
        note: "Hệ thống bài giảng được thiết kế trực quan, sinh động. \nSinh viên có thể học mọi lúc, mọi nơi, trên mọi thiết bị.",
        location: 1,
        position: 1 // Lẻ -> Ảnh TRÁI
      },
      {
        site: "CERTIFICATE",
        heading: "Bằng cấp chính quy - Giá trị trọn đời",
        image: "./image/major/2.jpg",
        note: "Văn bằng tốt nghiệp đại học từ xa có giá trị pháp lý tương đương hệ chính quy. \nĐủ điều kiện học lên Thạc sĩ, Tiến sĩ và thi công chức theo quy định của Nhà nước.",
        location: 2,
        position: 2 // Chẵn -> Ảnh PHẢI
      },
    ];
    
    const contactData: Contact[] = [
      {
        icon: "/images/icons/location.png",
        title: "Trụ sở chính",
        detail: "Số 123 Đường ABC, Phường XYZ,\nQuận Cầu Giấy, Hà Nội",
        link: "https://maps.google.com",
        location: 1
      },
      {
        icon: "/images/icons/phone-call.png",
        title: "Hotline Tư vấn",
        detail: "0912.345.678 (P. Tuyển sinh)\n024.375.xxxx (P. Đào tạo)",
        link: "tel:0912345678",
        location: 2
      },
      {
        icon: "/images/icons/email.png",
        title: "Email Hỗ trợ",
        detail: "tuyensinh@daihocthainguyen.edu.vn\nsupport@tnu.edu.vn",
        link: "mailto:tuyensinh@daihocthainguyen.edu.vn",
        location: 3
      },
      {
        icon: "/images/icons/share.png",
        title: "Kết nối mạng xã hội",
        detail: "Theo dõi chúng tôi để cập nhật thông tin mới nhất.",
        linkfacebook: "https://facebook.com/tnu",
        linkyoutobe: "https://youtube.com/tnu", // Chú ý: đúng tên biến linkyoutobe
        linkin: "https://linkedin.com/school/tnu",
        location: 4
      }
    ];
    const coursesData: Courses[] = [
      {
        oder: 1, // Hiển thị đầu tiên
        title: "Cử nhân Công nghệ Thông tin",
        img: "/images/courses/it-banner.jpg",
        icon: "/images/icons/laptop-code.png",
        detail: "Đào tạo lập trình viên Fullstack, kỹ sư phần mềm, chuyên gia an ninh mạng. Cam kết việc làm sau khi tốt nghiệp.",
        link: "/nganh-cntt",
        site: "HOT",
        location: 1
      },
      {
        oder: 2,
        title: "Cử nhân Ngôn ngữ Anh",
        img: "/images/courses/english-banner.jpg",
        icon: "/images/icons/translation.png",
        detail: "Chương trình chuẩn quốc tế, rèn luyện 4 kỹ năng Nghe - Nói - Đọc - Viết. Cơ hội làm việc tại các tập đoàn đa quốc gia.",
        link: "/nganh-nna",
        site: "NEW",
        location: 2
      },
      {
        oder: 3,
        title: "Quản trị Kinh doanh",
        img: "/images/courses/business-banner.jpg",
        icon: "/images/icons/chart-line.png",
        detail: "Trang bị kiến thức quản lý, marketing, tài chính. Đào tạo CEO, nhà quản lý tương lai.",
        link: "/nganh-qtkd",
        site: "MBA",
        location: 3
      }, {
        oder: 4,
        title: "Quản trị Kinh doanh",
        img: "/images/courses/business-banner.jpg",
        icon: "/images/icons/chart-line.png",
        detail: "Trang bị kiến thức quản lý, marketing, tài chính. Đào tạo CEO, nhà quản lý tương lai.",
        link: "/nganh-qtkd",
        site: "MBA",
        location: 3
      }
    ];
    const expertData: Expert[] = [
      {
        title: "PGS.TS Nguyễn Văn A",
        img: "/images/avatars/expert-1.jpg",
        icon: "/images/icons/computer.png", // Icon ngành CNTT
        detail: "Trưởng khoa Công nghệ thông tin. 20 năm kinh nghiệm nghiên cứu về Trí tuệ nhân tạo và Big Data.",
        link: "/profile/nguyen-van-a",
        site: "CNTT",
        location: 1
      },
      {
        title: "Tiến sĩ Leona Wu",
        img: "/images/avatars/expert-2.jpg",
        icon: "/images/icons/globe.png", // Icon ngành Ngôn ngữ
        detail: "Giảng viên cao cấp ĐH Cambridge. Chuyên gia đào tạo phương pháp giảng dạy Tiếng Anh chuẩn quốc tế.",
        link: "/profile/leona-wu",
        site: "NNA",
        location: 2
      },
      {
        title: "ThS. Trần Thị B",
        img: "/images/avatars/expert-3.jpg",
        icon: "/images/icons/law-scale.png", // Icon ngành Luật
        detail: "Luật sư đoàn Luật sư TP. Hà Nội. Cố vấn pháp lý cho nhiều tập đoàn lớn tại Việt Nam.",
        link: "/profile/tran-thi-b",
        site: "LUẬT",
        location: 3
      },
      {
        title: "Chuyên gia Mark Zucker",
        img: "/images/avatars/expert-4.jpg",
        icon: "/images/icons/chart.png", // Icon Kinh tế
        detail: "CEO TechStartup. Cố vấn khởi nghiệp và quản trị doanh nghiệp số.",
        link: "/profile/mark",
        site: "QTKD",
        location: 4
      }
    ];
    const partnersData: ImageListInfo[] = [
      {
        text: "Bộ Giáo dục & Đào tạo",
        img: "/images/logos/moet.png",
        link: "https://moet.gov.vn",
        isshow: true,
        location: 1,
        site: "GOV"
      },
      {
        text: "Đại học Thái Nguyên",
        img: "/images/logos/tnu-logo.png",
        link: "https://tnu.edu.vn",
        isshow: true,
        location: 2,
        site: "EDU"
      },
      {
        text: "Tập đoàn Viettel",
        img: "/images/logos/viettel.png",
        link: "#",
        isshow: true,
        location: 3,
        site: "CORP"
      },
      {
        text: "Microsoft Vietnam",
        img: "/images/logos/microsoft.png",
        link: "#",
        isshow: true,
        location: 4,
        site: "TECH"
      },
      {
        text: "Coursera",
        img: "/images/logos/coursera.png",
        link: "#",
        isshow: true,
        location: 5,
        site: "MOOC"
      },
      {
        text: "Logo cũ (Đã ẩn)",
        img: "/images/logos/old.png",
        link: "#",
        isshow: false, // Cái này sẽ không hiện ra
        location: 6
      }
    ];
    const parallaxData: Parallax[] = [
      {
        bgimage: "/images/backgrounds/campus-bg.jpg",
        bgimagealt: "Khuôn viên trường đại học",
        strength: 0.3,   // Tốc độ di chuyển (0.3 là vừa đẹp)
        blurmin: 0,      // Không mờ lúc đầu
        blurmax: 0,      // Không mờ lúc cuối
        site: "CAMPUS TOUR",
        location: 1
      },
      {
        bgimage: "/images/backgrounds/library-bg.jpg",
        bgimagealt: "Thư viện",
        strength: 0.5,   // Di chuyển nhanh hơn
        blurmin: 0,      // Bắt đầu nét
        blurmax: 5,      // Cuộn xuống sẽ mờ dần đi 5px
        site: "LIBRARY",
        location: 2
      }
    ];
    const popularData: Popular[] = [
      {
        img: "/images/courses/web-dev.jpg",
        icon: "/images/avatars/instructor-1.jpg", // Avatar giảng viên
        title: "Lập trình Web Fullstack từ A-Z với Node.js & React",
        detail: "Khóa học toàn diện giúp bạn trở thành lập trình viên chuyên nghiệp sau 6 tháng.",
        price: 1500000, // 1.500.000 đ
        author: "Nguyễn Văn A",
        time: 48,       // 48 giờ học
        quantity: "1.2k học viên",
        link: "/course/fullstack",
        site: "BEST SELLER",
        location: 1
      },
      {
        img: "/images/courses/english-com.jpg",
        icon: "/images/avatars/instructor-2.jpg",
        title: "Tiếng Anh giao tiếp cho người đi làm",
        detail: "Lấy lại căn bản và tự tin giao tiếp trong môi trường công sở.",
        price: 699000,
        author: "Ms. Jenny",
        time: 24,
        quantity: "500 học viên",
        link: "/course/english",
        site: "NEW",
        location: 2
      },
      {
        img: "/images/courses/marketing.jpg",
        icon: "/images/avatars/instructor-3.jpg",
        title: "Digital Marketing thực chiến 2024",
        detail: "Làm chủ Facebook Ads, Google Ads và SEO.",
        price: 0, // Miễn phí
        author: "Trần CEO",
        time: 5,
        quantity: "5.5k đăng ký",
        link: "/course/marketing",
        site: "FREE",
        location: 3
      },
      {
        img: "/images/courses/python.jpg",
        icon: "/images/avatars/instructor-4.jpg",
        title: "Phân tích dữ liệu với Python",
        detail: "Dành cho người mới bắt đầu tìm hiểu về Data Science.",
        price: 2500000,
        author: "Dr. Data",
        time: 60,
        quantity: "300 học viên",
        link: "/course/data",
        site: "HOT",
        location: 4
      }
    ];
    const tabsData: Tabs[] = [
      {
        label: "Mục tiêu đào tạo",
        icon: "/images/icons/target.png",
        content: `
          <p>Chương trình đào tạo nhằm trang bị cho sinh viên kiến thức nền tảng vững chắc và kỹ năng chuyên sâu...</p>
          <ul>
            <li>Nắm vững kiến thức cơ sở ngành.</li>
            <li>Có khả năng phân tích, thiết kế và xây dựng hệ thống.</li>
          </ul>
        `,
        location: 1,
        site: "INFO"
      },
      {
        label: "Đối tượng tuyển sinh",
        icon: "/images/icons/users.png",
        content: `
          <p>Chương trình dành cho mọi đối tượng công dân Việt Nam có đủ sức khỏe và điều kiện pháp lý:</p>
          <p><strong>1. Hệ Đại học:</strong> Đã tốt nghiệp THPT hoặc tương đương.</p>
          <p><strong>2. Hệ Liên thông:</strong> Đã có bằng Trung cấp, Cao đẳng cùng ngành.</p>
          <p><strong>3. Văn bằng 2:</strong> Đã có một bằng Đại học ngành khác.</p>
        `,
        location: 2,
        site: "TARGET"
      },
      {
        label: "Học phí & Lệ phí",
        icon: "/images/icons/money.png",
        content: `
          <p>Học phí được tính theo tín chỉ, cam kết không tăng trong suốt quá trình học.</p>
          <table class="w-full border-collapse border border-gray-200 mt-4">
            <tr class="bg-gray-100">
              <th class="border p-2">Khoản thu</th>
              <th class="border p-2">Mức thu</th>
            </tr>
            <tr>
              <td class="border p-2">Học phí / tín chỉ</td>
              <td class="border p-2 font-bold text-red-600">450.000 VNĐ</td>
            </tr>
            <tr>
              <td class="border p-2">Lệ phí xét tuyển</td>
              <td class="border p-2">100.000 VNĐ</td>
            </tr>
          </table>
        `,
        location: 3,
        site: "FEE"
      }
    ];
    return {
      title: "home",
      currentPath: '/',
      carousels: imageData,
      headings: heading,
      advertisements: adsData,
      articleheader: articleheader,
      boxImageTexts: boxImageTextData,
      cards: cardData,
      accordions: accordionData,
      cardnumbers: cardnumbers,
      majorsnotes: majorsnoteData,
      contacts: contactData,
      courses: coursesData,
      experts: expertData,
      feedbacks: feedbackData,
      partners: partnersData,
      modalpopups: modalPopupData,
      parallax: parallaxData,
      populars: popularData,
      tabs: tabsData
    };
  }
}

import { Controller, Get, Inject, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { CarouselItem, HeadingData, MajorCard } from './viewmodels';
import { Carousel } from './models/viewmodel/carousel/Carousel';
import { Advertisement } from './models/viewmodel/advertisement/Advertisement';
import { ArticleHeader } from './models/viewmodel/articleheader/ArticleHeader';
import { BoxImageText } from './models/viewmodel/boxImagetext/BoxImageText';
import { Card } from './models/viewmodel/card/Card';
import { Contact } from './models/viewmodel/contact/Contact';
import { Courses } from './models/viewmodel/courses/Courses';
import { Cta } from './models/viewmodel/cta/Cta';
import { Expert } from './models/viewmodel/expert/Expert';
import { Feedback } from './models/viewmodel/feedback/Feedback';
import { ImageListInfo } from './models/viewmodel/imagelistInfo/ImageListInfo';
import { Logo } from './models/viewmodel/logo/Logo';
import { MajorsNote } from './models/viewmodel/majorsnote/MajorsNote';
import { ModalPopup } from './models/viewmodel/modalpopup/ModalPopup';
import { Parallax } from './models/viewmodel/parallax/Parallax';
import { Popular } from './models/viewmodel/popular/Popular';
import { Tabs } from './models/viewmodel/tabs/Tabs';
import { ICarouselService } from './service/carousel/ICarousel.Service';
import e from 'express';
import { endpoint } from './config/urlapi';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(ICarouselService) private readonly carouselService: ICarouselService,
  ) { }

  @Get()
  @Render('index')
  async get(): Promise<object> {
    //data carousel
    const carousels = await this.carouselService.findAll(endpoint.carousel);
    const imageData = carousels.item as Carousel[];
    // Heading one
    const heading: HeadingData = {
      head: 'TNU E-LEARNING',
      tit: 'Đào tạo đa ngành, chương trình học tiết kiệm thời gian',
    };
    //data card major
    const majorData: MajorCard[] = [
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
    const headingtwo: HeadingData = {
      head: 'BẠN NHẬN ĐƯỢC GÌ',
      tit: 'Những giá trị bạn sẽ nhận được từ chương trình của Đại học Thái Nguyên',
    };
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
    const headersData: ArticleHeader[] = [
      {
        site: "NEWS",
        headingheader: "Tin tức nổi bật",
        headingbody: "Cập nhật thông tin tuyển sinh mới nhất 2024",
        headingfooter: "Theo dõi các thông báo quan trọng về thời gian nhập học và hồ sơ cần thiết.",
        fontsize: 36,      // 36px
        fontweight: 700,   // Bold
        isdivider: true,   // Hiện dòng kẻ
        location: 1
      },
      {
        site: "EDU",
        headingheader: "Chương trình đào tạo",
        headingbody: "Các ngành học mũi nhọn",
        fontsize: 28,
        fontweight: 500,
        isdivider: false,
        location: 2
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
      }
    ];
    const cardData: Card[] = [
      {
        site: "FEATURE",
        icon: "./image/major/1.jpg", // Icon bằng ảnh
        title: "Bằng cấp giá trị",
        detail: "Được bộ GD&ĐT công nhận, có giá trị thi công chức, xét bậc lương và học lên cao học.",
        link: "/bang-cap",
        fontsize: 20,
        fontweight: 700,
        location: 1
      },
      {
        site: "TIME",
        icon: "./image/major/2.jpg",
        title: "Tiết kiệm thời gian",
        detail: "Học 100% Online mọi lúc mọi nơi, không cần đến trường, phù hợp người đi làm bận rộn.",
        link: "/phuong-phap-hoc",
        fontsize: 20,
        fontweight: 700,
        location: 2
      },
      {
        site: "COST",
        icon: "./image/major/3.jpg",
        title: "Chi phí tối ưu",
        detail: "Tiết kiệm chi phí đi lại, ăn ở. Học phí cạnh tranh, chia nhỏ nhiều đợt đóng.",
        link: "/hoc-phi",
        fontsize: 20,
        fontweight: 700,
        location: 3
      },
      {
        site: "SUPPORT",
        icon: "./image/major/4.jpg",
        title: "Hỗ trợ 24/7",
        detail: "Đội ngũ cố vấn học tập và kỹ thuật hỗ trợ tận tình trong suốt quá trình học tập.",
        link: "/ho-tro",
        fontsize: 20,
        fontweight: 700,
        location: 4
      }
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
    const ctaData: Cta[] = [
      {
        text: "Nhận học bổng 50% - Đăng ký ngay",
        link: "/register",
        isshow: true,  // Đang bật -> Hiển thị
        site: "KHUYẾN MÃI",
        location: 1
      },
      {
        text: "Tạm ẩn chương trình cũ",
        link: "#",
        isshow: true, // Đang tắt -> Không hiển thị
        site: "OLD",
        location: 2
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
    const feedbackData: Feedback[] = [
      {
        title: "Nguyễn Thu Hà",
        job: "Cựu sinh viên K15 - Ngành Ngôn ngữ Anh",
        img: "/images/avatars/student-1.jpg",
        icon: "/images/icons/quote-orange.png",
        detail: "Chương trình học rất linh hoạt, giúp tôi vừa đi làm vừa hoàn thành tấm bằng đại học mơ ước. Các thầy cô hỗ trợ cực kỳ nhiệt tình.",
        site: "ALUMNI",
        location: 1
      },
      {
        title: "Trần Minh Tuấn",
        job: "Giám đốc nhân sự - FPT Software",
        img: "/images/avatars/partner-1.jpg",
        icon: "/images/icons/handshake.png",
        detail: "Chúng tôi đánh giá cao chất lượng sinh viên tốt nghiệp từ hệ đào tạo từ xa của trường. Các bạn có kỹ năng tự học và thích nghi công việc rất tốt.",
        site: "PARTNER",
        location: 2
      },
      {
        title: "Lê Thị Lan",
        job: "Học viên Văn bằng 2 - Luật Kinh tế",
        img: "/images/avatars/student-2.jpg",
        icon: "/images/icons/quote-blue.png",
        detail: "Hệ thống E-learning hiện đại, bài giảng trực quan. Tôi tiết kiệm được rất nhiều chi phí đi lại so với học truyền thống.",
        site: "STUDENT",
        location: 3
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
    const logoData: Logo[] = [
      {
        image: "/image/logo-dai-hoc-thai-nguyen.png",
        link: "/",            // Click vào logo quay về trang chủ
        width: 176,           // Chiều rộng gốc của ảnh
        height: 50,           // Chiều cao gốc
        site: "TNU E-Learning", // Alt text
        location: 1,          // 1 = Header
        order: 1
      },
      {
        image: "/image/logo-footer.png",
        link: "/",
        location: 2           // 2 = Footer (Sẽ không hiện ở file logo-view.ejs này vì logic filter)
      }
    ];
    const notesData: MajorsNote[] = [
      {
        heading: "Lưu ý về Hồ sơ xét tuyển",
        note: "Thí sinh cần chuẩn bị bản sao công chứng Bằng tốt nghiệp THPT hoặc Trung cấp/Cao đẳng/Đại học kèm theo Bảng điểm tương ứng.\nHạn nộp hồ sơ đợt 1: 30/08/2024.",
        fontsize: 22,    // Cỡ chữ tiêu đề
        fontweight: 700, // Đậm
        site: "ADMISSION",
        location: 1
      },
      {
        heading: "Chính sách ưu đãi học phí",
        note: "Giảm 10% học phí toàn khóa cho 100 sinh viên nhập học sớm nhất. Hỗ trợ vay vốn lãi suất 0% trong 12 tháng đầu.",
        fontsize: 20,
        fontweight: 600,
        site: "SCHOLARSHIP",
        location: 2
      }
    ];
    // Mock Data ModalPopup
    const popupData: ModalPopup[] = [
      {
        // Popup 1: Quảng cáo lớn (Hiện ngay)
        titel: "Siêu ưu đãi tháng 8",
        note: "Giảm 30% học phí cho tân sinh viên đăng ký trước ngày 30/08.",
        image: "/images/popups/banner-khuyen-mai.jpg",
        link: "/khuyen-mai",
        isshow: true,
        position: 1, // Giữa màn hình
        site: "HOT",
        // Hiện ngay lập tức
        scrollstart: 0
      },
      {
        // Popup 2: Thông báo nhỏ (Hiện khi cuộn 30%)
        titel: "Cần tư vấn ngay?",
        image: "/images/avatars/support-avatar.jpg",
        link: "https://zalo.me/...",
        isshow: true,
        position: 2, // Góc phải dưới
        site: "SUPPORT",
        // Logic: Cuộn 30% trang mới hiện
        scrollstart: 30,
        // Logic: Chỉ hiện trong năm 2024 (Ví dụ)
        timestart: new Date('2024-01-01').getTime(),
        timeend: new Date('2024-12-31').getTime()
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
      imagedatas: imageData,
      headings: heading,
      datamajor: majorData,
      headingtwos: headingtwo,
      advertisements: adsData,
      articleheaders: headersData,
      boxImageTexts: boxData,
      cards: cardData,
      contacts: contactData,
      courses: coursesData,
      ctas: ctaData,
      experts: expertData,
      feedbacks: feedbackData,
      partners: partnersData,
      logos: logoData,
      majorsnotes: notesData,
      modalpopups: popupData,
      parallax: parallaxData,
      populars: popularData,
      tabs: tabsData
    };
  }
}

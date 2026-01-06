export interface CarouselItem {
  url: string;
  alt: string;
  ale: string; // Có lẽ là 'caption' hoặc gì đó
}

export interface HeadingData {
  head: string;
  tit: string;
}

export interface MajorCard {
  url: string;
  title: string;
  des: string;
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  keywords: string;
}

export interface BreadcrumbItem {
  name: string;
  url?: string;
  icon?: string;
}

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
  canonical?: string;
  og?: {
    type?: string;
    title?: string;
    description?: string;
    url?: string;
    site_name?: string;
    image?: string;
    image_width?: number;
    image_height?: number;
  };
  twitter?: {
    card?: string;
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  jsonLd?: any;
}
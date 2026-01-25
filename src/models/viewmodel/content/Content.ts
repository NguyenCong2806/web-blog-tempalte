import { SeoInfo, SocialInfo } from "../seo/Seo";

export class Content {
  title: string;
  slug: string;
  detail?: string;
  img?: string;
  imgAlt?: string;
  author?: string;
  oder?: number;
  tophot?: boolean;
  views?: number;
  seoScore?: number;
  contenttypesId?: string;
  tags?: string[];
  redirect?: string;
  seo?: SeoInfo;
  social?: SocialInfo;
  site?: string;
  location?: number;
  createddate?: Date;
}
import { SeoInfo } from "../seo/Seo";

export class Contenttype {
  title: string;
  slug: string; // Thay cho link
  detail?: string;
  img?: string;
  oder?: number;
  showInMenu?: boolean;
  parentId?: string; // Để làm danh mục cha con
  seo?: SeoInfo;
  site?: string;
  location?: number;
}
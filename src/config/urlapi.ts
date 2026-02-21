export const urlapi = {
  // HTTPAPI: "http://localhost:8089/api/v1/",
  // HTTPURL: "http://localhost:8089",
  HTTPAPI: "http://192.168.1.112:8089/api/v1/", 
  HTTPURL: "http://192.168.1.112:8089",
};

export const endpoint = {
  // Url API Logo //
  logo: "logo/getalls",
  // Url API Accordion
  accordion: "accordion/getalls",
  // Url API Advertisement
  advertisement: "advertisement/getalls",
  // Url API articleheader
  articleheader: "articleheader/getalls",
  // Url API card
  card: "card/getalls",
  // Url API Card Numbers
  cardnumber: "cardnumbers/getalls",
  // Url API contact
  contact: "contact/getalls",
  // Url API Contenttype
  contenttype: "contenttype/getalls",
  contenttypegetall: "contenttype/getalls",
  // Url API tag
  tag: "tag/getalls",
  // Url API Redirect
  redirect: "redirect/getalls",
  // Url API Contenttype
  cta: "cta/getalls",
  // Url API FooterBox
  footerbox: "footerbox/getalls",
  // Url API BoxImageText
  boximagetext: "boximagetext/getalls",
  // Url API Carousel
  carousel: "carousel/getalls",
  // Url API Courses
  courses: "courses/getalls",
  // Url API Expert
  expert: "expert/getalls",
  // Url API Feedback
  feedback: "feedback/getalls",
  // Url API ImageListInfo
  imagelistinfo: "imagelistinfo/getalls",
  // Url API ImageListInfo
  majorsnote: "majorsnote/getalls",
  // Url API Tab
  tab: "tab/getalls",
  // Url API Popular
  popular: "popular/getalls",
  // Url API Parallax
  parallax: "parallax/getalls",
  modalpopup: "modalpopup/getalls",
  // Url API Content
  content: "content/getalls",
  contentgetBySlug: "content/slug",
  // Url API Menu
  menu: "menu/getalls",
  // Url API PageContent
  pagecontent: "pagecontent",
  // Url API SystemConfig //
  systemconfig: "systemconfig/getalls",
  // file //
};
export const site = "main-site";
export function getUrlFile(pathOrFilename: string | undefined | null): string {
  if (!pathOrFilename) return "";
  if (pathOrFilename.startsWith("http") || pathOrFilename.startsWith("blob:")) {
    return pathOrFilename;
  }
  const baseUrl = urlapi.HTTPURL.replace(/\/+$/, "");
  let cleanPath = pathOrFilename.replace(/\\/g, "/").replace(/^\/+/, "");
  if (cleanPath.startsWith("public/")) {
    cleanPath = cleanPath.replace(/^public\//, "");
  }
  if (!cleanPath.startsWith("uploads/")) {
    cleanPath = `uploads/${cleanPath}`;
  }
  return `${baseUrl}/${cleanPath}`;
}
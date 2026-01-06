export const urlapi = {
  // HTTPAPI: "http://localhost:8089/api/v1/",
  // HTTPURL: "http://localhost:8089",
  HTTPAPI: "http://192.168.1.112:8089/api/v1/",
  HTTPURL: "http://192.168.1.112:8089",
};

export const endpoint = {
  // Url API Logo //
  logo: "logo",
  // Url API Accordion
  accordion: "accordion",
  // Url API Advertisement
  advertisement: "advertisement",
  // Url API articleheader
  articleheader: "articleheader",
  // Url API card
  card: "card",
  // Url API Card Numbers
  cardnumber: "cardnumbers",
  // Url API contact
  contact: "contact",
  // Url API Contenttype
  contenttype: "contenttype",
  contenttypegetall: "contenttype/getalls",
  // Url API tag
  tag: "tag",
  // Url API Redirect
  redirect: "redirect",
  // Url API Contenttype
  cta: "cta",
  // Url API FooterBox
  footerbox: "footerbox",
  // Url API BoxImageText
  boximagetext: "boximagetext",
  // Url API Carousel
  carousel: "carousel/getalls",
  // Url API Courses
  courses: "courses",
  // Url API Expert
  expert: "expert",
  // Url API Feedback
  feedback: "feedback",
  // Url API ImageListInfo
  imagelistinfo: "imagelistinfo",
  // Url API ImageListInfo
  majorsnote: "majorsnote",
  // Url API Tab
  tab: "tab",
  // Url API Popular
  popular: "popular",
  // Url API Parallax
  parallax: "parallax",
  modalpopup: "modalpopup",
  // Url API Content
  content: "content",
  // Url API Menu
  menu: "menu",
  // Url API PageContent
  pagecontent: "pagecontent",
   // Url API SystemConfig //
  systemconfig: "systemconfig",
  // file //
};
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

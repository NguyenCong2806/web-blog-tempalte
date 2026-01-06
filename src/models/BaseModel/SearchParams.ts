export default class SearchParams {
  pageindex: number = 1;
  pagesize: number = 10;
  keyword: string | undefined;
  constructor(pageindex: number, pagesize: number, keyword: string) {
    this.keyword = keyword;
    this.pagesize = pagesize;
    this.pageindex = pageindex;
  }
}
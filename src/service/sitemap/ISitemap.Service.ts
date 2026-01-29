export const ISitemapService = Symbol('ISitemapService');

export interface ISitemapServiceInterface {
  generateSitemap(): Promise<string>;
}


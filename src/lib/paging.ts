export const ARTICLES_PER_PAGE = 9;
export const pageCount = (n: number, per = ARTICLES_PER_PAGE) => Math.max(1, Math.ceil(n / per));
export const pageSlice = <T>(items: T[], page: number, per = ARTICLES_PER_PAGE) => items.slice((page - 1) * per, page * per);

import type { Article } from './articles';
/** The category's "Start here" article: the featured one, otherwise the newest published one. */
export const categoryLead = (items: Article[]) =>
  items.find((a) => a.data.featured && !a.data.draft) ?? items.find((a) => !a.data.draft);

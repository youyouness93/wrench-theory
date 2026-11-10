import { getCollection, type CollectionEntry } from 'astro:content';
import { getCategory } from '../data/taxonomy';

export type Article = CollectionEntry<'articles'>;

export const isDraft = (a: Article) => a.data.draft;

/** Published articles, newest first. Drafts are included in dev only. */
export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('articles', (a) => import.meta.env.DEV || !a.data.draft);
  return all.sort((a, b) => {
    if (a.data.draft !== b.data.draft) return a.data.draft ? 1 : -1;
    return b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf();
  });
}

export const articleUrl = (a: Article | string) => `/articles/${typeof a === 'string' ? a : a.id}/`;
export const categoryUrl = (id: string) => `/${id}/`;

export function readingTime(a: Article): number {
  const words = (a.body || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[{}`#*_>|-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
export const monthYear = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });

export const cardTitle = (a: Article) => a.data.shortTitle || a.data.title;
export const categoryOf = (a: Article) => getCategory(a.data.category);

/** Up to `n` related articles: the ones named in front matter first, then same category, then same format. */
export function relatedArticles(a: Article, all: Article[], n = 3): Article[] {
  const pool = all.filter((x) => x.id !== a.id);
  const picked: Article[] = [];
  const add = (x?: Article) => x && !picked.includes(x) && picked.length < n && picked.push(x);
  a.data.related.forEach((id) => add(pool.find((x) => x.id === id)));
  pool.filter((x) => x.data.category === a.data.category).forEach(add);
  pool.filter((x) => x.data.format === a.data.format).forEach(add);
  pool.forEach(add);
  return picked;
}

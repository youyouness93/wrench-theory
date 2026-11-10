import type { APIRoute } from 'astro';
import { getArticles, articleUrl, readingTime } from '../lib/articles';
import { getCategory } from '../data/taxonomy';

/** Small JSON index used by /search/. Rebuilt on every deploy. */
export const GET: APIRoute = async () => {
  const all = (await getArticles()).filter((a) => !a.data.draft);
  const items = all.map((a) => {
    const headings = (a.body || '').split('\n').filter((l) => /^#{2,3}\s/.test(l)).map((l) => l.replace(/^#+\s*/, ''));
    return {
      url: articleUrl(a),
      title: a.data.title,
      short: a.data.shortTitle || a.data.title,
      description: a.data.description,
      category: getCategory(a.data.category).short,
      format: a.data.format,
      text: [a.data.subtopic, getCategory(a.data.category).name, ...a.data.tags, ...headings, ...a.data.faq.map((f) => f.q)].join(' '),
      date: a.data.publishedAt.toISOString().slice(0, 10),
      minutes: readingTime(a),
    };
  });
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
};

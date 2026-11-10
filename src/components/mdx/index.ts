import Note from './Note.astro';
import Takeaway from './Takeaway.astro';
import Danger from './Danger.astro';
import Formula from './Formula.astro';
import Checklist from './Checklist.astro';
import Figure from './Figure.astro';
import Table from './Table.astro';
import TableCaption from './TableCaption.astro';
import InArticleAd from './InArticleAd.astro';

/** Components available in every article without an import. */
export const mdxComponents = { Note, Takeaway, Danger, Formula, Checklist, Figure, TableCaption, InArticleAd, table: Table };

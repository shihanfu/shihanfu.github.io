import data from '../data/papers.json';

export interface Paper {
  slug: string;
  bibkey?: string;
  title: string;
  authors: string;
  note?: string;
  venue: string;
  award?: string;
  category: string;
  image: string;
  imageAlt: string;
  url?: string;
  video?: string;
  featured?: boolean;
}

// Unpublished papers live in the git-ignored drafts.json and only appear in `npm run dev`
const drafts = Object.values(import.meta.glob<Paper[]>('../data/drafts.json', { eager: true, import: 'default' })).flat();

export const papers: Paper[] = import.meta.env.DEV ? [...drafts, ...data] : data;

export const categoryTags: Record<string, string> = {
  'health-wellbeing': '#health',
  'learning-skills': '#learning',
  'everyday-decision': '#human-ai',
};

// Bold my name (including an equal-contribution asterisk) in the author list
export const authorsHtml = (paper: Paper) => paper.authors.replace(/Shihan Fu\*?/, (m) => `<strong>${m}</strong>`);

// Publisher links derived from the paper URL (arXiv abs page or ACM DOI)
export function paperLinks(paper: Paper) {
  const arxivId = paper.url?.match(/arxiv\.org\/abs\/([\d.]+)/)?.[1];
  const acmDoi = paper.url?.match(/10\.1145\/[\d.]+/)?.[0];
  return {
    pdfUrl: arxivId ? `https://arxiv.org/pdf/${arxivId}` : acmDoi ? `https://dl.acm.org/doi/pdf/${acmDoi}` : undefined,
    linkLabel: arxivId ? 'arXiv' : 'ACM DL',
  };
}

// YouTube video ID from a youtu.be or youtube.com/watch link, for the embedded player
export const youtubeId = (url?: string) => url?.match(/(?:youtu\.be\/|[?&]v=)([\w-]{11})/)?.[1];

// Papers in the same category first, then the most recent others
export function relatedPapers(paper: Paper, count = 2): Paper[] {
  const others = papers.filter((p) => p.slug !== paper.slug);
  const sameCategory = others.filter((p) => p.category === paper.category);
  return [...sameCategory, ...others.filter((p) => p.category !== paper.category)].slice(0, count);
}

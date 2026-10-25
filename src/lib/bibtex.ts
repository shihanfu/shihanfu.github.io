import bib from '../data/publications.bib?raw';

// Fields only the CV build uses; they are dropped from the citation shown on the site
const CV_ONLY_FIELDS = ['keywords', 'author+an', 'award'];

// Returns a clean BibTeX entry for a key in publications.bib (synced from ~/Documents/CV)
export function getBibtex(key: string | undefined): string | undefined {
  if (!key) return undefined;
  const match = bib.match(new RegExp(`@\\w+\\{${key},[\\s\\S]*?\\n\\}`));
  if (!match) return undefined;

  return match[0]
    .split('\n')
    .filter((line) => !CV_ONLY_FIELDS.some((field) => line.trim().startsWith(`${field} `) || line.trim().startsWith(`${field}=`)))
    .join('\n')
    .replace(/eprinttype(\s*)= \{arxiv\}/, 'archiveprefix$1= {arXiv}')
    .replace(/\\mkbibquote\{([^}]*)\}/g, "``$1''");
}

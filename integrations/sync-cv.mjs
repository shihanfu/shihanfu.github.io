import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

// Copies the CV compiled in ~/Documents/CV (override with CV_DIR) and its
// publications.bib into the site, and keeps them in sync while the dev server
// runs. Skipped when the folder is missing, e.g. on GitHub Actions, where the
// committed copies are used.
export default function syncCv() {
  const cvDir = process.env.CV_DIR ?? path.join(os.homedir(), 'Documents/CV');
  const files = [
    { source: path.join(cvDir, 'CV_Shihan_Fu.pdf'), target: path.resolve('public/assets/papers/CV_Shihan_Fu.pdf') },
    { source: path.join(cvDir, 'publications.bib'), target: path.resolve('src/data/publications.bib') },
  ];

  const copy = ({ source, target }, logger) => {
    if (!fs.existsSync(source)) return false;
    const next = fs.readFileSync(source);
    if (fs.existsSync(target) && next.equals(fs.readFileSync(target))) return true;
    fs.writeFileSync(target, next);
    logger.info(`Updated ${path.basename(target)} from ${source}`);
    return true;
  };

  return {
    name: 'sync-cv',
    hooks: {
      'astro:config:setup': ({ logger }) => {
        for (const file of files) {
          if (!copy(file, logger)) logger.info(`No ${path.basename(file.source)} in ${cvDir}; using the committed copy`);
        }
      },
      'astro:server:setup': ({ logger }) => {
        for (const file of files) {
          if (!fs.existsSync(file.source)) continue;
          // latexmk rewrites the PDF in several steps, so wait for writes to settle
          let timer;
          fs.watchFile(file.source, { interval: 1000 }, () => {
            clearTimeout(timer);
            timer = setTimeout(() => copy(file, logger), 1500);
          });
        }
      },
    },
  };
}

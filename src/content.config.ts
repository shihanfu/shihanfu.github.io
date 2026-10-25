import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per paper, named by its slug in papers.json. The body is an
// optional write-up; without one, the detail page shows the abstract.
const papers = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/papers' }),
  schema: z.object({
    abstract: z.string(),
    tldr: z.string().optional(),
  }),
});

export const collections = { papers };

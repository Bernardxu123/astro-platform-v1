import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	software: defineCollection({
		loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/software" }),
		schema: ({ image }) => z.object({
			title: z.string(),
			version: z.string(),
			description: z.string(),
			cover: image().optional(),
			screenshots: z.array(image()).optional(),
			downloadUrl: z.string().url().optional(),
			category: z.enum(['productivity', 'devtools', 'system', 'media']).default('devtools'),
		}),
	}),
};

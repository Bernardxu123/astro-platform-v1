import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        software: collection({
            label: 'Software',
            slugField: 'title',
            path: 'src/content/software/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                version: fields.text({ label: 'Version' }),
                description: fields.text({ label: 'Description', multiline: true }),
                cover: fields.image({
                    label: 'Cover Image',
                    directory: 'src/assets/software',
                    publicPath: '@assets/software',
                }),
                screenshots: fields.array(
                    fields.image({
                        label: 'Screenshot',
                        directory: 'src/assets/software/screenshots',
                        publicPath: '@assets/software/screenshots',
                    }),
                    { label: 'Screenshots' }
                ),
                downloadUrl: fields.url({ label: 'Download URL' }),
                category: fields.select({
                    label: 'Category',
                    options: [
                        { label: 'Productivity', value: 'productivity' },
                        { label: 'Developer Tools', value: 'devtools' },
                        { label: 'System', value: 'system' },
                        { label: 'Media', value: 'media' },
                    ],
                    defaultValue: 'devtools',
                }),
                content: fields.mdx({
                    label: 'Content',
                }),
            },
        }),
        docs: collection({
            label: 'Docs (Starlight)',
            slugField: 'title',
            path: 'src/content/docs/**',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description' }),
                content: fields.mdx({
                    label: 'Content',
                }),
            },
        }),
    },
});

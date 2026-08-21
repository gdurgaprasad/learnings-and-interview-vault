import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Learnings & Interview Vault',
      tableOfContents: false,
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'HTML', slug: 'html' },
        { label: 'CSS', slug: 'css' },
        { label: 'JavaScript', slug: 'javascript' },
        { label: 'TypeScript', slug: 'typescript' },
        { label: 'Angular', slug: 'angular' },
        { label: 'NodeJS', slug: 'nodejs' },
        { label: 'MongoDB', slug: 'mongodb' },
        { label: 'GitHub', slug: 'github' },
      ],
      social: [
        {
          icon: 'github',
          label: 'Github',
          href: 'https://github.com/gdurgaprasad',
        },
      ],

      // Page Layout Adjustments: Enable table-of-contents depth up to h4 level for long Q&A pages
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      // Code Block Enhancements:  Adds copy buttons, line numbers, and dark syntax theme
      expressiveCode: {
        themes: ['dracula', 'github-light'],
        styleOverrides: {
          borderRadius: '0.5rem',
          codeFontSize: '0.9rem',
        },
      },
    }),
  ],
});

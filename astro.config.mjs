import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Learnings & Interview Vault',

      // 1. Custom Styling & Themes
      // Enables dark/light theme toggle and custom accent color
      customCss: [
        // Custom CSS overrides (create this file in src/styles/custom.css)
        './src/styles/custom.css',
      ],

      // 2. Navigation Sidebar
      sidebar: [
        { label: 'HTML', slug: 'html' },
        { label: 'CSS', slug: 'css' },
        { label: 'JavaScript', slug: 'javascript' },
        { label: 'TypeScript', slug: 'typescript' },
        { label: 'Angular', slug: 'angular' },
        // { label: 'Node.js', slug: 'node' },
      ],

      // 3. Header & Social Links
      social: [
        {
          icon: 'github',
          label: 'Github',
          href: 'https://github.com/gdurgaprasad',
        },
      ],

      // 4. Page Layout Adjustments
      // Enable table-of-contents depth up to h4 level for long Q&A pages
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },

      // 5. Code Block Enhancements
      // Adds copy buttons, line numbers, and dark syntax theme
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

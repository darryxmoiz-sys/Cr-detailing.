module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: { extend: {
    colors: {
      navy: '#070d1f', deep: '#0c1530', panel: '#101a3a',
      ice: '#3ab6ff', ice2: '#7fd9ff', chrome: '#dfe7f3',
    },
    fontFamily: { display: ['var(--font-display)', 'system-ui', 'sans-serif'], body: ['var(--font-body)', 'system-ui', 'sans-serif'] },
  } },
  plugins: [],
};

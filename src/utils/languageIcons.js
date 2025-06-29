const languageIcons = {
  java: 'fab fa-java',
  python: 'fab fa-python',
  javascript: 'fab fa-js',
  js: 'fab fa-js',
  html: 'fab fa-html5',
  css: 'fab fa-css3-alt',
  cpp: 'fas fa-code',
  c: 'fas fa-code',
  json: 'fas fa-brackets-curly',
  shell: 'fas fa-terminal',
  bash: 'fas fa-terminal',
  typescript: 'fab fa-js',
};

export const getLanguageIcon = (language) => {
  if (!language) return 'fas fa-code';
  return languageIcons[language.toLowerCase()] || 'fas fa-code';
};

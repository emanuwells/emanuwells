export function getThemeBootScript() {
  return `(function(){try{document.documentElement.setAttribute('data-theme','terminal');document.documentElement.style.background='#050a0f';document.documentElement.style.color='#f8fafc';}catch(e){}})();`;
}

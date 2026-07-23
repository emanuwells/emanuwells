export function getThemeBootScript() {
  return `(function(){try{document.documentElement.setAttribute('data-theme','terminal');document.documentElement.style.background='#0a0e17';document.documentElement.style.color='#e8ecf1';}catch(e){}})();`;
}

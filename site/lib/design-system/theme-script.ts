import { THEME_COOKIE } from "./theme-mode";

/** Script inline para aplicar tema antes da hidratação (evita flash). */
export function getThemeBootScript(): string {
  return `(function(){try{var m=document.cookie.match(/(?:^|;\\s*)${THEME_COOKIE}=([^;]+)/);var mode=m?decodeURIComponent(m[1]):'varied';var phases=['dawn','morning','afternoon','sunset','night'];function hour(){var p=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Lisbon',hour:'numeric',hour12:false}).formatToParts(new Date());return Number((p.find(function(x){return x.type==='hour'})||{}).value||12)}function phase(h){if(h>=23||h<6)return'dawn';if(h>=8&&h<13)return'morning';if(h>=13&&h<17)return'afternoon';if(h>=17&&h<19)return'sunset';return'night'}var resolved=mode==='varied'?phase(hour()):mode;if(phases.indexOf(resolved)<0&&resolved!=='dark')resolved='morning';document.documentElement.setAttribute('data-theme',resolved)}catch(e){}})();`;
}

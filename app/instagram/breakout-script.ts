/**
 * In-app browser breakout (same behaviour as clickylo):
 * when opened inside Instagram / Threads / Facebook / TikTok / Snapchat,
 * show a full-screen "Continue" floor and immediately try to reopen the
 * page in the system browser (instagram://extbrowser, intent://, x-safari-https://).
 */
export const breakoutScript = `(function(){
var ua=navigator.userAgent||'';
var isIG=/Instagram/i.test(ua),isThreads=/Threads|Barcelona/i.test(ua),isFB=/FBAN|FBAV|FB_IAB/i.test(ua);
var isTT=/TikTok|BytedanceWebview|musical_ly/i.test(ua),isSnap=/Snapchat/i.test(ua);
if(!(isIG||isThreads||isFB||isTT||isSnap))return;
var isAndroid=/Android/i.test(ua);
var ref=isThreads?'threads-breakout':isFB?'fb-breakout':isTT?'tt-breakout':isSnap?'snap-breakout':'ig-breakout';
function dest(){try{var u=new URL(location.href);u.searchParams.set('ref',ref);return u.toString();}catch(e){return location.href;}}
function scheme(href){
  if(isAndroid){return 'intent://'+href.replace(/^https?:\\/\\//,'')+'#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url='+encodeURIComponent(href)+';end';}
  if(isIG)return 'instagram://extbrowser/?url='+encodeURIComponent(href);
  if(isThreads)return 'barcelona://extbrowser/?url='+encodeURIComponent(href);
  return 'x-safari-https://'+href.replace(/^https?:\\/\\//,'');
}
function build(){
  var o=document.createElement('div');
  o.style.cssText='position:fixed;inset:0;z-index:2147483647;background:#030712;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:#fff;text-align:center';
  var hd=document.createElement('h2');hd.textContent='Noémie Dufresne';hd.style.cssText='font-size:22px;font-weight:600;margin-bottom:8px';
  var sub=document.createElement('p');sub.textContent='Noémie Dufresne is sharing her links with you';sub.style.cssText='font-size:15px;opacity:.7;margin-bottom:24px;max-width:280px';
  var btn=document.createElement('button');btn.type='button';btn.textContent='Continue to Noémie';
  btn.style.cssText='padding:18px 28px;min-width:260px;border:none;border-radius:14px;background:#fff;color:#000;font-size:17px;font-weight:700;cursor:pointer';
  var dots=isIG&&!isAndroid?'at the top of the screen':'in the top right';
  var s2=isAndroid?'Select "Open in Chrome"':'Select "Open in external browser"';
  var steps=document.createElement('p');steps.style.cssText='font-size:13px;opacity:.6;margin-top:20px;max-width:300px;line-height:1.5';steps.textContent='1. Tap ••• '+dots+'   2. '+s2;
  o.appendChild(hd);o.appendChild(sub);o.appendChild(btn);o.appendChild(steps);
  document.body.appendChild(o);document.body.style.overflow='hidden';
  btn.addEventListener('click',function(){btn.textContent='Opening…';try{sessionStorage.setItem('__escaped','1');}catch(e){}try{location.replace(scheme(dest()));}catch(e){}});
}
if(document.body)build();else document.addEventListener('DOMContentLoaded',build);
var canAuto=isAndroid||isIG||isThreads;
try{if(canAuto&&sessionStorage.getItem('__escaped'))canAuto=false;}catch(e){}
if(canAuto){try{sessionStorage.setItem('__escaped','1');}catch(e){}
  var href=dest();requestAnimationFrame(function(){setTimeout(function(){try{location.replace(scheme(href));}catch(e){}},0);});}
})();`;

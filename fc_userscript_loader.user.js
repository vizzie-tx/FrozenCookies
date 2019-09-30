// ==UserScript==
// @name           Frozen Cookies
// @version        github-latest
// @description    Userscript to load Frozen Cookies written by Icehawk78, forked by haerik
// @author         shinji257
// @homepage       https://github.com/Icehawk78/FrozenCookies
// @include        http://orteil.dashnet.org/cookieclicker/
// @updateURL      https://vizzie-tx.github.io/FrozenCookies/fc_userscript_loader.js
// @downloadURL      https://vizzie-tx.github.io/FrozenCookies/fc_userscript_loader.js
// @run-at         document-start
// ==/UserScript==

// Dev:       https://raw.github.com/Icehawk78/FrozenCookies/development/
// Master:    https://raw.github.com/Icehawk78/FrozenCookies/master/
// Github.io: http://vizzie-tx.github.io/FrozenCookies/

function LoadFrozenCookies() {
  var js = document.createElement('script');
  js.setAttribute('type', 'text/javascript');
  js.setAttribute('id', 'frozenCookieScript');
  js.setAttribute('src', 'https://vizzie-tx.github.io/FrozenCookies/frozen_cookies.js');
  document.head.appendChild(js);
}

window.addEventListener("load", LoadFrozenCookies, false);

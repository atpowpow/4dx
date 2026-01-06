// ==UserScript==
// @name         4dx
// @namespace    https://github.com/atpowpow
// @version      1.2.0
// @description  4chan auto-downloader.
// @author       atpowpow
// @match        https://archiveofsins.com/data/*/image/*
// @match        https://thebarchive.com/data/*/image/*
// @match        https://archive.palanq.win/*/image/*
// @match        https://archived.moe/files/*/image/*
// @match        https://desu-usergeneratedcontent.xyz/*/image/*
// @match        https://i.4pcdn.org/*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=4chan.org
// @require      https://code.jquery.com/jquery.min.js
// @grant        GM_download
// ==/UserScript==

var $ = window.jQuery;

(function() {
    'use strict';
    let Frame = setInterval(() => {
      if ($("img").length) {
        let imgsrc = $("img").attr("src");
        var imgfn = imgsrc.split("/").pop()
        clearInterval(Frame);
        GM_download(imgsrc, imgfn);
        window.close();
      }
      else if($("video").length) {
          let vidsrc = $('video').prop("currentSrc");
          console.log(vidsrc);
          var vidfn = vidsrc.split("/").pop()
          clearInterval(Frame);
          GM_download(vidsrc, vidfn);
          window.close();
      }
    });

})();

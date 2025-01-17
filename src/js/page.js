/* eslint no-console: off */
import {storeInit} from "www/modules/_util/store";
import {showQuotes, showSearch} from "www/modules/_util/url";

//common modules
import auth from "www/modules/_user/netlify";
import {initStickyMenu, initAnimation} from "www/modules/_page/startup";

import {bookmarkStart} from "./modules/_bookmark/start";
import search from "./modules/_search/search";
import toc from "./modules/_contents/toc";
import about from "./modules/_about/about";

import fb from "www/modules/_util/facebook";
import {initQuoteDisplay} from "www/modules/_topics/events";

import {setLanguage} from "www/modules/_language/lang";
import constants from "./constants";

$(document).ready(() => {
  storeInit(constants);
  initStickyMenu();

  setLanguage(constants);
  bookmarkStart("page");

  // "oe" uses ACIM OE Paragraph numbers in search results
  // "acimoe" uses CMI Paragraph numbers in search results
  search.initialize("oe");
  auth.initialize();
  fb.initialize();
  toc.initialize("page");
  about.initialize();

  //support for quote display and sharing
  initQuoteDisplay("#show-quote-button", constants);
  initAnimation();

  //look for ?search=1 on url, if found display search dialog
  showSearch();

  //look for ?quotes=1 on url, if found display quote dialog
  showQuotes();

});


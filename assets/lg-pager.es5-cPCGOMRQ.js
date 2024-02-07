/*!
 * lightgallery | 2.7.2 | September 20th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var i=function(){return i=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)},g={afterAppendSlide:"lgAfterAppendSlide",init:"lgInit",hasVideo:"lgHasVideo",containerResize:"lgContainerResize",updateSlides:"lgUpdateSlides",afterAppendSubHtml:"lgAfterAppendSubHtml",beforeOpen:"lgBeforeOpen",afterOpen:"lgAfterOpen",slideItemLoad:"lgSlideItemLoad",beforeSlide:"lgBeforeSlide",afterSlide:"lgAfterSlide",posterClick:"lgPosterClick",dragStart:"lgDragStart",dragMove:"lgDragMove",dragEnd:"lgDragEnd",beforeNextSlide:"lgBeforeNextSlide",beforePrevSlide:"lgBeforePrevSlide",beforeClose:"lgBeforeClose",afterClose:"lgAfterClose",rotateLeft:"lgRotateLeft",rotateRight:"lgRotateRight",flipHorizontal:"lgFlipHorizontal",flipVertical:"lgFlipVertical",autoplay:"lgAutoplay",autoplayStart:"lgAutoplayStart",autoplayStop:"lgAutoplayStop"},s={pager:!0},p=function(){function l(e,r){return this.core=e,this.$LG=r,this.settings=i(i({},s),this.core.settings),this}return l.prototype.getPagerHtml=function(e){for(var r="",t=0;t<e.length;t++)r+='<span  data-lg-item-id="'+t+`" class="lg-pager-cont"> 
                    <span data-lg-item-id="`+t+`" class="lg-pager"></span>
                    <div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="`+e[t].thumb+`" /></div>
                    </span>`;return r},l.prototype.init=function(){var e=this;if(this.settings.pager){var r;this.core.$lgComponents.prepend('<div class="lg-pager-outer"></div>');var t=this.core.outer.find(".lg-pager-outer");t.html(this.getPagerHtml(this.core.galleryItems)),t.first().on("click.lg touchend.lg",function(o){var a=e.$LG(o.target);if(a.hasAttribute("data-lg-item-id")){var n=parseInt(a.attr("data-lg-item-id"));e.core.slide(n,!1,!0,!1)}}),t.first().on("mouseover.lg",function(){clearTimeout(r),t.addClass("lg-pager-hover")}),t.first().on("mouseout.lg",function(){r=setTimeout(function(){t.removeClass("lg-pager-hover")})}),this.core.LGel.on(g.beforeSlide+".pager",function(o){var a=o.detail.index;e.manageActiveClass.call(e,a)}),this.core.LGel.on(g.updateSlides+".pager",function(){t.empty(),t.html(e.getPagerHtml(e.core.galleryItems)),e.manageActiveClass(e.core.index)})}},l.prototype.manageActiveClass=function(e){var r=this.core.outer.find(".lg-pager-cont");r.removeClass("lg-pager-active"),r.eq(e).addClass("lg-pager-active")},l.prototype.destroy=function(){this.core.outer.find(".lg-pager-outer").remove(),this.core.LGel.off(".lg.pager"),this.core.LGel.off(".pager")},l}();export{p as default};

/*!build time : 2014-05-29 9:44:02 AM*/
KISSY.add(function(a,b){function c(a){var b=this;b.options=a,b.regExp=/www\.xiami\.com\/(?:song|album)\/(\d+)/}var d=b.all;return c.prototype.tpl={wrap:'<div class="WKeditor_music_plate">            <table><tr><td width="80%">            <input value="http://www.xiami.com/song/53864?spm=a1z1s.6632057.350708705.10.mYNiuZ" key="toClear" title="\u8bf7\u7c98\u8d34\u6b4c\u66f2\u9875\u9762\u5730\u5740" placeholder="\u8bf7\u7c98\u8d34\u6b4c\u66f2\u9875\u9762\u5730\u5740"/>            </td><td width="20%"><a href="javascript:void(0);" class="btn-confirm wk-btn btn-bg-blue btn-large">\u786e\u8ba4\u4e0a\u4f20</a></td></tr></table>            <div class="close">\xd7</div></div>'},c.prototype.view=function(){var a=this;a.$video=d(a.tpl.wrap),d("body").append(a.$video),a.view.setVideoPlatePosition=function(){a.$video.width(a.ele.width()).show();var b=(d(window).height()-a.$video.outerHeight())/2+d(window).scrollTop(),c=(d(window).width()-a.$video.width())/2;0>b&&(b=5),a.$video.css({zIndex:100,left:c,top:b})},a.view.setVideoPlatePosition(),a.$overlay=a.tool.overlay({ele:a.$video}).$overlay,a.view.preview=function(a){var b=d("<p class='musicBox'></p>"),c="http://www.xiami.com/widget/0_"+a+"/singlePlayer.swf",e=document.createElement("embed");return e.setAttribute("height","33"),e.setAttribute("width","257"),e.setAttribute("allowscriptaccess","always"),e.setAttribute("type","application/x-shockwave-flash"),e.setAttribute("wmode","transparent"),e.setAttribute("style","display:inline-block"),e.setAttribute("src",c),b.append(e),b},a.view.insertVideo=function(b){function c(b){var c=a.view.preview(b);a.$insertArea.before(c),a.$insertArea.remove(),a.$overlay.remove(),a.$video.remove(),a.tool.setCart(c[0],a.options.range)}var d=a.regExp.exec(b);if(!d)return void alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u867e\u7c73\u6b4c\u66f2\u9875\u9762\u5730\u5740");var e=d[1];c(a.config&&a.config.setUrl?a.config.setUrl(b):e)},a.$insertArea=a.tool.insertArea()},c.prototype.event=function(){var a=this,b=a.$video.one(".btn-confirm");b.on("click",function(){var b=a.$video.one("input").val();a.view.insertVideo(b)}),d(window).on("resize",function(){a.view.setVideoPlatePosition()}),a.$video.one(".close").on("click",function(){a.$video.remove(),a.$overlay.remove(),a.$insertArea.remove(),a.$wrap.fire("blur")}),a.$video.one("input").fire("focus")},c.prototype.init=function(a){this.ele=this.options.ele,this.left=this.options.left,this.top=this.options.top,this.$wrap=this.options.$wrap,this.tool=this.options.tool,this.browser=this.tool.browser(),this.config=a,this.view(),this.event()},c},{requires:["node","./WKmusic.css"]});
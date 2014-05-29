KISSY.add(function(S, Node, Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     *
     * @class WKmusic
     */

    function WKmusic(options) {
        var self = this;

        // 继承父类属性
        self.options = options
        self.regExp = /www\.xiami\.com\/(?:song|album)\/(\d+)/;
    };
    WKmusic.prototype.tpl = {
        wrap: '<div class="WKeditor_music_plate">\
            <table><tr><td width="80%">\
            <input value="http://www.xiami.com/song/53864?spm=a1z1s.6632057.350708705.10.mYNiuZ" key="toClear" title="请粘贴歌曲页面地址" placeholder="请粘贴歌曲页面地址"/>\
            </td><td width="20%"><a href="javascript:void(0);" class="btn-confirm wk-btn btn-bg-blue btn-large">确认上传</a></td></tr></table>\
            <div class="close">×</div></div>'
    };

    WKmusic.prototype.view = function() {
        var self = this;
        self.$video = $(self.tpl.wrap);
        $("body").append(self.$video);

        self.view.setVideoPlatePosition = function() {
            self.$video.width(self.ele.width()).show();
            var top = ($(window).height() - self.$video.outerHeight()) / 2 + $(window).scrollTop();
            var left = ($(window).width() - self.$video.width()) / 2;
            if (top < 0) {
                top = 5;
            }
            self.$video.css({
                zIndex: 100,
                left: left,
                top: top
            });
        }
        self.view.setVideoPlatePosition();
        self.$overlay = self.tool.overlay({
            ele: self.$video
        }).$overlay;
        self.view.preview = function(songID) {
            var p = $("<p class='musicBox'></p>");
            var url = 'http://www.xiami.com/widget/0_' + songID + '/singlePlayer.swf';
            var embed = document.createElement("embed");
            embed.setAttribute("height", "33");
            embed.setAttribute("width", "257");
            embed.setAttribute("allowscriptaccess", "always");
            embed.setAttribute("type", "application/x-shockwave-flash");
            embed.setAttribute("wmode", "transparent");
            embed.setAttribute("style", "display:inline-block");
            embed.setAttribute("src", url);
            p.append(embed);
            return p;
        }
        self.view.insertVideo = function(url) {
            var urlExec = self.regExp.exec(url);
            if (!urlExec) {
                alert("请输入正确的虾米歌曲页面地址");
                return;
            };
            var songID = urlExec[1];

            function doit(songID) {
                var p = self.view.preview(songID);
                self.$insertArea.before(p);
                self.$insertArea.remove();
                self.$overlay.remove();
                self.$video.remove();
                self.tool.setCart(p[0], self.options.range);
            }
            if (self.config && self.config.setUrl) {
                doit(self.config.setUrl(url));
            } else {
                doit(songID);
            }
        }
        self.$insertArea = self.tool.insertArea();
    };

    WKmusic.prototype.event = function() {
        var self = this;
        var btn = self.$video.one(".btn-confirm");

        btn.on("click", function() {
            var url = self.$video.one("input").val();
            self.view.insertVideo(url);
        });
        $(window).on("resize", function() {
            self.view.setVideoPlatePosition();
        });
        self.$video.one(".close").on("click", function() {
            self.$video.remove();
            self.$overlay.remove();
            self.$insertArea.remove();
            self.$wrap.fire("blur");
        });
        self.$video.one("input").fire("focus");
    };

    WKmusic.prototype.init = function(config) {
        this.ele = this.options.ele;
        this.left = this.options.left;
        this.top = this.options.top;
        this.$wrap = this.options.$wrap;
        this.tool = this.options.tool;
        this.browser = this.tool.browser();
        this.config = config;
        this.view();
        this.event();
    };
    return WKmusic;
}, {
    requires: ['node', './WKmusic.css']
});

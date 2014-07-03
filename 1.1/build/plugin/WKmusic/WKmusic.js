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
        self.regExp = /(?:www|i)\.xiami\.com\/(?:\w+\/)?(song|album|demo|showcollect\/id)\/(\d+)/;
    };
    WKmusic.prototype.tpl = {
        wrap: '<div class="WKeditor_music_plate">\
            <table><tr><td width="80%">\
            <input key="toClear" title="请粘贴虾米音乐页面地址" placeholder="请粘贴虾米音乐页面地址"/>\
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
        self.view.preview = function(songID, type) {
            var p = $("<p class='musicBox'></p>");
            var embed = document.createElement("embed");
            if (type === 'song' || type === 'demo') {
                var url = 'http://www.xiami.com/widget/0_' + songID + '/singlePlayer.swf';
                embed.setAttribute("height", "33");
                embed.setAttribute("width", "257");
            }
            if (type === 'album') {
                var url = 'http://www.xiami.com/widget/0_' + songID + '_235_346_FF8719_494949/albumPlayer.swf';
                embed.setAttribute("height", "346");
                embed.setAttribute("width", "235");
            }
            if (type === 'showcollect/id') {
                var url = 'http://www.xiami.com/widget/0_' + songID + '_235_346_FF8719_494949_0/collectPlayer.swf';
                embed.setAttribute("height", "346");
                embed.setAttribute("width", "235");
            }
            embed.setAttribute("allowscriptaccess", "never");
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
            var type = urlExec[1];
            var songID = urlExec[2];

            self.doit(songID, type);
        }
        self.$insertArea = self.tool.insertArea();
    };

    WKmusic.prototype.doit = function(songID, type) {
        var self = this;
        var p = self.view.preview(songID, type);
        self.$insertArea.before(p);
        self.$insertArea.remove();
        self.$overlay.remove();
        self.$video.remove();
        self.tool.setCart(p[0], self.options.range);
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

    WKmusic.prototype.init = function() {
        this.ele = this.options.ele;
        this.left = this.options.left;
        this.top = this.options.top;
        this.$wrap = this.options.$wrap;
        this.tool = this.options.tool;
        this.browser = this.tool.browser();
        this.view();
        this.event();
    };
    return WKmusic;
}, {
    requires: ['node', './WKmusic.css']
});

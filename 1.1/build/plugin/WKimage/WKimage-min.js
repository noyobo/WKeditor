/*!build time : 2014-05-29 9:44:02 AM*/
KISSY.add(function(a,b){function c(a){var b=this;b.options=a}var d=b.all;return c.prototype.tpl={wrap:'<div class="WKeditor_image_plate">            <div class="uploadBox">                <p class="canDragMsg">\uff08\u62d6\u62fd\u56fe\u7247\u53ef\u4fee\u6539\u987a\u5e8f\uff09</p>                <ul id="J_UploaderQueue" class="grid"></ul>                <div class="WK_box">                    <p class="WK_top">\u53ef\u62d6\u52a8\u591a\u5f20\u672c\u5730\u56fe\u7247\u5230\u8fd9\u91cc\u4e0a\u4f20<br/>\u6216</p>                    <div class="up_btn"><input type="file" class="g-u" id="J_UploaderBtn" value="\u9009\u62e9\u6587\u4ef6" name="Filedata" >                    <a class="btn-confirm wk-btn btn-bg-blue btn-large">\u786e\u8ba4\u63d2\u5165</a></div>                    <p class="WK_text">Jpg\uff0cGif\uff0cPNG,\u5355\u5f20\u6700\u59276M</br>\u56fe\u7247\u5c3a\u5bf8\u8d85\u8fc7480*270\u50cf\u7d20\u53ef\u4ee5\u5728\u9996\u9875\u5c55\u793a\u7f29\u7565\u56fe</p>                </div>            </div><div class="close">\xd7</div>        </div>'},c.prototype.view=function(){var b=this;b.$image=d(b.tpl.wrap),d("body").append(b.$image),b.view.setImagePlatePosition=function(){b.$image.width(b.ele.width()).show();var a=(d(window).height()-b.$image.outerHeight())/2+d(window).scrollTop(),c=(d(window).width()-b.$image.width())/2;0>a&&(a=5),b.$image.css({zIndex:100,left:c,top:a})},b.view.setImagePlatePosition(),b.$overlay=b.tool.overlay({ele:b.$image}).$overlay,b.view.preview=function(c){var e=c.url||"",f=d('<div class="imageBox"><div class="pic"><img src="'+e+'"/></div><div class="operate"><span title="\u5de6\u65cb" class="rotatel"></span><span title="\u53f3\u65cb" class="rotate"></span><span title="\u5220\u9664" class="del-pic"></span></div></div>');return f.on("mouseenter",function(){f.one(".operate").show()}).on("mouseleave",function(){f.one(".operate").hide()}),f.one(".del-pic").on("click",function(){d(this).parent().parent().parent().remove(),b.tool.realign(a.one("#J_UploaderQueue"),"ani"),0==d("#J_UploaderQueue").children().length&&b.view.uploadRest()}),(!b.browser.msie||b.browser.msie&&parseInt(b.browser.version)>9)&&(f.one(".rotatel").css("display","block"),f.one(".rotate").css("display","block"),b.event.rotate(f.one(".rotatel"),"left"),b.event.rotate(f.one(".rotate"))),f},b.view.pixeler=function(a,b,c){KISSY.use("pixeler",function(d,e){function f(a){g.processImage("rotate",{dataURL:a,angle:b,type:"jpeg",callback:function(a){c(a)}})}var g=new e;if(a.name){var h=new FileReader;h.onload=function(a){f(a.target.result)},h.readAsDataURL(a)}else f(a)})},b.view.insertImage=function(c){var e,f=c.length;a.each(c.children(".queue-file"),function(a,c){var g=d(a).one("img");g.attr("src",g.attr("src"));var h=d("<p style='text-align:center'></p>");h.append(d(a).one("img")),b.$insertArea.before(h),d(a).remove(),c==f-1&&(e=h)}),b.$insertArea.remove(),b.$overlay.remove(),b.tool.setCart(e.one("img")[0],b.options.range)},b.view.uploadRest=function(){b.$image.one(".up_btn").css({width:90}),d("#J_UploaderQueue").hide(),d(".btn-confirm").hide()},b.$insertArea=b.tool.insertArea()},c.prototype.event=function(){{var b=this;b.$image.one("#J_UploaderBtn")}a.use("gallery/uploader/1.5/index,gallery/uploader/1.5/themes/default/index,gallery/uploader/1.5/themes/default/style.css",function(a,c,e){var f="gallery/uploader/1.5/plugins/auth/auth,gallery/uploader/1.5/plugins/urlsInput/urlsInput,gallery/uploader/1.5/plugins/proBars/proBars";a.use(f,function(a,f,g,h){a.all("#J_uploadTemp").length&&a.all("#J_uploadTemp").fire("focus").hide();var i=b.config.multiple||!0,j="flash";(b.browser.mozilla||b.browser.safari||b.browser.chrome)&&(j="ajax"),b.browser.safari&&(i=!1),b.$uploader=new c("#J_UploaderBtn",{type:j,swfSize:{width:90,height:45},action:b.config.action,multiple:i,autoUpload:"true"}),b.browser.msie||b.event.html5Upload(b.$image);b.$image.one(".ks-uploader-button");return b.$uploader.theme(new e({queueTarget:"#J_UploaderQueue"})).plug(new f({max:100,maxSize:10240,allowExts:b.config.allowExts})).plug(new g({target:"#J_Urls"})).plug(new h({})),b.$uploader.on("select",function(){d("#J_UploaderQueue").show(),d(".btn-confirm").show(),b.$image.one(".up_btn").css({width:205})}),b.$uploader.on("add",function(c){var e=c.file.target;e.one(".upload-cancel").on("click",function(){d(this).next().fire("click"),b.$uploader.uploadFiles("waiting")}),e.one(".waiting-status").remove(),e.addClass("queue-file"),b.options.uploaderkey||(b.tool.realign(a.one("#J_UploaderQueue")),b.options.uploaderkey=setTimeout(function(){b.tool.realign(a.one("#J_UploaderQueue")),clearTimeout(b.options.uploaderkey),b.options.uploaderkey=null,b.tool.dragSort(b)},100))}),b.$uploader.on("success",function(a){var c=a.file.result,d=a.file.target;d.html("").append(b.view.preview(c))}),b.$uploader.on("error",function(a){{var c=a.file.target;b.$uploader.get("queue")}c.one(".error-status").one("span").text("\u4e0d\u7b26\u5408\u8981\u6c42"),c.one(".error-status").one("a").addClass("del-pic")}),b.$uploader.on("remove",function(c){var d=c.file.target;d.remove(),b.tool.realign(a.one("#J_UploaderQueue")),0==a.one("#J_UploaderQueue").children(".queue-file").length&&b.view.uploadRest()}),b.$image.one(".btn-confirm").on("click",function(){return d("#J_UploaderQueue").one(".error-status")?void alert("\u6709\u4e0d\u7b26\u5408\u6216\u672a\u4f20\u5b8c\u7684\u56fe\u7247!"):(b.view.insertImage(d("#J_UploaderQueue")),void b.$image.remove())}),!1})}),b.$image.all(".close").on("click",function(){b.$image.remove(),b.$overlay.remove(),b.$wrap.one(".insertArea").remove(),b.$wrap.fire("blur")}),b.event.html5Upload=function(c){var e=c.one(".uploadBox")[0];document.addEventListener("dragenter",function(){e.style.backgroundColor="#fff"},!1),document.addEventListener("dragleave",function(){e.style.borderColor="#999"},!1),e.addEventListener("dragenter",function(){e.style.borderColor="#999",e.style.backgroundColor="transparent"},!1),e.addEventListener("dragleave",function(){e.style.backgroundColor="#fff"},!1),e.addEventListener("dragover",function(a){a.stopPropagation(),a.preventDefault(),e.style.borderColor="#999",e.style.backgroundColor="#f4ffa8"},!1),e.addEventListener("drop",function(c){e.style.backgroundColor="transparent",e.style.borderColor="#999",c.stopPropagation(),c.preventDefault();for(var f=c.dataTransfer.files,g=0;g<f.length;g++){var h=f[g],i=document.createElement("img");i.file=h;var j=({name:h.name,size:h.size,type:h.type,status:"waiting",textSize:h.size/1024+"kB"},d("<li class='queue-file'></li>"));j.append(b.view.preview({url:"",resize_url:"",width:0,height:0})),j.one(".pic").html("").append(i),a.one("#J_UploaderQueue").append(j);var k=new FileReader;k.onload=function(a){return function(b){a.src=b.target.result}}(i),k.readAsDataURL(h)}d("#J_UploaderQueue").show(),d(".btn-confirm").show(),b.$image.one(".up_btn").css({width:205}),b.tool.realign(a.one("#J_UploaderQueue")),b.tool.dragSort(b)},!1)},b.event.rotate=function(a,c){a.on("click",function(){var a=d(this).parent(),e=d(this).parent().parent(),f="left"==c?270:90;a.hide(),b.view.pixeler(e.one("img")[0].fileValue||e.one("img").attr("src"),f,function(a){e.one("img").attr("src",a),e.one("img")[0].fileValue&&delete e.one("img")[0].fileValue})})},b.event.drag=function(){d("#J_UploaderQueue").all(".queue-file").drag(function(a){this.x=a.clientX-parseInt(d(this).css("left")),this.y=a.clientY-parseInt(d(this).css("top")),d(this).css({opacity:1,zIndex:89}),b.event.dragDown=!0,d("#J_UploaderQueue").all(".queue-space").on("mouseenter",function(){b.event.dragDown&&(d(this).css({opacity:1}).animate({width:parseInt(d(this).attr("space"))-6},100),b.event.space=d(this))}).on("mouseleave",function(){d(this).css({opacity:0}),b.event.space=null})},function(a){var b=a.clientX-this.x,c=a.clientY-this.y;d(this).css({left:b,top:c})},function(){b.event.space?(b.event.space.before(d(this)),d(this).animate({width:100,height:100}),b.event.space=null):d(this).animate({left:d(this).attr("dleft"),top:d(this).attr("dtop"),width:100,height:100}),d(this).css({opacity:1,zIndex:88}),b.event.dragDown=!1})},d(window).on("resize",function(){b.view.setImagePlatePosition(),b.tool.realign(d("#J_UploaderQueue"))})},c.prototype.init=function(a){this.ele=this.options.ele,this.left=this.options.left,this.top=this.options.top,this.$wrap=this.options.$wrap,this.tool=this.options.tool,this.browser=this.tool.browser(),this.config=a,this.view(),this.event()},c},{requires:["node","./WKimage.css"]});
webpackJsonp(["app/js/open-course-manage/add-material/index"],{"92d874d9d4631b0a8ede":function(a,e,t){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}function i(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function a(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),l=t("eca7a2561fa47d3f75f6"),o=n(l),s=t("b334fd7e4c5a19234db2"),d=n(s),u=t("9181c6995ae8c5c94b7a"),f=t("f324dbdea53170d5000f"),c=function(){function a(){i(this,a),this.$form=$("#course-material-form"),this.initForm(),this.bindEvent(),this.initFileChooser()}return r(a,[{key:"initForm",value:function(){var a=this,e=this.$form.validate({currentDom:".js-add-file-list",ajax:!0,rules:{link:"url",fileId:"required"},messages:{link:Translator.trans("activity.download_manage.link_error_hint"),fileId:Translator.trans("activity.download_manage.materials_error_hint")},submitHandler:function(a){var e=$(a),t=this.settings,n=$(t.currentDom);n.button("loading"),$.post(e.attr("action"),e.serializeArray()).done(function(a){(0,d.default)("success",Translator.trans("activity.download_manage.materials_or_link_success")),$("#material-list").append(a),n.button("reset"),e.find("#materials").val(""),e.find("#link").val(""),e.find("#verifyLink").val(""),e.find("#media").val(""),e.find("#file-summary").val(""),e.find(".js-current-file").text("")}).fail(function(){n.button("reset"),(0,d.default)("warning",Translator.trans("activity.download_manage.materials_or_link_fail"))})}});$(".js-add-file-list").click(function(){e.form()?a.$form.submit():($("#link").val(""),$("#materials-error").remove(),(0,d.default)("danger",Translator.trans("activity.download_manage.materials_or_link_error_hint")))}),this.$form.data("validator",e)}},{key:"bindEvent",value:function(){var a=this;this.$form.on("click",".js-btn-delete",function(e){return a.deleteItem(e)}),this.$form.on("click",".js-video-import",function(){return a.addLink()})}},{key:"deleteItem",value:function(a){var e=$(a.currentTarget),t=e.closest("li");confirm(Translator.trans("activity.download_manage.materials_or_link_confirm_delete"))&&$.post(e.data("url"),function(){t.remove(),(0,d.default)("success",Translator.trans("activity.download_manage.materials_or_link_delete"))})}},{key:"addLink",value:function(){var a=$("#verifyLink"),e=$("#link").val(),t=$("#materials"),n=this.$form.data("validator").valid();n&&e?(t.val(0),a.val(e)):($("#link").val(""),a.val(""),t.val("")),$(".js-current-file").text(a.val())}},{key:"initFileChooser",value:function(){var a=function(a){var e=$("#media"),t=$("#materials");e.val(JSON.stringify(a)),(0,f.chooserUiOpen)(),$(".js-current-file").text(a.name);var n=(0,u.isEmpty)(e.val())?Object.create(null):JSON.parse(e.val());t.val(n.id)},e=new o.default;e.on("select",a)}}]),a}();e.default=c},0:function(a,e,t){"use strict";function n(a){return a&&a.__esModule?a:{default:a}}var i=t("92d874d9d4631b0a8ede"),r=n(i);new r.default}});
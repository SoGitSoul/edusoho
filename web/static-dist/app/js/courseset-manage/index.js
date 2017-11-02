webpackJsonp(["app/js/courseset-manage/index"],{0:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var i=n("4e68e437f5b716377a9d"),r=n("423d5c93d4f10f876e3b"),a=s(r);(0,i.publishCourse)(),setTimeout(function(){var t=new a.default;t.introType()},500)},"423d5c93d4f10f876e3b":function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();n("d5e8fa5f17ac5fe79c78");var a=n("fe53252afd7b6c35cb73"),o=s(a),u="COURSE_BASE_INTRO",l="COURSE_TASK_INTRO",c="COURSE_TASK_DETAIL_INTRO",p="COURSE_LIST_INTRO",g="COURSE_LIST_INTRO_COOKIE",f=function(){function t(){var e=this;i(this,t),this.intro=null,this.customClass="es-intro-help multistep",$("body").on("click",".js-skip",function(t){e.intro.exit()})}return r(t,[{key:"introType",value:function(){return this.isTaskCreatePage()?void this.initTaskCreatePageIntro():this.isCourseListPage()?void this.initCourseListPageIntro():void this.initNotTaskCreatePageIntro()}},{key:"isCourseListPage",value:function(){return!!$("#courses-list-table").length}},{key:"isTaskCreatePage",value:function(){return!!$("#step-3").length}},{key:"isInitTaskDetailIntro",value:function(){return $(".js-task-manage-item").attr("into-step-id","step-5"),!!$(".js-settings-list").length}},{key:"introStart",value:function(t){var e=this,n='<i class="es-icon es-icon-close01"></i>';this.intro=introJs(),t.length<2?(n=Translator.trans("intro.confirm_hint"),this.customClass="es-intro-help"):this.customClass="es-intro-help multistep",this.intro.setOptions({steps:t,skipLabel:n,nextLabel:Translator.trans("course_set.manage.next_label"),prevLabel:Translator.trans("course_set.manage.prev_label"),doneLabel:n,showBullets:!1,tooltipPosition:"auto",showStepNumbers:!1,exitOnEsc:!1,exitOnOverlayClick:!1,tooltipClass:this.customClass}),this.intro.start().onexit(function(){}).onchange(function(){e.intro._currentStep==e.intro._introItems.length-1?$(".introjs-nextbutton").before('<a class="introjs-button  done-button js-skip">'+Translator.trans("intro.confirm_hint")+"<a/>"):$(".js-skip").remove()})}},{key:"initTaskCreatePageIntro",value:function(){$(".js-task-manage-item:first .js-item-content").trigger("click"),store.get(u)||store.get(l)?store.get(l)||(store.set(l,!0),this.introStart(this.initTaskSteps())):(store.set(u,!0),store.set(l,!0),this.introStart(this.initAllSteps()))}},{key:"initTaskDetailIntro",value:function(t){store.get(c)||(store.set(c,!0),this.introStart(this.initTaskDetailSteps(t)))}},{key:"initNotTaskCreatePageIntro",value:function(){store.get(u)||(store.set(u,!0),this.introStart(this.initNotTaskPageSteps()))}},{key:"isSetCourseListCookies",value:function(){store.get(p)||o.default.set(g,!0)}},{key:"initCourseListPageIntro",value:function(){var t=this,e=$("#courses-list-table").find("tbody tr").length;2===e&&!store.get(p)&&o.default.get(g)&&(o.default.remove(g),new Promise(function(t,e){setTimeout(function(){var e=$(".js-sidenav-course-menu");return e.length?void $(".js-sidenav-course-menu").slideUp(function(){t()}):void t()},100)}).then(function(){setTimeout(function(){t.initCourseListIntro(".js-sidenav")},100)}))}},{key:"initCourseListIntro",value:function(t){store.get(p)||(store.set(p,!0),this.introStart(this.initCourseListSteps(t)))}},{key:"initAllSteps",value:function(){var t=[{intro:Translator.trans("course_set.manage.upgrade_hint")},{element:"#step-1",intro:Translator.trans("course_set.manage.upgrade_step1_hint")},{element:"#step-2",intro:Translator.trans("course_set.manage.upgrade_step2_hint")},{element:"#step-3",intro:Translator.trans("course_set.manage.upgrade_step3_hint")}];return this.isInitTaskDetailIntro()&&(t.push({element:'[into-step-id="step-5"]',intro:Translator.trans("course_set.manage.upgrade_step5_hint")}),store.get(c)||store.set(c,!0)),t}},{key:"initNotTaskPageSteps",value:function(){return[{intro:Translator.trans("course_set.manage.upgrade_hint")},{element:"#step-1",intro:Translator.trans("course_set.manage.upgrade_step1_hint")},{element:"#step-2",intro:Translator.trans("course_set.manage.upgrade_step2_hint")}]}},{key:"initTaskSteps",value:function(){var t=[{element:"#step-3",intro:Translator.trans("course_set.manage.upgrade_step3_hint")}];return this.isInitTaskDetailIntro()&&(t.push({element:"#step-5",intro:Translator.trans("course_set.manage.upgrade_step5_hint"),position:"bottom"}),store.get(c)||store.set(c,!0)),t}},{key:"initTaskDetailSteps",value:function(t){return[{element:t,intro:Translator.trans("course_set.manage.activity_link_hint"),position:"bottom"}]}},{key:"initCourseListSteps",value:function(t){return[{element:t,intro:Translator.trans("course_set.manage.hint")}]}},{key:"initResetStep",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return[{element:".js-intro-btn-group",intro:Translator.trans("course_set.manage.all_tutorial",{introBtnClassName:t}),position:"top"}]}}]),t}();e.default=f}});
define(["angular"],function(e){var t=e.module("bg.selector",[]);t.directive("bgSelector",["$document","$parse",function(t,l){var n=function(e,t){t=t||[];for(var l=t.length,n=0;l>n;n++){var o=t[n];if(o===e)return!0}return!1};return{scope:{},controller:["$scope","$element","$attrs","$transclude",function(e,t,l,n){var o=this;o.options=[],o.open=!1,o.hideChoiceList=function(){o.open=!1},o.toggleChoiceList=function(){o.open=!o.open},o.setSelectorLabel=function(e){o.label=e},o.addOption=function(e){o.options.push(e)}}],controllerAs:"selector",require:["bgSelector","ngModel"],restrict:"E",template:function(e,t){t.ngModel;return'<div class="bg-selector-container"><div class="bg-selector-bar"><div class="bg-selector-content" ng-bind-template="{{selector.label}}"></div><div class="bg-selector-icon" ng-class="{true: \'open\'}[selector.open]"></div></div><div class="bg-choice-list" ng-show="selector.open"></div></div>'},replace:!0,transclude:!0,link:function(o,c,i,r,a){var s=r[0],u=r[1],d=i.placeholder||"请选择",b=e.element(c[0].querySelector(".bg-choice-list")),p=e.element(c[0].querySelector(".bg-selector-bar"));s.onSelectCallback=l(i.onSelect)(o),p.bind("click",function(e){s.toggleChoiceList(),o.$apply(),e.stopPropagation()}),t.bind("click",function(e){s.open&&s.hideChoiceList(),o.$apply()}),o.$parent.$watch(i.ngModel,function(e){n(e,s.options)?o.$broadcast("bgs:change",e):s.setSelectorLabel(d)}),s.setValue=function(e,t){u.$setViewValue(e),s.setSelectorLabel(t)},s.getValue=function(){return u.$modelValue},a(function(e){b.append(e)}),s.setSelectorLabel(d)}}}]),t.directive("bgOption",["$parse",function(e){return{priority:-1,controller:["$scope","$element","$attrs","$transclude",function(t,l,n,o){var c=this;c.value=e(n.value)(t),c.label=e(n.label)(t)}],require:["bgOption","^bgSelector"],restrict:"E",template:'<div class="bg-selector-choice" ng-transclude></div>',replace:!0,transclude:!0,link:function(e,t,l,n){var o=n[0],c=n[1];t.bind("click",function(){var e=o.value,t=o.label;t||(e="请选择"),c.setValue(e,t),c.hideChoiceList(),c.onSelectCallback&&c.onSelectCallback(e,t)}),o.value===c.getValue()&&c.setSelectorLabel(o.label),e.$on("bgs:change",function(e,t){t===o.value&&c.setSelectorLabel(o.label)}),c.addOption(o.value)}}}])});
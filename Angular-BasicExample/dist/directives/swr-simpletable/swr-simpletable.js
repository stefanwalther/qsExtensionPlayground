define(["jquery","qvangular","text!./swr-simpletable.ng.html","text!./swr-simpletable.css"],function(a,b,c,d){"use strict";a("<style>").html(d).appendTo("head"),b.directive("swrSimpleTable",[function(){return{restrict:"EA",scope:{hc:"="},template:c,link:function(){}}}])});
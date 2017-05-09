
var App = angular.module("myApp",['ui.router']);
/*
* 路由处理
* */
App.service("sendData",function () {
    return {"ss":"dds"}
})
App.factory("sendData1",function(){
    return {"ss":"ddd"}
})
App.provider("sendData1",function(){
    return {"ss":"ddd"}
})
App.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.when("","/module/home");
        $stateProvider.state('home',{
            url: "/module/home",
            controller:'homeCtrol',
            templateUrl: 'module/home.html'
        })
    }]);

// App.directive("people", function(){
//     return {
//         restrict: "E",
//         template : '<ul class="proList" id="prolist">'+
//                         '<li class="flex color-1" ng-repeat="o in data" ng-click="gogo()">'+
//                         '<div class="col col-10vw span"><i class="icon iconfont icon-1"></i>{{o.name}}</div>'+
//                         '<div class="col flex span">'+
//                         '<div class="col t-c col-1vw">O</div>'+
//                         '<div class="col t-r">{{o.oNum}}</div>'+
//                         '</div>'+
//                         '<div class="col flex span">'+
//                         '<div class="col t-c col-1vw">C</div>'+
//                         '<div class="col t-r">{{o.cNum}}</div>'+
//                         '</div>'+
//                         '<div class="col flex span">'+
//                         '<div class="col t-c col-1vw">H</div>'+
//                         '<div class="col t-r">{{o.hNum}}</div>'+
//                         '</div>'+
//                         '<div class="col flex span">'+
//                         '<div class="col t-c col-1vw">L</div>'+
//                         '<div class="col t-r">{{o.lNum}}</div>'+
//                         '</div>'+
//                         '</li>'+
//                     '</ul>'
//     }
// });
// $rootScope.$broadcast('product-list',[{"name":"2212"}]);
// 广播各个数据
// App.controller('rootCtrl',['$rootScope',function ($rootScope) {
//
//
//     $rootScope.$broadcast('product-list',listData);
// }]).controller('tryCtrl',['$scope',function ($scope) {
//         $scope.$on('product-list',function (event, data) {
//             debugger
//             console.log(data);
//         })
//     }])
function addWindow() {
    //多窗口模式，层叠置顶
    layer.open({
        type: 1
        ,title: '不知所云'
        ,area: ['390px', '330px']
        ,shade: 0
        ,offset: [ //为了演示，随机坐标
            Math.random()*($(window).height()-$("#showcase-content").offsetTop-300)
            ,Math.random()*($(window).width()-$("#showcase-content").offsetLeft-390)
        ]
        ,maxmin: true
        ,content: '不错的弹出层组件'
        // 实现点击置顶
        ,zIndex: layer.zIndex //重点1
        ,success: function(layero){
            layer.setTop(layero); //重点2
        }
    });
}

App.controller("homeCtrol", ['$scope','$rootScope','$compile',
    function ($scope,$rootScope,$compile) {
        $scope.listData = [
            {
                "name":"欧元美元",
            },
            {
                "name":"日元/人民币"
            },
            {
                "name":"加元/人民币"
            },
            {
                "name":"hdfgdgehe",
            },
            {
                "name":"oudgdgdgiou"
            },
            {
                "name":"nogdgdgdgno"
            },
            {
                "name":"zdggddgdgz"
            },
            {
                "name":"kfgddggk",
            },
            {
                "name":"bdgdgb"
            },
            {
                "name":"dgddgdfg"
            },
            {
                "name":"dddgdgs"
            },
            {
                "name":"sdddsdd",
            },
            {
                "name":"eeee"
            },
            {
                "name":"nnnn"
            }
        ];
        var data = [
            {
                "name":"欧元/美元",
                "oNum":0.369897,
                "cNum":0.482323,
                "hNum":0.298898,
                "lNum":0.398877
            },
            {
                "name":"欧元/美元",
                "oNum":0.369897,
                "cNum":0.482323,
                "hNum":0.298898,
                "lNum":0.398877
            },
            {
                "name":"欧元/美元",
                "oNum":0.369897,
                "cNum":0.482323,
                "hNum":0.298898,
                "lNum":0.398877
            }
        ];

        // $scope.$on("product-list",function(event,data){
        //     console.log(event);
        //     debugger
        //     $scope.listData = data;
        // })
        $scope.listData1 = "wohehe"


        /*
        * 点击添加标签
        * */
        var initOrder = [];
        $scope.initTab = [];
        $scope.addTab = function (e) {
            var offLeft = Math.random()*($("#showcase-content")[0].offsetWidth-390)+$("#showcase-content")[0].offsetLeft;
            var offTop =  Math.random()*($("#chart")[0].offsetHeight-300)+$("#head-content")[0].offsetHeight+31;

            var layerOption = {
                type: 1
                ,area: ['390px', '330px']
                ,shade: 0
                ,offset: [
                    offTop
                    ,offLeft
                ]
                ,maxmin: true
                ,compile:$compile //为了将angular数据渲染进去所增加的参数
                ,scope:$scope
                ,content: '<div>{{listData1}}</div>'
                // 实现点击置顶
                ,zIndex: layer.zIndex //重点1
                ,success: function(layero){
                layer.setTop(layero); //重点2
            }

            }
            var order = parseInt(angular.element(e.target).attr("data-order"));
            initState($scope.initTab);
            if(initOrder.indexOf(order) === -1){
                /*
                 *  添加弹框和tab
                 * */
                initOrder.push(order);
                var obj = $scope.listData[order];
                obj.orderNum = order;
                obj.state = "true";
                layerOption.index = order;
                layerOption.title = obj.name;
                $scope.initTab.push(obj);
                layer.open(layerOption);
            }else{
                $scope.selectTab(order);
            }
        }
        /*
        * 初始化标签选中状态
        * */
        function initState(arr) {
            if(arr.length>0){
                for(var i = 0; i < arr.length; i++){
                    arr[i].state = "false"
                }
            }
        }
        /*
        * 切换选中标签
        * */
        function switchTab(num,arr) {
            for(var i = 0; i < arr.length; i++){
                if(num === arr[i].orderNum){
                    arr[i].state = "true";
                    break;
                }
            }
        }
        /*
        * 选择标签
        * */
        $scope.selectTab = function(e,t){
            var order = typeof (e)=="object"?parseInt(angular.element(e.target).attr("data-order")):e;
            initState($scope.initTab);
            switchTab(order,$scope.initTab);
            checkTabWidth();
            if(!t){
                layer.zIndex++;
                $("#layui-layer"+order).css("z-index",layer.zIndex++);
            }
            // layer($(""))
            // $("#layui-layer"+order).css("z-index",$scope.zIndex+1);
        }
        /*
        * 删除标签
        * */
        $scope.deleteTab = function (e) {
            debugger
            var order = typeof (e)=="object"?parseInt(angular.element(e.target).attr("data-order")):e,
                tabArr = $scope.initTab,
                length = tabArr.length;

            arrRemove(initOrder,order);
            if(length == 1){
                $scope.initTab.splice(0,1);
            }else{
                for(var i = 0; i < tabArr.length; i++){
                    if(order === tabArr[i].orderNum){
                        if(tabArr[i].state == "true"){
                            if(i === length-1){
                                $scope.initTab[i-1].state = "true";
                            }else{
                                $scope.initTab[i+1].state = "true";
                            }
                        }
                        $scope.initTab.splice(i,1);
                        break;
                    }
                }
            }
            // 判断是否从tab中删除
            if(typeof (e)=="object"){
                layer.close(order);
            }

        }
        /*
        * 对tab左右移动的操作
        * */
        $scope.toLeft = function () {
            var thisNode = document.getElementById("tabList");
            var btnLeftNode = document.getElementById("btnLeft");
            var btnRightNode = document.getElementById("btnRight");
            var ulWidth = thisNode.offsetWidth;
            var ulMl = parseInt(window.getComputedStyle(thisNode).marginLeft);
            var conDom = thisNode.parentNode.offsetWidth;
            var length = thisNode.children.length;
            var distance = ulWidth/length;
            var wid = ulMl+ulWidth-conDom;
            if(wid > 0){
                if(wid<distance){
                    thisNode.style.marginLeft = ulMl-wid + "px";
                    btnRightNode.removeAttribute("disabled");
                    btnLeftNode.setAttribute("disabled","true");
                }else{
                    thisNode.style.marginLeft = ulMl-distance + "px";
                }
            }
        }
        $scope.toRight = function () {
            var thisNode = document.getElementById("tabList");
            var btnLeftNode = document.getElementById("btnLeft");
            var btnRightNode = document.getElementById("btnRight");
            var ulWidth = thisNode.offsetWidth;
            var ulMl = parseInt(window.getComputedStyle(thisNode).marginLeft);
            var length = thisNode.children.length;
            var distance = ulWidth/length;
            if(ulMl < 0){
                if(ulMl+distance > 0){
                    thisNode.style.marginLeft = 0 + "px";
                    btnRightNode.setAttribute("disabled","true");
                    btnLeftNode.removeAttribute("disabled");
                }else{
                    thisNode.style.marginLeft = ulMl+distance + "px";
                }
            }
        }
        function checkTabWidth() {
            var thisNode = document.getElementById("tabList");
            var btnLeftNode = document.getElementById("btnLeft");
            var btnRightNode = document.getElementById("btnRight");
            var ulWidth = thisNode.offsetWidth;
            var ulMl = parseInt(window.getComputedStyle(thisNode).marginLeft);
            var conDom = thisNode.parentNode.offsetWidth;
            var wid = ulMl+ulWidth-conDom;
            if(ulWidth>conDom){
                btnRightNode.removeAttribute("disabled")
                btnLeftNode.removeAttribute("disabled");
                if(ulMl == 0){
                    btnRightNode.setAttribute("disabled","true");
                }
                if(wid == 0){
                    btnLeftNode.setAttribute("disabled","true")
                }
            }else{
                btnRightNode.setAttribute("disabled","true")
                btnLeftNode.setAttribute("disabled","true");
            }
        }
        window.onresize = function () {
            checkTabWidth();
        }
        // 删除数组中指定元素
        function arrRemove(arr,e){
            var index = arr.indexOf(e);
            if(index >= 0){
                arr.splice(index,1);
            }
        }
        $scope.$on("hello",function(data){
            console.log(data);
        })
}]);

App.controller("childCtrl",['$scope',function ($scope) {

    $scope.$on("hello",function (data) {

        console.log(data);
    })
    $scope.$emit("ai",{"a":"i"})
}])
App.controller("rootCtrl",["$scope","$rootScope",function ($scope,$rootScope) {
    $scope.$on("ai",function (data) {

        console.log(data);
    })
    // $scope.gogo = function () {
    //     console.log("aiyou")
    //
    //     $scope.$broadcast("hello",{"name":"sdds"})
    // }
    // $scope.gogo();
}])
var app=angular.module('app',[]);
app.controller('fruit',function ($scope) {
    $scope.car=[];
    $scope.array=[
        {id:1,name:'苹果',price:'25'},
        {id:2,name:'梨',price:'24'},
        {id:3,name:'菠萝',price:'28'},
        {id:4,name:'香蕉',price:'26'},
        {id:5,name:'桃子',price:'27'},
        {id:6,name:'西瓜',price:'22'}
    ];

    $scope.buy=function (v) {
        var flag=true;
        $scope.car.forEach(function (val) {
            if(v.id==val.id){
                val.num++
                flag=false;
            }
        })
        if(flag){
            $scope.car.push({
                id:v.id,
                name:v.name,
                num:1,
                price:v.price
            });
        }
    }
    $scope.del=function (i) {
        $scope.car.splice(i,1);
    }

    $scope.add=function (v) {
        v.num++
    }
    $scope.cha=function (v,$index) {
        if(v.num<=0){
            if(confirm("是否确定删除")){
                $scope.del($index)
            }
        }else {
            v.num--
        }
    }
    $scope.$watch("car",function () {
        $scope.sum()
    },true)
    $scope.total=0;
    $scope.sum=function () {
        $scope.total=0;
        $scope.car.forEach(function (val) {
            $scope.total+=val.num*val.price
        })
    }
});

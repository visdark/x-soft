var data = {
    "id1":{
        "name":"欧元/美元",
        "data":[
            {
                "name":"O",
                "num":0.3980983
            },
            {
                "name":"C",
                "num":0.3993923
            },
            {
                "name":"D",
                "num":0.3823322
            }
        ]
    },
    "id2":{
        "name":"欧元/人民币1",
        "data":[
            {
                "name":"O",
                "num":0.3980983
            },
            {
                "name":"C",
                "num":0.3993923
            },
            {
                "name":"D",
                "num":0.3823322
            }
        ]
    },
    "id3":{
        "name":"欧元/人民币3",
        "data":[
            {
                "name":"O",
                "num":0.3980983
            },
            {
                "name":"C",
                "num":0.3993923
            },
            {
                "name":"D",
                "num":0.3823322
            }
        ]
    },
    "id4":{
        "name":"欧元/人民币2",
        "data":[
            {
                "name":"O",
                "num":0.3980983
            },
            {
                "name":"C",
                "num":0.3993923
            },
            {
                "name":"D",
                "num":0.3823322
            }
        ]
    }
}
var data1 = {
    "id3":{
        "name":"欧元/哈哈",
        "data":[
            {
                "name":"O",
                "num":0.3980983
            },
            {
                "name":"C",
                "num":0.3993923
            },
            {
                "name":"D",
                "num":0.3823322
            }
        ]
    },
    "id4":{
        "name":"欧元/日元",
        "data":[
            {
                "name":"5",
                "num":0.3980983
            },
            {
                "name":"n",
                "num":0.3993923
            },
            {
                "name":"D",
                "num":0.3823322
            }
        ]
    }
}
/*
* 数据绑定到Dom
* */
function injectData(data) {
    var domData = [],arr = [],curData = data.data,
        htmlName = '<div class="col col-10vw span"><i class="icon iconfont icon-1"></i>'+data.name+'</div>';

    domData.push(htmlName);

    for (var i = 0; i < curData.length; i++){
        var htmlNum = "";
        htmlNum = '<div class="col flex span">'+
            '<div class="col t-c col-1vw">'+curData[i].name+'</div>'+
            '<div class="col t-r">'+curData[i].num+'</div>'+
            '</div>';
        arr.push(htmlNum);
    }
    domData.push(arr.join(""));
    return domData;
}
/*
* dom 添加
* */
function initData(id,data) {
    var ulDom = document.getElementById(id);
    var htmlLi = "";
    for(var attr in data){
        var dom = injectData(data[attr]);
        htmlLi += '<li class="flex color-1" id='+attr+' >'+dom.join('')+'</li>';
    }
    ulDom.innerHTML = htmlLi;
}
/*
* 更新dom
* */
function upData(data){
    for(var attr in data){
        var liDom = document.getElementById(attr);
        var dom = injectData(data[attr]);
        liDom.innerHTML = dom.join('');
    }
}

initData("prolist",data);

setTimeout("upData(data1)",3000)
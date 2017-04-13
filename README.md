## x-soft 项目 ![Version Number](http://visdark.com/x-soft/src/svg/npm.svg)


> 一个账号链接全球金融市场，提供有价值的金融服务。
>
> 官网：[http://fxbtg-bank.com](http://fxbtg-bank.com)
>
> 你可以点击 [GIT演示效果地址](https://github.com/visdark/x-soft/edit/master/README.md) 进行查看。也可以点击 [项目地址](https://github.com/visdark/x-soft/edit/master/README.md) 进行查看。

## 我们的愿景

创造专业，公平，安全值得信赖的市场环境。

## 团队规范代码

虽然这些细节是小事，但是却体现了一个coder的专业程度。 更多详细情况请看： http://alloyteam.github.io/CodeGuide/

### 标准文件结构

	[mainfolder]
	 |--[component]		  //所有组件	
	 |   |-- [component_name] //组件文件夹
	 |   |    |-- img1.png    //组件依赖的图片
	 |   |    |-- index.css	  //组件依赖的css文件
	 |   |    |-- index.js	  //组件依赖的js文件
	 |   |-- [component_name] //组件文件夹
	 |   |    ...
	 |   |    |-- index.css	  //组件依赖的css文件
	 |   |    |-- index.js	  //组件依赖的js文件
	 |--[js]		//js文件夹
	 |   |-- main.js
	 |--[style]		//所有样式相关的css和image
	 |   |-- [image]	//主要image文件夹
	 |   |    |-- img1.png
	 |   |    ...
	 |   |-- [style_name_a]	//皮肤A的文件夹
	 |   |    |-- [image]	//皮肤A的image
	 |   |    |-- style_name_a.css	//皮肤A的css文件
	 |   |    ...
	 |   |-- [style_name_b]	//皮肤B的文件夹
	 |   |-- [style_name_c]	//皮肤C的文件夹
	 |   |-- main.css	//主要css文件
	 |--[audio]		//所有样式相关的audio音频文件
	 |   |-- sound.mp3	//audio文件
	 |-- index.html		//index文件
	 |-- page1.html		//其他页面
	 ...
	  
	  
文件名全部英文小写，用下划线分隔。

### 标准html5代码

	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8" />
		<meta name="author" content="Tencent.AlloyTeam.Jetyu" />
		<meta name="copyright" content="Tencent.AlloyTeam" />
		<meta name="keywords" content="FXBTG团队" />
		<meta name="description" content="FXBTG" />
		
		<title>FXBTG 标准文档</title>
		<link href="./style/main.css" rel="stylesheet" type="text/css" />
	</head>
	<body>
		<!-- 注释 -->
		<h1 id="title" class="title">FXBTG 标准文档</h1>
		<div>
			<h3>Title</h3>
			<p>
				标准文档
			</p>
		</div>

		<script type="text/javascript" src="./js/jx.min.js"></script>
		<script type="text/javascript">

			var J = new Jx();

		</script>
	</body>
	</html>



### 标准javascript代码

	/**
	 * === Javascript eXtension 模块 =========================================================================
	 * Copyright (c) 2015 Tencent FXBTG, All rights reserved.
	 * http://www.fxbtg-bank.com/
	 * Code licensed under the BSD License:
	 * http://www.fxbtg-bank.com/license.txt
	 * 
	 * @version 0.0.1
	 * @author	fxbtg <cs@fxbtg-bank.com>
	 * @description 描述文字
	 * ---2015.6.1 ----------------------------
	 */

	/**
	 * 注释
	 */
	Jx().$package('tencent.alloyteam', function(J) {
		var self = this,
			$D = J.dom,
			$E = J.event,
			$H = J.http;

		// 输出字符串'Hello world!'
		J.out('Hello world!');

		// 输出this === tencent.alloyteam的判断结果
		J.out(this === tencent.alloyteam);
	});


### 标准css代码
	
	.copyright {
	    margin: 50px 0 0 0;
	    height: 50px;
	
	    font-family: Tahoma;
	    font-size: 12px;
	    text-align: center;
	
	    color: #999;
	}
	
	.copyright a {
	    text-decoration: none;
	
	    color: #999;
	}
	
	/* 注释 */
	.copyright a:hover,
	.copyright a:focus {
	    text-decoration: underline;
	
	    outline: none;
	}

	  

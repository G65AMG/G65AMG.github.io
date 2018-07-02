var data = [
	{name:"默认解析",url:"http://jiexi.92fz.cn/player/vip.php?url="},
	{name:"通用解析1",url:"http://jx.aeidu.cn/index.php?url="},
	{name:"通用解析2",url:"http://vip.thxcw.com/api.php?url="},
	{name:"通用解析3",url:"http://http://yun.baiyug.cn/vip/?url="},
	{name:"通用解析4",url:"http://www.662820.com/xnflv/index.php?url="},
	{name:"通用解析5",url:"http://api.91exp.com/svip/?url="},
	{name:"通用解析6",url:"http://vip.thxcw.com/index.php?url="},
	{name:"腾讯视频",url:"http://www.82190555.com/index/qqvod.php?url="},
	{name:"爱奇艺①",url:"http://api.pucms.com/?url="},
	{name:"爱奇艺②",url:"http://api.baiyug.cn/vip/index.php?url="},
	{name:"爱奇艺③",url:"https://api.flvsp.com/?url="},
	];
for (var i in  data)
{
	var opt = document.createElement ("option");
	opt.value = data[i].url;
	opt.innerText = data[i].name;
	document.getElementById('sel').appendChild (opt);
}
function play(){
	var url = document.getElementById("url").value;
	if(url.indexOf('http') == -1)
	{	
		alert('视频地址不正确！');return;
	}
	var api = document.getElementById("sel").value;
	var open = document.getElementById("open").value;
	url = api + url;
	switch(open)
	{
		case '0':
			window.open(url);
			console.log(0);
			break;
		case '1':
			window.location = url;
			console.log(1);
			break;
	}
}
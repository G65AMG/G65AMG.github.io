var data = [
	{name:"默认解析",url:"http://api.pucms.com/?url="},
	{name:"VIP看看",url:"http://q.z.vip.totv.72du.com/?url="},
	{name:"musoucat",url:"https://jx.618g.com/?url="},
	{name:"无名小站①",url:"http://www.85105052.com/admin.php?url="},
	{name:"无名小站②",url:"http://www.82190555.com/index/qqvod.php?url="},
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
javascript:
var d=document;
var b=d.body;
//html页面
if(b&&!document.xmlVersion)
{
	//如果页面中没有bsBox标签,在页面上添加一个script脚本标签
	if(!d.getElementById('bsBox'))
	{
		void(y=document.createElement('script'));
		void(y.src='http://static.bshare.cn/b/bookmark.js#lang=zh');
		void(b.appendChild(y));
	}else{
		bShare.show();
	}
}
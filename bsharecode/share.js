(function ()
	{
		var l = false,	
		//当前窗口
		var i = window;
		//当前文档
		var t = document;
		//当前文档的根目录开始的全部元素
		var x = t.documentElement;
		//body
		var z = t.body;
		//获取浏览器版本
		var k = i.bsu;
		var y = i.bShare;
		var f = "more";
		var h = BSHARE_SHOST_NAME + "/images/";
		var o = BSHARE_SHOST_NAME + "/frame/images/logos/m2/";
		var n = "BSHARE_POP";
		var m = "b-drag-div";
		var s = "bsMorePanelHolder";
	  
		//g的内容为:[分享到:]	
		var g = (y.lang == "en") ? "Share" : "\u5206\u4eab\u5230\uff1a";

		var p = ["sinaminiblog", "qqmb", "neteasemb", "sohuminiblog", "renren", "kaixin001", f];
		//这条语句的作用又在什么地方呢?
		var r = false,
		e, a, v;
		//而这个j()函数又是什么呢?
		j(0);
	  k.ready(function ()
	  {
		  if (!l)
		  {
			  l = true;
			  y.addEntry(
			  {
				  summary: ""
			  });
			  v = y.entries.length - 1;
			  var b = "#" + m + " { position: absolute; background-color: #ffffff; }";
			  b += ".b-drag { padding: 2px 10px; border: 1px solid #ff5c00; border-radius: 8px; overflow: hidden; }";
			  b += ".b-drag-arrow { position: absolute; margin: -4px 40px; }";
			  b += ".b-drag .aptitle { display: block; height: 15px; *height: 18px; font-size: 12px; padding: 2px; color: #333; border-bottom: 1px solid #e9e9e9; overflow: hidden; }";
			  b += ".b-drag .aptitle span { float: left; }";
			  b += ".b-drag .aptitle .apclose { cursor: pointer; float: right; font-family: arial; font-weight: bold; width: 15px; height: 15px; text-align: center; }";
			  b += ".b-drag .aplist { height: 40px; margin-top: 5px; }";
			  b += ".b-drag .aplist .listitem { float: left; height: 30px; width: 34px; margin: 0 1px; padding: 5px 0 0; cursor: pointer; text-align: center; list-style: none; zoom: 1; vertical-align: top;}";
			  b += ".b-drag .aplist .listitem:hover { border-radius: 3px; background-color: #e9e9e9; }";
			  b += ".b-drag .aplist .apicon { width: 24px; height: 24px; margin: 0px auto; display: block; }";
			  var d = 0;
			  for (var B = 0; B < p.length; B++)
			  {
				  var E = p[B];
				  if (E == f)
				  {
					  b += "#" + m + " .aplist .icon-" + E + '{background: url("' + o + 'more.gif") center center no-repeat;}';
					  d++;
					  continue
				  }
				  if (BS_PN_MAP[E] === undefined)
				  {
					  continue
				  }
				  b += "#" + m + " .aplist .icon-" + E + '{background: url("' + o + E + '.gif") center center no-repeat;}';
				  d++
			  }
			  k.loadStyle(b);
			  var u = d * 36 + (k.isQk() ? 2 : 0);
			  var A = '<img class="b-drag-arrow BSHARE_IMAGE_NO" src="' + h + 'arrow-orange-hollow.gif" /><div class="b-drag" style="width: ' + u + 'px;"><div class="aptitle"><span>' + g + "...</span><a class=\"apclose\" onclick=\"if (confirm('\u5173\u95ed\u540e\uff0c\u8be5\u5206\u4eab\u6309\u94ae30\u5206\u949f\u5c06\u4e0d\u518d\u51fa\u73b0\uff0c\u60a8\u4e5f\u65e0\u6cd5\u4f7f\u7528\u5206\u4eab\u529f\u80fd\uff0c\u786e\u5b9a\u5417\uff1f')) { var date = new Date(); date.setTime(date.getTime() + 1800000); document.cookie='bshare_off=true; expires='+date.toGMTString()+'; path=/'; document.getElementById('bshareap').style.display='none';} return false;\">X</a></div>";
			  
			  
			  //confirm的内容为:
			  //关闭后，该分享按钮30分钟将不再出现，您也无法使用分享功能，确定吗？
			  
			  
			  A += '<div class="aplist">';
			  for (var B = 0; B < p.length; B++)
			  {
				  var E = p[B];
				  if (E == f)
				  {
					  A += '<div class="listitem"><span onclick="javascript:bShare.more(event, ' + v + ');return false;" title="\u66f4\u591a..." class="apicon icon-' + E + '"></span>';
					  A += "</div>";
					  continue
				  }
				  if (BS_PN_MAP[E] === undefined)
				  {
					  continue
				  }
				  A += '<div class="listitem"><span onclick="javascript:document.getElementById(\'' + m + "').style.display='none';bShare.share(event,'" + E + "'," + v + ');return false;" title="\u5206\u4eab' + BS_PN_MAP[E][0] + '" class="apicon icon-' + E + '"></span>';
				  A += "</div>"
			  }
			  //title="\u5206\u4eab'  分享
			  A += "</div></div>";
			  var D = k.getElem(t, "div", n);
			  var w = t.getElementById(m);
			  if (!w)
			  {
				  w = t.createElement("div");
				  w.id = m;
				  w.innerHTML = A;
				  z.appendChild(w);
				  w.style.display = "none"
			  }
			  var C = D[0];
			  C.onmousedown = function (G)
			  {
				  var F = G || i.event;
				  a = q(F)
			  };
			  C.onmouseup = function (I)
			  {
				  var H = c();
				  if (!H)
				  {
					  var G = I || i.event;
					  e = q(G);
					  if (a.left != e.left || a.top != e.top)
					  {
						  r = true
					  }
					  var J;
					  if (i.getSelection)
					  {
						  J = i.getSelection().toString()
					  }
					  else
					  {
						  if (t.getSelection)
						  {
							  J = t.getSelection()
						  }
						  else
						  {
							  if (t.selection)
							  {
								  try
								  {
									  J = t.selection.createRange().text
								  }
								  catch (I)
								  {}
							  }
						  }
					  }
					  if (J.length != 0 && r == true)
					  {
						  var F = q(G);
						  setTimeout(function ()
						  {
							  y.entries[v].summary = J;
							  w.style.top = (F.top + 15) + "px";
							  w.style.left = (F.left - 40) + "px";
							  w.style.display = "block"
						  }, 200);
						  r = false;
						  k.stopProp(G)
					  }
				  }
			  };
			  z.onmouseup = function (H)
			  {
				  var F = H || i.event;
				  var G = F.srcElement || F.target;
				  while (G)
				  {
					  if (G.id == m || G.id == s)
					  {
						  return
					  }
					  G = G.parentNode
				  }
				  w.style.display = "none";
				  y.entries[v].summary = ""
			  }
		  }
	  });

	  function j(u)
	  {
		  var b = k.getScript(/(bshareDrag)/)[u];
		  if (b)
		  {
			  var d = k.parseOptions(b.src);
			  if (d.text)
			  {
				  g = d.text
			  }
			  if (d.bp)
			  {
				  p = d.bp.split(",")
			  }
		  }
	  }
	  function c()
	  {
		  try
		  {
			  var B = "bshare_off=",
				  b = t.cookie.split(";"),
				  d, A, w = "false";
			  for (d = 0; d < b.length; d++)
			  {
				  A = b[d];
				  while (A.charAt(0) == " ")
				  {
					  A = A.substring(1, A.length)
				  }
				  if (A.indexOf(B) == 0)
				  {
					  w = A.substring(B.length, A.length)
				  }
			  }
			  if (w === "true")
			  {
				  return true
			  }
		  }
		  catch (u)
		  {
			  return true
		  }
		  return false
	  }
	  function q(b)
	  {
		  var u = b.pageY || b.clientY + x.scrollTop - x.clientTop;
		  var d = b.pageX || b.clientX + x.scrollLeft - x.clientLeft;
		  return {
			  left: d,
			  top: u
		  }
	  }
	}
)();
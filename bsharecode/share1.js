var BSHARE_SHOST_NAME = "http://static.bshare.cn";
var BSHARE_BUTTON_HOST = "http://b.bshare.cn";
var BSHARE_WEB_HOST = "http://www.bshare.cn";
(function ()
{
    var g = document,
        m = g.documentElement,
        k = window,
        h = BSHARE_BUTTON_HOST,
        e = BSHARE_WEB_HOST,
        c = BSHARE_SHOST_NAME + "/frame/images/",
        l = BSHARE_SHOST_NAME + "/frame/js/",
        j = encodeURIComponent,
        f = k.location.href,
        a = function (d, b)
        {
            return d.getElementsByTagName(b)
        },
        n = k.bsu = {
			//参考:http://www.w3school.com.cn/js/jsref_test_regexp.asp
            isIe6: /msie|MSIE 6/.test(navigator.userAgent),
            isIe8: /MSIE 8/.test(navigator.userAgent),
            isIe9: /MSIE 9/.test(navigator.userAgent),
            isIe: /Microsoft Internet Explorer/.test(navigator.appName),
            isSt: g.compatMode == "CSS1Compat",
            isQk: function ()
            {
                return n.isIe6 || (n.isIe && !n.isSt)
            },
            loadModule: function (d, o)
            {
                var b = g.createElement("script");
                b.src = d;
                b.type = "text/javascript";
                if (o)
                {
                    b.onload = o;
                    b.onreadystatechange = function ()
                    {
                        if (/(complete|loaded)/.test(this.readyState))
                        {
                            o()
                        }
                    }
                }
                a(g, "head")[0].appendChild(b)
            },
            loadStyle: function (b)
            {
                var d = g.createElement("style");
                d.type = "text/css";
                if (d.styleSheet)
                {
                    d.styleSheet.cssText = b
                }
                else
                {
                    d.appendChild(g.createTextNode(b))
                }
                a(g, "head")[0].appendChild(d)
            },
            getOffset: function (d)
            {
                for (var b = {
                    x: d.offsetLeft,
                    y: d.offsetTop,
                    h: d.offsetHeight,
                    w: d.offsetWidth
                }; d = d.offsetParent; b.x += d.offsetLeft, b.y += d.offsetTop)
                {}
                return b
            },
            getElem: function (q, p, s, r)
            {
                var d = [],
                    b = 0;
                for (var o = 0;
                (pe = a(q, p)[o]); o++)
                {
                    if (!s || pe.className.indexOf(s) != -1)
                    {
                        d.push(pe);
                        if (typeof (r) == "function")
                        {
                            r(pe, b++)
                        }
                    }
                }
                return d
            },
            getText: function (b)
            {
                return n.isIe ? b.innerText : b.textContent
            },
            getWH: function ()
            {
                return {
                    h: (n.isSt ? m : g.body).clientHeight,
                    w: (n.isSt ? m : g.body).clientWidth
                }
            },
            stopProp: function (b)
            {
                b = b || k.event || {};
                if (b.stopPropagation)
                {
                    b.stopPropagation()
                }
                else
                {
                    b.cancelBubble = true
                }
            },
            getScript: function (q)
            {
                var b = n.getElem(g, "script");
                var p = [];
                for (var o = 0; o < b.length; o++)
                {
                    var d = b[o].src;
                    if (d.search(q) >= 0 && (d.toLowerCase().indexOf("bshare.cn") > -1 || d.toLowerCase().indexOf("static.local") > -1))
                    {
                        p.push(b[o])
                    }
                }
                return p
            },
            parseOptions: function (r)
            {
                var d = {};
                var t = r.indexOf("?");
                if (t)
                {
                    r = r.substring(t + 1)
                }
                t = r.indexOf("#");
                if (t)
                {
                    r = r.substring(t + 1)
                }
                r = r.replace("+", " ");
                var o = r.split(/[&;]/g);
                for (var p = 0; p < o.length; p++)
                {
                    var s = o[p].split("=");
                    var b = decodeURIComponent(s[0]);
                    var q = "";
                    if (s.length != 1)
                    {
                        q = decodeURIComponent(s[1])
                    }
                    d[b] = q
                }
                return d
            },
            hasElem: function (b, o)
            {
                var d = "|" + b.join("|") + "|";
                return d.indexOf("|" + o + "|") > -1
            },
            ready: function (o)
            {
                if (g.addEventListener)
                {
                    g.addEventListener("DOMContentLoaded", function ()
                    {
                        g.removeEventListener("DOMContentLoaded", arguments.callee, false);
                        o.call()
                    }, false);
                    k.addEventListener("load", o, false)
                }
                else
                {
                    if (g.attachEvent)
                    {
                        g.attachEvent("onreadystatechange", function ()
                        {
                            if (g.readyState === "complete")
                            {
                                g.detachEvent("onreadystatechange", arguments.callee);
                                o.call()
                            }
                        });
                        k.attachEvent("onload", o);
                        var b = false;
                        try
                        {
                            b = window.frameElement == null
                        }
                        catch (d)
                        {}
                        if (m.doScroll && b)
                        {
                            (function ()
                            {
                                try
                                {
                                    m.doScroll("left")
                                }
                                catch (p)
                                {
                                    setTimeout(arguments.callee, 10);
                                    return
                                }
                                o.call()
                            })()
                        }
                    }
                    else
                    {
                        k.onload = o
                    }
                }
            }
        };
    k.BS_PN_MAP = {
        "115": ["115\u6536\u85cf\u5939", 0],
        "139": ["139\u793e\u533a", 1],
        "139mail": ["139\u90ae\u7bb1", 2],
        "42qu": ["42\u533a", 3],
        "51": ["51\u7f51", 4],
        "51taonan": ["\u6dd8\u7537\u7f51", 5],
        "9dian": ["\u8c46\u74e39\u70b9", 6],
        baiducang: ["\u767e\u5ea6\u6536\u85cf", 7],
        baiduhi: ["\u767e\u5ea6\u7a7a\u95f4", 8],
        baohe: ["\u5b9d\u76d2\u7f51", 9],
        bgoogle: ["Google\u4e66\u7b7e", 10],
        bsharesync: ["\u4e00\u952e\u901a", 16],
        caimi: ["\u8d22\u8ff7", 17],
        cfol: ["\u4e2d\u91d1\u5fae\u535a", 18],
        chinanews: ["\u4e2d\u65b0\u7f51", 19],
        chouti: ["\u62bd\u5c49", 20],
        clipboard: ["\u590d\u5236\u7f51\u5740", 21],
        cyolbbs: ["\u4e2d\u9752\u8bba\u575b", 22],
        cyzone: ["\u521b\u4e1a\u5427", 23],
        delicious: ["\u7f8e\u5473\u4e66\u7b7e", 24],
        dig24: ["\u9012\u5ba2\u7f51", 25],
        digg: ["Digg", 26],
        diglog: ["\u5947\u5ba2\u53d1\u73b0", 27],
        digu: ["\u5600\u5495\u7f51", 28],
        diigo: ["Diigo", 29],
        douban: ["\u8c46\u74e3\u7f51", 30],
        dream: ["\u68a6\u5e7b\u4eba\u751f", 31],
        duitang: ["\u5806\u7cd6", 32],
        eastdaymb: ["\u4e1c\u65b9\u5fae\u535a", 33],
        email: ["\u7535\u5b50\u90ae\u4ef6", 34],
        evernote: ["Evernote", 35],
        facebook: ["Facebook", 36],
        fanfou: ["\u996d\u5426", 37],
        favorite: ["\u6536\u85cf\u5939", 38],
        feixin: ["\u98de\u4fe1", 39],
        friendfeed: ["FriendFeed", 40],
        funp: ["funP\u63a8\u63a8\u738b", 41],
        fwisp: ["Fwisp", 42],
        ganniu: ["\u8d76\u725b\u5fae\u535a", 43],
        gmail: ["Gmail", 44],
        gmw: ["\u5149\u660e\u7f51", 45],
        gtranslate: ["\u8c37\u6b4c\u7ffb\u8bd1", 46],
        hemidemi: ["\u9ed1\u7c73\u4e66\u7b7e", 47],
        hexunmb: ["\u548c\u8baf\u5fae\u535a", 48],
        huaban: ["\u82b1\u74e3", 49],
        ifengkb: ["\u51e4\u51f0\u5feb\u535a", 50],
        ifengmb: ["\u51e4\u51f0\u5fae\u535a", 51],
        ifensi: ["\u7c89\u4e1d\u7f51", 52],
        instapaper: ["Instapaper", 53],
        itieba: ["i\u8d34\u5427", 54],
        joinwish: ["\u597d\u613f\u7f51", 55],
        kaixin001: ["\u5f00\u5fc3\u7f51", 56],
        laodao: ["\u5520\u53e8\u7f51", 57],
        leihou: ["\u96f7\u7334", 58],
        leshou: ["\u4e50\u6536", 59],
        linkedin: ["LinkedIn", 60],
        livespace: ["MS Livespace", 61],
        loo365: ["\u7ad9\u957f\u5fae\u535a", 62],
        mala: ["\u9ebb\u8fa3\u5fae\u535a", 63],
        markzhi: ["\u53d1\u73b0\u5566", 64],
        masar: ["\u739b\u6492\u7f51", 65],
        meilishuo: ["\u7f8e\u4e3d\u8bf4", 66],
        miliao: ["\u7c73\u804a", 67],
        "mister-wong": ["Mister Wong", 68],
        mogujie: ["\u8611\u83c7\u8857", 69],
        moptk: ["\u732b\u6251\u63a8\u5ba2", 70],
        msn: ["MSN", 71],
        myshare: ["MyShare", 72],
        myspace: ["MySpace", 73],
        neteasemb: ["\u7f51\u6613\u5fae\u535a", 74],
        netvibes: ["Netvibes", 75],
        peoplemb: ["\u4eba\u6c11\u5fae\u535a", 76],
        phonefavs: ["PhoneFavs", 77],
        pingfm: ["Pingfm", 78],
        pinterest: ["Pinterest", 79],
        plurk: ["\u5657\u6d6a\u7f51", 80],
        poco: ["Poco\u7f51", 81],
        printer: ["\u6253\u5370", 82],
        printf: ["Print Friendly", 83],
        qqmb: ["\u817e\u8baf\u5fae\u535a", 84],
        qqshuqian: ["QQ\u4e66\u7b7e", 85],
        qqxiaoyou: ["\u670b\u53cb\u7f51", 86],
        qzone: ["QQ\u7a7a\u95f4", 87],
        readitlater: ["ReadItLater", 88],
        reddit: ["Reddit", 89],
        redmb: ["\u7ea2\u5fae\u535a", 90],
        renjian: ["\u4eba\u95f4\u7f51", 91],
        renmaiku: ["\u4eba\u8109\u5e93", 92],
        renren: ["\u4eba\u4eba\u7f51", 93],
        saveaspdf: ["\u4fdd\u5b58PDF", 94],
        shouji: ["\u624b\u673a", 95],
        sinaminiblog: ["\u65b0\u6d6a\u5fae\u535a", 96],
        sinaqing: ["\u65b0\u6d6aQing", 97],
        sinavivi: ["\u65b0\u6d6aVivi", 98],
        sohubai: ["\u641c\u72d0\u767d\u793e\u4f1a", 99],
        sohuminiblog: ["\u641c\u72d0\u5fae\u535a", 100],
        southmb: ["\u5357\u65b9\u5fae\u535a", 101],
        stumbleupon: ["StumbleUpon", 102],
        szone: ["\u5b88\u682a\u7f51", 103],
        taojianghu: ["\u6dd8\u6c5f\u6e56", 104],
        tianya: ["\u5929\u6daf", 105],
        tongxue: ["\u540c\u5b66\u5fae\u535a", 106],
        tuita: ["\u63a8\u4ed6", 107],
        tumblr: ["Tumblr", 108],
        twitter: ["Twitter", 109],
        ushi: ["\u4f18\u58eb\u7f51", 110],
        vocmb: ["\u6e56\u5357\u5fae\u535a", 111],
        waakee: ["\u6316\u5ba2", 112],
        wealink: ["\u82e5\u90bb\u7f51", 113],
        woshao: ["\u6211\u70e7\u7f51", 115],
        xianguo: ["\u9c9c\u679c\u7f51", 116],
        xiaomeisns: ["\u6821\u5a92\u91c7\u901a", 117],
        xinminmb: ["\u65b0\u6c11\u5fae\u535a", 118],
        xyweibo: ["\u5fae\u535a\u6821\u56ed", 119],
        yaolanmb: ["\u6447\u7bee\u5fae\u535a", 120],
        yijee: ["\u6613\u96c6\u7f51", 121],
        youdao: ["\u6709\u9053", 122],
        zhuaxia: ["\u6293\u867e\u7f51", 123],
        zjol: ["\u6d59\u6c5f\u5fae\u535a", 124],
        zuosa: ["\u505a\u5565\u7f51", 125],
        xinhuamb: ["\u65b0\u534e\u5fae\u535a"],
        szmb: ["\u6df1\u5733\u5fae\u535a"],
        changshamb: ["\u5fae\u957f\u6c99"],
        hefeimb: ["\u5408\u80a5\u5fae\u535a"]
    };
    k.TOP_PN_MAP = {
        baiduhi: 0,
        bsharesync: 1,
        douban: 2,
        facebook: 3,
        feixin: 4,
        ifengmb: 5,
        itieba: 6,
        kaixin001: 7,
        msn: 8,
        neteasemb: 9,
        peoplemb: 10,
        qqmb: 11,
        qqxiaoyou: 12,
        qzone: 13,
        renren: 14,
        sinaminiblog: 15,
        sinaqing: 16,
        sohuminiblog: 17,
        tianya: 18,
        twitter: 19
    };
    if (typeof (bShare) == "undefined")
    {
        var i = k.bShare = {};
        i.type = (typeof (BSHARE_BUTTON_TYPE) == "undefined") ? 0 : BSHARE_BUTTON_TYPE;
        i.lang = "zh";
        i.curb = 0;
        i.preb = -1;
        i.entries = [];
        i.lite = true;
        i.isReady = false;
        i.addEntry = function (b)
        {
            i.entries.push(b)
        };
        i.init = function ()
        {
            if (!i.isReady)
            {
                i.isReady = true;
                n.loadModule(l + "bsBox2.js?v=20120424")
            }
        };
        n.ready(i.init)
    }
})();
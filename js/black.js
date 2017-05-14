/*
   HEAD.JS : the only script you need at the top of your js lib... ;-)
   http://headjs.com/
   We rely on this to dynamically get all the deps we need to make Shrine work
   Could've used WebComponents, but damn, all experiments with that approach didn't seem to work fine.
   Head.Js solves all our troubles...
   */
/*! head.core - v1.0.2 */
(function(n, t) {
    "use strict";
    function r(n) {
        a[a.length] = n
    }
    function k(n) {
        var t = new RegExp(" ?\\b" + n + "\\b");
        c.className = c.className.replace(t, "")
    }
    function p(n, t) {
        for (var i = 0, r = n.length; i < r; i++)
            t.call(n, n[i], i)
    }
    function tt() {
        var t, e, f, o;
        c.className = c.className.replace(/ (w-|eq-|gt-|gte-|lt-|lte-|portrait|no-portrait|landscape|no-landscape)\d+/g, "");
        t = n.innerWidth || c.clientWidth;
        e = n.outerWidth || n.screen.width;
        u.screen.innerWidth = t;
        u.screen.outerWidth = e;
        r("w-" + t);
        p(i.screens, function(n) {
            t > n ? (i.screensCss.gt && r("gt-" + n),
                    i.screensCss.gte && r("gte-" + n)) : t < n ? (i.screensCss.lt && r("lt-" + n),
                    i.screensCss.lte && r("lte-" + n)) : t === n && (i.screensCss.lte && r("lte-" + n),
                    i.screensCss.eq && r("e-q" + n),
                    i.screensCss.gte && r("gte-" + n))
        });
        f = n.innerHeight || c.clientHeight;
        o = n.outerHeight || n.screen.height;
        u.screen.innerHeight = f;
        u.screen.outerHeight = o;
        u.feature("portrait", f > t);
        u.feature("landscape", f < t)
    }
    function it() {
        n.clearTimeout(b);
        b = n.setTimeout(tt, 50)
    }
    var y = n.document, rt = n.navigator, ut = n.location, c = y.documentElement, a = [], i = {
        screens: [240, 320, 480, 640, 768, 800, 1024, 1280, 1440, 1680, 1920],
        screensCss: {
            gt: !0,
            gte: !1,
            lt: !0,
            lte: !1,
            eq: !1
        },
        browsers: [{
            ie: {
                min: 6,
                max: 11
            }
        }],
        browserCss: {
            gt: !0,
            gte: !1,
            lt: !0,
            lte: !1,
            eq: !0
        },
        html5: !0,
        page: "-page",
        section: "-section",
        head: "head"
    }, v, u, s, w, o, h, l, d, f, g, nt, e, b;
    if (n.head_conf)
        for (v in n.head_conf)
            n.head_conf[v] !== t && (i[v] = n.head_conf[v]);
    u = n[i.head] = function() {
        u.ready.apply(null , arguments)
    }
    ;
    u.feature = function(n, t, i) {
        return n ? (Object.prototype.toString.call(t) === "[object Function]" && (t = t.call()),
                r((t ? "" : "no-") + n),
                u[n] = !!t,
                i || (k("no-" + n),
                    k(n),
                    u.feature()),
                u) : (c.className += " " + a.join(" "),
                    a = [],
                    u)
    }
    ;
    u.feature("js", !0);
    s = rt.userAgent.toLowerCase();
    w = /mobile|android|kindle|silk|midp|phone|(windows .+arm|touch)/.test(s);
    u.feature("mobile", w, !0);
    u.feature("desktop", !w, !0);
    s = /(chrome|firefox)[ \/]([\w.]+)/.exec(s) || /(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(s) || /(android)(?:.*version)?[ \/]([\w.]+)/.exec(s) || /(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(s) || /(msie) ([\w.]+)/.exec(s) || /(trident).+rv:(\w.)+/.exec(s) || [];
    o = s[1];
    h = parseFloat(s[2]);
    switch (o) {
        case "msie":
        case "trident":
            o = "ie";
            h = y.documentMode || h;
            break;
        case "firefox":
            o = "ff";
            break;
        case "ipod":
        case "ipad":
        case "iphone":
            o = "ios";
            break;
        case "webkit":
            o = "safari"
    }
    for (u.browser = {
        name: o,
        version: h
    },
    u.browser[o] = !0,
    l = 0,
    d = i.browsers.length; l < d; l++)
        for (f in i.browsers[l])
            if (o === f)
                for (r(f),
                        g = i.browsers[l][f].min,
                        nt = i.browsers[l][f].max,
                        e = g; e <= nt; e++)
                    h > e ? (i.browserCss.gt && r("gt-" + f + e),
                            i.browserCss.gte && r("gte-" + f + e)) : h < e ? (i.browserCss.lt && r("lt-" + f + e),
                            i.browserCss.lte && r("lte-" + f + e)) : h === e && (i.browserCss.lte && r("lte-" + f + e),
                            i.browserCss.eq && r("eq-" + f + e),
                            i.browserCss.gte && r("gte-" + f + e));
            else
                r("no-" + f);
    r(o);
    r(o + parseInt(h, 10));
    i.html5 && o === "ie" && h < 9 && p("abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|progress|section|summary|time|video".split("|"), function(n) {
        y.createElement(n)
    });
    p(ut.pathname.split("/"), function(n, u) {
        if (this.length > 2 && this[u + 1] !== t)
            u && r(this.slice(u, u + 1).join("-").toLowerCase() + i.section);
        else {
            var f = n || "index"
                , e = f.indexOf(".");
            e > 0 && (f = f.substring(0, e));
            c.id = f.toLowerCase() + i.page;
            u || r("root" + i.section)
        }
    });
    u.screen = {
        height: n.screen.height,
        width: n.screen.width
    };
    tt();
    b = 0;
    n.addEventListener ? n.addEventListener("resize", it, !1) : n.attachEvent("onresize", it)
})(window);
/*! head.css3 - v1.0.0 */
(function(n, t) {
    "use strict";
    function a(n) {
        for (var r in n)
            if (i[n[r]] !== t)
                return !0;
        return !1
    }
    function r(n) {
        var t = n.charAt(0).toUpperCase() + n.substr(1)
            , i = (n + " " + c.join(t + " ") + t).split(" ");
        return !!a(i)
    }
    var h = n.document
        , o = h.createElement("i")
        , i = o.style
        , s = " -o- -moz- -ms- -webkit- -khtml- ".split(" ")
        , c = "Webkit Moz O ms Khtml".split(" ")
        , l = n.head_conf && n.head_conf.head || "head"
        , u = n[l]
        , f = {
            gradient: function() {
                var n = "background-image:";
                return i.cssText = (n + s.join("gradient(linear,left top,right bottom,from(#9f9),to(#fff));" + n) + s.join("linear-gradient(left top,#eee,#fff);" + n)).slice(0, -n.length),
                !!i.backgroundImage
            },
            rgba: function() {
                return i.cssText = "background-color:rgba(0,0,0,0.5)",
                !!i.backgroundColor
            },
            opacity: function() {
                return o.style.opacity === ""
            },
            textshadow: function() {
                return i.textShadow === ""
            },
            multiplebgs: function() {
                i.cssText = "background:url(https://),url(https://),red url(https://)";
                var n = (i.background || "").match(/url/g);
                return Object.prototype.toString.call(n) === "[object Array]" && n.length === 3
            },
            boxshadow: function() {
                return r("boxShadow")
            },
            borderimage: function() {
                return r("borderImage")
            },
            borderradius: function() {
                return r("borderRadius")
            },
            cssreflections: function() {
                return r("boxReflect")
            },
            csstransforms: function() {
                return r("transform")
            },
            csstransitions: function() {
                return r("transition")
            },
            touch: function() {
                return "ontouchstart"in n
            },
            retina: function() {
                return n.devicePixelRatio > 1
            },
            fontface: function() {
                var t = u.browser.name
                    , n = u.browser.version;
                switch (t) {
                    case "ie":
                        return n >= 9;
                    case "chrome":
                        return n >= 13;
                    case "ff":
                        return n >= 6;
                    case "ios":
                        return n >= 5;
                    case "android":
                        return !1;
                    case "webkit":
                        return n >= 5.1;
                    case "opera":
                        return n >= 10;
                    default:
                        return !1
                }
            }
        };
        for (var e in f)
            f[e] && u.feature(e, f[e].call(), !0);
        u.feature()
})(window);
/*! head.load - v1.0.3 */
(function(n, t) {
    "use strict";
    function w() {}
    function u(n, t) {
        if (n) {
            typeof n == "object" && (n = [].slice.call(n));
            for (var i = 0, r = n.length; i < r; i++)
                t.call(n, n[i], i)
        }
    }
    function it(n, i) {
        var r = Object.prototype.toString.call(i).slice(8, -1);
        return i !== t && i !== null && r === n
    }
    function s(n) {
        return it("Function", n)
    }
    function a(n) {
        return it("Array", n)
    }
    function et(n) {
        var i = n.split("/")
            , t = i[i.length - 1]
            , r = t.indexOf("?");
            return r !== -1 ? t.substring(0, r) : t
    }
    function f(n) {
        (n = n || w,
         n._done) || (n(),
             n._done = 1)
    }
    function ot(n, t, r, u) {
        var f = typeof n == "object" ? n : {
            test: n,
            success: !t ? !1 : a(t) ? t : [t],
            failure: !r ? !1 : a(r) ? r : [r],
            callback: u || w
        }
        , e = !!f.test;
        return e && !!f.success ? (f.success.push(f.callback),
                i.load.apply(null , f.success)) : e || !f.failure ? u() : (f.failure.push(f.callback),
                i.load.apply(null , f.failure)),
                i
    }
    function v(n) {
        var t = {}, i, r;
        if (typeof n == "object")
            for (i in n)
                !n[i] || (t = {
                    name: i,
                    url: n[i]
                });
        else
            t = {
                name: et(n),
                url: n
            };
        return (r = c[t.name],
                r && r.url === t.url) ? r : (c[t.name] = t,
                    t)
    }
    function y(n) {
        n = n || c;
        for (var t in n)
            if (n.hasOwnProperty(t) && n[t].state !== l)
                return !1;
        return !0
    }
    function st(n) {
        n.state = ft;
        u(n.onpreload, function(n) {
            n.call()
        })
    }
    function ht(n) {
        n.state === t && (n.state = nt,
                n.onpreload = [],
                rt({
                    url: n.url,
                    type: "cache"
                }, function() {
                    st(n)
                }))
    }
    function ct() {
        var n = arguments
            , t = n[n.length - 1]
            , r = [].slice.call(n, 1)
            , f = r[0];
            return (s(t) || (t = null ),
                    a(n[0])) ? (n[0].push(t),
                    i.load.apply(null , n[0]),
                    i) : (f ? (u(r, function(n) {
                        s(n) || !n || ht(v(n))
                    }),
                            b(v(n[0]), s(f) ? f : function() {
                                i.load.apply(null , r)
                            }
                            )) : b(v(n[0])),
                        i)
    }
    function lt() {
        var n = arguments
            , t = n[n.length - 1]
            , r = {};
            return (s(t) || (t = null ),
                    a(n[0])) ? (n[0].push(t),
                    i.load.apply(null , n[0]),
                    i) : (u(n, function(n) {
                        n !== t && (n = v(n),
                                r[n.name] = n)
                    }),
                        u(n, function(n) {
                            n !== t && (n = v(n),
                                    b(n, function() {
                                        y(r) && f(t)
                                    }))
                        }),
                        i)
    }
    function b(n, t) {
        if (t = t || w,
                n.state === l) {
            t();
            return
        }
        if (n.state === tt) {
            i.ready(n.name, t);
            return
        }
        if (n.state === nt) {
            n.onpreload.push(function() {
                b(n, t)
            });
            return
        }
        n.state = tt;
        rt(n, function() {
            n.state = l;
            t();
            u(h[n.name], function(n) {
                f(n)
            });
            o && y() && u(h.ALL, function(n) {
                f(n)
            })
        })
    }
    function at(n) {
        n = n || "";
        var t = n.split("?")[0].split(".");
        return t[t.length - 1].toLowerCase()
    }
    function rt(t, i) {
        function e(t) {
            t = t || n.event;
            u.onload = u.onreadystatechange = u.onerror = null ;
            i()
        }
        function o(f) {
            f = f || n.event;
            (f.type === "load" || /loaded|complete/.test(u.readyState) && (!r.documentMode || r.documentMode < 9)) && (n.clearTimeout(t.errorTimeout),
                    n.clearTimeout(t.cssTimeout),
                    u.onload = u.onreadystatechange = u.onerror = null ,
                    i())
        }
        function s() {
            if (t.state !== l && t.cssRetries <= 20) {
                for (var i = 0, f = r.styleSheets.length; i < f; i++)
                    if (r.styleSheets[i].href === u.href) {
                        o({
                            type: "load"
                        });
                        return
                    }
                t.cssRetries++;
                t.cssTimeout = n.setTimeout(s, 250)
            }
        }
        var u, h, f;
        i = i || w;
        h = at(t.url);
        h === "css" ? (u = r.createElement("link"),
                u.type = "text/" + (t.type || "css"),
                u.rel = "stylesheet",
                u.href = t.url,
                t.cssRetries = 0,
                t.cssTimeout = n.setTimeout(s, 500)) : (u = r.createElement("script"),
                u.type = "text/" + (t.type || "javascript"),
                u.src = t.url);
        u.onload = u.onreadystatechange = o;
        u.onerror = e;
        u.async = !1;
        u.defer = !1;
        t.errorTimeout = n.setTimeout(function() {
            e({
                type: "timeout"
            })
        }, 7e3);
        f = r.head || r.getElementsByTagName("head")[0];
        f.insertBefore(u, f.lastChild)
    }
    function vt() {
        for (var t, u = r.getElementsByTagName("script"), n = 0, f = u.length; n < f; n++)
            if (t = u[n].getAttribute("data-headjs-load"),
                    !!t) {
                i.load(t);
                return
            }
    }
    function yt(n, t) {
        var v, p, e;
        return n === r ? (o ? f(t) : d.push(t),
                i) : (s(n) && (t = n,
                        n = "ALL"),
                    a(n)) ? (v = {},
                    u(n, function(n) {
                        v[n] = c[n];
                        i.ready(n, function() {
                            y(v) && f(t)
                        })
                    }),
                    i) : typeof n != "string" || !s(t) ? i : (p = c[n],
                        p && p.state === l || n === "ALL" && y() && o) ? (f(t),
                        i) : (e = h[n],
                            e ? e.push(t) : e = h[n] = [t],
                            i)
    }
    function e() {
        if (!r.body) {
            n.clearTimeout(i.readyTimeout);
            i.readyTimeout = n.setTimeout(e, 50);
            return
        }
        o || (o = !0,
                vt(),
                u(d, function(n) {
                    f(n)
                }))
    }
    function k() {
        r.addEventListener ? (r.removeEventListener("DOMContentLoaded", k, !1),
                e()) : r.readyState === "complete" && (r.detachEvent("onreadystatechange", k),
                e())
    }
    var r = n.document, d = [], h = {}, c = {}, ut = "async"in r.createElement("script") || "MozAppearance"in r.documentElement.style || n.opera, o, g = n.head_conf && n.head_conf.head || "head", i = n[g] = n[g] || function() {
        i.ready.apply(null , arguments)
    }
    , nt = 1, ft = 2, tt = 3, l = 4, p;
    if (r.readyState === "complete")
        e();
    else if (r.addEventListener)
        r.addEventListener("DOMContentLoaded", k, !1),
            n.addEventListener("load", e, !1);
    else {
        r.attachEvent("onreadystatechange", k);
        n.attachEvent("onload", e);
        p = !1;
        try {
            p = !n.frameElement && r.documentElement
        } catch (wt) {}
        p && p.doScroll && function pt() {
            if (!o) {
                try {
                    p.doScroll("left")
                } catch (t) {
                    n.clearTimeout(i.readyTimeout);
                    i.readyTimeout = n.setTimeout(pt, 50);
                    return
                }
                e()
            }
        }()
    }
    i.load = i.js = ut ? lt : ct;
    i.test = ot;
    i.ready = yt;
    i.ready(r, function() {
        y() && u(h.ALL, function(n) {
            f(n)
        });
        i.feature && i.feature("domloaded", !0)
    })
})(window);
/* END HEAD.js */


var DEBUG = true;
function log(msg){
    if(DEBUG)
        console.log(msg);
}

var SOUND_RES = {
    'fire': 'sounds/fire.wav',
    'GODS': {
        'BEAST_666': [
            'sounds/music/beast/ghost_bc-infestissumam.mp3',
            'sounds/music/beast/Eros Necropsique - Introduction.mp3',
            'sounds/music/beast/666Mafia - 666ClubHouse.mp3',
            'sounds/music/beast/Organics - Michael Stearns.mp3',
            'sounds/music/beast/Gregorian- The fourhorsemen.mp3',
            'sounds/music/beast/DJ Zany and MC DV8 - The Anthem.mp3',
        ],
        'SATAN': [
            'sounds/music/satan/Gay Satanic Hippie - Bauchweh.mp3',
            'sounds/music/satan/The Serpent - Ksiazki.mp3',
            'sounds/music/satan/Blut Aus Nord - The Howling Of God.mp3',
            'sounds/music/satan/Daemonarch - The Seventh Daemonarch.mp3',
            'sounds/music/satan/D12 - Devils Night.mp3',
            'sounds/music/satan/Gregorian - Ave Satani (the Omen).mp3',
        ],
        'LUCIFER': [
            'sounds/music/lucifer/Ghost - He Is.mp3',
            'sounds/music/lucifer/Era - Divano.mp3',
            'sounds/music/lucifer/Magic voices - Right till the end.mp3',
            'sounds/music/lucifer/Mythos - June.mp3',
            'sounds/music/lucifer/Vangelis - chariots of fire.mp3',
            'sounds/music/lucifer/Wildstylez ft. isaac - lost in music.mp3',
        ],
        'DAEMON': [
            'sounds/music/daemon/Tron Sepia - Abyss (VIP).mp3',
            'sounds/music/daemon/Etnoscope - Hidden Track.mp3',
            'sounds/music/daemon/Terror Squad - Tripple Threat.mp3',
            'sounds/music/daemon/Pavo_-_Raven.mp3',
            'sounds/music/daemon/Brennan Heart - we are possessed ( headhunterz remix ).mp3',
        ],
        'BAPHOMET': [
            'sounds/music/daemon/Pavo_-_Raven.mp3',
            'sounds/music/satan/Gay Satanic Hippie - Bauchweh.mp3',
            'sounds/music/satan/The Serpent - Ksiazki.mp3',
            'sounds/music/satan/Blut Aus Nord - The Howling Of God.mp3',
            'sounds/music/satan/Daemonarch - The Seventh Daemonarch.mp3',
        ],
        'TAHUTI': [
            'sounds/music/tahuti/Enigma - Goodbye Milky Way.mp3',
            'sounds/music/tahuti/Dead Can Dance - Agape.mp3',
            'sounds/music/tahuti/Wonderful Chill Out Music - The Ocean.mp3',
        ],
        'LEVIATAN': [
            'sounds/music/leviatan/Enigma - Principles Of Lust.mp3',
            'sounds/music/leviatan/Iacchus - Silver Linings.mp3',
            'sounds/music/leviatan/David Guetta & Nicky Romero Feat Sia - Wild Ones Two (Wildstylez bootleg).mp3',
        ],
        'BELIAL': [
            'sounds/music/belial/Eros Necropsique - Communion.mp3',
            'sounds/music/belial/Blut Aus Nord - Ultima Thule - My Prayer Beyond Ginnungagap.mp3',
            'sounds/music/belial/Minds Of Infinity - First Human.mp3',
        ],
        'RUHANGA_KITARA_MUSANA': [
            'sounds/music/RUHANGA_KITARA_MUSANA/Deep Forest - New Dawn.mp3',
            'sounds/music/RUHANGA_KITARA_MUSANA/Dead Can Dance - Ariadne.mp3',
            'sounds/music/RUHANGA_KITARA_MUSANA/The Kamkars - Chant of Drums.mp3',
            'sounds/music/RUHANGA_KITARA_MUSANA/XTribe - African Drum.mp3',
            'sounds/music/RUHANGA_KITARA_MUSANA/Ancient Egyptian Music - Creator Sun God Instrumental III-IV.mp3',
        ],
        'NYAMIYONGA': [
            'sounds/music/nyamiyonga/Monumentum - Fade To Gray.mp3',
            'sounds/music/nyamiyonga/Anjey Satori - Ritual Woodoo.mp3',
            'sounds/music/nyamiyonga/Kingdom of Blood- The Return of Darkness and Abyss The World.mp3',
            'sounds/music/nyamiyonga/Kingdom of Blood - Hell Gate.mp3',
            'sounds/music/nyamiyonga/Kingdom of Blood - Voices of Pain in Hell.mp3',
        ],
        'GOD': [
            'sounds/music/god/Gay Satanic Hippie - Bach On Crack (Back On Crack Remix).mp3',
            'sounds/music/god/Hexentanz - Bringer of the Lucifer.mp3',
            'sounds/music/god/Gregorian_-_Uninvited.mp3',
            'sounds/music/god/Gregorian - In The Air Tonight.mp3',
            'sounds/music/god/Headhunterz - Last of the mohicans.mp3',
            'sounds/music/god/Shpongle - Invocation.mp3',
            'sounds/music/god/Shpongle - Connoisseur Of Hallucinations.mp3',
        ],
    }
}

var SOUND_PLAYERS = {
}


var SOUNDS = {
    shrine: {
        'default': {
            'fire': {
                play : function(){
                    SOUND_PLAYERS['fire'].play();
                },
                stop : function(){
                    SOUND_PLAYERS['fire'].stop();
                },
                pause : function(){
                    SOUND_PLAYERS['fire'].pause();
                }
            }
        }
    }
}

function classify(name){
    return name.replace(/ /gi,'_');
}

function is_offertory(msg){
    return msg.toLowerCase().match("i offer.*you");
}
function make_offertory(msg){
    var parts = msg.split(/.*i offer.*you/);
    if(parts.length == 1){
        var el_msg = $('<span/>', {'class': 'fire shrine-msg ' + shrine['action']}).text(msg);
        return el_msg;
    }
    var offertory = parts[1].trim();
    log('SHRINE:'+ shrine['class'] + '|GOD:'+ shrine['god'] +'|ACTION:' + shrine['action'] + '|OFFERTORY:' + offertory);
    var el_msg = $('<span/>', {'class': 'fire shrine-msg ' + shrine['action']}).text('i offer to you ' + offertory);
    el_msg.prepend($('<span/>',{'style': 'font-size:3em; font-family:cherub'}).text('c'));
    el_msg.append($('<span/>',{'style': 'font-size:3em; font-family:cherub'}).text('b'));
    return el_msg;
}

function process_shrine(shrine, msg, i_speak, flag_record_shrine, flag_compute_gematria){
    log('SHRINE:'+ shrine['class'] + '|GOD:'+ shrine['god'] +'|ACTION:' + shrine['action'] + '|PAYLOAD:' + msg);
    if(!i_speak){
        if(shrine['action'] == 'DIVINE'){
            god_speaking(shrine, shrine['god'], shrine['action'], msg, flag_record_shrine, flag_compute_gematria);
        }
    }else {
        if(flag_record_shrine){
            record(shrine,true,msg);
        }
        var el_msg = $('<span/>', {'class': 'fire shrine-msg ' + shrine['action']}).text(msg);
        if(is_offertory(msg)){
            el_msg = make_offertory(msg);
        }
        $('.shrine.' + shrine['class']).append(el_msg);
        var dur = 666 * 66;
        $(el_msg).stop().animate({'top': '0'}, Math.floor(dur * 0.5)).fadeTo( dur, 0 , function() {
            el_msg.detach();
        });
    }

    return !i_speak;
}

function record(shrine, i_speaking, msg){
    var shrine_records = get_setting('shrine_records', []);
    var now = new Date();
    shrine_records.push( { 
        date: now.toDateString(),
        time: now.toTimeString().split('(')[0].trim(),
        shrine: shrine['class'],
        action: shrine['action'],
        speaking: i_speaking? "ME": shrine['god'],
        message: msg
    });
    set_setting('shrine_records', shrine_records);
}

function clear_shrine_records(){
    set_setting('shrine_records', []);
}

function show_shrine_records(){
    var shrine_records = get_setting('shrine_records', []);
    $('#shrine-records').empty();
    for(r=0;r<shrine_records.length;r++){
        var rec = shrine_records[r];
        $('#shrine-records').append( $('<div/>', { 'class': rec.speaking == "ME" ? "record-me": "record-god" }).html(
                    '<span class="rec-time">'+ rec.date + " " + rec.time +'</span>'+
                    '&nbsp;<span class="rec-action">'+ rec.action +':</span>'+
                    '&nbsp;<span class="rec-shrine">'+ rec.speaking + '@' + (rec.shrine == 'default'? 'shrine': rec.shrine) +'</span>'+
                    '&nbsp;<span class="rec-msg">'+ rec.message +'</span>'
            ) );
    }
    $('#modal-shrine-records').modal('show');
}

var mantras = {
    'TAHUTI': [
        "AS ABOVE SO IT IS BELOW",
        "ALL POWER IS WITHIN U",
        "WHO WRITES, CAN CREATE",
        "SEEK THE DOOR",
        "LOOK WITHIN, I AM HE",
    ],
    'NYAMIYONGA': [
        "I AM H THAT RIGNS VR LIF AND DATH",
        "IJA KUZIMU",
        "IJA BMZI",
    ],
    'SET': [
        "I AM WITHIN AND BEYOND YOU THE HIGHEST OF LIFE",
        "THE ESSENCE OF MY BEING IS ENSHRINED WITHIN YOU",
        "I CALL UPON YOU TO RISE IN YOUR GLORY",
        "BEHOLD THE GENIUS OF YOUR CREATION",
    ],
    'RUHANGA_KITARA_MUSANA': [
        "NINYE MANDWA IGURU NENSI",
    ],
    'SATAN': [
        "DEATH TO THE WEAKLING, WEALTH TO THE STRONG",
        "I STAND FORTH TO CHALLENGE THE WISDOM OF THE WORLD",
        "I QUESTION ALL THINGS",
        "ANNIHILATE THEM, OR THEY WILL US",
        "HATE YOUR ENEMIES WITH A WHOLE HEART",
        "GIVE BLOW FOR BLOW, SCORN FOR SCORN, DOOM FOR DOOM",
        "LIFE IS THE GREAT INDULGENCE - DEATH, THE GREAT ABSTINENCE",
        "NO HEAVEN OF GLORY BRIGHT, AND NO HELL WHERE SINNERS ROAST",
        "CHOOSE YE THIS DAY, THIS HOUR, FOR NO REDEEMER LIVETH",
        "I AM MINE OWN REDEEMER",
        "BLESSED ARE THE STRONG, FOR THEY SHALL POSSESS THE EARTH",
        "BLESSED ARE THE POWERFUL, FOR THEY SHALL BE REVERENCED AMONG MEN",
        "I AM HE THAT KILLETH THE JEHOVAH IN YOU"
    ],
    'LUCIFER': [
        "I AM THE WAY",
        "I AM THE TRUTH",
        "I AM THE LIGHT",
    ],
    'LEVIATAN': [
        "I SET LOOSE THE DESIRES IN YOU",
        "MAY YOU BE OVERWHELMED WITH JOY",
        "I UNLEASH LUST UNTO YOU",
        "THE CHAINS OF VIRTUE BE LOOSENED!",
        "INDULGE OR PERISH",
    ],
    'BELIAL': [
        "YOUR WILL BE DONE",
        "IF YOU CAN'T WILL, YOU DESERVE TO DIE",
        "I GIVE TO YOU THE POWER TO BE",
        "ON THIS EARTH, BE BLESSED",
        "DRINK OF MY POWER, YOU WILL NOT THIRST",
        "BE PRAGMATIC MAN, BE PRAGMATIC!",
        "FUCK FATANSY, HEAVEN AND HELL ARE HERE RIGHT NOW",
        "CREATE YOUR DESTINY",
        "USE YOUR MIND",
        "THINK, STUPID!",
    ],
    'BEAST_666': [
        "I AM THE WAY",
        "I AM THE TRUTH",
        "I AM THE LIGHT",
        "I AM THE TRUE CHRIST",
        "FUCK THE NAZARENE",
        "FUCK THE POPE",
        "FUCK THE BLOODY MARY",
        "I DEBAPTIZE YOU NOW",
        "EAT OF ME, DRINK OF ME",
    ],
    'DAEMON': [
        "I AM THAT I AM",
        "IN ME IS THE POWER",
        "I, GOD",
        "I, SERVE NONE",
    ],
    'BAPHOMET': [
        "I, HIDDEN ONE",
        "I, WHO SHALL ENDURE",
        "I, THE GREAT SPIRIT",
    ]
};

function mantra(god){


    return mantras[god][Math.floor(Math.random()*mantras[god].length)] || "IF YOU DON'T CREATE YOUR OWN GODS YOU WILL BE A SLAVE TO ANOTHER MAN'S";

}

var rand = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var generateWeighedList = function(list, weight) {
    var weighed_list = [];

    // Loop over weights
    for (var i = 0; i < weight.length; i++) {
        var multiples = Math.floor(weight[i]); // * 100;

        // Loop over the list of items
        for (var j = 0; j < multiples; j++) {
            weighed_list.push(list[i]);
        }
    }

    return weighed_list;
};


var god_alphabet = null; //'abc def ghi jkl mno pqr stu vwx yz 123 456 789 0'.split('');

function randomMessage(keys){

    //var random_num = rand(0, weighed_list.length-1);

    var msg = '';

    for(i=0;i<keys.length;i++){
        var random_num = keys[i];
        msg += _.shuffle(god_alphabet)[random_num];
    }

    console.log(msg);
    return msg;
}

/**
 * Returns a list of count random numbers between min (inclusive) and max (exclusive)
 */
            function getRandomArbitraryList(count, min, max) {
                var list = [];
                for (var i = 0; i < count; i++)
                    list.push(Math.floor(Math.random() * (max - min) + min));
                return list;
            }

/* get list of random numbers from the Random.org service */
function getRandomDigits(count, min, max, callback, override) {
    lock = true;
    $.ajax({
        url: 'https://www.random.org/integers/?num=' + count + '&min=' + min + '&max=' + max + '&col=1&base=10&format=plain&rnd=new&__time=' + (new Date()).getTime(),
        method: 'GET'
    }).done(function(data) {
        if (data == undefined) {
            callback(getRandomArbitraryList(count, min, max + 1).map(function(n, i) {
                n = n.toString() == "NaN" ? min + (Math.random() * (max - min)) : n;
                return override == undefined ? Number(n) : override[i] || Number(n);
            }));
        } else {
            callback(_.filter(data.split("\n"), function(s){  return s.length > 0; }).map(function(n, i) {
                n = n.toString() == "NaN" ? min + (Math.random() * (max - min)) : n;
                return override == undefined ? Number(n) : override[i] || Number(n);
            }));
        }
        lock = false;
    }).fail(function() {
        callback(getRandomArbitraryList(count, min, max + 1).map(function(n, i) {
            n = n.toString() == "NaN" ? min + (Math.random() * (max - min)) : n;
            return override == undefined ? Number(n) : override[i] || Number(n);
        }));
        lock = false;
    });
}

/*

function magick_squares(word){
    switch(word){
        'lucifer': return [
            "LUCIFUGE",
            "UCIFUGEL",
            "CIFUGELU",
            "IFUGELUC",
            "FUGELUCI",
            "UGELUCIF",
            "GELUCIFU",
            "ELUCIFUG",
            "LUCIFUGE",
        ].join("\r\n<br/>");
        default:{
            var tables = rotate(word);
            return tables.join("\r\n

        }
}

*/


function numberParts(x, b) {
  var exp = 0
  var sgn = 0
  if (x<0) sgn=1, x=-x
  while (x>b) x/=b, exp++
  while (x<1) x*=b, exp--
  return { sign: sgn, mantissa: x, exponent: exp }
}

function kaballah(shrine,god,msg){
    var liber777_kaballah = {'A':11,'B':12,'C':18,'D':14,'E':7,'F':8,'G': 13, 'H':15,'I':20,'J':9,'K':21,'L':22,'M':23,'N':24,'O':26,'P':27,'Q':29,'R':30,'S':31,'T':32,'U':16,'V':8,'W':0,'X':25,'Y':20,'Z':17}
    
    var letters = msg.split("");
    var sum = _.reduce(letters, function(num, ltr){ 
        return (liber777_kaballah[ltr.toUpperCase()]||0) + num; 
    }, 0);
	num = (Math.pow(10,Math.floor((sum-1)/9))) * (((sum-1)%9)+1); 
	return Math.round(numberParts(num,10).mantissa);
}

function god_speaking(shrine, god, action, msg, flag_record_shrine, flag_compute_gematria){
    function gmsg(_msg){
        // add decoded gematria equivalence
        if(flag_compute_gematria)
            _msg += " {" + kaballah(shrine,god,_msg) + "}"; 
        log('GOD\'S MESSAGE :: SHRINE:'+ shrine['class'] + '|GOD:'+ shrine['god'] +'|ACTION:' + shrine['action'] + '|PAYLOAD:' + _msg);
        var god_cipher_off = $('#god_cipher_off_switch').prop('checked');

        var el_msg = $('<span/>', {'class': 'fire '+ (!god_cipher_off ? 'god-msg ' : 'god-msg-plain ') + shrine['action']}).text(_msg).css({'left': Math.random() * $('.shrine.' + shrine['class']).width() * 0.9, 'bottom':$('.shrine.' + shrine['class']).height()});
        $('.shrine.' + shrine['class']).append(el_msg);
        var dur = 666 * 66;
        $(el_msg).stop().animate({'bottom': '110'}, Math.floor(dur * 0.5)).fadeTo( dur, 0 , function() {
            el_msg.remove();
        });

        return _msg;

    }
    if(msg){
        var _msg = gmsg(msg);
        if(flag_record_shrine){
            record(shrine,false,_msg);
        }
    }else {
        getRandomDigits(1 + Math.ceil(Math.random()*8),0,god_alphabet.length - 1, function(n_list){
            var _msg = randomMessage(n_list);
            var _msg = gmsg(_msg);
            if(flag_record_shrine){
                record(shrine,false,_msg);
            }
        });
    }
}

function get_setting(key, default_val){
    var val = localStorage.getItem(key);
    return  val? JSON.parse(val): default_val;
}
function set_setting(key, val){
    return localStorage.setItem(key,JSON.stringify(val));
}

$(document).ready(function(){

    // only act on the shrine after it has been fully loaded...
    $(document).on('Shrine-Ready', function() {

        if(god_alphabet == null){
            var list = 'etaoinsrhdlucmfywgpbvkxqjz'.split('');
            var frequencies = [12.0,9.10,8.12,7.68,7.31,6.95,6.28,6.02,5.92,4.32,3.98,2.88,2.71,2.61,2.30,2.11,2.09,2.03,1.82,1.49,1.11,0.69,0.17,0.11,0.10,0.07];
            //var freq_sum = _.reduce(frequencies, function(memo, num){ return memo + num; }, 0);
            var weight = frequencies; //frequencies.map(function(n){ return n / freq_sum });
            var weighed_list = generateWeighedList(list, weight);
            god_alphabet = _.shuffle(weighed_list);
        }

        SOUND_PLAYERS = {
            'fire': new Howl({ src: [SOUND_RES['fire']], loop: true, }),
            'GODS': {}
        }

        _.keys(SOUND_RES['GODS']).map(function(god){ 
            var d = {}; 
            d[god] = SOUND_RES['GODS'][god].map(function(file){ 
                // for lazy loading...
                var loadPlayer = function(){
                    return new Howl({ src: [file], format: ['mp3'], loop: true }); 
                };
                return loadPlayer;
            });
            SOUND_PLAYERS['GODS'] = _.extend(SOUND_PLAYERS['GODS'], d);
        });

        var flag_compute_gematria = get_setting('flag_compute_gematria', false);
        var flag_record_shrine = get_setting('flag_record_shrine', false);
        var flag_mute_all = get_setting('flag_mute_all', false);
        var flag_play_music = get_setting('flag_play_music', false);
        var flag_play_fire = get_setting('flag_play_fire', true);

        var active_shrine = 'default', active_god = null, active_action = null;

        var shrines = {
            'default': {
                'class': 'default',
                'god': 'GOD',
                'action': 'COMMUNE'
            }

        }

        // know when to play music, what music to play, and when to go silent...
        var active_music = null;
        function toggle_sounds(){
            if(flag_play_fire) {
                SOUNDS.shrine['default']['fire'].play();
            }else {
                SOUNDS.shrine['default']['fire'].pause();
            }

            if(flag_play_music) {
                if(active_music){
                    active_music.play();
                }
                else
                    load_music('GOD'); // default...
            } else {
                if(active_music){
                    active_music.pause();
                }

            }
        }
        function load_music(god){
            var players = SOUND_PLAYERS['GODS'][god];

            if(!players)
                players = SOUND_PLAYERS['GODS']['GOD'];

            if(!active_music){
                active_music = players[Math.floor(Math.random()*players.length)]();
            }
            else {
                active_music.stop();
                active_music = players[Math.floor(Math.random()*players.length)]();
            }

            if(!flag_play_music)
                return;

            if(active_music){
                active_music.play();
            }
        }

        $('.choose-list a').click(function(){
            var choice = $(this).text();
            var selector = $(this).closest('ul');
            var category = selector.data('choose');
            var shrine = selector.data('shrine');
            var trigger = $(this).closest('ul').siblings('button')
                trigger.find('.chosen').text(choice);
            var god_speak_interval = null;
            log('CHOICE|CATEGORY:' + category + '|CHOICE:' + choice);
            switch(category){
                case 'shrine-default-god': {
                    var god = $('.shrine.'+shrine).data('god');
                    if(god != choice){
                        var cipher = $('.shrine.'+shrine).find('.cipher').clone();
                        $('.shrine.'+shrine).empty();// resets shrine...
                        $('.shrine.'+shrine).removeClass('god-'+classify(god));
                        $('.cipher.'+shrine).removeClass('god-'+classify(god));
                        shrines['default']['god'] = choice;
                        $('.shrine.'+shrine).data('god',choice);
                        $('.shrine.'+shrine).addClass('god-'+classify(choice));
                        cipher.text(mantra(classify(choice)));
                        $('.shrine.'+shrine).append(cipher);
                        $('.cipher.'+shrine).addClass('god-'+classify(choice));
                        load_music(classify(choice));
                        $('.shrine-in:first').focus();
                        active_god = classify(choice);
                    }
                    break;
                }
                case 'shrine-default-action': {
                    var action = $('.shrine.'+shrine).data('action');
                    if(action != choice){
                        $('.shrine.'+shrine).removeClass('action-'+classify(action));
                        shrines['default']['action'] = choice;
                        $('.shrine.'+shrine).data('action',choice);
                        $('.shrine.'+shrine).addClass('action-'+classify(choice));
                        $('.shrine-in:first').focus();
                        active_action = classify(choice);
                        if(active_action != 'DIVINE'){
                            $('.shrine-in:first').attr({'placeholder': "Speak what's on your mind... decipher the response."})
                        }else {
                            $('.shrine-in:first').attr({'placeholder': 'Access entities, directly from within...'})
                        }
                    }
                    break;
                }

            }
        });

        var i_speak = true;
        $('.shrine-in').enterKey(function(){
            var msg = $(this).val();
            var target_shrine = $(this).data('shrine');
            log('MSG|SHRINE: ' + target_shrine + '|MSG:' + msg);

            var sp = process_shrine(shrines[target_shrine], msg, i_speak, flag_record_shrine, flag_compute_gematria);
            i_speak = active_action == 'DIVINE'? sp : true;

            if(active_action != 'DIVINE'){
                var delay2 = Math.random() * 9 * 10e2;
                setTimeout(function(){
                    god_speaking(shrines[active_shrine], active_god, active_action, null, flag_record_shrine, flag_compute_gematria);
                }, delay2);
            }

            $(this).val(null);

        });


        // know when to play music, what music to play, and when to go silent...
        $('#collapse-shrine-shrine').on('hidden.bs.collapse', function (e) {

            if(flag_play_fire) {
                SOUNDS.shrine['default']['fire'].pause();
            }

            if(flag_play_music) {
                if(active_music){
                    active_music.pause();
                }
            }
        });
        $('#collapse-shrine-shrine').on('shown.bs.collapse', function (e) {
            $('.shrine-in:first').focus();
            toggle_sounds();

        });
        $('.shrine-in:first').focus();

        $('#music_switch').change(function(){
            flag_play_music = $(this).prop('checked');
            set_setting('flag_play_music', flag_play_music);
        });
        $('#music_switch').prop('checked', flag_play_music);
        $('#fire_switch').change(function(){
            flag_play_fire = $(this).prop('checked');
            set_setting('flag_play_fire', flag_play_fire);
        });
        $('#fire_switch').prop('checked', flag_play_fire);


        $('#btn-toggle-shrine-music').click(function(){
            load_music(active_god);
        });

        function toggle_flag_ui_mute(){
            $('#btn-mute-shrine').removeClass(!flag_mute_all?'btn-default':'btn-warning');
            $('#btn-mute-shrine').addClass(flag_mute_all?'btn-default':'btn-warning');
            $('#btn-mute-shrine').html(!flag_mute_all?'<i class="fa fa-volume-up"></i>':'<i class="fa fa-volume-off"></i>');
            $('#btn-mute-shrine').attr({'title': flag_mute_all?'play sounds in shrine':'mute all sounds in shrine' });
        }
        $('#btn-mute-shrine').click(function(){
            flag_mute_all = !flag_mute_all;
            set_setting('flag_mute_all', flag_mute_all);
            toggle_flag_ui_mute();

            // this flag overrides what's in the other sound flags...
            flag_play_music = !flag_mute_all;
            flag_play_fire = !flag_mute_all;
            $('#music_switch').prop('checked', flag_play_music).trigger('change');
            $('#fire_switch').prop('checked', flag_play_fire).trigger('change');
            set_setting('flag_play_fire', flag_play_fire);
            set_setting('flag_play_music', flag_play_music);

            toggle_sounds();
        });
        toggle_flag_ui_mute();

        function toggle_flag_ui_record(){
            $('#btn-shrine-record').removeClass(flag_record_shrine?'btn-default':'btn-danger');
            $('#btn-shrine-record').addClass(!flag_record_shrine?'btn-default':'btn-danger');
            $('#btn-shrine-record').html(flag_record_shrine?'<i class="fa fa-dot-circle-o"></i>':'<i class="fa fa-circle-o"></i>');
            $('#btn-shrine-record').attr({'title': !flag_record_shrine?'record your shrine transactions':"don't record any shrine transactions" });
        }

        $('#btn-shrine-record').click(function(){
            flag_record_shrine = !flag_record_shrine;
            set_setting('flag_record_shrine', flag_record_shrine);
            toggle_flag_ui_record();
        });
        toggle_flag_ui_record();


        function toggle_flag_compute_gematria(){
            $('#btn-enable-gematria').removeClass(flag_compute_gematria?'btn-default':'btn-success');
            $('#btn-enable-gematria').addClass(flag_compute_gematria?'btn-success':'btn-default');
            $('#btn-enable-gematria').attr({'title': !flag_compute_gematria?'enable computing of gematria (kaballah)':"disable gematria computations" });
        }

        $('#btn-enable-gematria').click(function(){
            flag_compute_gematria = !flag_compute_gematria;
            set_setting('flag_compute_gematria', flag_compute_gematria);
            toggle_flag_compute_gematria();
        });
        toggle_flag_compute_gematria();

        function toggle_fullscreen_shrine(on){
            if(on){
                $('#btn-enable-fullscreen').removeClass('btn-default');
                $('#btn-enable-fullscreen').addClass('btn-success');
                $('#panel-shrine').addClass('fullscreen');
            }else {
                $('#btn-enable-fullscreen').addClass('btn-default');
                $('#btn-enable-fullscreen').removeClass('btn-success');
                $('#panel-shrine').removeClass('fullscreen');
            }
        }
        var flag_fullscreen_shrine = false;
        $('#btn-enable-fullscreen').click(function(){
            flag_fullscreen_shrine = !flag_fullscreen_shrine;
            toggle_fullscreen_shrine(flag_fullscreen_shrine);
        });

        $('#btn-shrine-records').click(function(){
            show_shrine_records();
        });
        $('#btn-clear-shrine-records').click(function(){
            clear_shrine_records();
        });

        $('#god_cipher_off_switch').change(function(){
            checked = $(this).prop('checked');
            set_setting('flag_god_cipher_off', checked);
        });
        // initially...
        $('#god_cipher_off_switch').prop('checked', get_setting('flag_god_cipher_off', false));


        // hmm, no cheating...
        $(".shrine").on("contextmenu",function(e){
            return false;
        });
        $(".shrine").bind('cut copy paste', function (e) {
            e.preventDefault();
        });

        toggle_sounds();

    });
});

// just a plugin (src: SO)
$.fn.enterKey = function(fnc) {
    return this.each(function() {
        $(this).keypress(function(ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
    })
}

/* load stuff using head... */
// the page using shrine should override this global var to point to a reasonable
// place where shrine would find its dynamically loaded resources - e.g shrine.css
// if you have hosted the whole of shrine's dependencies: js,css,vendor relative to this
// script and the containing page, you don't have have to set this, otherwise, set it...
if(window.ShrineBaseURI == undefined){
    //meaning, shrine content will be loaded relative to the top-level domain
    window.ShrineBaseURI = ''; 
}

if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    log("Shrine's running locally...");

    head.load([	
            //window.ShrineBaseURI + "vendor/jquery/js/jquery.min.js", /* JQuery JS */
            window.ShrineBaseURI + "vendor/howler/js/howler.min.js", /* Howler JS */
            window.ShrineBaseURI + "vendor/underscore/js/underscore-min.js", /* Underscore JS */
            window.ShrineBaseURI + "vendor/bootstrap/css/bootstrap.min.css", /* Bootstrap CSS */
            window.ShrineBaseURI + "vendor/bootstrap/js/bootstrap.min.js", /* Bootstrap JS */
            window.ShrineBaseURI + "vendor/fontawesome/css/font-awesome.min.css", /* Font Awesome CSS */
            window.ShrineBaseURI + "js/elite/namon.js", /* NAMON */
            window.ShrineBaseURI + "js/elite/namon.css", /* NAMON */
    ], function() {
        $(document).trigger('Shrine-Ready');
        log("Shrine is all ready now...");
    });
}else {
    log("Shrine's running remotely...");

    head.load([// our own css
            //"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js", /* JQuery JS */
            "https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.1/howler.min.js", /* Howler JS */
            "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js", /* Underscore JS */
            "http://bootswatch.com/darkly/bootstrap.min.css",
            "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js", /* Bootstrap JS */
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", /* Font Awesome CSS*/
    ], function() {
        $(document).trigger('Shrine-Ready');
        log("Shrine is all ready now...");
    });
}


if ("undefined" !== typeof myhkplayer && 0 >= document.location.host.indexOf("myhkw.cn")) throw Error("\u660e\u6708\u6d69\u7a7a\u97f3\u4e50\u64ad\u653e\u5668\u5df2\u52a0\u8f7d\uff0c\u7981\u6b62\u91cd\u590d\u6dfb\u52a0\uff01");
if ("undefined" === typeof jQuery) throw console.log("\n %c \u660e\u6708\u6d69\u7a7a\u97f3\u4e50\u64ad\u653e\u5668\u63d0\u793a\uff1a %c \u7f51\u7ad9\u6ca1\u6709\u52a0\u8f7djQuery\uff01\n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;"), Error("\n\u89e3\u51b3\u65b9\u6cd51\uff1a\u8bf7\u767b\u5f55\u660e\u6708\u6d69\u7a7a\u97f3\u4e50\u64ad\u653e\u5668\u540e\u53f0\uff0c\u6253\u5f00\u64ad\u653e\u5668\u8bbe\u7f6e\u3010\u52a0\u8f7djQuery\u3011\n\u89e3\u51b3\u65b9\u6cd52\uff1a\u6253\u5f00\u7f51\u5740\uff1ahttps://www.bootcdn.cn/jquery/ \u627e\u5230\u3010jquery.min.js\u3011\uff0c\u590d\u5236<script>\u6807\u7b7e\uff0c\u6dfb\u52a0\u5230\u64ad\u653e\u5668\u4ee3\u7801\u4e0a\u65b9\u5373\u53ef\u3002");
(function($) {
    eval(function(p, a, c, k, e, r) {
        e = function(c) {
            return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if (!''.replace(/^/, String)) {
            while (c--) r[e(c)] = k[c] || e(c);
            k = [function(e) {
                return r[e]
            }];
            e = function() {
                return '\\w+'
            };
            c = 1
        };
        while (c--)
            if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p
    }('9.1h=[];1i.1e.10({1f:2(){1g(4.O)1o(6 c 1j $(4).E("C"))"8"==c&&$(4).E("C").8.A()},1m:2(){6 c={8:$(4),j:$(5),14:1n,W:!1,D:!1,B:!1,y:0,z:0};Y.O&&(c=$.10({},c,Y[0]));c.8.E("C",c);6 e=$(4)[0],a=c.8,k=0,l=0,g=c.14;"1l"==$(4).Q("S")&&$(4).Q("S","1k");6 m=0,n=0;c.W?(a.o=2(b){m=q.r(c.j.16(),c.y);n=q.r(c.j.18(),c.z);b=19.1a[0];k=b.i-e.P;l=b.x-e.R;a.7("G",a.t);a.7("F",a.u);H!1},a.t=2(b){I=19.1a[0];b=I.i-k;6 d=I.i-l,f=e.11,h=e.13;0>b?b=0:b+f>m&&(b=m-f);0>d?d=0:d+h>n&&(d=n-h);c.D||(e.v.15=d+"w");c.B||(e.v.17=b+"w");g&&g(a[0],b,d,f,h);H!1},a.u=2(b){a.3("G");a.3("F");1d=!1;l=k=0;g&&g(a[0]);H!1},a.N=2(){a.7("1b",a.o)},a.A=2(){a.3("1b");a.3("G");a.3("F")}):(a.o=2(b){m=q.r(c.j.16(),c.y);n=q.r(c.j.18(),c.z);k=b.i-e.P;l=b.x-e.R;$(5).7("M",a.t);$(5).7("L",a.u);a[0].12?a[0].12():9.Z&&9.Z(s.X|s.V);b.K();b.J()},a.t=2(b){6 d=b.i-k,f=b.x-l,h=e.11,p=e.13;0>d?d=0:d+h>m&&(d=m-h);0>f?f=0:f+p>n&&(f=n-p);c.D||(e.v.15=f+"w");c.B||(e.v.17=d+"w");g&&g(a[0],d,f,h,p);b.K();b.J()},a.u=2(b){a[0].T?a[0].T():9.U&&9.U(s.X|s.V);$(5).3("M");$(5).3("L");l=k=0;g&&g(a[0]);b.K();b.J()},a.N=2(){a.7("1c",a.o)},a.A=2(){a.3("1c");$(5).3("M");$(5).3("L")});a.N()}});', 62, 87, '||function|off|this|document|var|on|dragObj|window|||||||||clientX|parentObj|||||__start||Math|max|Event|__move|__end|style|px|clientY|maxWidth|maxHeight|dostop|lockY|options|lockX|data|touchend|touchmove|return|touch|preventDefault|stopPropagation|mouseup|mousemove|dostart|length|offsetLeft|css|offsetTop|position|releaseCapture|releaseEvents|MOUSEUP|isPhone|MOUSEMOVE|arguments|captureEvents|extend|offsetWidth|setCapture|offsetHeight|callback|top|width|left|height|event|targetTouches|touchstart|mousedown|_flag|fn|DragClose|if|timer|jQuery|in|relative|static|Drag|null|for'.split('|'), 0, {}))
})(jQuery);
/*mousewheel plugin*/
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof exports === "object") {
            module.exports = a
        } else {
            a(jQuery)
        }
    }
}(function(c) {
    var d = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        k = ("onwheel" in document || document.documentMode >= 9) ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        h = Array.prototype.slice,
        j, b;
    if (c.event.fixHooks) {
        for (var e = d.length; e;) {
            c.event.fixHooks[d[--e]] = c.event.mouseHooks
        }
    }
    var f = c.event.special.mousewheel = {
        version: "3.1.9",
        setup: function() {
            if (this.addEventListener) {
                for (var m = k.length; m;) {
                    this.addEventListener(k[--m], l, false)
                }
            } else {
                this.onmousewheel = l
            }
            c.data(this, "mousewheel-line-height", f.getLineHeight(this));
            c.data(this, "mousewheel-page-height", f.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var m = k.length; m;) {
                    this.removeEventListener(k[--m], l, false)
                }
            } else {
                this.onmousewheel = null
            }
        },
        getLineHeight: function(i) {
            return parseInt(c(i)["offsetParent" in c.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
        },
        getPageHeight: function(i) {
            return c(i).height()
        },
        settings: {
            adjustOldDeltas: true
        }
    };
    c.fn.extend({
        mousewheel: function(i) {
            return i ? this.bind("mousewheel", i) : this.trigger("mousewheel")
        },
        unmousewheel: function(i) {
            return this.unbind("mousewheel", i)
        }
    });

    function l(i) {
        var n = i || window.event,
            r = h.call(arguments, 1),
            t = 0,
            p = 0,
            o = 0,
            q = 0;
        i = c.event.fix(n);
        i.type = "mousewheel";
        if ("detail" in n) {
            o = n.detail * -1
        }
        if ("wheelDelta" in n) {
            o = n.wheelDelta
        }
        if ("wheelDeltaY" in n) {
            o = n.wheelDeltaY
        }
        if ("wheelDeltaX" in n) {
            p = n.wheelDeltaX * -1
        }
        if ("axis" in n && n.axis === n.HORIZONTAL_AXIS) {
            p = o * -1;
            o = 0
        }
        t = o === 0 ? p : o;
        if ("deltaY" in n) {
            o = n.deltaY * -1;
            t = o
        }
        if ("deltaX" in n) {
            p = n.deltaX;
            if (o === 0) {
                t = p * -1
            }
        }
        if (o === 0 && p === 0) {
            return
        }
        if (n.deltaMode === 1) {
            var s = c.data(this, "mousewheel-line-height");
            t *= s;
            o *= s;
            p *= s
        } else {
            if (n.deltaMode === 2) {
                var m = c.data(this, "mousewheel-page-height");
                t *= m;
                o *= m;
                p *= m
            }
        }
        q = Math.max(Math.abs(o), Math.abs(p));
        if (!b || q < b) {
            b = q;
            if (a(n, q)) {
                b /= 40
            }
        }
        if (a(n, q)) {
            t /= 40;
            p /= 40;
            o /= 40
        }
        t = Math[t >= 1 ? "floor" : "ceil"](t / b);
        p = Math[p >= 1 ? "floor" : "ceil"](p / b);
        o = Math[o >= 1 ? "floor" : "ceil"](o / b);
        i.deltaX = p;
        i.deltaY = o;
        i.deltaFactor = b;
        i.deltaMode = 0;
        r.unshift(i, t, p, o);
        if (j) {
            clearTimeout(j)
        }
        j = setTimeout(g, 200);
        return (c.event.dispatch || c.event.handle).apply(this, r)
    }

    function g() {
        b = null
    }

    function a(m, i) {
        return f.settings.adjustOldDeltas && m.type === "mousewheel" && i % 120 === 0
    }
}));
/*scrollbar plugin*/
(function(c) {
    var b = {
            init: function(e) {
                var f = {
                        set_width: false,
                        set_height: false,
                        horizontalScroll: false,
                        scrollInertia: 950,
                        mouseWheel: true,
                        mouseWheelPixels: "auto",
                        autoDraggerLength: true,
                        autoHideScrollbar: false,
                        alwaysShowScrollbar: false,
                        snapAmount: null,
                        snapOffset: 0,
                        scrollButtons: {
                            enable: false,
                            scrollType: "continuous",
                            scrollSpeed: "auto",
                            scrollAmount: 40
                        },
                        advanced: {
                            updateOnBrowserResize: true,
                            updateOnContentResize: false,
                            autoExpandHorizontalScroll: false,
                            autoScrollOnFocus: true,
                            normalizeMouseWheelDelta: false
                        },
                        contentTouchScroll: true,
                        callbacks: {
                            onScrollStart: function() {},
                            onScroll: function() {},
                            onTotalScroll: function() {},
                            onTotalScrollBack: function() {},
                            onTotalScrollOffset: 0,
                            onTotalScrollBackOffset: 0,
                            whileScrolling: function() {}
                        },
                        theme: "light"
                    },
                    e = c.extend(true, f, e);
                return this.each(function() {
                    var m = c(this);
                    if (e.set_width) {
                        m.css("width", e.set_width)
                    }
                    if (e.set_height) {
                        m.css("height", e.set_height)
                    }
                    if (!c(document).data("mCustomScrollbar-index")) {
                        c(document).data("mCustomScrollbar-index", "1")
                    } else {
                        var t = parseInt(c(document).data("mCustomScrollbar-index"));
                        c(document).data("mCustomScrollbar-index", t + 1)
                    }
                    m.wrapInner("<div class='mCustomScrollBox mCS-" + e.theme + "' id='mCSB_" + c(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_" + c(document).data("mCustomScrollbar-index"));
                    var g = m.children(".mCustomScrollBox");
                    if (e.horizontalScroll) {
                        g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
                        var k = g.children(".mCSB_h_wrapper");
                        k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({
                            width: k.children().outerWidth(),
                            position: "relative"
                        }).unwrap()
                    } else {
                        g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")
                    }
                    var o = g.children(".mCSB_container");
                    if (c.support.touch) {
                        o.addClass("mCS_touch")
                    }
                    o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
                    var l = g.children(".mCSB_scrollTools"),
                        h = l.children(".mCSB_draggerContainer"),
                        q = h.children(".mCSB_dragger");
                    if (e.horizontalScroll) {
                        q.data("minDraggerWidth", q.width())
                    } else {
                        q.data("minDraggerHeight", q.height())
                    }
                    if (e.scrollButtons.enable) {
                        if (e.horizontalScroll) {
                            l.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>")
                        } else {
                            l.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")
                        }
                    }
                    g.bind("scroll", function() {
                        if (!m.is(".mCS_disabled")) {
                            g.scrollTop(0).scrollLeft(0)
                        }
                    });
                    m.data({
                        mCS_Init: true,
                        mCustomScrollbarIndex: c(document).data("mCustomScrollbar-index"),
                        horizontalScroll: e.horizontalScroll,
                        scrollInertia: e.scrollInertia,
                        scrollEasing: "mcsEaseOut",
                        mouseWheel: e.mouseWheel,
                        mouseWheelPixels: e.mouseWheelPixels,
                        autoDraggerLength: e.autoDraggerLength,
                        autoHideScrollbar: e.autoHideScrollbar,
                        alwaysShowScrollbar: e.alwaysShowScrollbar,
                        snapAmount: e.snapAmount,
                        snapOffset: e.snapOffset,
                        scrollButtons_enable: e.scrollButtons.enable,
                        scrollButtons_scrollType: e.scrollButtons.scrollType,
                        scrollButtons_scrollSpeed: e.scrollButtons.scrollSpeed,
                        scrollButtons_scrollAmount: e.scrollButtons.scrollAmount,
                        autoExpandHorizontalScroll: e.advanced.autoExpandHorizontalScroll,
                        autoScrollOnFocus: e.advanced.autoScrollOnFocus,
                        normalizeMouseWheelDelta: e.advanced.normalizeMouseWheelDelta,
                        contentTouchScroll: e.contentTouchScroll,
                        onScrollStart_Callback: e.callbacks.onScrollStart,
                        onScroll_Callback: e.callbacks.onScroll,
                        onTotalScroll_Callback: e.callbacks.onTotalScroll,
                        onTotalScrollBack_Callback: e.callbacks.onTotalScrollBack,
                        onTotalScroll_Offset: e.callbacks.onTotalScrollOffset,
                        onTotalScrollBack_Offset: e.callbacks.onTotalScrollBackOffset,
                        whileScrolling_Callback: e.callbacks.whileScrolling,
                        bindEvent_scrollbar_drag: false,
                        bindEvent_content_touch: false,
                        bindEvent_scrollbar_click: false,
                        bindEvent_mousewheel: false,
                        bindEvent_buttonsContinuous_y: false,
                        bindEvent_buttonsContinuous_x: false,
                        bindEvent_buttonsPixels_y: false,
                        bindEvent_buttonsPixels_x: false,
                        bindEvent_focusin: false,
                        bindEvent_autoHideScrollbar: false,
                        mCSB_buttonScrollRight: false,
                        mCSB_buttonScrollLeft: false,
                        mCSB_buttonScrollDown: false,
                        mCSB_buttonScrollUp: false
                    });
                    if (e.horizontalScroll) {
                        if (m.css("max-width") !== "none") {
                            if (!e.advanced.updateOnContentResize) {
                                e.advanced.updateOnContentResize = true
                            }
                        }
                    } else {
                        if (m.css("max-height") !== "none") {
                            var s = false,
                                r = parseInt(m.css("max-height"));
                            if (m.css("max-height").indexOf("%") >= 0) {
                                s = r, r = m.parent().height() * s / 100
                            }
                            m.css("overflow", "hidden");
                            g.css("max-height", r)
                        }
                    }
                    m.mCustomScrollbar("update");
                    if (e.advanced.updateOnBrowserResize) {
                        var i, j = c(window).width(),
                            u = c(window).height();
                        c(window).bind("resize." + m.data("mCustomScrollbarIndex"), function() {
                            if (i) {
                                clearTimeout(i)
                            }
                            i = setTimeout(function() {
                                if (!m.is(".mCS_disabled") && !m.is(".mCS_destroyed")) {
                                    var w = c(window).width(),
                                        v = c(window).height();
                                    if (j !== w || u !== v) {
                                        if (m.css("max-height") !== "none" && s) {
                                            g.css("max-height", m.parent().height() * s / 100)
                                        }
                                        m.mCustomScrollbar("update");
                                        j = w;
                                        u = v
                                    }
                                }
                            }, 150)
                        })
                    }
                    if (e.advanced.updateOnContentResize) {
                        var p;
                        if (e.horizontalScroll) {
                            var n = o.outerWidth()
                        } else {
                            var n = o.outerHeight()
                        }
                        p = setInterval(function() {
                            if (e.horizontalScroll) {
                                if (e.advanced.autoExpandHorizontalScroll) {
                                    o.css({
                                        position: "absolute",
                                        width: "auto"
                                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                        width: o.outerWidth(),
                                        position: "relative"
                                    }).unwrap()
                                }
                                var v = o.outerWidth()
                            } else {
                                var v = o.outerHeight()
                            }
                            if (v != n) {
                                m.mCustomScrollbar("update");
                                n = v
                            }
                        }, 300)
                    }
                })
            },
            update: function() {
                var n = c(this),
                    k = n.children(".mCustomScrollBox"),
                    q = k.children(".mCSB_container");
                q.removeClass("mCS_no_scrollbar");
                n.removeClass("mCS_disabled mCS_destroyed");
                k.scrollTop(0).scrollLeft(0);
                var y = k.children(".mCSB_scrollTools"),
                    o = y.children(".mCSB_draggerContainer"),
                    m = o.children(".mCSB_dragger");
                if (n.data("horizontalScroll")) {
                    var A = y.children(".mCSB_buttonLeft"),
                        t = y.children(".mCSB_buttonRight"),
                        f = k.width();
                    if (n.data("autoExpandHorizontalScroll")) {
                        q.css({
                            position: "absolute",
                            width: "auto"
                        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                            width: q.outerWidth(),
                            position: "relative"
                        }).unwrap()
                    }
                    var z = q.outerWidth()
                } else {
                    var w = y.children(".mCSB_buttonUp"),
                        g = y.children(".mCSB_buttonDown"),
                        r = k.height(),
                        i = q.outerHeight()
                }
                if (i > r && !n.data("horizontalScroll")) {
                    y.css("display", "block");
                    var s = o.height();
                    if (n.data("autoDraggerLength")) {
                        var u = Math.round(r / i * s),
                            l = m.data("minDraggerHeight");
                        if (u <= l) {
                            m.css({
                                height: l
                            })
                        } else {
                            if (u >= s - 10) {
                                var p = s - 10;
                                m.css({
                                    height: p
                                })
                            } else {
                                m.css({
                                    height: u
                                })
                            }
                        }
                        m.children(".mCSB_dragger_bar").css({
                            "line-height": m.height() + "px"
                        })
                    }
                    var B = m.height(),
                        x = (i - r) / (s - B);
                    n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
                    var D = Math.abs(q.position().top);
                    n.mCustomScrollbar("scrollTo", D, {
                        scrollInertia: 0,
                        trigger: "internal"
                    })
                } else {
                    if (z > f && n.data("horizontalScroll")) {
                        y.css("display", "block");
                        var h = o.width();
                        if (n.data("autoDraggerLength")) {
                            var j = Math.round(f / z * h),
                                C = m.data("minDraggerWidth");
                            if (j <= C) {
                                m.css({
                                    width: C
                                })
                            } else {
                                if (j >= h - 10) {
                                    var e = h - 10;
                                    m.css({
                                        width: e
                                    })
                                } else {
                                    m.css({
                                        width: j
                                    })
                                }
                            }
                        }
                        var v = m.width(),
                            x = (z - f) / (h - v);
                        n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
                        var D = Math.abs(q.position().left);
                        n.mCustomScrollbar("scrollTo", D, {
                            scrollInertia: 0,
                            trigger: "internal"
                        })
                    } else {
                        k.unbind("mousewheel focusin");
                        if (n.data("horizontalScroll")) {
                            m.add(q).css("left", 0)
                        } else {
                            m.add(q).css("top", 0)
                        }
                        if (n.data("alwaysShowScrollbar")) {
                            if (!n.data("horizontalScroll")) {
                                m.css({
                                    height: o.height()
                                })
                            } else {
                                if (n.data("horizontalScroll")) {
                                    m.css({
                                        width: o.width()
                                    })
                                }
                            }
                        } else {
                            y.css("display", "none");
                            q.addClass("mCS_no_scrollbar")
                        }
                        n.data({
                            bindEvent_mousewheel: false,
                            bindEvent_focusin: false
                        })
                    }
                }
            },
            scrolling: function(i, q, n, k, A, f, D, w) {
                var l = c(this);
                if (!l.data("bindEvent_scrollbar_drag")) {
                    var o, p, C, z, e;
                    if (c.support.pointer) {
                        C = "pointerdown";
                        z = "pointermove";
                        e = "pointerup"
                    } else {
                        if (c.support.msPointer) {
                            C = "MSPointerDown";
                            z = "MSPointerMove";
                            e = "MSPointerUp"
                        }
                    }
                    if (c.support.pointer || c.support.msPointer) {
                        k.bind(C, function(K) {
                            K.preventDefault();
                            l.data({
                                on_drag: true
                            });
                            k.addClass("mCSB_dragger_onDrag");
                            var J = c(this),
                                M = J.offset(),
                                I = K.originalEvent.pageX - M.left,
                                L = K.originalEvent.pageY - M.top;
                            if (I < J.width() && I > 0 && L < J.height() && L > 0) {
                                o = L;
                                p = I
                            }
                        });
                        c(document).bind(z + "." + l.data("mCustomScrollbarIndex"), function(K) {
                            K.preventDefault();
                            if (l.data("on_drag")) {
                                var J = k,
                                    M = J.offset(),
                                    I = K.originalEvent.pageX - M.left,
                                    L = K.originalEvent.pageY - M.top;
                                G(o, p, L, I)
                            }
                        }).bind(e + "." + l.data("mCustomScrollbarIndex"), function(x) {
                            l.data({
                                on_drag: false
                            });
                            k.removeClass("mCSB_dragger_onDrag")
                        })
                    } else {
                        k.bind("mousedown touchstart", function(K) {
                            K.preventDefault();
                            K.stopImmediatePropagation();
                            var J = c(this),
                                N = J.offset(),
                                I, M;
                            if (K.type === "touchstart") {
                                var L = K.originalEvent.touches[0] || K.originalEvent.changedTouches[0];
                                I = L.pageX - N.left;
                                M = L.pageY - N.top
                            } else {
                                l.data({
                                    on_drag: true
                                });
                                k.addClass("mCSB_dragger_onDrag");
                                I = K.pageX - N.left;
                                M = K.pageY - N.top
                            }
                            if (I < J.width() && I > 0 && M < J.height() && M > 0) {
                                o = M;
                                p = I
                            }
                        }).bind("touchmove", function(K) {
                            K.preventDefault();
                            K.stopImmediatePropagation();
                            var N = K.originalEvent.touches[0] || K.originalEvent.changedTouches[0],
                                J = c(this),
                                M = J.offset(),
                                I = N.pageX - M.left,
                                L = N.pageY - M.top;
                            G(o, p, L, I)
                        });
                        c(document).bind("mousemove." + l.data("mCustomScrollbarIndex"), function(K) {
                            if (l.data("on_drag")) {
                                var J = k,
                                    M = J.offset(),
                                    I = K.pageX - M.left,
                                    L = K.pageY - M.top;
                                G(o, p, L, I)
                            }
                        }).bind("mouseup." + l.data("mCustomScrollbarIndex"), function(x) {
                            l.data({
                                on_drag: false
                            });
                            k.removeClass("mCSB_dragger_onDrag")
                        })
                    }
                    l.data({
                        bindEvent_scrollbar_drag: true
                    })
                }

                function G(J, K, L, I) {
                    if (l.data("horizontalScroll")) {
                        l.mCustomScrollbar("scrollTo", (k.position().left - (K)) + I, {
                            moveDragger: true,
                            trigger: "internal"
                        })
                    } else {
                        l.mCustomScrollbar("scrollTo", (k.position().top - (J)) + L, {
                            moveDragger: true,
                            trigger: "internal"
                        })
                    }
                }
                if (c.support.touch && l.data("contentTouchScroll")) {
                    if (!l.data("bindEvent_content_touch")) {
                        var m, E, s, t, v, F, H;
                        q.bind("touchstart", function(x) {
                            x.stopImmediatePropagation();
                            m = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                            E = c(this);
                            s = E.offset();
                            v = m.pageX - s.left;
                            t = m.pageY - s.top;
                            F = t;
                            H = v
                        });
                        q.bind("touchmove", function(x) {
                            x.preventDefault();
                            x.stopImmediatePropagation();
                            m = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                            E = c(this).parent();
                            s = E.offset();
                            v = m.pageX - s.left;
                            t = m.pageY - s.top;
                            if (l.data("horizontalScroll")) {
                                l.mCustomScrollbar("scrollTo", H - v, {
                                    trigger: "internal"
                                })
                            } else {
                                l.mCustomScrollbar("scrollTo", F - t, {
                                    trigger: "internal"
                                })
                            }
                        })
                    }
                }
                if (!l.data("bindEvent_scrollbar_click")) {
                    n.bind("click", function(I) {
                        var x = (I.pageY - n.offset().top) * l.data("scrollAmount"),
                            y = c(I.target);
                        if (l.data("horizontalScroll")) {
                            x = (I.pageX - n.offset().left) * l.data("scrollAmount")
                        }
                        if (y.hasClass("mCSB_draggerContainer") || y.hasClass("mCSB_draggerRail")) {
                            l.mCustomScrollbar("scrollTo", x, {
                                trigger: "internal",
                                scrollEasing: "draggerRailEase"
                            })
                        }
                    });
                    l.data({
                        bindEvent_scrollbar_click: true
                    })
                }
                if (l.data("mouseWheel")) {
                    if (!l.data("bindEvent_mousewheel")) {
                        i.bind("mousewheel", function(K, M) {
                            var J, I = l.data("mouseWheelPixels"),
                                x = Math.abs(q.position().top),
                                L = k.position().top,
                                y = n.height() - k.height();
                            if (l.data("normalizeMouseWheelDelta")) {
                                if (M < 0) {
                                    M = -1
                                } else {
                                    M = 1
                                }
                            }
                            if (I === "auto") {
                                I = 100 + Math.round(l.data("scrollAmount") / 2)
                            }
                            if (l.data("horizontalScroll")) {
                                L = k.position().left;
                                y = n.width() - k.width();
                                x = Math.abs(q.position().left)
                            }
                            if ((M > 0 && L !== 0) || (M < 0 && L !== y)) {
                                K.preventDefault();
                                K.stopImmediatePropagation()
                            }
                            J = x - (M * I);
                            l.mCustomScrollbar("scrollTo", J, {
                                trigger: "internal"
                            })
                        });
                        l.data({
                            bindEvent_mousewheel: true
                        })
                    }
                }
                if (l.data("scrollButtons_enable")) {
                    if (l.data("scrollButtons_scrollType") === "pixels") {
                        if (l.data("horizontalScroll")) {
                            w.add(D).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", j, h);
                            l.data({
                                bindEvent_buttonsContinuous_x: false
                            });
                            if (!l.data("bindEvent_buttonsPixels_x")) {
                                w.bind("click", function(x) {
                                    x.preventDefault();
                                    r(Math.abs(q.position().left) + l.data("scrollButtons_scrollAmount"))
                                });
                                D.bind("click", function(x) {
                                    x.preventDefault();
                                    r(Math.abs(q.position().left) - l.data("scrollButtons_scrollAmount"))
                                });
                                l.data({
                                    bindEvent_buttonsPixels_x: true
                                })
                            }
                        } else {
                            f.add(A).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend", j, h);
                            l.data({
                                bindEvent_buttonsContinuous_y: false
                            });
                            if (!l.data("bindEvent_buttonsPixels_y")) {
                                f.bind("click", function(x) {
                                    x.preventDefault();
                                    r(Math.abs(q.position().top) + l.data("scrollButtons_scrollAmount"))
                                });
                                A.bind("click", function(x) {
                                    x.preventDefault();
                                    r(Math.abs(q.position().top) - l.data("scrollButtons_scrollAmount"))
                                });
                                l.data({
                                    bindEvent_buttonsPixels_y: true
                                })
                            }
                        }

                        function r(x) {
                            if (!k.data("preventAction")) {
                                k.data("preventAction", true);
                                l.mCustomScrollbar("scrollTo", x, {
                                    trigger: "internal"
                                })
                            }
                        }
                    } else {
                        if (l.data("horizontalScroll")) {
                            w.add(D).unbind("click");
                            l.data({
                                bindEvent_buttonsPixels_x: false
                            });
                            if (!l.data("bindEvent_buttonsContinuous_x")) {
                                w.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
                                    y.preventDefault();
                                    var x = B();
                                    l.data({
                                        mCSB_buttonScrollRight: setInterval(function() {
                                            l.mCustomScrollbar("scrollTo", Math.abs(q.position().left) + x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var j = function(x) {
                                    x.preventDefault();
                                    clearInterval(l.data("mCSB_buttonScrollRight"))
                                };
                                w.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", j);
                                D.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
                                    y.preventDefault();
                                    var x = B();
                                    l.data({
                                        mCSB_buttonScrollLeft: setInterval(function() {
                                            l.mCustomScrollbar("scrollTo", Math.abs(q.position().left) - x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var h = function(x) {
                                    x.preventDefault();
                                    clearInterval(l.data("mCSB_buttonScrollLeft"))
                                };
                                D.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", h);
                                l.data({
                                    bindEvent_buttonsContinuous_x: true
                                })
                            }
                        } else {
                            f.add(A).unbind("click");
                            l.data({
                                bindEvent_buttonsPixels_y: false
                            });
                            if (!l.data("bindEvent_buttonsContinuous_y")) {
                                f.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
                                    y.preventDefault();
                                    var x = B();
                                    l.data({
                                        mCSB_buttonScrollDown: setInterval(function() {
                                            l.mCustomScrollbar("scrollTo", Math.abs(q.position().top) + x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var u = function(x) {
                                    x.preventDefault();
                                    clearInterval(l.data("mCSB_buttonScrollDown"))
                                };
                                f.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", u);
                                A.bind("mousedown touchstart MSPointerDown pointerdown", function(y) {
                                    y.preventDefault();
                                    var x = B();
                                    l.data({
                                        mCSB_buttonScrollUp: setInterval(function() {
                                            l.mCustomScrollbar("scrollTo", Math.abs(q.position().top) - x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var g = function(x) {
                                    x.preventDefault();
                                    clearInterval(l.data("mCSB_buttonScrollUp"))
                                };
                                A.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout", g);
                                l.data({
                                    bindEvent_buttonsContinuous_y: true
                                })
                            }
                        }

                        function B() {
                            var x = l.data("scrollButtons_scrollSpeed");
                            if (l.data("scrollButtons_scrollSpeed") === "auto") {
                                x = Math.round((l.data("scrollInertia") + 100) / 40)
                            }
                            return x
                        }
                    }
                }
                if (l.data("autoScrollOnFocus")) {
                    if (!l.data("bindEvent_focusin")) {
                        i.bind("focusin", function() {
                            i.scrollTop(0).scrollLeft(0);
                            var x = c(document.activeElement);
                            if (x.is("input,textarea,select,button,a[tabindex],area,object")) {
                                var J = q.position().top,
                                    y = x.position().top,
                                    I = i.height() - x.outerHeight();
                                if (l.data("horizontalScroll")) {
                                    J = q.position().left;
                                    y = x.position().left;
                                    I = i.width() - x.outerWidth()
                                }
                                if (J + y < 0 || J + y > I) {
                                    l.mCustomScrollbar("scrollTo", y, {
                                        trigger: "internal"
                                    })
                                }
                            }
                        });
                        l.data({
                            bindEvent_focusin: true
                        })
                    }
                }
                if (l.data("autoHideScrollbar") && !l.data("alwaysShowScrollbar")) {
                    if (!l.data("bindEvent_autoHideScrollbar")) {
                        i.bind("mouseenter", function(x) {
                            i.addClass("mCS-mouse-over");
                            d.showScrollbar.call(i.children(".mCSB_scrollTools"))
                        }).bind("mouseleave touchend", function(x) {
                            i.removeClass("mCS-mouse-over");
                            if (x.type === "mouseleave") {
                                d.hideScrollbar.call(i.children(".mCSB_scrollTools"))
                            }
                        });
                        l.data({
                            bindEvent_autoHideScrollbar: true
                        })
                    }
                }
            },
            scrollTo: function(e, f) {
                var i = c(this),
                    o = {
                        moveDragger: false,
                        trigger: "external",
                        callbacks: true,
                        scrollInertia: i.data("scrollInertia"),
                        scrollEasing: i.data("scrollEasing")
                    },
                    f = c.extend(o, f),
                    p, g = i.children(".mCustomScrollBox"),
                    k = g.children(".mCSB_container"),
                    r = g.children(".mCSB_scrollTools"),
                    j = r.children(".mCSB_draggerContainer"),
                    h = j.children(".mCSB_dragger"),
                    t = draggerSpeed = f.scrollInertia,
                    q, s, m, l;
                if (!k.hasClass("mCS_no_scrollbar")) {
                    i.data({
                        mCS_trigger: f.trigger
                    });
                    if (i.data("mCS_Init")) {
                        f.callbacks = false
                    }
                    if (e || e === 0) {
                        if (typeof(e) === "number") {
                            if (f.moveDragger) {
                                p = e;
                                if (i.data("horizontalScroll")) {
                                    e = h.position().left * i.data("scrollAmount")
                                } else {
                                    e = h.position().top * i.data("scrollAmount")
                                }
                                draggerSpeed = 0
                            } else {
                                p = e / i.data("scrollAmount")
                            }
                        } else {
                            if (typeof(e) === "string") {
                                var v;
                                if (e === "top") {
                                    v = 0
                                } else {
                                    if (e === "bottom" && !i.data("horizontalScroll")) {
                                        v = k.outerHeight() - g.height()
                                    } else {
                                        if (e === "left") {
                                            v = 0
                                        } else {
                                            if (e === "right" && i.data("horizontalScroll")) {
                                                v = k.outerWidth() - g.width()
                                            } else {
                                                if (e === "first") {
                                                    v = i.find(".mCSB_container").find(":first")
                                                } else {
                                                    if (e === "last") {
                                                        v = i.find(".mCSB_container").find(":last")
                                                    } else {
                                                        v = i.find(e)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (v.length === 1) {
                                    if (i.data("horizontalScroll")) {
                                        e = v.position().left
                                    } else {
                                        e = v.position().top
                                    }
                                    p = e / i.data("scrollAmount")
                                } else {
                                    p = e = v
                                }
                            }
                        }
                        if (i.data("horizontalScroll")) {
                            if (i.data("onTotalScrollBack_Offset")) {
                                s = -i.data("onTotalScrollBack_Offset")
                            }
                            if (i.data("onTotalScroll_Offset")) {
                                l = g.width() - k.outerWidth() + i.data("onTotalScroll_Offset")
                            }
                            if (p < 0) {
                                p = e = 0;
                                clearInterval(i.data("mCSB_buttonScrollLeft"));
                                if (!s) {
                                    q = true
                                }
                            } else {
                                if (p >= j.width() - h.width()) {
                                    p = j.width() - h.width();
                                    e = g.width() - k.outerWidth();
                                    clearInterval(i.data("mCSB_buttonScrollRight"));
                                    if (!l) {
                                        m = true
                                    }
                                } else {
                                    e = -e
                                }
                            }
                            var n = i.data("snapAmount");
                            if (n) {
                                e = Math.round(e / n) * n - i.data("snapOffset")
                            }
                            d.mTweenAxis.call(this, h[0], "left", Math.round(p), draggerSpeed, f.scrollEasing);
                            d.mTweenAxis.call(this, k[0], "left", Math.round(e), t, f.scrollEasing, {
                                onStart: function() {
                                    if (f.callbacks && !i.data("mCS_tweenRunning")) {
                                        u("onScrollStart")
                                    }
                                    if (i.data("autoHideScrollbar") && !i.data("alwaysShowScrollbar")) {
                                        d.showScrollbar.call(r)
                                    }
                                },
                                onUpdate: function() {
                                    if (f.callbacks) {
                                        u("whileScrolling")
                                    }
                                },
                                onComplete: function() {
                                    if (f.callbacks) {
                                        u("onScroll");
                                        if (q || (s && k.position().left >= s)) {
                                            u("onTotalScrollBack")
                                        }
                                        if (m || (l && k.position().left <= l)) {
                                            u("onTotalScroll")
                                        }
                                    }
                                    h.data("preventAction", false);
                                    i.data("mCS_tweenRunning", false);
                                    if (i.data("autoHideScrollbar") && !i.data("alwaysShowScrollbar")) {
                                        if (!g.hasClass("mCS-mouse-over")) {
                                            d.hideScrollbar.call(r)
                                        }
                                    }
                                }
                            })
                        } else {
                            if (i.data("onTotalScrollBack_Offset")) {
                                s = -i.data("onTotalScrollBack_Offset")
                            }
                            if (i.data("onTotalScroll_Offset")) {
                                l = g.height() - k.outerHeight() + i.data("onTotalScroll_Offset")
                            }
                            if (p < 0) {
                                p = e = 0;
                                clearInterval(i.data("mCSB_buttonScrollUp"));
                                if (!s) {
                                    q = true
                                }
                            } else {
                                if (p >= j.height() - h.height()) {
                                    p = j.height() - h.height();
                                    e = g.height() - k.outerHeight();
                                    clearInterval(i.data("mCSB_buttonScrollDown"));
                                    if (!l) {
                                        m = true
                                    }
                                } else {
                                    e = -e
                                }
                            }
                            var n = i.data("snapAmount");
                            if (n) {
                                e = Math.round(e / n) * n - i.data("snapOffset")
                            }
                            d.mTweenAxis.call(this, h[0], "top", Math.round(p), draggerSpeed, f.scrollEasing);
                            d.mTweenAxis.call(this, k[0], "top", Math.round(e), t, f.scrollEasing, {
                                onStart: function() {
                                    if (f.callbacks && !i.data("mCS_tweenRunning")) {
                                        u("onScrollStart")
                                    }
                                    if (i.data("autoHideScrollbar") && !i.data("alwaysShowScrollbar")) {
                                        d.showScrollbar.call(r)
                                    }
                                },
                                onUpdate: function() {
                                    if (f.callbacks) {
                                        u("whileScrolling")
                                    }
                                },
                                onComplete: function() {
                                    if (f.callbacks) {
                                        u("onScroll");
                                        if (q || (s && k.position().top >= s)) {
                                            u("onTotalScrollBack")
                                        }
                                        if (m || (l && k.position().top <= l)) {
                                            u("onTotalScroll")
                                        }
                                    }
                                    h.data("preventAction", false);
                                    i.data("mCS_tweenRunning", false);
                                    if (i.data("autoHideScrollbar") && !i.data("alwaysShowScrollbar")) {
                                        if (!g.hasClass("mCS-mouse-over")) {
                                            d.hideScrollbar.call(r)
                                        }
                                    }
                                }
                            })
                        }
                        if (i.data("mCS_Init")) {
                            i.data({
                                mCS_Init: false
                            })
                        }
                    }
                }

                function u(w) {
                    if (i.data("mCustomScrollbarIndex")) {
                        this.mcs = {
                            top: k.position().top,
                            left: k.position().left,
                            draggerTop: h.position().top,
                            draggerLeft: h.position().left,
                            topPct: Math.round((100 * Math.abs(k.position().top)) / Math.abs(k.outerHeight() - g.height())),
                            leftPct: Math.round((100 * Math.abs(k.position().left)) / Math.abs(k.outerWidth() - g.width()))
                        };
                        switch (w) {
                            case "onScrollStart":
                                i.data("mCS_tweenRunning", true).data("onScrollStart_Callback").call(i, this.mcs);
                                break;
                            case "whileScrolling":
                                i.data("whileScrolling_Callback").call(i, this.mcs);
                                break;
                            case "onScroll":
                                i.data("onScroll_Callback").call(i, this.mcs);
                                break;
                            case "onTotalScrollBack":
                                i.data("onTotalScrollBack_Callback").call(i, this.mcs);
                                break;
                            case "onTotalScroll":
                                i.data("onTotalScroll_Callback").call(i, this.mcs);
                                break
                        }
                    }
                }
            },
            stop: function() {
                var g = c(this),
                    e = g.children().children(".mCSB_container"),
                    f = g.children().children().children().children(".mCSB_dragger");
                d.mTweenAxisStop.call(this, e[0]);
                d.mTweenAxisStop.call(this, f[0])
            },
            disable: function(e) {
                var j = c(this),
                    f = j.children(".mCustomScrollBox"),
                    h = f.children(".mCSB_container"),
                    g = f.children(".mCSB_scrollTools"),
                    i = g.children().children(".mCSB_dragger");
                f.unbind("mousewheel focusin mouseenter mouseleave touchend");
                h.unbind("touchstart touchmove");
                if (e) {
                    if (j.data("horizontalScroll")) {
                        i.add(h).css("left", 0)
                    } else {
                        i.add(h).css("top", 0)
                    }
                }
                g.css("display", "none");
                h.addClass("mCS_no_scrollbar");
                j.data({
                    bindEvent_mousewheel: false,
                    bindEvent_focusin: false,
                    bindEvent_content_touch: false,
                    bindEvent_autoHideScrollbar: false
                }).addClass("mCS_disabled")
            },
            destroy: function() {
                var e = c(this);
                e.removeClass("mCustomScrollbar _mCS_" + e.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();
                c(document).unbind("mousemove." + e.data("mCustomScrollbarIndex") + " mouseup." + e.data("mCustomScrollbarIndex") + " MSPointerMove." + e.data("mCustomScrollbarIndex") + " MSPointerUp." + e.data("mCustomScrollbarIndex"));
                c(window).unbind("resize." + e.data("mCustomScrollbarIndex"))
            }
        },
        d = {
            showScrollbar: function() {
                this.stop().animate({
                    opacity: 1
                }, "fast")
            },
            hideScrollbar: function() {
                this.stop().animate({
                    opacity: 0
                }, "fast")
            },
            mTweenAxis: function(g, i, h, f, o, y) {
                var y = y || {},
                    v = y.onStart || function() {},
                    p = y.onUpdate || function() {},
                    w = y.onComplete || function() {};
                var n = t(),
                    l, j = 0,
                    r = g.offsetTop,
                    s = g.style;
                if (i === "left") {
                    r = g.offsetLeft
                }
                var m = h - r;
                q();
                e();

                function t() {
                    if (window.performance && window.performance.now) {
                        return window.performance.now()
                    } else {
                        if (window.performance && window.performance.webkitNow) {
                            return window.performance.webkitNow()
                        } else {
                            if (Date.now) {
                                return Date.now()
                            } else {
                                return new Date().getTime()
                            }
                        }
                    }
                }

                function x() {
                    if (!j) {
                        v.call()
                    }
                    j = t() - n;
                    u();
                    if (j >= g._time) {
                        g._time = (j > g._time) ? j + l - (j - g._time) : j + l - 1;
                        if (g._time < j + 1) {
                            g._time = j + 1
                        }
                    }
                    if (g._time < f) {
                        g._id = _request(x)
                    } else {
                        w.call()
                    }
                }

                function u() {
                    if (f > 0) {
                        g.currVal = k(g._time, r, m, f, o);
                        s[i] = Math.round(g.currVal) + "px"
                    } else {
                        s[i] = h + "px"
                    }
                    p.call()
                }

                function e() {
                    l = 1000 / 60;
                    g._time = j + l;
                    _request = (!window.requestAnimationFrame) ? function(z) {
                        u();
                        return setTimeout(z, 0.01)
                    } : window.requestAnimationFrame;
                    g._id = _request(x)
                }

                function q() {
                    if (g._id == null) {
                        return
                    }
                    if (!window.requestAnimationFrame) {
                        clearTimeout(g._id)
                    } else {
                        window.cancelAnimationFrame(g._id)
                    }
                    g._id = null
                }

                function k(B, A, F, E, C) {
                    switch (C) {
                        case "linear":
                            return F * B / E + A;
                            break;
                        case "easeOutQuad":
                            B /= E;
                            return -F * B * (B - 2) + A;
                            break;
                        case "easeInOutQuad":
                            B /= E / 2;
                            if (B < 1) {
                                return F / 2 * B * B + A
                            }
                            B--;
                            return -F / 2 * (B * (B - 2) - 1) + A;
                            break;
                        case "easeOutCubic":
                            B /= E;
                            B--;
                            return F * (B * B * B + 1) + A;
                            break;
                        case "easeOutQuart":
                            B /= E;
                            B--;
                            return -F * (B * B * B * B - 1) + A;
                            break;
                        case "easeOutQuint":
                            B /= E;
                            B--;
                            return F * (B * B * B * B * B + 1) + A;
                            break;
                        case "easeOutCirc":
                            B /= E;
                            B--;
                            return F * Math.sqrt(1 - B * B) + A;
                            break;
                        case "easeOutSine":
                            return F * Math.sin(B / E * (Math.PI / 2)) + A;
                            break;
                        case "easeOutExpo":
                            return F * (-Math.pow(2, -10 * B / E) + 1) + A;
                            break;
                        case "mcsEaseOut":
                            var D = (B /= E) * B,
                                z = D * B;
                            return A + F * (0.499999999999997 * z * D + -2.5 * D * D + 5.5 * z + -6.5 * D + 4 * B);
                            break;
                        case "draggerRailEase":
                            B /= E / 2;
                            if (B < 1) {
                                return F / 2 * B * B * B + A
                            }
                            B -= 2;
                            return F / 2 * (B * B * B + 2) + A;
                            break
                    }
                }
            },
            mTweenAxisStop: function(e) {
                if (e._id == null) {
                    return
                }
                if (!window.requestAnimationFrame) {
                    clearTimeout(e._id)
                } else {
                    window.cancelAnimationFrame(e._id)
                }
                e._id = null
            },
            rafPolyfill: function() {
                var f = ["ms", "moz", "webkit", "o"],
                    e = f.length;
                while (--e > -1 && !window.requestAnimationFrame) {
                    window.requestAnimationFrame = window[f[e] + "RequestAnimationFrame"];
                    window.cancelAnimationFrame = window[f[e] + "CancelAnimationFrame"] || window[f[e] + "CancelRequestAnimationFrame"]
                }
            }
        };
    d.rafPolyfill.call();
    c.support.touch = !!("ontouchstart" in window);
    c.support.pointer = window.navigator.pointerEnabled;
    c.support.msPointer = window.navigator.msPointerEnabled;
    var a = ("https:" == document.location.protocol) ? "https:" : "http:";
    c.event.special.mousewheel || document.write('<script src="' + a + '//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');
    c.fn.mCustomScrollbar = function(e) {
        if (b[e]) {
            return b[e].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof e === "object" || !e) {
                return b.init.apply(this, arguments)
            } else {
                c.error("Method " + e + " does not exist")
            }
        }
    }
})(jQuery);
(function($) {
    eval(function(p, a, c, k, e, r) {
        e = function(c) {
            return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if (!''.replace(/^/, String)) {
            while (c--) r[e(c)] = k[c] || e(c);
            k = [function(e) {
                return r[e]
            }];
            e = function() {
                return '\\w+'
            };
            c = 1
        };
        while (c--)
            if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p
    }('(3($){"1V 2h";7 f=3(a,b){2.4=$.14({},$.q.m.11,b);2.Z=0;2.T=H;2.N=1l;2.19=1l;2.$6=$(a);A(2.4.I)2.1b=2.$6.U();2.F()};f.l.F=3(){2.1a=2.$6.15().z(2.4.12,2.4.1v);2.$6.y(2.4.h.6.v).y(2.4.h.6.j);2.$6.U(2.1a);2.$8=2.$6.2g(2.4.1r);2.$8.h("2f-2e",2.4.G).y(2.4.h.8.v).y(2.4.h.8.j);2.1C();2.P=2.$8.R;2.p();9 2};f.l.1C=3(){7 a=2.4;7 b=2;2.$8.2d("20",3(){a.1f($(2),b.$6,b);b.1h();1i(a.1j){D"M":$(2).1q();w;D"1X":b.Q($(2),a.C,a.h.8.k,a.h.8.j);w;D"1w":w;1A:$(2).1B($(2).15())}});9 b};f.l.X=3(){2.T=Y;2.4.1H(2.$6,2);1J(2.19);1i(2.4.1K){D"M":2.$6.1q();w;D"1w":w;1A:2.$6.U(2.1b);2.$6.J(2.4.h.6.v).J(2.4.h.6.k);w}};f.l.1h=3(){1J(2.N);2.Z++;7 a=2;2.N=13(3(){A(a.Z%a.P===0){a.X()}},E.1W(2.4.C+10,1c));9 2};f.l.1g=3(){7 a=2.4.G.1U(/\\d+s/)?1T(2.4.G):1;7 b=E.1P(1.5*2.P*2.4.C*a);7 c=2;2.19=1p.13(3(){A(!c.V()){c.X()}},b)};f.l.p=3(){7 b=2;2.1g();2.$6.J(2.4.h.6.j).y(2.4.h.6.k);7 c=2.4.W(2.$8);7 d=2.4;c.x(3(i,a){b.Q($(a),(i+1)*d.C,d.h.8.j,d.h.8.k)});9 2};f.l.Q=3(a,b,c,d){7 e=2.4;1p.13(3(){a.J(c).y(d)},b);9 2};f.l.V=3(){9 2.T};7 g=3(a){2.u=$.14({},$.q.m.11,a);2.1x(2.u.1y);A(2.u.1z)2.u.12=/(\\S+)/g};g.l.1x=3(a){7 b=2.u;7 c=a?"k":"j";7 d=a?"j":"k";7 e={6:{},8:{}};e.6.v=b.o+"-L "+b.p.z(/(\\S+)/g,b.o+"-$1-L");e.6[c]=b.p.z(/(\\S+)/g,b.o+"-$1-j-L");e.6[d]=b.p.z(/(\\S+)/g,b.o+"-$1-k-L");e.8.v=b.o;e.8[c]=b.p.z(/(\\S+)/g,b.o+"-$1-j");e.8[d]=b.p.z(/(\\S+)/g,b.o+"-$1-k");2.u=$.14(b,{h:e})};g.l.1D=3(){9 2.u};g.1E=3(a){9 1F g(a).1D()};$.q.m=3(b){b=g.1E(b);9 $(2).x(3(){7 a=$(2);A(!a.16("m-17")||a.16("m-17").V()){a.16("m-17",1F f(a,b))}})};$.q.m.W={1I:3(a){7 b=a.R,18,K;1M(0!==b){K=E.23(E.1I()*b);b-=1;18=a[b];a[b]=a[K];a[K]=18}9 a},1n:3(a){9 a.1N().1n()}};$.q.m.1O={8:/(\\S)/1m};$.q.m.11={p:"1Q 1R-1S",12:/(\\S)/1m,1k:H,1y:H,1v:"<B>$1</B>",1r:"B",C:1c,G:"1s",W:3(a){9 a},1f:3(a,b,c){},1H:3(a,b){},1j:"I",1K:"I",I:Y,M:H,o:"m",h:{6:{v:"",j:"",k:""},8:{v:"",j:"",k:""}}}})(O);!3(t){3 e(e,n,i,r){7 a=e.15(),c=a.1Y(n),s="";c.R&&(t(c).x(3(t,e){s+=\'<B 1Z="\'+i+(t+1)+\'" 1e-21="Y">\'+e+"</B>"+r}),e.22("1e-1L",a).24().25(s))}7 n={F:3(){9 2.x(3(){e(t(2),"","26","")})},1z:3(){9 2.x(3(){e(t(2)," ","1k"," ")})},27:3(){9 2.x(3(){7 n="28";e(t(2).29("2a").1B(n).2b(),n,"2c","")})}};t.q.1d=3(e){9 e&&n[e]?n[e].1u(2,[].1t.1o(1G,1)):"8"!==e&&e?(t.2i("2j "+e+" 2k 2l 2m 2n O.1d"),2):n.F.1u(2,[].1t.1o(1G,0))}}(O);', 62, 148, '||this|function|options||element|var|letters|return||||||||css||before|after|prototype|letterfx||element_class|fx|fn||||config|base|break|each|addClass|replace|if|span|timing|case|Math|init|fx_duration|false|restore|removeClass|randomIndex|container|destroy|monitor_timer|jQuery|num_letters|applyLetterFx|length||is_done|html|isDone|sort|terminate|true|num_completed_fx||defaults|pattern|setTimeout|extend|text|data|obj|temporaryValue|killswitch|new_html|original_html|50|lettering|aria|onLetterComplete|startKillWatch|notifyFXEnd|switch|letter_end|word|null|gi|reverse|call|window|remove|selector||slice|apply|replacement|stay|buildCss|backwards|words|default|replaceWith|bindLetterFxEnd|getConfig|parse|new|arguments|onElementComplete|random|clearTimeout|element_end|label|while|toArray|patterns|ceil|spin|fly|top|parseInt|match|use|max|rewind|split|class|transitionend|hidden|attr|floor|empty|append|char|lines|eefec303079ad17405c889e092e105b0|children|br|end|line|bind|duration|transition|find|strict|error|Method|does|not|exist|on'.split('|'), 0, {}))
})(jQuery);
(function($) {
    eval(function(p, a, c, k, e, r) {
        e = function(c) {
            return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if (!''.replace(/^/, String)) {
            while (c--) r[e(c)] = k[c] || e(c);
            k = [function(e) {
                return r[e]
            }];
            e = function() {
                return '\\w+'
            };
            c = 1
        };
        while (c--)
            if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p
    }('z o=["m","d7","#d8","d9","4K","","&4K=","lr","&lr=","3p","au","3q","da","db","dc","M","dd","de","df","//2E","dg","3R","dh","5D","#Z","\\2R\\2S\\2T\\2U\\1r\\1C\\P\\Q\\1h\\2F\\9w\\6X\\6Y\\di\\5E\\dj\\3S\\3r\\1k","\\2R\\2S\\2T\\2U\\1r\\1C\\P\\Q\\1h\\2F\\6Y\\dk\\dl\\dm\\6Z\\3S\\3r\\1k","2E.cn","p/js/p.js","dn","9x","4L://2E.cn/","do","\\C %c \\7a\\7b\\4M\\dp\\9y\\dq\\dr\\2R\\2S\\2T\\2U\\1r\\1C\\P\\Q\\ds.dt - ","\\3s\\du\\7c\\6Z\\dv\\1p %c 4L://2E.cn\\C","1L: #9z; 1I: #9A; 7d:7e 0;","1I: #9z; 7d:7e 0;","dw","2E.dx","dy-dz","\\C %c \\7a\\7b\\dA\\dB\\9y\\dC\\7f\\2R\\2S\\2T\\2U\\1r\\1C\\P\\Q\\1h\\3s\\9B\\7f\\dD\\dE\\dF://2E.cn\\C","1L: #dG; 1I: #9A; 7d:7e 0;","dH","<dI id=\\"2V\\" dJ=\\"dK\\" 2w=\\"9C/9D\\" dL=\\"dM\\" 3R=\\"","3T/2W?id=","\\">","dN","dO","<B id=\\"Z\\" 1M=\\"2G:9E\\">\\C","    <B x=\\"Z\\">\\C","        <B x=\\"5F-7g\\">\\C","            <7g 9x=\\"","dP/dQ/dR.dS\\" x=\\"5F\\" 1M=\\"7h: dT; 2G: dU;\\">\\C","        </B>\\C","        <B x=\\"9F\\">\\C","            <B x=\\"dV\\"><i x=\\"R H-9G\\"></i> <B x=\\"dW\\"><V x=\\"1X\\"></V></B></B>\\C","            <B x=\\"dX\\"><i x=\\"R H-dY\\"></i> <V x=\\"9H\\">1S:1S / 1S:1S</V></B>\\C","            <B x=\\"7i\\"><i x=\\"R H-dZ\\"></i> <V x=\\"9I\\"></V><V x=\\"9J\\"><i\\C","                    x=\\"R H-5G\\"></i> \\7j\\7k\\P\\Q</V></B>\\C","            <B x=\\"7i\\"><i x=\\"R H-e0\\"></i>\\C","                <V x=\\"1u\\"></V>\\C","                <V x=\\"3U\\"><V x=\\"5H\\"></V></V>\\C","            </B>\\C","        <B x=\\"5I\\">\\C","            <i x=\\"9K R H-e1\\"></i>\\C","            <i x=\\"9L R H-e2\\"></i>\\C","            <B x=\\"4N\\">\\C","                <b>\\C","                    <i x=\\"9M R H-e3\\"></i>\\C","                    <i x=\\"9N R H-e4\\"></i>\\C","                </b>\\C","                <B id=\\"e5\\" x=\\"4O\\">\\C","                    <i x=\\"R H-9G\\" 9O-e6=\\"M\\"></i>\\C","                </B>\\C","                <B id=\\"e7\\" x=\\"4O\\">\\C","                <B id=\\"e8\\" x=\\"4O\\">\\C","            <i x=\\"9P R H-e9\\"></i>\\C","            <i x=\\"9Q R H-ea\\"></i>\\C","\\X\\X<B x=\\"3V\\">\\C","\\X\\X\\X<B x=\\"9R\\">\\C","\\X\\X        <B x=\\"1N R H-4P\\"></B>\\C","\\X\\X        \\X<B x=\\"5J\\">\\C","\\X\\X                    <B x=\\"2H\\">\\C","\\X\\X                        <B x=\\"5K\\" 1M=\\"9S: eb;\\"></B>\\C","\\X\\X                        <B x=\\"5L\\" 1M=\\"7h: ec;\\"></B>\\C","\\X\\X                    </B>\\C","\\X\\X                </B>\\C","\\X\\X        </B>\\C","\\X\\X        <B x=\\"2X\\">\\C","\\X\\X            <B x=\\"2H\\">\\C","\\X\\X                <B x=\\"5K\\"></B>\\C","\\X\\X                <B x=\\"9T\\"></B>\\C","\\X\\X                <B x=\\"5L\\"></B>\\C","\\X\\X            </B>\\C","            <B x=\\"2Y-7l\\">\\C","                <i x=\\"R H-2Z\\"></i>\\C","            <B x=\\"9U\\">\\C","                <i x=\\"R H-5G\\"></i>\\C","            <B x=\\"2Y-5M\\">\\C","                <i x=\\"R H-9V\\"></i>\\C","        <B x=\\"5N\\"></B>\\C","    </B>\\C","    <B x=\\"3W\\">\\C","        <B x=\\"3W-bd\\">\\C","            <B x=\\"3X-2Z\\">\\C","                <B x=\\"3t\\"></B>\\C","                <B x=\\"3a\\"></B>\\C","            <B x=\\"2j-2Z\\">\\C","                <B x=\\"3t\\"><i x=\\"R H-5O-3Y-5P\\"></i><V></V></B>\\C","                <B x=\\"3a\\">\\C","                    <3Z></3Z>\\C","    <B x=\\"2Y-p\\">\\C","        <i x=\\"R H-5O-3Y-5P\\"></i>\\C","</B>\\C","<B id=\\"1c\\"></B>\\C","<B id=\\"4Q\\"></B>\\C","<B id=\\"1e\\"></B>","7m","#1c","#1e","#4Q",".2Y-p",".1X",".5N",".9H",".2j-2Z .3a",".3X-2Z",".Z .9I",".Z .1u",".Z .9J",".Z .3U .5H",".Z .2Y-5M","ed","\\5Q\\7n","W","0,0,0","1D,1D,1D","ee","2I","ef","eg","eh","ei","ej","5R","ek"," / ","el","9C","<a 1M=\\"1L:#7o\\">\\en\\9W\\eo\\1i\\1Y</a>","ep","<a 1M=\\"1L:#7o\\">\\2R\\2S\\2T\\2U</a>","<a 1M=\\"1L:#7o\\">\\1r\\1C\\P\\Q\\1h</a>","<i x=\\"R H-7p\\"></i> \\9X\\9Y\\9Z\\a0","4a","er","4R","a1","es","a2","7q","et","eu","\\ev\\ew\\P\\Q\\3u\\3v\\a3\\ex\\a4\\1k\\2F\\7r\\6X\\P\\Q\\1k","ey"," - \\ez\\eA\\4b\\3w\\3u\\3v\\1k\\eB\\eC\\4b\\3w\\eD\\eE\\eF...","\\P\\Q\\3u\\3v "," \\a4\\1k","eG","eH","eI","a5","eJ","a6","\\5S\\eK\\a7...","1N","H-5T H-4P H-5U","H-5V",".Z .3V .1N","H-5T H-5V H-5U","H-4P","H-5T H-5V H-4P","H-5U","H-5U H-5V H-4P","H-5T","eL","eM","eN","eO","eP","\\eQ\\eR\\1r\\1C","kg","\\a8\\eS\\1r\\1C","a9","eT\\1r\\1C","eU","\\eV\\eW\\1r\\1C","kw","\\a8\\eX\\1r\\1C","eY","\\aa\\aa\\1r\\1C","eZ","\\4M\\4S\\f0\\1r\\1C","ab","f1","5W","f2","f3","f4","f5","%","9D",".2X .2H .9T","7s","f6",".2X .2H .5L","4T",".2X .2H .5K","0","1S:1S / 1S:1S","f7","ac","f8","ae","af","3b","ag","ah","f9","fa","fb",".7t","fc","fd","\\7u\\7r\\P\\Q > ","eq","li","\\7u\\7r\\P\\Q - ","fe",".9N","\\ai\\aj\\P\\Q > ","ff",".9M","ak",".9L",".9P","al",".9K","am",".9Q","\\4U\\4V\\5X\\5Y","<i x = \\"5W R H-7v\\"></i>","<i x=\\"R H-7v\\"></i> \\4U\\4V\\5X\\5Y","\\7j\\7k\\P\\Q","<i x = \\"5W R H-5G\\"></i>","<i x=\\"R H-5G\\"></i> \\7j\\7k\\P\\Q","\\1Y\\5Z\\5X\\5Y","<i x = \\"5W R H-an\\"></i>","<i x=\\"R H-an\\"></i> \\1Y\\5Z\\5X\\5Y",".9U",".4c","fg",".1v","\\ao\\ap\\P\\Q","<i x=\\"R H-7v\\"></i> \\ao\\ap\\P\\Q","G",".5J .2H .5L",".5J .2H","7h","fh","9S",".5J .2H .5K","fi","\\1r\\fj\\1p",".2X .2H","fk","aq","fl","#Z .Z","#Z .3W",".Z .3V .2X",".Z .3V .9R",".Z",".Z .5F",".Z .5N 7g","6a(1D,1D,1D,.7)",".Z .3V","6a(1D,1D,1D,.8)",".2Y-7l","fm",".2j-2Z .3t,.2j-2Z .H-5O-3Y-5P","fn","fo","<i x=\\"R H-7p\\"></i> \\1i\\2J\\4S\\fp","<i x=\\"R H-ar\\"></i> \\1i\\2J\\5Q\\7n","\\5Q\\7n\\1i\\2J\\as\\at","<i x=\\"R H-9V\\"></i>","<i x=\\"R H-7w\\"></i> \\1i\\2J\\7x\\7y","\\1i\\2J\\as\\at\\2F\\7x\\7y","\\7x\\7y","<i x=\\"R H-fq\\"></i>",".2Y-5M","fr",".3t","fs","2G:ft !3x;","<a 1M=\\"2G: 4W!3x\\" 3R=\\"4L://2E.cn\\" 7z=\\"\\7A\\7B\\4X\\4Y\\7C\\7D\\2R\\2S\\2T\\2U\\1r\\1C\\P\\Q\\1h\\" 4Z=\\"6b\\" 1M=\\"1L:#fu\\">\\7a\\7b\\1r\\1C\\P\\Q\\1h\\fv fw.fy \\4X\\4Y\\fz\\fA</a>","<li><V x=\\"7E\\">","</V><V x=\\"7t\\"></V>"," - ","fB","</li>","<li><i x=\\"R H-5O-3Y-5P\\"></i><V x=\\"7E\\">","</V><V x=\\"7t\\"></V>\\fC","fD","\\fE - ","fF","<3Z>","</3Z>",".3a","\\9B\\6Y\\P\\Q - ","#","7E","2j","av","3c(",")",".3W .3a li","aw","ax","N","(",".2j-2Z .3t V","3Z","5a-3X","fG","fH","fI","li.W","<i x=\\"R H-ar\\"></i> \\1i\\2J","<i x=\\"R H-7w\\"></i> \\1i\\2J","fJ","7F","<i x=\\"R H-7w\\"></i> \\7u\\fK\\1i\\2J","[1S","&7q=","A","3T/fL?2j=","&2w=","&id=","&7G=","7G","&4R=",".","fM","ay","fN","2w","fO","fP","fQ","\\C","fR","<li x=\\"fS\\"></li>","fT","fU","fV","fW","<li x=\\"1e"," "," W\\">"," \\">","fX",".1e","x","1e","<V>","</V>","1M","fY","1L:6a(",")!3x","fZ","g0","7H","g1","7I","5a","g2","g3","g4","g5","b",",","\\g6\\1p","\\g7\\1p","g","\\g8\\1p","t","\\3s","<V x=\\"g9\\"><em 7J=\\"","\\"></em></V>","<V><em 7J=\\"","</em></V>","<B id=\\"4Q","\\" x=\\"4Q"," az az","\\"><B x=\\"bg\\">","</B><B x=\\"aA\\">","</B></B>",".4Q","1L","6a(","7K",".7K",".7L","aB","7L",".aA V","em","7J","1f%","ga","gb","2E.cn/gc/#/","3T/7l?id=","&gd=","ge","\\6c\\1i\\1Y\\1p","aC \\5S\\7M\\4d\\4e\\1k","aC \\2F\\a3\\gf\\aD\\aE\\1h\\aF\\aG\\aH\\7c\\1k","\\P\\Q\\1h\\1p\\4d\\4e\\5S\\7M\\aF\\6c\\1i\\1Y\\1k","\\P\\Q\\1h\\1p\\6c\\1i\\1Y\\3y\\4f\\4b\\3w\\3u\\3v\\1k","\\P\\Q\\1h\\1p\\1i\\1Y\\5S\\7M\\gg\\3w\\4d\\4e\\1k","\\1i\\1Y\\1p","\\gh\\1i\\1Y\\3y\\4f\\4b\\3w\\3u\\3v!","gi","2G","gj","\\2R\\2S\\2T\\2U\\1r\\1C\\P\\Q\\1h\\2F\\9w\\6X\\gk\\a7\\gl\\3S\\3r\\1k","9E","\\P\\Q\\1h\\1p\\gm\\6Z\\3y\\4f\\3S\\3r\\4d\\4e\\1k","<a 1M=\\"2G: 4W!3x;aI: 3Y\\" 3R=\\"4L://2E.cn\\" 7z=\\"\\7A\\7B\\4X\\4Y\\7C\\7D\\2R\\2S\\2T\\2U\\1r\\1C\\P\\Q\\1h\\" 4Z=\\"6b\\"><i x=\\"R H-aJ\\"></i> \\4X\\4Y\\7C\\7D</a>",".3U",".7i","2G:4W !3x;","\\4X\\4Y\\7f\\P\\Q\\1h\\gn\\go\\gp\\3s\\2F\\4M\\5E\\gq\\3r\\1k","a","<a 1M=\\"2G: 4W!3x\\" 3R=\\"","ad/","gr","\\" 7z=\\"","gs","\\" 1M=\\"1L:3c(",")\\" 4Z=\\"6b\\"><i x=\\"R H-gt\\"></i> ","</a>","<a 1M=\\"2G: 4W!3x;aI: 3Y;1L:3c(",")\\" 3R=\\"","\\" 4Z=\\"6b\\"><i x=\\"R H-aJ\\"></i> ","gu","1f","1","0.","0.5",".4N .4O","gv","\\P\\Q\\1h\\1p\\6d\\6e\\P\\Q\\4U\\4V\\aG\\gw\\gx\\3y\\7N","\\7O\\1k","\\P\\Q\\1h\\1p\\P\\Q\\3y\\4f\\3S\\3r\\4d\\4e\\1k","\\7O\\3s\\gy\\7P\\4S\\6d\\6e\\P\\Q\\1i\\5Z\\1k","\\P\\Q\\1h\\1p\\2F\\7P\\4S\\6d\\6e\\P\\Q\\4U\\4V\\7N","\\7O\\3s\\2F\\7P\\4S\\6d\\6e\\P\\Q\\1i\\5Z\\7N","3X","...","gz","gA","gB","3T/3z?2j=","gC","3T/7Q?2j=","&7Q=","gD","gE","gF","3T/1L","gG","gH","4L://gI.gJ.cn/g?b=a9&gK=","&s=6f"," - \\4U\\4V\\gL\\gM\\4b\\3w\\3u\\3v\\1k",".5F","3d","\\1i\\2J\\4M\\5E\\gN\\gO","gP","gQ","gR","gS","\\aD\\aE\\1h\\aH\\7c\\1r\\gT\\4M\\5E\\P\\Q\\3s\\gU\\gV\\7A\\7B\\P\\Q\\1k","6g","\\5Q\\9W\\gW","\\P\\Q\\1p","-"," \\gX\\gY\\1p","gZ",":","h0","h1","\\ai\\aj\\P\\Q&aK;>&aK;",".3a 3Z","[5a-3X=","]",",.8)",",.3)",",.6)",".9F,.5I,.4N .4O,.3U a,.3W .3a li,.3t a,.3W,.3t","h2","h3 3c(",") h4",".Z .5N","1I-h5","aL-aM(aN, 3c(",") 50%, aO 50%, aO), aL-aM(aN, 3c(",") 50%, 3c(",".Z .5I .4N",",.5)",".Z .5I .4N b","r","h6","h7","h8","h9","ha","hb","hc","hd","he","hf","1S:","1S:1S","1S","hg","hh","hi","hj","hk","hl","hm","V","hn","ho","hp","9O-hq","hr","5a-hs","ht","hu","hv","hw","#hx","hy","0.4","1L:3c(","hz","hA","hB","hC","4Z","hD","Z","hE","hF","y","hG","5b","<V x=\\"5H\\"><i x=\\"R H-7p\\"></i> \\9X\\9Y\\9Z\\a0</V>","#Z .3U","#Z .Z .3U .5H","2V","\\P\\Q\\1h\\1p\\4d\\4e\\3S\\3r\\6c\\1i\\1Y\\1k",".Z .3V .2Y-5M","\\P\\Q\\1h\\1p\\1i\\1Y\\3y\\4f\\hH\\hI!","\\P\\Q\\1h\\1p\\1i\\1Y\\3y\\4f\\4b\\3w\\3u\\3v!"];z 7R=$(o[2])[o[1]](o[0]);if(1w 7R===o[3]){7S=0}u{7S=7R};z 4K=$(o[2])[o[1]](o[4]);if(1w 4K===o[3]){7T=o[5]}u{7T=o[6]+4K};z lr=$(o[2])[o[1]](o[7]);if(1w lr===o[3]){lr=o[5]}u{lr=o[8]+lr};z 3p=$(o[2])[o[1]](o[9]);if(1w 3p===o[3]){3p=1}u{3p=3p};z au=$(o[2])[o[1]](o[10]);if(1w au===o[3]){au=1}u{au=au};z 3q=$(o[2])[o[1]](o[11]);if(1w 3q===o[3]){3q=1}u{3q=3q};z 3A=E[o[13]](o[12]);z 7U=E[o[13]](o[14]);3A=1w 3A===o[3]?G:3A===o[15];3A=3A&&1w 7U!==o[3]&&2x aP()[o[16]]()-N(7U)<2K;if(/(7V|7W|7X|7Y|7Z|8a|8b 8c|8d|8e)/i[o[18]](8f[o[17]])&&7S<1&&1Z[o[22]][o[21]][o[20]](o[19])<0){$(o[24])[o[23]]();aQ 2x aR(o[25])}u{if(3A&&1Z[o[22]][o[21]][o[20]](o[19])<0){$(o[24])[o[23]]();aQ 2x aR(o[26])}u{z y;if($(o[2])[o[1]](o[30])[o[29]](o[28],o[5])[o[20]](o[27])>0){z 1x=o[31];z 1y=$(o[2])[o[1]](o[32]);1b[o[37]](o[33]+1y+o[34],o[35],o[36])}u{if($(o[2])[o[1]](o[30])[o[29]](o[28],o[5])[o[20]](o[38])>0){z 1x=o[31];z 1y=$(o[2])[o[1]](o[32]);1b[o[37]](o[33]+1y+o[34],o[35],o[36])}u{z 1x=o[31];z 1y=o[39];1b[o[37]](o[40],o[41])}};E[o[42]](o[12],o[15]);$(o[47])[o[46]](o[43]+1x+o[44]+1y+7T+lr+o[45]);$(o[hJ])[o[46]](o[48]+o[49]+o[50]+o[51]+1x+o[52]+o[53]+o[54]+o[55]+o[56]+o[57]+o[58]+o[59]+o[60]+o[61]+o[62]+o[53]+o[63]+o[64]+o[65]+o[66]+o[67]+o[68]+o[69]+o[70]+o[71]+o[72]+o[73]+o[74]+o[72]+o[73]+o[75]+o[72]+o[73]+o[62]+o[76]+o[77]+o[53]+o[78]+o[79]+o[80]+o[81]+o[82]+o[83]+o[84]+o[85]+o[86]+o[87]+o[88]+o[89]+o[90]+o[91]+o[92]+o[93]+o[87]+o[94]+o[95]+o[62]+o[96]+o[97]+o[62]+o[98]+o[99]+o[62]+o[53]+o[1f]+o[8g]+o[hK]+o[hL]+o[hM]+o[hN]+o[hO]+o[62]+o[hP]+o[hQ]+o[hR]+o[hS]+o[73]+o[62]+o[53]+o[8g]+o[hT]+o[hU]+o[8g]+o[hV]+o[hW]+o[hX]+o[hY]);z I=2x hZ(),$p=$(o[24]),$aS=$(o[8h]),$lk=$(o[1O]),$kk=$(o[1P]),$8i=$(o[i0],$p),$8j=$(o[i1],$p),$1T=$(o[i2],$p),$aT=$(o[6h],$p),$1U=$(o[i3],$p),$1j=$(o[i4],$p),$8k=$(o[i5],$p),$8l=$(o[aU],$p),$2y=$(o[i6],$p),$1q=$(o[i7],$p),$1l=$(o[i8],$p),8m=o[i9],4g=o[aV],2L=o[5],W=o[ia],2k=M,8n=1;4h=0;6i=0;7H=0;2z=o[aW];2A=o[ib];E[o[42]](o[5c],o[3B]);E[o[42]](o[5d],o[3B]);1s=0,8o=!1,1v=M,4c=G,1V=M,5e=M,2a=G,2l=G,4i=0,5f=!1,2m=G,2B=M,3e=G,1E=G;4a=M;3C=E[o[13]](o[6f])?E[o[13]](o[6f]):G;5g=E[o[13]](o[8p])?E[o[13]](o[8p]):G;2b=E[o[13]](o[8q])?E[o[13]](o[8q]):G;4j=E[o[13]](o[8r])?E[o[13]](o[8r]):G;5R=E[o[13]](o[8s])?E[o[13]](o[8s]):G;q aX(){$aT[o[1F]](3D(I[o[2n]])+o[8t]+3D(I[o[2o]]))}z 6j=2I;z 3E=2I;$8j[o[D]](o[ic]);$8k[o[D]](o[ie]);$8l[o[D]](o[ig]);$1q[o[D]](o[ih]);z J={4R:q(){1E=M;$p[o[T]](o[4k]);4i=8u();6j=2c(aX,ii);if(2a){6k=2c(1e[o[3F]][o[2C]],3G);if(!3e){$(o[1O])[o[T]](o[1W])};if(2B){$1l[o[S]]()}};if(2l){6l=2c(1e[o[2p]][o[2C]],80);if(!3e){$(o[1P])[o[T]](o[6m])};if(2B){$1l[o[S]]()}}},ac:q(){2M(6j);$p[o[L]](o[4k]);$1l[o[23]]();if(2a){1e[o[3F]][o[23]]()};if(2l){1e[o[2p]][o[23]]()}},3b:q(){2M(6j);$p[o[L]](o[4k]);if(4h>2){1c[o[S]](o[ij]);4h=0;5e=M}u{4h++;5e=G;1c[o[S]](y[v][o[1z]][A]+o[ik]);1b[o[37]](o[il]+4h+o[im]);1A(q(){$1T[o[L]](o[2N]);E[o[42]](o[in],o[6n]);1E=M;aY=o[5];J[o[8v]]()},io)}},ag:q(){if(I[o[aZ]]===M){I[o[2C]]()};$p[o[T]](o[4k]);$1T[o[T]](o[2N]);1e[o[b0]]();1c[o[S]](o[ip])},iq:q(){4i=8u()},af:q(){z a=I[o[8w]];0==a?$(o[3f],$p)[o[T]](o[b1])[o[L]](o[b2]):a>=0.4&&a<=0.7?$(o[3f],$p)[o[T]](o[b3])[o[L]](o[b4]):a>=0.7&&a<=1?$(o[3f],$p)[o[T]](o[b5])[o[L]](o[b6]):$(o[3f],$p)[o[T]](o[b7])[o[L]](o[b8])},ab:q(a,b){4i=0;$1T[o[L]](o[2N]);A=a;v=b;b9();E[o[42]](o[ir],8m);E[o[42]](o[5h],is);E[o[42]](o[8q],v+1);E[o[42]](o[8r],A+1);E[o[42]](o[8s],y[v][o[1G]][A]+y[v][o[1a]][A]);if(y[v][o[1G]][A]==o[ba]){2L=o[it];3H=o[ba];3g()}u{if(y[v][o[1G]][A]==o[bb]){2L=o[bc];3H=o[bb];3g()}u{if(y[v][o[1G]][A]==o[be]){2L=o[iu];3H=o[be];3g()}u{if(y[v][o[1G]][A]==o[bf]){2L=o[iv];3H=o[bf];3g()}u{if(y[v][o[1G]][A]==o[bh]){2L=o[iw];3H=o[bh];3g()}u{if(y[v][o[1G]][A]==o[bi]){2L=o[8x];3H=o[bi];3g()}u{if(y[v][o[1G]][A]==o[8y]){2L=o[ix];3H=o[8y];3g()}}}}}}}},ae:q(){if(4c){J[o[U]](A,v)}u{J[o[8v]]()}},a5:q(){1V=G;1s=y[v][o[1a]][o[K]];if(1v){1g=N(Y[o[1m]]()*1s);if(1s>1){if(1g!=A){J[o[U]](1g,v)}u{if(1g+1>=1s){J[o[U]](0,v)}u{J[o[U]](1g+1,v)}}}u{J[o[U]](0,v)}}u{if(N(A)+1>=1s){J[o[U]](0,v)}u{J[o[U]](N(A)+1,v)}};1A(q(){1V=M},2K)},ak:q(){1V=G;1s=y[v][o[1a]][o[K]];if(1v){1g=N(Y[o[1m]]()*1s);if(1s>1){if(1g!=A){J[o[U]](1g,v)}u{if(1g+1>=1s){J[o[U]](0,v)}u{J[o[U]](1g+1,v)}}}u{J[o[U]](0,v)}}u{if(N(A)-1<0){J[o[U]](1s-1,v)}u{J[o[U]](N(A)-1,v)}};1A(q(){1V=M},2K)},am:q(){1V=G;2d=y[o[K]];if(1v){1g=N(Y[o[1m]]()*2d);if(2d>1){if(1g!=v){1n=y[1g][o[1a]][o[K]];1o=N(Y[o[1m]]()*1n);J[o[U]](1o-1,1g)}u{if(1g+1>=2d){1n=y[0][o[1a]][o[K]];1o=N(Y[o[1m]]()*1n);J[o[U]](1o-1,0)}u{1n=y[1g+1][o[1a]][o[K]];1o=N(Y[o[1m]]()*1n);J[o[U]](1o-1,1g+1)}}}u{1n=y[0][o[1a]][o[K]];1o=N(Y[o[1m]]()*1n);J[o[U]](1o,0)}}u{if(2d>1){if(N(v)+1>=2d){J[o[U]](0,0)}u{J[o[U]](0,N(v)+1)}}u{1n=y[0][o[1a]][o[K]];1o=N(Y[o[1m]]()*1n);J[o[U]](1o,0)}};$p[o[L]](o[4l]);1A(q(){1V=M},2K)},al:q(){1V=G;2d=y[o[K]];if(1v){1g=N(Y[o[1m]]()*2d);if(2d>1){if(1g!=v){1n=y[1g][o[1a]][o[K]];1o=N(Y[o[1m]]()*1n);J[o[U]](1o-1,1g)}u{if(1g+1>=2d){1n=y[0][o[1a]][o[K]];1o=N(Y[o[1m]]()*1n);J[o[U]](1o-1,0)}u{1n=y[1g+1][o[1a]][o[K]];1o=N(Y[o[1m]]()*1n);J[o[U]](1o-1,1g+1)}}}u{1n=y[0][o[1a]][o[K]];1o=N(Y[o[1m]]()*1n);J[o[U]](1o,0)}}u{if(2d>1){if(N(v)-1<0){J[o[U]](0,2d-1)}u{J[o[U]](0,N(v)-1)}}u{1n=y[0][o[1a]][o[K]];1o=N(Y[o[1m]]()*1n);J[o[U]](1o,0)}};$p[o[L]](o[4l]);1A(q(){1V=M},2K)},ah:q(){if(I[o[4m]][o[K]]){if(!5e){4h=0;5e=M};z a=1f*I[o[4m]][o[bj]](4i)/I[o[2o]],b=1f*I[o[4m]][o[bk]](4i)/I[o[2o]];$(o[bl],$p)[o[O]]({7s:a+o[3I],4T:b-a+o[3I]})};if(I[o[2n]]>0&&I[o[2o]]>0){E[o[42]](o[6f],I[o[2n]]);5f||($(o[5i],$p)[o[O]](o[5j],1f*(I[o[2n]]/I[o[2o]])[o[3h]](2)+o[3I]),$(o[6o],$p)[o[O]](o[3i],1f*(I[o[2n]]/I[o[2o]])[o[3h]](2)+o[3I]),$(o[6h],$p)[o[1F]](3D(I[o[2n]])+o[8t]+3D(I[o[2o]])))}u{$(o[5i],$p)[o[O]](o[5j],o[4n]);$(o[6o],$p)[o[O]](o[3i],o[4n]);$(o[bl],$p)[o[O]]({7s:o[4n],4T:o[4n]});$(o[6h],$p)[o[1F]](o[iy])}}};z 8z=2I;z 1c={a2:q(a){iz(8z);$(o[8h])[o[1F]](a)[o[T]](o[1W]);F[o[23]]()},5D:q(){8z=1A(q(){$(o[8h])[o[L]](o[1W])},bm)}};I[o[2q]](o[2C],J[o[2C]],G);I[o[2q]](o[3J],J[o[3J]],G);I[o[2q]](o[iA],J[o[iB]],G);I[o[2q]](o[4k],J[o[4k]],G);I[o[2q]](o[bn],J[o[bn]],G);I[o[2q]](o[bo],J[o[bo]],G);I[o[2q]](o[bp],J[o[bp]],G);I[o[2q]](o[bq],J[o[bq]],!1);$8i[o[1t]](q(){$p[o[4o]](o[1W]);2m=M});$(o[br],$p)[o[1t]](q(){1E=G;z a=y[o[K]];if(a==1){$(o[2r],$1j)[o[2s]](A)[o[T]](W)[o[1Q]](o[2e])[o[D]](o[bs])[o[2f]]()[o[2g]]()[o[L]](W)[o[1Q]](o[2e])[o[D]](o[5])[o[2f]]()}u{$(o[2r],$1j)[o[2s]](v)[o[T]](W)[o[1Q]](o[2e])[o[D]](o[bs])[o[2f]]()[o[2g]]()[o[L]](W)[o[1Q]](o[2e])[o[D]](o[5])[o[2f]]()};1c[o[S]](o[iC]+y[v][o[1z]][A]);$1T[o[L]](o[2N]);I[o[3J]]();E[o[42]](o[2h],o[6n])});$(o[bt],$p)[o[1t]](q(){1E=M;z a=y[o[K]];if(a==1){$(o[2r],$1j)[o[2s]](A)[o[T]](W)[o[1Q]](o[2e])[o[D]](o[bu])[o[2f]]()[o[2g]]()[o[L]](W)[o[1Q]](o[2e])[o[D]](o[5])[o[2f]]()}u{$(o[2r],$1j)[o[2s]](v)[o[T]](W)[o[1Q]](o[2e])[o[D]](o[bu])[o[2f]]()[o[2g]]()[o[L]](W)[o[1Q]](o[2e])[o[D]](o[5])[o[2f]]()};3K();E[o[42]](o[2h],o[2O])});$(o[iD],$p)[o[1t]](q(){if(1V){1E=M;J[o[iE]]();E[o[42]](o[2h],o[2O])}});$(o[iF],$p)[o[1t]](q(){if(1V){1E=M;J[o[8v]]();E[o[42]](o[2h],o[2O])}});$(o[iG],$p)[o[1t]](q(){if(1V){1E=M;J[o[iH]]();E[o[42]](o[2h],o[2O])}});$(o[iI],$p)[o[1t]](q(){if(1V){1E=M;J[o[iJ]]();E[o[42]](o[2h],o[2O])}});$(o[5k],$p)[o[1t]](q(){1v?(1v=G,1c[o[S]](o[iK]),$(F)[o[D]](o[8A]),$2y[o[D]](o[8B])):(4c?(1v=M,4c=G,1c[o[S]](o[bv]),$(F)[o[D]](o[8C]),$2y[o[D]](o[1D])):(1v=G,4c=M,1c[o[S]](o[iL]),$(F)[o[D]](o[iM]),$2y[o[D]](o[iN])));if(2m){2m=G;1A(q(){2m=M},3G)}});$(o[bw],$p)[o[1t]](q(){$(F)[o[T]](W);$(o[bx],$p)[o[L]](W);1v=M;1c[o[S]](o[bv]);$2y[o[D]](o[1D]);E[o[42]](o[6p],o[15])});$(o[bx],$p)[o[1t]](q(){$(F)[o[T]](W);$(o[bw],$p)[o[L]](W);1v=G;1c[o[S]](o[iO]);$2y[o[D]](o[iP]);E[o[42]](o[6p],o[by])});z $bz=$(o[8D],$p);$bz.bA({bB:$(o[iQ],$p),iR:!0,bC:q(a,b,c,e,g){if(5==2D[o[K]]){8o=!0;z d;d=((84-c)/84)[o[3h]](2);1<1B(d)?d=1:0>1B(d)&&(d=0,$(a)[o[O]](o[3j],o[bD]));$(o[bE],$p)[o[1d]](1f*d);I[o[8w]]=d,1N=d,E[o[42]](o[8E],d);1A(q(){1c[o[S]](o[iS]+N(d*1f)+o[3I])},3G)}u{8o=!1}}});z $2X=$(o[5i],$p);$2X.bA({bB:$(o[6q],$p),iT:!0,bC:q(a,b,c,e,g){if(5==2D[o[K]]){5f=!0;z d=$(o[6q],$p)[o[3i]](),d=b/(d-$(a)[o[3i]]()),d=d[o[3h]](2);$(o[6o],$p)[o[3i]](b);I[o[2n]]=I[o[2o]]*d}u{5f=!1}}});$(o[6q],$p)[o[1t]](q(a){$(o[1O])[o[L]](o[1W]);$(o[1P])[o[L]](o[6m]);1E=M;5f=!1;a=a[o[iU]]-$(F)[o[iV]]()[o[5j]];z b=$(F)[o[3i]]();a=(a/b)[o[3h]](2);I[o[2n]]=I[o[2o]]*a});$(o[iW])[o[1t]](q(){$p[o[4o]](o[8F]);8G=$(o[8H])[o[1d]]();8I=$(o[iX])[o[1d]]();if(8G>=1H&&8I<=8x){$(o[6r],$p)[o[23]]();$(o[6s],$p)[o[23]]();$(o[6t],$p)[o[1d]](90);$(o[6u],$p)[o[1d]](90);$(o[4p],$p)[o[1d]](90);$(o[6v],$p)[o[O]]({1I:o[iY]});$1l[o[23]]()}u{if(8G==90&&8I>=8x){$(o[6r],$p)[o[S]]();$(o[6s],$p)[o[S]]();$(o[6t],$p)[o[1d]](1H);$(o[6u],$p)[o[1d]](1H);$(o[4p],$p)[o[1d]](1H);$(o[6v],$p)[o[O]]({1I:o[8J]});if(2B&&(2a||2l)){$1l[o[S]]()}}}});$1U[o[3k]]();$(o[iZ],$p)[o[1t]](q(){$p[o[L]](o[4l])});$(o[j0])[o[1t]](q(){$(o[1O])[o[4o]](o[23]);$(o[1P])[o[4o]](o[5l]);if(!$(o[1O])[o[2i]](o[23])||!$(o[1P])[o[2i]](o[5l])){2k=M;if(2a||2l){if(3e){$1q[o[D]](o[8K])}u{$1q[o[D]](o[8L])}};1c[o[S]](o[j1]);4g=o[aV];$1l[o[D]](o[j2])}u{2k=G;if(2a||2l){$1q[o[D]](o[bF])};1c[o[S]](o[j3]);4g=o[bG];$1l[o[D]](o[1H])};if(2m){2m=G;1A(q(){2m=M},3G)}});Z[o[4q]]={av:{3X:q(){z b=y[o[K]],1j=o[5];if(1w bH===o[3]){$(o[3l],$1j)[o[D]](j4)}u{$(o[3l],$p)[o[O]](o[3m],o[5m]);$(o[3l],$1j)[o[D]](o[j5])};if(b==1){2t(z i=0;i<y[0][o[1a]][o[K]];i++){1j+=o[bI]+(i+1)+o[bJ]+y[0][o[1z]][i]+o[6w]+y[0][o[5n]][i]+o[5o]}}u{2t(z c=0;c<b;c++){1j+=o[j6]+(c+1)+o[j7]+y[c][o[bK]]+o[j8]+y[c][o[j9]]+o[5o]}};$(o[8M],$1j)[o[D]](o[bL]+1j+o[bM])[o[3k]]();$(o[2r],$1j)[o[1t]](q(){if(b==1){1E=M;v=0;if($(F)[o[2i]](W)){1c[o[S]](o[bN]+y[v][o[1z]][A][o[29]](A+1+o[bO],o[5]))}u{E[o[42]](o[2h],o[2O]);A=$(F)[o[6x]]();J[o[U]](A,v)}}u{z a=$(F)[o[6x]]();$(F)[o[2i]](W)?Z[o[4q]][o[5p]][o[bP]](a,M):Z[o[4q]][o[5p]][o[bP]](a,G);$p[o[T]](o[4l]);$(o[ja],$p)[o[O]]({1L:o[bQ]+2A+o[4r]})}});1s=y[v][o[1a]][o[K]];2b&&4j?J[o[U]](Z[o[4q]][o[5p]][o[jb]](4j-1),Z[o[4q]][o[5p]][o[jc]](2b-1)):1v?J[o[U]](1Z[o[jd]](Y[o[1m]]()*1s),v):J[o[U]](0,v)},aw:q(n){1J n>=1s?0:n<0?1s-1:n},ax:q(n){1J n>=y[o[K]]?0:n<0?y[o[K]]-1:n},2j:q(a,b){1s=y[a][o[1a]][o[K]];$(o[je],$p)[o[1F]](y[a][o[bK]]+o[jf]+1s+o[4r]);z c=o[5];2t(z i=0;i<1s;i++){c+=o[bI]+(i+1)+o[bJ]+y[a][o[1z]][i]+o[6w]+y[a][o[5n]][i]+o[5o]};$(o[bR],$1U)[o[D]](c);$1U[o[1]](o[jg],a);$1U[o[3k]](o[jh]);if(b){$(o[2r],$1U)[o[2s]](A)[o[T]](W)[o[2g]]()[o[L]](W);$1U[o[3k]](o[5q],$(o[6y],$1U)[o[6z]]()[o[3j]]-90)}u{$1U[o[3k]](o[5q],o[3j])};$(o[2r],$1U)[o[1t]](q(){1E=M;v=a;if($(F)[o[2i]](W)){1c[o[S]](o[bN]+y[v][o[1z]][A][o[29]](A+1+o[bO],o[5]))}u{E[o[42]](o[2h],o[2O]);A=$(F)[o[6x]]();J[o[U]](A,v)}})}}};z 2u=[],6A=0,6B=0,8N=G,8O=G,ji=!1,4s=0,6l=2I,6k=2I;z 1e={a6:q(){1e[o[3F]][o[23]]();1e[o[2p]][o[23]]();2a=G;2l=G;$(o[1O])[o[D]](o[5]);$(o[1P])[o[D]](o[5]);1A(q(){if(2k){$1q[o[D]](o[jj]+4g)}u{$1q[o[D]](o[jk]+4g)};z b=E[o[13]](o[5c]);z c=E[o[13]](o[5d]);if(c[o[20]](y[v][o[1a]][A]+y[v][o[1z]][A])>=0){if(c[o[20]](o[jl])>=0){if(2B){$1l[o[S]]()};1e[o[2p]][o[6C]](c[o[29]](y[v][o[1a]][A]+y[v][o[1z]][A],o[5]))}u{$1q[o[D]](o[5r]);$1l[o[23]]()}}u{if(b[o[20]](y[v][o[1a]][A]+y[v][o[1z]][A])>=0){if(b[o[20]](o[jm])>=0){if(2B){$1l[o[S]]()};1e[o[3F]][o[6C]](b[o[29]](y[v][o[1a]][A]+y[v][o[1z]][A],o[5]))}u{$1q[o[D]](o[5r]);$1l[o[23]]()}}u{if(/(7V|7W|7X|7Y|7Z|8a|8b 8c|8d|8e)/i[o[18]](8f[o[17]])){z d=o[5]}u{z d=o[jn]+y[v][o[jo]][A]};if(y[v][o[1G]][A]==o[8y]){8P=1x+o[bS]+y[v][o[1a]][A]+o[6D]+y[v][o[1G]][A]+o[6E]+1y+d+o[6F]+y[v][o[5s]][A]+o[jp]+v+o[8Q]+A}u{8P=1x+o[bS]+y[v][o[1a]][A]+o[6D]+y[v][o[1G]][A]+o[6E]+1y+o[6F]+y[v][o[5s]][A]+d};$[o[4t]]({3z:8P,2w:o[4u],jq:G,4v:o[jr],ay:o[jt],4w:q(a){if(a[o[bT]]==o[2p]){E[o[42]](o[5d],y[v][o[1a]][A]+y[v][o[1z]][A]+a[o[4x]]);if(2B){$1l[o[S]]()};1e[o[2p]][o[6C]](a[o[4x]])}u{if(a[o[bT]]==o[3F]){if(a[o[4x]]==o[3B]||a[o[4x]]==o[5]){$1q[o[D]](o[5r]);$1l[o[23]]()}u{E[o[42]](o[5c],y[v][o[1a]][A]+y[v][o[1z]][A]+a[o[4x]]);if(2B){$1l[o[S]]()};1e[o[3F]][o[6C]](a[o[4x]])}}u{$1q[o[D]](o[5r]);$1l[o[23]]()}}},3b:q(){$1q[o[D]](o[5r]);$1l[o[23]]()}})}}},50)},a1:{7F:q(i){3e=M;if(2k==M){$1q[o[D]](o[8K])};4y=i[o[4z]](/\\[aq:(\\w+)\\]/i);4y=2I!=4y&&0==8R(4y[1])?1B(4y[1]):0;4A=ju(i)[o[5t]](o[jv]);2a=!0;a=0;z c=o[bU];2u=[];8S=[];1>4A[o[K]]&&(4A=i[o[5t]](/\\s+/));2t(z b=4A[o[K]];a<b;a++){z d=4A[a][o[29]](/\\[\\d*:\\d*((\\.|\\:)\\d*)*\\]/g,o[5]),e=4A[a][o[4z]](/\\[\\d*:\\d*((\\.|\\:)\\d*)*\\]/g);if(bV(0)!=d&&(o[3]==d&&(d=o[5]),e)){2t(z h=0,f=e[o[K]];h<f;h++){z g=1B(3n(e[h][o[4z]](/\\[(\\d*)/i)[1])),m=1B(3n(e[h][o[4z]](/\\:(\\d+(\\.\\d*)*)/i)[1]));8T{k=1B(3n(e[h][o[4z]](/\\:.*\\:(\\d*)/i)[1]))}6g(l){k=0};2t(g=Y[o[4B]](6G*(60*g+m)+k-4y);0==g||-1!=2u[o[20]](g);){g++};o[jw]==1w d&&2u[o[5u]](1B(g));8S[3n(g)]=3n(d[o[29]](/[-\\jx]/g,o[5]))}}};2u=2u[o[jy]](q(a,b){1J a-b});a=0;2t(b=2u[o[K]];a<b;a++){if(d=2u[a],e=8S[d],g=2u[a+1],f=Y[o[4B]](1B(g)-1B(d)),bV(0)!==e){c=o[bU]==c&&0==d?o[bW]+d+o[2v]+f+o[2v]+h+o[jz]+e+o[5o]:c+o[bW]+d+o[2v]+f+o[jA]+e+o[5o]}};$(o[1O])[o[D]](o[bL]+c+o[bM]);6k=2c(1e[o[3F]][o[2C]],1f)},4R:q(){z d=Y[o[4B]](6G*I[o[2n]]);if($(o[1O])[o[1d]]()>=40){8U=40}u{8U=20};d>=2u[0]&&(4s=2u[o[jB]]());if(((4s+2K)-d)>0&&((d+2K)-4s)>0){z a=$(o[jC]+4s),b=1B(3n(a[o[1]](o[bX]))[o[5t]](o[2v])[1])/(a[o[1F]]()[o[K]]+1);!a[o[2i]](W)&&$(o[2r])[o[2i]](o[jD]+4s)&&(a[o[D]]=o[6H]+a[o[D]]()+o[6I],a[o[T]](W)[o[2g]]()[o[L]](W),$bY=a,$bY[o[6J]](q(){if(6i==1){2P=6K()}u{2P=2z};$(F)[o[1]](o[5v],o[jE]+2P+o[jF])[o[2g]]()[o[8V]](o[5v]);if(7H==1){if(a[o[1F]]()[o[K]]>6){if(b>3G){$(F)[o[bZ]]({"fx":o[jG],"jH":o[jI]})}u{z c=$(F),7I=2x 5w(c)[o[c0]]();c[o[jJ]](o[jK],7I)}}u{$(F)[o[bZ]]({\'fx\':o[jL],jM:o[jN]})}}}));$(o[1O])[o[c1]](8U*a[o[6x]]());if(2k){$1q[o[D]](o[8L]);3e=G};if(1E&&2a){$(o[1O])[o[T]](o[1W])}}},5D:q(){2M(6k);$(o[1O])[o[L]](o[1W])}},7q:{7F:q(b){3e=M;if(2k==M){$1q[o[D]](o[8K])};2l=M;z c=[],8W=[],1R=[],8X=[],8Y=o[5],jO=0,5x=o[8Z];b[o[29]](/\\\'(\\d*):(\\d*).(\\d*)\\\',\'(\\d*):(\\d*).(\\d*)\\\',\'(.*)\\\',\\s\\\'(.*)\\\'/g,q(){z a=2D[1]|0,c2=2D[2]|0,c3=2D[3]|0,c4=2D[4]|0,c5=2D[5]|0,c6=2D[6]|0;c[o[5u]](a*c7+c2*10+Y[o[4B]](c3/1f));8W[o[5u]](c4*c7+c5*10+Y[o[4B]](c6/1f));1R[o[5u]](2D[7]);8X[o[5u]](2D[8])});2t(z i=0;i<c[o[K]];i++){z d=G;z e=2x jP();z f=0;z g=o[5],9a=8X[i][o[5t]](o[9b]);if(1R[i][o[20]](o[c8])>=0){5x=o[0];1R[i]=1R[i][o[29]](o[c8],o[2v])};if(1R[i][o[20]](o[c9])>=0){5x=o[9c];1R[i]=1R[i][o[29]](o[c9],o[2v])};if(1R[i][o[20]](o[ca])>=0){5x=o[jQ];1R[i]=1R[i][o[29]](o[ca],o[2v])};z h=1R[i][o[4z]](/(\\w+)\'+(\\w+)|(\\w+)|([^\\w\\s])|(^\\s+)|(\\s+$)|\\s+/g);2t(z j=0;j<h[o[K]];j++){if(h[j]==o[2v]){z d=M;e[j]=o[4n];f++}u{if(d){e[j]=9a[j-f]}u{e[j]=9a[j]}};if(1R[i][j]==o[jR]){g+=o[jS]+e[j]+o[jT]}u{g+=o[jU]+e[j]+o[45]+h[j]+o[jV]}};8Y+=o[jW]+8W[i]+o[jX]+c[i]+o[jY]+(i%2==0?1:2)+o[2v]+5x+o[jZ]+g+o[k0]+g+o[k1]};$(o[1P])[o[D]](8Y);6l=2c(1e[o[2p]][o[2C]],1f)},4R:q(){z a=Y[o[4B]](I[o[2n]]*10);if($(o[9d]+(a+10))[o[K]]&&!$(o[9d]+(a+10))[o[2i]](W)){if(2k==M){$1q[o[D]](o[8L]);3e=G};if(1E&&2l){$(o[1P])[o[T]](o[6m])};z b=$(o[9d]+(a+10));if(6i==1){2P=6K()}u{2P=2z};b[o[T]](W)[o[O]](o[6L],o[3L]+2P+o[4r]);b[o[2i]](o[6M])?b[o[2g]](o[k2])[o[L]](W)[o[8V]](o[5v]):b[o[2g]](o[k3])[o[L]](W)[o[8V]](o[5v]);1A(q(){if(b[o[2i]](o[6M])){1e[o[2p]][o[6N]][o[6M]](b);8N=M}u{1e[o[2p]][o[6N]][o[cb]](b);8O=M}},2K)}u{1R=o[5]};if($(o[1P]+(a-30))[o[K]]){$(o[1P]+(a-30))[o[L]](W)}},aB:{7K:q(a){z b=$(o[cc],a),$6O=b[o[2s]](6A++),$em=$(o[cd],$6O),4C=+$em[o[1]](o[ce]);$em[o[cf]]({4T:o[cg]},4C);if(6A<b[o[K]]){k4=1A(q(){1e[o[2p]][o[6N]][o[6M]](a)},4C)}u{6A=0;8N=G}},7L:q(a){z b=$(o[cc],a),$6O=b[o[2s]](6B++),$em=$(o[cd],$6O),4C=+$em[o[1]](o[ce]);$em[o[cf]]({4T:o[cg]},4C);if(6B<b[o[K]]){k5=1A(q(){1e[o[2p]][o[6N]][o[cb]](a)},4C)}u{6B=0;8O=G}}},5D:q(){2M(6l);$(o[1P])[o[L]](o[6m])}}};5y=E[o[13]](o[4D])?E[o[13]](o[4D]):G;ch=E[o[13]](o[5h])?E[o[13]](o[5h]):1;if(5y&&1Z[o[22]][o[21]][o[20]](o[k6])<0){$[o[4t]]({3z:1x+o[6P]+1y+o[k7]+1y,2w:o[4u],4v:o[1F],4w:q(d){if(d!=ch){$[o[4t]]({3z:1x+o[6P]+1y,2w:o[4u],4v:o[1F],4w:q(a){8T{E[o[9e]](o[4D]);E[o[42]](o[4D],a);E[o[9e]](o[5h]);E[o[42]](o[5h],d);1b[o[37]](o[ci]+N(a[o[K]]/6Q)+o[cj])}6g(e){1b[o[37]](o[ci]+N(a[o[K]]/6Q)+o[ck])};if(1w y===o[3]){1K(a);1b[o[37]](o[cl])};2W=2c(2V,1f)},3b:q(a,b,c){1K(5y);1b[o[37]](o[k8]);2W=2c(2V,1f)}})}u{1K(5y);1b[o[37]](o[cm]);2W=2c(2V,1f)}},3b:q(a,b,c){1K(5y);1b[o[37]](o[cm]);2W=2c(2V,1f)}})}u{$[o[4t]]({3z:1x+o[6P]+1y,2w:o[4u],4v:o[1F],4w:q(a){8T{E[o[9e]](o[4D]);E[o[42]](o[4D],a);1b[o[37]](o[co]+N(a[o[K]]/6Q)+o[cj])}6g(e){1b[o[37]](o[co]+N(a[o[K]]/6Q)+o[ck])};if(1w y===o[3]){1K(a);1b[o[37]](o[cl])};2W=2c(2V,1f)},3b:q(a,b,c){$(o[24])[o[23]]();1c[o[S]](o[k9])}})};2c(q(){E[o[42]](o[14],2x aP()[o[16]]().ka())},3G);1Z[o[2q]](o[kb],cp,M);q cp(a){E[o[42]](o[12],o[by])}}};q 2V(){if($p[o[O]](o[3o])==o[kc]){2M(2W);1b[o[37]](o[kd])}u{if($p[o[O]](o[3o])!=o[3M]){2M(2W);1b[o[37]](o[ke]);6R()}}}q 6R(){if(1w bH!==o[3]){$(o[4E],$p)[o[D]](o[kf]);if($(o[4E],$p)[o[O]](o[3o])==o[3M]||$(o[3l],$p)[o[O]](o[3o])==o[3M]||$(o[6S],$p)[o[O]](o[3o])==o[3M]){$(o[4E],$p)[o[O]](o[3m],o[9f]);$(o[3l],$p)[o[O]](o[3m],o[5m]);$(o[6S],$p)[o[O]](o[3m],o[5m]);1b[o[37]](o[cq])};2M(3E);q cr(){z a=3N[o[K]];3O=N(Y[o[1m]]()*a);$(o[kh],$p)[o[O]](o[3m],o[9f]);$(o[3l],$1j)[o[D]](o[ki]+1x+o[cs]+1y+o[8Q]+3N[3O][o[ct]]+o[cu]+3N[3O][o[9g]]+o[kj]+2A+o[kl]+3N[3O][o[9g]]+o[cv]);$(o[4E],$p)[o[D]](o[km]+2A+o[kn]+1x+o[cs]+1y+o[8Q]+3N[3O][o[ct]]+o[cu]+3N[3O][o[9g]]+o[ko]+3N[3O][o[kp]]+o[cv]);if($(o[4E],$p)[o[O]](o[3o])==o[3M]||$(o[3l],$p)[o[O]](o[3o])==o[3M]||$(o[6S],$p)[o[O]](o[3o])==o[3M]){$(o[4E],$p)[o[O]](o[3m],o[9f]);$(o[3l],$p)[o[O]](o[3m],o[5m]);$(o[6S],$p)[o[O]](o[3m],o[5m]);1b[o[37]](o[cq])}}3E=2c(cr,kq)};if(!8R(9h)){if(9h>=o[kr]){6T=o[ks]}u{6T=o[kt]+9h}}u{6T=o[ku]};if(kv!==1){$(o[kx],$p)[o[23]]()};1N=E[o[13]](o[8E])?E[o[13]](o[8E]):6T;if(1f*1N!=o[4n]){$(o[8D],$p)[o[O]](o[3j],1f*(1-1N)+o[ky])}u{$(o[8D],$p)[o[O]](o[3j],o[bD])};$(o[bE],$p)[o[1d]](1f*1N);0==1N?$(o[3f],$p)[o[T]](o[b1])[o[L]](o[b2]):1N>=0.4&&1N<=0.7?$(o[3f],$p)[o[T]](o[b3])[o[L]](o[b4]):1N>=0.7&&1N<=1?$(o[3f],$p)[o[T]](o[b5])[o[L]](o[b6]):$(o[3f],$p)[o[T]](o[b7])[o[L]](o[b8]);I[o[8w]]=1N;if(kz==1&&3p==1){if(!8R(cw)){1A(q(){if(!$p[o[2i]](o[1W])&&!2m){$p[o[4o]](o[1W])}},cw*2K)}};if(E[o[13]](o[6p])!=2I){if(E[o[13]](o[6p])==o[15]){$(o[5k],$p)[o[D]](o[8C]);$2y[o[D]](o[1D]);1v=M}u{$(o[5k],$p)[o[D]](o[8A]);$2y[o[D]](o[8B]);1v=G}}u{if(kA!=1){1v=G;$(o[5k],$p)[o[D]](o[8A]);$2y[o[D]](o[8B])}u{$(o[5k],$p)[o[D]](o[8C]);$2y[o[D]](o[1D]);1v=M}};3P=y[o[K]];if(1w 1u===o[3]){cx=2b?2b:5b-1;if(cx>3P){v=0;1b[o[37]](o[9i]+3P+o[9j])}u{v=2b?2b-1:5b-1;if(v<0){v=0;2b=0};1b[o[37]](o[kB])}}u{if(1w 1X===o[3]){if(1u>3P){v=0;J[o[U]](0,0);1b[o[37]](o[9i]+3P+o[cy])}u{2b=1u;v=1u;J[o[U]](0,1u-1);1b[o[37]](o[cz]+1u+o[cy])}}u{if(1u>3P){1b[o[37]](o[9i]+3P+o[cA]+1X+o[9j]);v=0;J[o[U]](1X-1,0)}u{1b[o[37]](o[cz]+1u+o[cA]+1X+o[9j]);2b=1u;4j=1X;v=1u;J[o[U]](1X-1,1u-1)}}};if(kC==0){$(o[1O])[o[T]](o[23]);$(o[1P])[o[T]](o[5l]);2k=G;if(2a){$1q[o[D]](o[bF])};4g=o[bG];$1l[o[D]](o[1H])};if(kD==1&&3q==1){1A(q(){1c[o[S]](kE)},kF)};Z[o[4q]][o[5p]][o[kG]]()}q 6U(a,b,t){9k=$(o[8H])[o[1d]]();if(9k==1H){b=b||14}u{if(9k==90){b=b||14}u{b=b||6}};t=t||o[kH];z c=o[5];z d=a[o[K]];z h=0;2t(z i=0;h<b*2&&i<d;i++){h+=a[o[kI]](i)>aU?2:1;c+=a[o[kJ]](i)};if(i<d){c+=t};1J c}q 3g(){1e[o[b0]]();cB=y[v][o[9l]][A]?y[v][o[9l]][A]:G;if(cB){I[o[30]]=y[v][o[9l]][A]}u{I[o[30]]=1x+o[kK]+y[v][o[1a]][A]+o[6D]+y[v][o[1G]][A]+o[6E]+1y+o[6F]+y[v][o[5s]][A]};$8j[o[D]](o[6H]+6U(y[v][o[1z]][A])+o[6I]);$8k[o[D]](o[6H]+6U(y[v][o[5n]][A],6)+o[6I]);$8l[o[D]](o[6H]+6U(y[v][o[cC]][A],6)+o[6I]);z d=2x kL();5z=1x+o[kM]+y[v][o[1a]][A]+o[kN]+cD(y[v][o[cE]][A])+o[6D]+y[v][o[1G]][A]+o[6E]+1y+o[6F]+y[v][o[5s]][A];d[o[30]]=5z;$1T[o[T]](o[cF]);d[o[kO]]=q(){$1T[o[L]](o[cF]);$[o[4t]]({3z:1x+o[kP],2w:o[4u],4v:o[kQ],5a:{2j:y[v][o[1a]][A],2w:y[v][o[1G]][A],7Q:cD(y[v][o[cE]][A]),id:1y,7G:y[v][o[5s]][A]},4w:q(){9m()},3b:q(){z a=o[aW];9m()}})};d[o[6V]]=q(){5z=o[kR]+8m+o[kS];d[o[30]]=5z;1A(q(){1c[o[S]](y[v][o[1z]][A]+o[kT])},kU)};$1T[o[D]](d);if(1I==1){$(o[5A],$p)[o[S]]();$(o[5A],$p)[o[1]](o[30],d[o[30]])}u{$(o[5A],$p)[o[23]]()};9n=$(o[8H])[o[1d]]();if(9n==1H){$(o[5A],$p)[o[1d]](1H);$(o[4p],$p)[o[1d]](1H)}u{if(9n==90){$(o[5A],$p)[o[1d]](90);$(o[4p],$p)[o[1d]](90)}};if(8n==1){8n=2;if(/(7V|7W|7X|7Y|7Z|8a|8b 8c|8d|8e)/i[o[18]](8f[o[17]])){if(kV==1&&au==1){if(E[o[13]](o[2h])!==o[6n]){3K()}u{$1T[o[L]](o[2N]);I[o[3J]]()}}u{if(E[o[13]](o[2h])===o[2O]){3K()}u{$1T[o[L]](o[2N]);I[o[3J]]()}}}u{if(kW==1&&au==1){if(E[o[13]](o[2h])!==o[6n]){3K()}u{$1T[o[L]](o[2N]);I[o[3J]]()}}u{if(E[o[13]](o[2h])===o[2O]){3K()}u{$1T[o[L]](o[2N]);I[o[3J]]()}}}}u{3K()};if(3C&&5g&&4a&&y[v][o[1G]][A]+y[v][o[1a]][A]==5R){$(o[5i],$p)[o[O]](o[5j],1f*(3C/5g)[o[3h]](2)+o[3I]);$(o[6o],$p)[o[O]](o[3i],1f*(3C/5g)[o[3h]](2)+o[3I]);$(o[6h],$p)[o[1F]](3D(3C)+o[8t]+3D(5g))};$(1Z)[o[kX]](q(){z a=$(F)[o[c1]]();z b=$(1Z[o[kY]])[o[1d]]();z c=$(F)[o[1d]]();if(a+c==b){2B=G;if(1E&&2k){$1l[o[23]]();$(o[1O])[o[T]](o[23]);$(o[1P])[o[T]](o[5l]);if(2a||2l){1c[o[S]](o[kZ])}}}u{2B=M;if(1E&&2k){if(2a||2l){$1l[o[S]]()};$(o[1O])[o[L]](o[23]);$(o[1P])[o[L]](o[5l])}}})}q 3K(){3d[o[2q]](o[l0],q(){z a=q(){I[o[2C]]();3d[o[l1]](o[cG],a,G)};I[o[2C]]();3d[o[2q]](o[cG],a,G)},G);z b=I[o[2C]]();if(b){b[o[l2]](()=>{if(2b==v+1&&4j==A+1&&3C&&4a&&y[v][o[1G]][A]+y[v][o[1a]][A]==5R){I[o[2n]]=3C;4a=G};z t=I[o[2o]];E[o[42]](o[8p],t);$1T[o[T]](o[2N]);1c[o[S]](o[l3]+2L+o[3G]+y[v][o[1z]][A]);if(l4===1){cH(y[v][o[1z]][A],y[v][o[5n]][A]+o[6w]+y[v][o[cC]][A],5z)};1b[o[37]](1B(N(v)+1)+o[cI]+1B(N(A)+1)+o[2v]+y[v][o[1z]][A]+o[6w]+y[v][o[5n]][A]+o[l5]+Y[o[3Q]](t/60)+o[5B]+(t%60/1f)[o[3h]](2)[o[l6]](-2))})[o[l7]]((e)=>{1b[o[37]](o[l8])})}}q b9(){z a=y[o[K]];if(a==1){$(o[2r],$1j)[o[2s]](A)[o[T]](W)[o[1Q]](o[2e])[o[D]](o[cJ])[o[2f]]()[o[2g]]()[o[L]](W)[o[1Q]](o[2e])[o[D]](o[5])[o[2f]]();if(!$(o[l9],$1j)[o[D]]()==o[5]){$(o[8M],$1j)[o[3k]](o[5q],($(o[6y],$1j)[o[6z]]()[o[3j]])-90)}}u{$(o[2r],$1j)[o[2s]](v)[o[T]](W)[o[1Q]](o[2e])[o[D]](o[cJ])[o[2f]]()[o[2g]]()[o[L]](W)[o[1Q]](o[2e])[o[D]](o[5])[o[2f]]();$(o[8M],$1j)[o[3k]](o[5q],($(o[6y],$1j)[o[6z]]()[o[3j]])-90);if(!$(o[bR],$1U)[o[D]]()==o[5]&&$(o[cK]+v+o[cL])[o[K]]){$(o[cK]+v+o[cL])[o[1Q]](o[2r])[o[2s]](A)[o[T]](W)[o[2g]]()[o[L]](W);$1U[o[3k]](o[5q],($(o[6y],$1U)[o[6z]]()[o[3j]])-90)}};if(1B(2b)!==1B(N(v)+1)||1B(4j)!==1B(N(A)+1)){4a=G}}q 9m(){$p[o[O]]({1I:o[3L]+2z+o[la]});$8i[o[O]]({1I:o[3L]+2z+o[9o]});$aS[o[O]]({1I:o[3L]+2z+o[lb]});$lk[o[O]]({1I:o[3L]+2z+o[9o]});$kk[o[O]]({1I:o[3L]+2z+o[9o]});$(o[lc],$p)[o[O]]({1L:o[bQ]+2A+o[4r]});$(o[ld],$p)[o[O]](o[le],o[lf]+2A+o[lg]);$(o[lh],$p)[o[O]](o[lj],o[ll]+2A+o[lm]+2A+o[cM]+2A+o[cM]+2A+o[4r]);$(o[ln],$p)[o[O]]({1I:o[3L]+2z+o[lo]})}q 8u(){z a=I[o[4m]][o[K]];if(1==a){1J 0};2t(z b=$(o[6q],$p)[o[3i]](),b=N($(o[5i],$p)[o[O]](o[5j]))/b*I[o[2o]],c=0;c<a;c++){if(b>=I[o[4m]][o[bj]](c)&&b<=I[o[4m]][o[bk]](c)){1J c}};1J 0}q 6K(){F[o[cN]]=Y[o[3Q]](Y[o[1m]]()*1D);F[o[9c]]=Y[o[3Q]](Y[o[1m]]()*1D);F[o[8Z]]=Y[o[3Q]](Y[o[1m]]()*1D);F[o[6L]]=F[o[cN]]+o[9b]+F[o[9c]]+o[9b]+F[o[8Z]];1J F[o[6L]]}q cH(c,d,e){z f=1Z[o[lp]]||1Z[o[lq]]||1Z[o[ls]];if(f){if(f[o[lt]]==o[cO]){z g=2x f(c,{7m:d,cP:e});1A(q(){g[o[cQ]]()},bm);g[o[9p]]=q(){g[o[cQ]]()};g[o[6V]]=q(){1b[o[37]](o[6V])};1J G}u{f[o[lu]](q(a){if(a===o[cO]){z b=2x f(c,{7m:d,cP:e});b[o[9p]]=q(){};b[o[6V]]=q(){};b[o[lv]]=q(){};b[o[lw]]=q(){}}u{1J G}})}}}q lx(a){a=4F(a)/6G;1J a=2I!=a&&o[5]!=a?60<a&&2Q>a?4G(N(a/60))+o[5B]+4G(N(60*(4F(a/60)-N(a/60)))):2Q<=a&&ly>a?N(a/2Q)+o[5B]+4G(N(60*(4F(a/2Q)-N(a/2Q))))+o[5B]+4G(N(60*(4F(60*(4F(a/2Q)-N(a/2Q)))-N(60*(4F(a/2Q)-N(a/2Q)))))):o[lz]+4G(N(a)):o[cR]}q 4G(a){a=o[9q]+a;1J a[o[lA]](a[o[K]]-2,a[o[K]])}q 5w(a,c){a[o[lB]]();F[o[4H]]=!1;F[o[cS]]=1B(3n(a[o[1]](o[bX]))[o[5t]](o[2v])[1])/6G;F[o[5C]]=0;F[o[lC]]=a[o[D]]();F[o[4I]]=a[o[1Q]](o[lD]);F[o[cT]]=F[o[4I]][o[K]];F[o[4J]]=0;F[o[9r]]=3n(a[o[1]](o[lE]));F[o[cU]]=F[o[9r]][o[K]];F[o[4I]][o[6J]](q(){z a=$(F);a[o[1]](o[9s],a[o[1F]]());a[o[1F]](o[cI])})}q 3D(t){if(t>0){1J(o[9q]+Y[o[3Q]](t/60))[o[cV]](-2)+o[5B]+(o[9q]+Y[o[3Q]](t%60))[o[cV]](-2)}u{1J(o[cR])}}5w[o[9t]][o[lF]]=q(){1J F[o[9r]][Y[o[3Q]](Y[o[1m]]()*F[o[cU]])]};5w[o[9t]][o[c0]]=q(){F[o[4H]]=!1;F[o[4J]]=F[o[5C]]=0;F[o[4I]][o[6J]](q(){z a=$(F);a[o[1F]](a[o[1]](o[9s]));a[o[L]](o[4H])});F[o[9u]]()};5w[o[9t]][o[9u]]=q(){if(6i==1){2P=6K()}u{2P=2z};9v=F;F[o[4I]][o[6J]](q(a,b){b=$(b);a>=9v[o[4J]]&&(b[o[O]](o[6L],o[lG]),b[o[O]](o[cW],o[lH]))});if(F[o[5C]]<F[o[cS]]){F[o[5C]]++}u{if(F[o[4J]]<F[o[cT]]){z a=F[o[4I]][o[2s]](F[o[4J]]);F[o[5C]]=0;a[o[1]](o[5v],o[lI]+2P+o[4r]);a[o[1F]](a[o[1]](o[9s]))[o[O]](o[cW],1)[o[T]](o[4H]);F[o[4J]]++}u{F[o[4H]]=!0}};F[o[4H]]||lJ(q(){9v[o[9u]]()})};$(3d)[o[lK]](q(){$(1Z)[o[lL]](q(a){z b=a[o[lM]];if(b==bc){aY=o[5];if(I[o[aZ]]){$(o[bt],$p)[o[1t]]()}u{$(o[br],$p)[o[1t]]()}}})});3d[o[9p]]=q(e){z e=e||1Z[o[lN]];z a=e[o[lO]]||e[o[lP]];z b=3d[o[cX]](o[lQ]);if(!(a==b)&&!b[o[lR]](a)&&$p[o[2i]](o[1W])&&2m){$p[o[4o]](o[1W]);2m=G}};q lS(d,e,f){$[o[4t]]({3z:1x+o[6P]+d,2w:o[4u],4v:o[1F],4w:q(a){if(a[o[6W]](o[cY])&&a[o[6W]](o[cZ])){E[o[42]](o[5c],o[3B]);E[o[42]](o[5d],o[3B]);$(o[d0])[o[D]](o[d1]);$1q=$(o[d2]);if(1w(3E)!=o[3]){2M(3E)};d3=3d[o[cX]](o[lT]);d3[o[21]]=1x+o[44]+d;1K(a);if(e){1K(1u=e)}u{1K(1u=5b)};if(f){1K(1X=f)}u{1K(1X=G)};1b[o[37]](o[d4]);6R();$p[o[L]](o[4l]);$p[o[L]](o[8F]);$(o[6r],$p)[o[S]]();$(o[6s],$p)[o[S]]();$(o[d5],$p)[o[S]]();$(o[6t],$p)[o[1d]](1H);$(o[6u],$p)[o[1d]](1H);$(o[4p],$p)[o[1d]](1H);$(o[6v],$p)[o[O]]({1I:o[8J]});$p[o[T]](o[1W])}u{1c[o[S]](o[d6])}},3b:q(a,b,c){1c[o[S]](o[lU])}})}q 3a(a,b,c){if(a[o[6W]](o[cY])&&a[o[6W]](o[cZ])){E[o[42]](o[5c],o[3B]);E[o[42]](o[5d],o[3B]);$(o[d0])[o[D]](o[d1]);$1q=$(o[d2]);if(1w(3E)!=o[3]){2M(3E)};1K(a);if(b){1K(1u=b)}u{1K(1u=5b)};if(c){1K(1X=c)}u{1K(1X=G)};1b[o[37]](o[d4]);6R();$p[o[L]](o[4l]);$p[o[L]](o[8F]);$(o[6r],$p)[o[S]]();$(o[6s],$p)[o[S]]();$(o[d5],$p)[o[S]]();$(o[6t],$p)[o[1d]](1H);$(o[6u],$p)[o[1d]](1H);$(o[4p],$p)[o[1d]](1H);$(o[6v],$p)[o[O]]({1I:o[8J]});$p[o[T]](o[1W])}u{1c[o[S]](o[d6])}}', 62, 1359, '||||||||||||||||||||||||_0xef73|player|function||||else|albumId||class|songSheetList|var|songId|div|x0A|150|localStorage|this|false|myhkicon|audio|myhkMedia|204|162|true|parseInt|211|u64ad|u653e|myhkfont|159|155|203|span|myhknow|x09|Math|myhkplayer|||||||||||188|console|myhkTips|270|myhkLrc|100|rid|u5668|u6b4c|albumList|uff01|songFrom4|205|songTotals|rids|uff1a|songFrom3|u97f3|songTotal|229|myhkalbum|myhkrandom|typeof|webURL|keyId|164|setTimeout|Number|u4e50|255|hasgeci|148|187|300|background|return|eval|color|style|volume|119|120|232|kscCont|00|cover|songList|myhkpass|158|myhksong|u5355|window|||||||||||hasLrc|playingalbumId|setInterval|albumTotal|231|230|233|238|292|song|ycgeci|hasKsc|autoswitch|145|147|160|220|236|235|for|lrcTimeLine|369|type|new|songFrom2|myhkcolor|myhkfcolor|zdyc|156|arguments|myhkw|u5df2|display|progressbg|null|u8bcd|1000|songFrom55|clearInterval|168|241|lrccolor|3600|u660e|u6708|u6d69|u7a7a|myhkcss|playercss|playprogress|switch|list|||||||||||myhklist|error|rgb|document|gcdw|178|netmusic|214|216|268|289|303|304|String|437|op|sg|u8f7d|uff0c|musicheader|u5931|u8d25|u53d6|important|u6570|url|myhkload|138|myhkplaytime|formatSecond|myhkadTime|157|500|musictype|210|221|startPlay|412|440|adList|adid|albumTotals|503|href|u52a0|api|myhkgeci|musicbottom|myhkplaylist|album|right|ul|||||||||||playing|u83b7|myhkloop|u6210|u529f|u636e|songFrom33|errCount|currentFrameId|playingsongId|154|206|207|218|228|284|302|326|lrcOutTime|359|354|dataType|success|358|offsetcont|360|lrcArray|364|spanT|423|443|parseFloat|foo|542|546|549|skin|https|u81ea|myhkstatus|myhknote|volumeMiddle|myhkKsc|play|u5b9a|width|u4e13|u8f91|unset|u514d|u8d39|target|||||||||||data|defaultAlbum|137|139|errjc|playisTsMoving|myhkplaying|186|215|213|259|291|305|310|311|324|336|343|351|362|366|378|Ticker|sex|myhkplayerlist|newimg|490|504|544|hide|u52a8|myhkblur|suijibofang|geci|myhkcontrol|volumeprogress|progressbg1|ts|ksclrc|myhkcover|arrow|bold|u5f00|myhk_player_songid|u7f13|volumeLow|volumeHigh|volumeCross|random|u5faa|u73af|u66f2|||||||||||rgba|_blank|u65b0|u4f18|u5148|140|catch|124|randcolor|cicleTime|lrcTime|kscTime|161|170|217|261|274|280|281|282|283|286|309|322|338|337|tempNum1|tempNum2|342|348|349|350|1E3|376|377|390|myhkrandColor|411|413|416|spanNow|425|1024|getlist|444|vol|LimitStr|486|572|u6b62|u5728|u9762|||||||||||u672c|u7ad9|u5236|padding|5px|u7248|img|top|artiststyle|u968f|u673a|playlist|body|u542f|f00|mapMarker|ksc|u505c|left|artist|u6682|shunxubofang|errorCircle|u5173|u95ed|title|u70b9|u51fb|u7533|u8bf7|index|format|sign|letterfx|ticker|dir|line1|line2|u5b58|uff08|uff09|u6307|pic|mobile|mobiles|skins|myhkfeed|iPhone|iPod|iPad|Android|ios|||||||||||Nokia|Black|Berry|MIDP|Phone|navigator|101|118|switchPlayer|songName|songFrom|songFrom1|myhkqq|myhkfirst|visTsMoving|141|142|143|144|146|GetCurrentFrame|171|175|200|201|myhkTipsTime|251|252|254|266|272|277|playerHeight|278|playlistHeight|287|293|294|319|kscLineNow1|kscLineNow2|lrcurl|353|isNaN|lrcStr|try|lrcHeight|379|kscEndTimeLine|kscTimePer|kscMain|392|||||||||||kscTextPerTime|393|396|410|427|445|452|defaultVolume|466|467|LimitHeight|476|playerColor|coverHeight|512|533|539|550|553|556|557|self|u7981|src|u7684|fadfa3|030307|u6b63|text|css|none|myhkinfo|music|myhktime|myhkartist|myhkmoshi|myhkaprev|myhkprev|myhkplay|myhkpause|aria|myhknext|myhkanext|volumecontrol|height|progressbg2|qhms|anniu_kaiqi|u59cb|u6b22|u8fce|u5149|u4e34|lrc|show|u8d85|u6b21|next|load|u4e2d|u9177|qq|u5343|getInfos|pause||nexts|volumechange|seeking|timeupdate|u5f53|u524d|prev|aprev|anext|danquxunhuan|u987a|u5e8f|offset|successCircle|u663e|u793a||creat|getSongId|getalbumId|jsonp|line|lighter|showLetters|KB|u6d4f|u89c8|u6700|u5927|u9650|float|share|nbsp|linear|gradient|90deg|transparent|Date|throw|Error|tips|songTime|128|133|135|myhkCicle|auto|172|173|177|176|180|179|182|181|184|183|allmusic|189|191|192||193|195||197|199|208|209|212|3000|224|225|226|227|239|234|242|240|253|262|260|265|Volumeprogress|Drag|parentObj|callback|269|271|297|299|myhkid|307|308|314|317|318|320|321|323|325|333|347|357|363|void|368|374|words|384|385|391|startSec|startKsec|endMin|endSec|endKsec|600|394|395|397|417|418|419|420|422|421|myhkplayerversion|428|429|430|431|433||434|beforeUnloadHandler|446|myhkad|449|450|451|455|time|albumIds|469|470|471|songlocations|478|encodeURIComponent|481|482|495|showMsgNotification|501|507|509|510|522|526|531|icon|532|538|543|548|552|554|559|569|571|573|575|574|576|cssReset|578|579|580|attr|myhk|undefined|myhk_player_load|getItem|myhk_player_feed|getTime|userAgent|test|indexOf|location|u79fb|u7aef|u5176|u4ed6|u9875|replace|key|u8c6a|u91c7|u7528|u5668V|20221020|u63a7|u677f|log|com|pirated|website|u5351|u9119|u76d7|u5730|u5740|uff1ahttps|ffff00|setItem|link|rel|stylesheet|media|all|append|head|static|images|default|jpg|0px|inline|songstyle|myhkname|timestyle|clockCircle|user|musicAlbum|first|backward|playCircle|pauseCircle|pdyf1|hidden|pdyf2|pdyf3|forward|last|19px|81px|48939749|myhk_player_lrc|myhk_player_ksc|myhk_player_time|myhk_player_times|myhk_player_album|myhk_player_song|currentTime|duration||u521d|u5316|html||addClass|myhkshow|showPlayer|removeClass|u8fde|u7eed|u8fc73|songNames|u8d44|u6e90|u5c1d|u8bd5|u4e0b|u4e00|u9996|coverplay|myhk_player|no|paused|u51b2|myhk_player_qq|myhk_player_version|songTypes|songIds|wy|u7f51|u6613|u72d7|QQ|mg|u54aa|u5495|u6211|qi|local|u4e49|length|showSongList|buffered|start|end|toFixed|addEventListener|ended|toggleClass|click|parent|find|siblings|myhk_player_auto|yes|random_play|84px|myhk_player_volume|u91cf|pageX|showAlbumList|mCustomScrollbar|hidePlayer|hasClass|u4f4d|anniu_guanbi|playList|cssText|block|FFF|u7531|MYHKW||CN|u63d0|u4f9b|artistNames|u300a|songSheetName|u300b|author|update|scrollTo|position|karaoke|u65e0|lyric|GET|jsoncallback|txt|ajax|match|split|myhkLrc0|round|string|push|sort|shift|removeAttr|smear|rewind|reset|wave|150ms|each|scrollTop|u7537|u5973|u5408|blank|animate|myhk_player_list|admin|version|removeItem|u51fa|u8bfb|u539f|beforeunload|contents|u975e|u56fdIP|u754c|u88ab|u7be1|u6539|u91cd|adurl|adtitle|megaphone|adname|px|u4e8e|u603b|u672a|charCodeAt|charAt|locations|albumNames|albumCovers|changing|onload|script|onerror|q1|qlogo|nk|u56fe|u7247|u9690|u85cf|scroll|WeixinJSBridgeReady|touchstart|removeEventListener|u9891|u9700|u8981|u4ece|u65f6|u957f|floor|slice|then|border|4px|solid|image|Notification|mozNotification|webkitNotification|permission|granted|close|onclick|onshow|onclose|requestPermission|substring|lettering|done|cycleCount|cycleCurrent|original|letters|letterCount|letterCurrent|chars|label|charsCount|orig|substr|getChar|prototype|loop|000|opacity|keyCode|keydown|ready|event|srcElement|getElementById|contains|includes|u5f02|u5e38|117|102|103|104|105|106|107|108|109|110|111|112|113|114|115|116|Audio|121|122|123|125|126|127|129|130|131|132|134|136|149||151||152|153|800|163|165|166|167|169|1500|174|seeked|185|myhkversion|190|194|196|198|202|219|clearTimeout|222|223|237|244|243|245|247|246|249|248|250|256|257|258|263|264|267|lockY|273|lockX|275|276|288|279|285|290|301|295|296|298|siteName|306|312|313|315|316|327|328|329|330|332|331|334|335|lrcTimeEnable|339|340|341|344|345|346|352|cache|355||356|decodeURIComponent|361|365|u001f|367|370|371|372|373|375|380|381|382|letter_end|383|387|386|388|fx_duration|389|lineNow|Array|398|399|400|401|402|403|404|405|406|407|408|409|414|415|letterTime1|letterTime2|424|426|432|435|toString|436|438|439|441|442||447|448|453||454|456|457|458|459|10000|460|461|462|463|showNotes||464|465|switchopen|randomPlayer|468|showLrc|showGreeting|greeting|5000|472|473|474|475|477|Image|479|480|483|484|485|487|488|489|4000|mautoPlayer|autoPlayer|493|491|492|494|496|506|499|showMsg|502|505|498|497|508|511|513|514|518|515|516|517|523||519||520|521|525|524|527|528||529|530|536|534|535|MillisecondToDate|86400|537|540|541|545|547|551|555|558|560|561|requestAnimationFrame|564|563|562|565|566|567|568|570|myhkloadlist|577|581'.split('|'), 0, {}))
})(jQuery);
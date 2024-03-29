var Util = {};
Util.setCookie = function(t, e, i) {
    var o = new Date;
    o.setDate(o.getDate() + i),
        document.cookie = t + "=" + escape(e) + (null == i ? "" : ";path=/;expires=" + o.toGMTString())
}
    ,
    Util.getCookies = function(t) {
        if (document.cookie.length > 0) {
            var e = document.cookie.indexOf(t + "=");
            if (-1 != e) {
                e = e + t.length + 1;
                var i = document.cookie.indexOf(";", e);
                return -1 == i && (i = document.cookie.length),
                    unescape(document.cookie.substring(e, i))
            }
        }
        return ""
    }
    ,
    function() {
        document.ondragstart = function() {
            return !1
        }
            ,
            $.ajaxSetup({
                cache: !1
            }),
            $("[title],[original-title]").live("mouseover", function() {
                if ($(this).attr("disableTitle"))
                    return !1;
                if (!($("#mind_hover_tip").length > 0)) {
                    var t = $(this);
                    if (t.attr("title") && (t.attr("original-title", t.attr("title")),
                        t.removeAttr("title")),
                        t.attr("original-title")) {
                        var e = t.attr("original-title")
                            , i = $("#hover_tip");
                        0 == i.length && (i = $("<div id='hover_tip'><div class='tip_arrow'></div><div class='tip_content radius3'></div></div>").appendTo("body")),
                            $(".tip_content").html(e),
                            $("#hover_tip").show(),
                            $(".tip_arrow").removeClass("tip_right").removeClass("tip_top").css("top", ""),
                            "right" == t.attr("title_pos") ? (i.css({
                                left: t.offset().left + t.outerWidth() + 7,
                                top: t.offset().top + t.outerHeight() / 2 - i.outerHeight() / 2
                            }),
                                $(".tip_arrow").attr("class", "tip_arrow tip_right").css("top", i.outerHeight() / 2 - 7)) : "top" == t.attr("title_pos") ? (i.css({
                                left: t.offset().left + t.outerWidth() / 2 - i.outerWidth() / 2,
                                top: t.offset().top - i.outerHeight()
                            }),
                                $(".tip_arrow").attr("class", "tip_arrow tip_top")) : "left" == t.attr("title_pos") ? (i.css({
                                left: t.offset().left - i.outerWidth() - 7,
                                top: t.offset().top + t.outerHeight() / 2 - i.outerHeight() / 2
                            }),
                                $(".tip_arrow").attr("class", "tip_arrow tip_left")) : (i.css({
                                left: t.offset().left + t.outerWidth() / 2 - i.outerWidth() / 2,
                                top: t.offset().top + t.outerHeight()
                            }),
                                $(".tip_arrow").attr("class", "tip_arrow"))
                    }
                }
            }).live("mouseout", function() {
                $("#hover_tip").hide()
            });
        var fromUrl = document.referrer;
        fromUrl && fromUrl.indexOf("processon.com") < 0 && Util.setCookie("processon_referrer", encodeURI(fromUrl), 1),
            $.simpleAlert = function(t, e, i) {
                if ("close" != t) {
                    $("#simplealert").length && $("#simplealert").remove();
                    var o = "simplealert-icon-info";
                    e && (o = "simplealert-icon-" + e);
                    var n = $("<div id='simplealert' class='simplealert'></div>").appendTo("body")
                        , a = "<div class='" + o + "'>";
                    "loading" == e && (a += "<img src='/images/default/designer/loading.gif' style='margin:10px 0px 0px 12px'/>"),
                        a += "</div><div class='simplealert-msg'>" + t + "</div><div class='simplealert-right'></div>",
                        n.html(a),
                        n.css("top", ($(window).height() - n.height()) / 2 + $(window).scrollTop() + "px"),
                        n.css("left", ($(window).width() - n.width()) / 2 + $(window).scrollLeft() + "px"),
                        n.show(),
                    "no" != i && setTimeout(function() {
                        n.fadeOut(200)
                    }, i || 3500)
                } else
                    $("#simplealert").remove()
            }
            ,
            $.fn.disable = function(t, e) {
                $(this).attr("disable", !0),
                    $(this).addClass("opacity disable");
                for (var i = 0; i < $(this).length; i++) {
                    var o = $(this)[i];
                    $(o).unbind("mouseover.disable").bind("mouseover.disable", function() {
                        var i = $("<div class='disabled-mask'></div>").appendTo("body");
                        t || (t = 2),
                            i.css({
                                width: $(o).outerWidth() + t,
                                height: $(o).outerHeight() + 4,
                                top: $(o).offset().top,
                                left: $(o).offset().left,
                                "z-index": 9999
                            }),
                        e && i.css("z-index", e),
                            i.on("mouseout", function() {
                                $(this).remove()
                            }).on("mouseup", function(t) {
                                t.stopPropagation()
                            })
                    })
                }
                return this
            }
            ,
            $.fn.enable = function() {
                $(this).attr("disable", !1),
                    $(this).removeClass("opacity disable");
                for (var t = 0; t < $(this).length; t++) {
                    var e = $(this)[t];
                    $(e).unbind("mouseover.disable").unbind("focus")
                }
                return this
            }
            ,
            Util.loginWindow = function(t, e) {
                if (void 0 === t && (t = "open"),
                "open" == t) {
                    $("#loginWindow").length && $("#loginWindow").remove();
                    var i = $("<div id='loginWindow' style='margin-top:-120px;margin-left:-50px;' class='loginWindow'></div>").appendTo("body");
                    i.append("<div id='loginWindow-content' class='loginWindow-content'><img src='/images/ajaxload.gif' style='margin:80px 0px 0px 45%'/></div>"),
                        $("#loginWindow-content").load("/login/window", function() {
                            loginCallback = e
                        }),
                        i.dialog()
                } else
                    (t = "close") && $("#loginWindow").dialog("close")
            }
            ,
            Util.payWindow = function(t, e, i) {
                if (void 0 === t && (t = "open"),
                "open" == t) {
                    $("#payWindow").length && $("#payWindow").remove();
                    var o = $("<div id='payWindow' style='margin-top:-120px;margin-left:-50px;' class='payWindow'></div>").appendTo("body");
                    o.append("<div id='payWindow-content' class='loginWindow-content'><img src='/images/ajaxload.gif' style='margin:80px 0px 0px 45%'/></div>"),
                        $("#payWindow-content").load("/order/pay/window", e, function() {
                            payCallback = i
                        }),
                        o.dialog()
                } else
                    (t = "close") && $("#payWindow").dialog("close")
            }
        ;
        var maskStackCount = 0;
        $.mask = function(t) {
            if (void 0 === t && (t = "open"),
            "open" == t) {
                if (0 == maskStackCount) {
                    var e = $("<div id='window-mask' class='window-mask' style='display:none'></div>").appendTo("body");
                    e.css({
                        width: $(window).width() + "px",
                        height: $(window).height() + "px",
                        filter: "alpha(opacity=60)"
                    }).show(),
                        $(window).bind("resize.mask", function() {
                            e.css({
                                width: $(window).width() + "px",
                                height: $(window).height() + "px"
                            })
                        })
                }
                maskStackCount++
            } else
                "close" == t && 0 == --maskStackCount && ($("#window-mask").remove(),
                    $(window).unbind("resize.mask"))
        }
            ,
            $.fn.dialog = function(t) {
                var e = $(this);
                if ("string" == typeof t)
                    "close" == t && (e.find(".dialog-close").trigger("click"),
                    null != $("#window-mask") && $("#window-mask").hide());
                else {
                    var i = {
                        fixed: !0,
                        closable: !0,
                        mask: !0
                    };
                    (t = $.extend(i, t)) || (t = {});
                    var o = "";
                    t.title ? o = t.title : e.attr("title") && (o = e.attr("title"),
                        e.attr("title", "")),
                        e.addClass("dialog-box").show();
                    var n = $("<div class='dialog-close'></div>").appendTo(e);
                    n.bind("click", function() {
                        if ($(document).off("keyup.confirm"),
                        !t.onClose || 0 != t.onClose()) {
                            $.mask("close"),
                                e.hide(),
                                e.removeClass("dialog-box").find(".dialog-close").remove();
                            var i = e.find(".dialog-title");
                            e.attr("title", i.text()),
                                i.remove(),
                                $(window).unbind("resize.dialog")
                        }
                    }),
                        e.find(".close").on("click", function() {
                            n.click()
                        }),
                    t.closable && n.show(),
                    t.hideable && n.hide(),
                    "" != o && e.prepend("<h2 class='dialog-title'>" + o + "</h2>"),
                    t.mask && $.mask(),
                        $(window).bind("resize.dialog", function() {
                            var i = e.outerWidth()
                                , o = e.outerHeight()
                                , n = 0;
                            t.fixed ? (e.css("position", "fixed"),
                                n = ($(window).height() - o) / 2 + "px") : (e.css("position", "absolute"),
                                n = ($(window).height() - o) / 2 + $(document).scrollTop() + "px");
                            var a = ($(window).width() - i) / 2 + "px";
                            e.css({
                                top: n,
                                left: a
                            })
                        }),
                        $(window).trigger("resize.dialog"),
                        e.find(".dialog-title").draggable({
                            target: e
                        })
                }
                return e
            }
            ,
            $.fn.draggable = function(t) {
                var e = {
                    target: "default",
                    clone: !1,
                    undrag: "",
                    scroll: !0,
                    start: function() {},
                    drag: function() {},
                    end: function() {}
                }
                    , i = $.extend(e, t);
                return $(this).off("mousedown.drag").on("mousedown.drag", function(t) {
                    $(document).on("selectstart.drag dragstart", function() {
                        return !1
                    });
                    var e = $(this)
                        , o = "string" == typeof i.target && "default" == i.target ? e : i.target
                        , n = t.pageX
                        , a = t.pageY
                        , l = o.offset().left
                        , s = o.offset().top;
                    i.clone && (o = e.clone().removeAttr("id").css("position", "absolute").offset({
                        left: l,
                        top: s
                    }),
                    "function" == typeof i.clone && (i.clone.call(o, t),
                        l = 1 * o.css("left").replace("px", ""),
                        s = 1 * o.css("top").replace("px", "")),
                    i.opacity && o.css("opacity", i.opacity)),
                        $(document).on("mousemove.drag", function(t) {
                            e.hasClass("ondrag") || (e.addClass("ondrag"),
                            i.clone && o.appendTo(e.parent()),
                                i.start.call(e[0], t));
                            var r = t.pageX - n + l
                                , d = t.pageY - a + s;
                            if (i.bounding) {
                                var c = i.bounding.offset().left
                                    , p = i.bounding.offset().top;
                                r > c && d > p && r < c + i.bounding.outerWidth() - o.outerWidth() && d < p + i.bounding.outerHeight() - o.outerHeight() && o.offset({
                                    left: r,
                                    top: d
                                })
                            } else
                                o.offset({
                                    left: r,
                                    top: d
                                });
                            i.drag.call(e[0], t)
                        }),
                        $(document).on("mouseup.drag", function(t) {
                            i.end.call(e[0], t),
                            i.clone && o.remove(),
                                $(document).off("selectstart.drag dragstart"),
                                $(document).off("mousemove.drag"),
                                $(document).off("mouseup.drag"),
                            $(".drop-hover").length || e.removeClass("ondrag")
                        }),
                        $(this).on("mouseup.drag", function(t) {
                            $(document).trigger("mouseup.drag"),
                                $(this).off("mouseup.drag")
                        })
                }),
                i.undrag && $(this).find(i.undrag).off("mousemove.drag").on("mousemove.drag", function(t) {
                    t.stopPropagation()
                }).on("dragstart", function() {
                    return !1
                }),
                    this
            }
            ,
            $.confirm = function(t) {
                var e = $("#global_confirm_window")
                    , i = "确定";
                t.okval && (i = t.okval),
                    e.length ? (e.find(".dlg-content").html(t.content),
                        e.find(".okbtn").html(i)) : e = $("<div id='global_confirm_window' tabindex='-1' class='confirm-box' title='请确认'><div class='dlg-content'>" + t.content + "</div><div class='dlg-buttons'><span class='pro-btn default okbtn'>" + i + "</span>&nbsp;&nbsp;<span class='pro-btn basic cancelbtn close'>取消</span></div></div>").appendTo("body"),
                t.width && e.css("width", t.width),
                t.height && e.css("height", t.height),
                    t.hiddenOK ? e.find(".okbtn").css("visibility", "hidden") : e.find(".okbtn").css("visibility", "visible"),
                    e.dialog(),
                    $(document).off("keyup.confirm").on("keyup.confirm", function(t) {
                        13 == t.keyCode && e.find(".okbtn").trigger("click")
                    }),
                    e.find(".okbtn").off().on("click", function() {
                        e.dialog("close"),
                        t.onConfirm && t.onConfirm(),
                            $(document).off("keyup.confirm")
                    }),
                    e.find(".cancelbtn").off("click.cancel").on("click.cancel", function() {
                        t.onCancel && t.onCancel(),
                            $(document).off("keyup.confirm")
                    })
            }
            ,
            $.imgtoast = function(t) {
                var e = $("#upgrade_dlg");
                if (!e.length) {
                    e = $('<div id="upgrade_dlg" class="dialog" style="background:#fff;box-shadow:none;"><div class="upgrade-box"><h3 class="upgrade-box-title">升级团队版</h3><p class="upgrade-box-content">更好的保证团队数据安全与协作效率<br>专注工作与协作</p><ul class="upgrade-ul"><li><span class="icons">&#xe658;</span>无限量小组使用，各项目同时推进</li><li><span class="icons">&#xe658;</span>免费克隆系统付费模板</li><li><span class="icons">&#xe658;</span>团队成员高级权限设置灵活协作</li><li><span class="icons">&#xe658;</span>团队数据安全，实时备份</li></ul><a class="button" href="/upgrade">立即升级</a><img src="/assets/images/about/upgrade_bg_right.png"/></div></div>').appendTo("body")
                }
                t.tid && e.find(".button").attr("href", "/upgrade?tid=" + t.tid),
                    e.dialog()
            }
            ,
            $.fn.popMenu = function(t) {
                var e = $(this);
                if ("string" != typeof t) {
                    var i = {
                        position: "left",
                        fixed: !1,
                        offsetX: 0,
                        offsetY: 0,
                        zindex: 2,
                        autoClose: !0,
                        closeAfterClick: !1,
                        autoPosition: !0
                    }
                        , o = $.extend(i, t)
                        , n = $(o.target);
                    e.addClass("popover").css("z-index", o.zindex),
                    o.fixed && e.css("position", "fixed"),
                    o.autoClose && (0 == o.closeAfterClick && e.unbind("mouseup.popmenu").bind("mouseup.popmenu", function(t) {
                        t.stopPropagation()
                    }),
                        $(document).bind("mouseup.popmenu", function() {
                            e.popMenu("close"),
                                $(document).unbind("mouseup.popmenu"),
                            o.onClose && o.onClose()
                        })),
                        $(window).bind("resize.popmenu", function() {
                            e.popMenu(t)
                        }),
                        e.show();
                    var a = 0;
                    (a = "center" == o.position ? n.offset().left + n.outerWidth() / 2 - e.outerWidth() / 2 : "right" == o.position ? n.offset().left + n.outerWidth() - e.outerWidth() : n.offset().left) + e.outerWidth() > $(window).width() && (a = $(window).width() - e.outerWidth());
                    var l = n.offset().top + n.outerHeight();
                    o.autoPosition && l + o.offsetY + e.outerHeight() > $(window).height() + $(document).scrollTop() ? e.css({
                        top: $(window).height() - e.outerHeight() + $(document).scrollTop(),
                        left: a + o.offsetX
                    }) : e.css({
                        top: l + o.offsetY,
                        left: a + o.offsetX
                    })
                } else
                    "close" == t && (e.hide().removeClass("popover"),
                        $(window).unbind("resize.popmenu"))
            }
            ,
            $.fn.suggest = function(t) {
                var e = $(this)
                    , i = {
                    valueField: "value",
                    offsetX: 0,
                    offsetY: 0,
                    width: e.outerWidth(),
                    format: function(t) {
                        return t.text
                    }
                }
                    , o = $.extend(i, t)
                    , n = $(".suggest-menu");
                n.length < 1 && (n = $("<ul class='suggest-menu'></ul>").appendTo("body")),
                    n.width(o.width);
                var a = -1
                    , l = "";
                e.off("keydown.suggest").on("keydown.suggest", function(t) {
                    if (40 == t.keyCode)
                        t.preventDefault(),
                        a < n.children().length - 1 && (a++,
                            n.find(".active").removeClass("active"),
                            n.find("li[index=" + a + "]").addClass("active"));
                    else if (38 == t.keyCode)
                        t.preventDefault(),
                            n.find(".active").removeClass("active"),
                        a >= 0 && (a--,
                            n.find("li[index=" + a + "]").addClass("active"));
                    else if (13 == t.keyCode) {
                        var i = n.find(".active");
                        i.length && e.val(i.attr("val")),
                        o.onEnter && o.onEnter(e),
                            n.hide(),
                            value = ""
                    }
                }).off("keyup.suggest").on("keyup.suggest", function(t) {
                    var i = e.val();
                    "" == i ? n.hide() : i != l && (a = -1,
                        $.get(o.url, {
                            q: i
                        }, function(t) {
                            n.empty();
                            var a = t.items;
                            if (0 == a.length)
                                n.hide(),
                                    i = "";
                            else {
                                for (var s = 0; s < a.length; s++) {
                                    var r = a[s]
                                        , d = "<li index='" + s + "' class='suggest-item' val='" + r[o.valueField] + "'>";
                                    d += o.format(r),
                                        d += "</li>",
                                        n.append(d)
                                }
                                n.show(),
                                    n.attr("tabindex", 0);
                                var c = 0;
                                (c = "center" == o.position ? e.offset().left + e.outerWidth() / 2 - n.outerWidth() / 2 : "right" == o.position ? e.offset().left + e.outerWidth() - n.outerWidth() : e.offset().left) + n.outerWidth() > $(window).width() && (c = $(window).width() - n.outerWidth());
                                var p = e.offset().top + e.outerHeight();
                                o.autoPosition && p + o.offsetY + n.outerHeight() > $(window).height() + $(document).scrollTop() ? n.css({
                                    top: $(window).height() - n.outerHeight() + $(document).scrollTop(),
                                    left: c + o.offsetX
                                }) : n.css({
                                    top: p + o.offsetY,
                                    left: c + o.offsetX
                                }),
                                    n.find(".suggest-item").off("mousedown").on("mousedown", function(t) {
                                        t.preventDefault(),
                                            e.val($(this).attr("val")),
                                        o.onEnter && o.onEnter(e),
                                            n.hide(),
                                            l = i = ""
                                    })
                            }
                        })),
                        l = i
                }).off("blur.suggest").on("blur.suggest", function(t) {
                    n.hide(),
                        l = ""
                })
            }
            ,
            $.fn.pagination = function(t, e, i, o) {
                if (!(e <= 1)) {
                    var n = 5;
                    o && (n = o);
                    var a = $(this).addClass("pagination")
                        , l = 1
                        , s = e;
                    if (e > n) {
                        var r = Math.floor(n / 2);
                        e - (l = t - r > 0 ? t - r : 1) < n && (l = e - n + 1);
                        s = l + n - 1
                    }
                    var d = "";
                    d += t > 1 ? "<a p='" + (t - 1) + "'>«</a>" : "<a class='disabled'>«</a>",
                    l >= 2 && (d += "<a p='1'>1</a>"),
                    l >= 3 && (d += "<a class='disabled ellipsis'>...</a>");
                    for (var c = l; c <= s && !(c > e); c++)
                        d += c == t ? '<a class="disabled">' + c + "</a>" : "<a p='" + c + "'>" + c + "</a>";
                    s <= e - 2 ? d += "<a class='disabled ellipsis'>...</a><a p='" + e + "'>" + e + "</a>" : s <= e - 1 && (d += "<a p='" + e + "'>" + e + "</a>"),
                        d += t < e ? "<a p='" + (t + 1) + "'>»</a>" : "<a class='disabled'>»</a>",
                        a.html(d),
                    i && a.find("a[p]").bind("click", function() {
                        var t = $(this).attr("p");
                        i(t)
                    })
                }
            }
            ,
            $.fn.multiInput = function(t, e, i) {
                function o(t, e) {
                    var i = n.find(".multi-input-vals")
                        , o = "&#xe63e;"
                        , a = /^([\w]+)(.[\w]+)*@([\w-]+\.){1,5}([A-Za-z]){2,8}$/.test(e);
                    if (a && null == t)
                        o = "&#xe614;",
                            t = e;
                    else if (!a && null == t)
                        return;
                    var l = '<span val="' + t + '" class="multi-input-value"><span class="icons">' + o + '</span><span class="multi-text">' + e + '</span><span class="icons closeme">&#xe637;</span></span>';
                    i.append(l)
                }
                var n = $(this);
                if ("string" != typeof t || "setVal" != t) {
                    t = $.extend({
                        text: "请在此输入邮箱，回车添加",
                        autoComplete: !1,
                        url: "",
                        params: {}
                    }, t),
                        n.html("");
                    var a = $('<div class="multi-input-vals"></div>')
                        , l = $('<div><input type="text" id="multi-input" placeholder="' + t.text + '"></div>');
                    n.append(a).append(l),
                        l.find("input").off().on("keyup", function(e) {
                            var i = $.trim($(this).val());
                            if ("" != i)
                                if (13 == e.keyCode && t.setVal) {
                                    if (!/^([\w]+)(.[\w]+)*@([\w-]+\.){1,5}([A-Za-z]){2,8}$/.test(i))
                                        return;
                                    o(null, t.setVal(i)),
                                        $(this).val("")
                                } else
                                    t.autoComplete && (t.params = $.extend(t.params, {
                                        value: i
                                    }),
                                        $.ajax({
                                            url: t.url,
                                            cache: !1,
                                            data: t.params,
                                            success: function(e) {
                                                var i = t.autoCompleteCallback(e);
                                                if ($(".popWindow").remove(),
                                                "" != i) {
                                                    var o = $("<div class='popWindow'></div>").appendTo("body");
                                                    o.html(i),
                                                        o.popWindow({
                                                            target: "#multi-input"
                                                        })
                                                }
                                            }
                                        }))
                        }),
                        $(document).on("click", ".multi-input-vals .closeme", function() {
                            var e = $(this)
                                , i = e.prev().text();
                            null != i && t.deleteVal && (e.parent().remove(),
                                t.deleteVal(i))
                        })
                } else
                    o(e, i)
            }
            ,
            $.fn.popWindow = function(t) {
                var e = $(this)
                    , i = $(t.target)
                    , o = 0;
                o = "center" == t.dropCenter ? i.offset().left - 0 + i.width() / 2 : i.offset().left,
                    e.css({
                        left: o,
                        top: i.offset().top + i.height() + (t.mh || 0),
                        zIndex: t.index || 1
                    }).show().siblings(".popWindow").hide(),
                    e.on("click.popwindow", function(t) {
                        t.stopPropagation()
                    }),
                    $(document).on("click.popwindow", function() {
                        e.hide().css({
                            index: -1
                        })
                    })
            }
            ,
            $.fn.id = function() {
                return this.attr("id")
            }
            ,
            $.fn.submitForm = function(opt) {
                function submitCallback() {
                    frame.unbind();
                    var body = $("#" + frameId).contents().find("body")
                        , data = body.html();
                    if ("" != data) {
                        var ta = body.find(">textarea");
                        if (ta.length)
                            data = ta.val();
                        else {
                            var pre = body.find(">pre");
                            pre.length && (data = pre.html())
                        }
                        try {
                            eval("data=" + data),
                                "error" == data.error ? $.simpleAlert("暂时无法处理您的请求，请稍候重试。", "error", 3e3) : "notlogin" == data.error ? Util.loginWindow("open", function() {
                                    form.submitForm(options)
                                }) : options.success && options.success(data)
                        } catch (t) {
                            options.json ? ($.simpleAlert("暂时无法处理您的请求，请稍候重试。", "error", 3e3),
                            options.error && options.error(data)) : options.success && options.success(data)
                        }
                        setTimeout(function() {
                            frame.unbind(),
                                frame.remove()
                        }, 100)
                    } else if (--checkCount)
                        return void setTimeout(submitCallback, 200)
                }
                var defaultOpt = {
                    json: !0
                }
                    , options = $.extend(defaultOpt, opt)
                    , form = $(this);
                if (!options.onSubmit || 0 != options.onSubmit.call(form)) {
                    options.url && form.attr("action", options.url);
                    var frameId = "submit_frame_" + (new Date).getTime()
                        , frame = $("<iframe id=" + frameId + " name=" + frameId + "></iframe>").attr("src", window.ActiveXObject ? "javascript:false" : "about:blank").css({
                        position: "absolute",
                        top: -1e3,
                        left: -1e3
                    });
                    form.attr("target", frameId),
                        frame.appendTo("body"),
                        frame.bind("load", submitCallback),
                        form.append("<input type='hidden' name='submitFormByHiddenFrame' id='submitFormByHiddenFrameParam' value='hiddenFrame'/>"),
                        form[0].submit(),
                        $("#submitFormByHiddenFrameParam").remove();
                    var checkCount = 10
                }
            }
            ,
            $.fn.submitFormAjax = function(t) {
                var e = $(this);
                t.onSubmit && 0 == t.onSubmit.call() || $.ajax({
                    url: t.url ? t.url : $(this).attr("action"),
                    type: "POST",
                    data: $(this).serialize(),
                    success: function(i) {
                        "error" == i.error ? $.simpleAlert("暂时无法处理您的请求，请稍候重试", "error", 3e3) : "notlogin" == i.error ? Util.loginWindow("open", function() {
                            e.submitFormAjax(t)
                        }) : t.success && t.success(i)
                    },
                    error: function(e) {
                        $.simpleAlert("暂时无法处理您的请求，请稍候重试", "error", 3e3),
                        t.error && t.error(e)
                    }
                })
            }
            ,
            $.fn.numberTip = function(t) {
                var e = $.extend({
                    val: "+1",
                    size: 14,
                    color: "red",
                    time: 1e3,
                    pos: "right"
                }, t)
                    , i = $(this)
                    , o = $("<span class='number-tip'>" + e.val + "</span>").appendTo("body")
                    , n = i.offset().left;
                "right" == e.pos && (n = i.offset().left + i.outerWidth() / 2),
                    o.css({
                        left: n,
                        top: i.offset().top,
                        opacity: 1
                    }).show(),
                    o.animate({
                        top: "-=14px",
                        opacity: 0
                    }, 400, function() {
                        o.remove()
                    })
            }
            ,
            $.fn.inputTip = function(t) {
                var e = $.extend({
                    text: "",
                    time: 500,
                    pos: "rightin"
                }, t)
                    , i = $(this)
                    , o = $(".input-tip");
                if (o.length)
                    o.show();
                else {
                    o = $("<span class='input-tip'>" + e.text + "</span>").appendTo("body");
                    var n = i.offset().left;
                    "rightin" == e.pos ? n = i.offset().left + i.outerWidth() - i.width() : "rightout" == e.pos && (n = i.offset().left + i.outerWidth() + 5),
                        o.css({
                            left: n,
                            top: e.top || i.offset().top,
                            opacity: 1
                        }).show(),
                        setTimeout(function() {
                            o.fadeOut(function() {
                                o.remove()
                            })
                        }, e.time)
                }
            }
            ,
            $.fn.spread = function(t) {
                var e = this;
                if ("string" != typeof t && !(e.length <= 0)) {
                    var i = $(e[0])
                        , o = i.parent()
                        , n = parseInt(i.css("padding-left").replace("px", ""))
                        , a = parseInt(i.css("padding-right").replace("px", ""))
                        , l = parseInt(i.css("padding-top").replace("px", ""))
                        , s = parseInt(i.css("padding-bottom").replace("px", ""))
                        , r = parseInt(o.css("padding-left").replace("px", ""))
                        , d = (parseInt(o.css("padding-right").replace("px", "")),
                        parseInt(o.css("padding-top").replace("px", "")))
                        , c = (parseInt(o.css("padding-bottom").replace("px", "")),
                        {
                            w: i.width() + n + a,
                            h: i.height() + l + s,
                            ml: 10,
                            mt: 10,
                            maxWidth: o.width(),
                            s: 150
                        })
                        , p = $.extend(c, t)
                        , f = p.w
                        , u = p.h
                        , g = p.ml
                        , h = p.mt
                        , m = p.maxWidth
                        , v = p.s;
                    $.each(e, function(t, e) {
                        $(e).css({
                            top: "-" + u + "px",
                            left: 0
                        })
                    });
                    var w = parseInt((m + g) / (f + g));
                    Math.ceil(e.length / w);
                    $.each(e, function(t, e) {
                        var i = $(e)
                            , o = parseInt(t / w)
                            , n = parseInt(t % w)
                            , a = 0 == n ? r + 10 : n * (f + g) + r + 10
                            , l = 0 == o ? d + 6 : o * (u + h) + d + 6;
                        i.css({
                            display: "block",
                            position: "absolute"
                        });
                        var s = Math.sqrt(Math.pow(l + 150, 2) + Math.pow(a, 2)) / 150;
                        i.animate({
                            top: l,
                            left: a
                        }, s * v)
                    })
                }
            }
        ;
        var streamInputStreams = {}
            , curr_stream_icon = null;
        $.fn.streamInput = function(t) {
            function e(t) {
                try {
                    var i = t.html().replace(/^\s+/g, " ").replace(/(\S)\s+(\S)?/g, "$1 $2");
                    t.html(i);
                    var o = t.children(":not(.ico-face, .paste-cont)");
                    if (o.length < 1)
                        return;
                    o.each(function(t, e) {
                        $(e).css("display");
                        $(e).is("img, title, head, link, style, script") ? $(e).remove() : $(e).replaceWith($(e).html())
                    })
                } catch (t) {}
                (o = t.children(":not(.ico-face, .paste-cont)")).length > 0 && e(t)
            }
            function i(t) {
                t.find(".ico-face").each(function(t, e) {
                    $(e).replaceWith($("<img class='" + $(e).attr("class") + "' src='" + $(e).attr("src") + "'>"))
                })
            }
            function o(t) {
                var e = t.children(".paste-cont");
                e.length < 1 || e.each(function(t, e) {
                    $(e).replaceWith($(e).html())
                })
            }
            function n(t) {
                $(t).focus();
                try {
                    var e = document.createRange();
                    e.selectNode(t.lastChild || t),
                        e.collapse(!1),
                        window.getSelection().removeAllRanges(),
                        window.getSelection().addRange(e),
                        $(t).keyup()
                } catch (t) {}
            }
            function a(t) {
                var e = t.cloneNode(!0)
                    , i = e.childNodes.length
                    , o = 0
                    , n = 0;
                if (i > 3 && $(e).children(".paste-cont").length > 0)
                    for (var a = 0; a < i; a++)
                        if ("SPAN" == e.childNodes[a].nodeName) {
                            o = i - a - 1,
                            a < i - 1 && "#text" == e.childNodes[a + 1].nodeName && (n = e.childNodes[a + 1].data.length);
                            break
                        }
                return {
                    v: o,
                    len: n
                }
            }
            function l(t, e, i, o) {
                var n, a, l = t.html(), s = document.createElement("div"), r = document.createDocumentFragment();
                if (l)
                    for (s.innerHTML = l; n = s.firstChild; )
                        a = r.appendChild(n);
                return i.insertNode(r),
                a && ((i = i.cloneRange()).setStartAfter(a),
                    i.collapse(!0),
                    e.removeAllRanges(),
                    e.addRange(i),
                    $(o).keyup()),
                    i
            }
            if (this[0] && t.face && "DIV" == this[0].nodeName && !this.attr("stream_id")) {
                var s = {
                    target: this
                }
                    , r = $.extend(s, t)
                    , d = {
                    id: "",
                    range: null
                }
                    , c = Object.keys(streamInputStreams);
                d.id = c.length ? streamInputStreams[c[c.length - 1]].id + 1 : 1,
                    d.stream_id = "stream_" + (c.length ? streamInputStreams[c[c.length - 1]].id + 1 : 1),
                    this.attr({
                        contentEditable: "true",
                        spellcheck: "false",
                        accesskey: "q",
                        stream_id: d.stream_id
                    }),
                    $(r.face).attr("for_stream", d.stream_id),
                    streamInputStreams[d.stream_id] = d,
                    curr_stream_icon = d;
                var p = !1
                    , f = !1
                    , u = 0
                    , g = 0
                    , h = 0;
                r.home;
                $(r.target).off("click.stream keyup.stream").on("click.stream keyup.stream", function(t) {
                    (curr_stream_icon = streamInputStreams[$(this).attr("stream_id")]).target = $(this);
                    var e = window.getSelection();
                    curr_stream_icon.range = e.getRangeAt(0).cloneRange()
                }),
                    $(r.target).off("DOMSubtreeModified.stream").on("DOMSubtreeModified.stream", function(t) {
                        if (p && (p = !1,
                            !($(this).children().length < 1)))
                            if (e($(this)),
                                i($(this)),
                                f) {
                                e($(this).find(".paste-cont"));
                                var a = $(this).html();
                                $(this).empty();
                                var l = window.getSelection()
                                    , s = l.getRangeAt(0);
                                s.deleteContents();
                                var r, d, c = $("<div>" + a + "</div>").html(), m = document.createElement("div"), v = document.createDocumentFragment();
                                if (c)
                                    for (m.innerHTML = c; r = m.firstChild; )
                                        d = v.appendChild(r),
                                        "SPAN" == r.nodeName && (u = v.childNodes.length + r.childNodes.length - 1);
                                if (s.insertNode(v),
                                    d) {
                                    if ((s = s.cloneRange()).collapse(!0),
                                        o($(this)),
                                        s.setStart(this, u || this.childNodes.length - g),
                                        s.setEnd(this, u || this.childNodes.length - g),
                                    g && h) {
                                        var w = this.childNodes.length - g;
                                        r = this.childNodes[w],
                                            s.setStart(r, r.data.length - h),
                                            s.setEnd(r, r.data.length - h)
                                    }
                                    l.removeAllRanges(),
                                        l.addRange(s)
                                }
                            } else
                                n(this)
                    }),
                    $(r.target).off("paste.stream").on("paste.stream", function(t) {
                        var o = (t = t.originalEvent).clipboardData || t.view.clipboardData
                            , n = window.getSelection()
                            , s = n.getRangeAt(0);
                        s.deleteContents();
                        try {
                            var r = o.getData("text/html") || o.getData("text/plain").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                            r = r.replace(/<(\/)?(html|body)(\s|\S)+?>/g, "").replace(/(<!--.+?-->)|(\r\n)/g, "");
                            var d = $("<div>" + r + "</div>");
                            return e(d),
                                i(d),
                                l(d, n, s, this),
                                !1
                        } catch (t) {
                            if (p = !0,
                            "" == $.trim($(this).html().replace(/\s+|<br>/g, "")))
                                return void (f = !1);
                            f = !0;
                            var c = document.createElement("span");
                            c.className = "paste-cont",
                                s.insertNode(c),
                                (s = s.cloneRange()).selectNodeContents(c),
                                n.removeAllRanges(),
                                n.addRange(s);
                            var u = a(this);
                            g = u.v,
                                h = u.len
                        }
                    }),
                    $(r.face).off("click.stream").on("click.stream", function() {
                        if (((curr_stream_icon = streamInputStreams[$(this).attr("for_stream")]).target = $("div[stream_id='" + $(this).attr("for_stream") + "']")).focus(),
                            curr_stream_icon.range) {
                            var t = window.getSelection();
                            t.removeAllRanges(),
                                t.addRange(curr_stream_icon.range)
                        }
                        var e = $("#faces_dialog");
                        e.length < 1 && (e = $("<div></div>").attr({
                            id: "faces_dialog",
                            class: "faces-lib"
                        }).append("<ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>").appendTo("body")),
                            $("#faces_dialog").popMenu({
                                target: this,
                                position: "right",
                                zindex: 4
                            }),
                            $("#faces_dialog ul li").off("click.stream").on("click.stream", function(t) {
                                $("#faces_dialog").popMenu("close");
                                var e, i = $(curr_stream_icon.target);
                                if (e = "<img class='ico-face' src='/assets/images/faces/faces/" + ($(this).index() + 1) + ".gif'>",
                                "" == $.trim(i.html().replace(/&nbsp;|<br>/g, "")))
                                    return i.html(e),
                                        void n(i[0]);
                                i.focus();
                                var o = window.getSelection()
                                    , a = curr_stream_icon.range;
                                a.deleteContents(),
                                    l($("<div>" + e + "</div>"), o, a, i)
                            }),
                            $("#faces_dialog").on("mousedown", function(t) {
                                t.stopPropagation()
                            })
                    })
            }
        }
    }(),
    Util.ajax = function(t) {
        if (!t.onSend || 0 != t.onSend()) {
            var e = {
                type: "POST"
            };
            return t = $.extend(e, t),
                $.ajax({
                    url: t.url,
                    type: t.type,
                    traditional: !0,
                    data: t.data,
                    success: function(e) {
                        "error" == e.error ? ($.simpleAlert("<@i18n resource='global.error'/>", "error", 3e3),
                        t.error && t.error(e)) : "notlogin" == e.error ? (t.loginValidate && t.loginValidate(e),
                            Util.loginWindow("open", function() {
                                Util.ajax(t)
                            })) : t.success && t.success(e)
                    },
                    error: function(e) {
                        e.status && t.error && t.error(e)
                    }
                })
        }
    }
    ,
    Util.get = function(t, e, i) {
        $.ajax({
            url: t,
            type: "GET",
            data: e,
            success: function(o) {
                "error" == o.error ? $.simpleAlert("<@i18n resource='global.error'/>", "error", 3e3) : "notlogin" == o.error ? Util.loginWindow("open", function() {
                    Util.get(t, e, i)
                }) : i(o)
            },
            error: function(t) {}
        })
    }
    ,
    Util.globalTopTip = function(t, e, i, o, n) {
        if (void 0 !== t) {
            null == i && (i = 5e3),
            null == e && (e = "top_success");
            var a = $("#global_top_dialog");
            a.length > 0 && a.remove(),
                (a = $('<div id="global_top_dialog" class="global_top_dialog"><div class="left_arrow"></div>' + t + '<div class="right_arrow"></div></div>').appendTo("body")).addClass(e),
            n && (a.find(".left_arrow").remove(),
                a.find(".right_arrow").remove(),
                a.addClass("noarrow"));
            var l = a.outerWidth();
            o ? a.css("top", $(o).offset().top + "px") : 0 == $("#header").length && a.css("top", "0px"),
                a.css({
                    "margin-left": -.5 * l + "px"
                }).show(),
                setTimeout(function() {
                    a.addClass("show"),
                        setTimeout(function() {
                            a.removeClass("show"),
                                setTimeout(function() {
                                    a.fadeOut("slow").remove()
                                }, 250)
                        }, i)
                }, 50)
        }
    }
    ,
    Util.globalLeftTip = function(t) {
        var e = t;
        if (void 0 !== e.content) {
            e.delay || (e.delay = 5e3),
            null == e.type && (e.type = "left-bot-default");
            var i = $("#global-leftbot-dialog");
            i.length > 0 && i.remove(),
                (i = $('<div id="global-leftbot-dialog" class="global-leftbot-dialog">' + e.content + "</div>").appendTo("body")).addClass(e.type),
                i.show(),
                setTimeout(function() {
                    i.addClass("show"),
                        setTimeout(function() {
                            i.removeClass("show"),
                                setTimeout(function() {
                                    i.fadeOut("slow").remove()
                                }, 250)
                        }, e.delay)
                }, 50)
        }
    }
    ,
    Util.loading = function(t) {
        var e = {
            content: "loading...",
            show: 1e3,
            delay: 0,
            model: !1
        };
        if ("string" == typeof t && "close" == t)
            return $("#top_loading_tip").remove(),
                void $("#dialog_model").remove();
        t = $.extend(e, t),
        $("#top_loading_tip").length > 0 && $("#top_loading_tip").remove();
        $("<div id='top_loading_tip' class='loadingTop'><p><b>" + t.content + "</b></p></div>").appendTo("body");
        t.model && ($("body").append("<div id='dialog_model'></div>"),
            $("#dialog_model").css({
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                "z-index": t.zIndex - 1,
                opacity: .6,
                background: "#FFF",
                display: "none"
            })),
            "number" == typeof t.show ? $("#top_loading_tip").delay(t.delay).show(0, function() {
                t.model && $("#dialog_model").show()
            }).delay(t.show).fadeOut(500, function() {
                t.model && $("#dialog_model").hide()
            }) : !0 === t.show && $("#top_loading_tip").delay(t.delay).show(0, function() {
                t.model && $("#dialog_model").show()
            })
    }
    ,
    Util.loadingball = function(t) {
        if (t.close)
            $(".ball-spinner").hide();
        else {
            var e = t.con;
            e || (e = $("body"));
            var i = e.children(".ball-spinner");
            i.length > 0 ? i.show() : $('<div class="ball-spinner center-middle"><div class="ball1"></div><div class="ball2"></div><div class="ball3"></div>').appendTo(e),
            t.css && "object" == typeof t.css && $(".ball-spinner>div").css(t.css)
        }
    }
    ,
    Util.messageNoPrivilege = function(t, e) {
        $.confirm({
            content: "<div class='filecheck-con'><span class='icons'>&#xe656;</span><div class='filecheck-right'><div>" + t + "</div><div>您可以 <a target='_blank' href='/upgrade'>" + e + "</a></div></div>",
            onConfirm: function() {
                window.location = "/upgrade"
            }
        })
    }
    ,
    Util.checkOrgExpire = function(t, e) {
        Util.ajax({
            url: "/organizations/check_expire",
            data: e,
            success: function(i) {
                if (i.expire)
                    return $.imgtoast({
                        tid: e.orgId
                    }),
                        void t(!1);
                t(!0)
            }
        })
    }
    ,
    Util.checkFileCount = function(t, e) {
        Util.ajax({
            url: "/view/privatefilecount",
            data: e,
            success: function(e) {
                e.member ? t() : e.filecount >= e.totalcount ? $.confirm({
                    content: "<div class='filecheck-con'><span class='icons'>&#xe656;</span><div class='filecheck-right'><div>您的文件数量不足，无法创建新的文件</div><div>您可以 <a target='_blank' href='/upgrade'>去升级账号或者扩容</a></div></div></div>",
                    onConfirm: function() {
                        t(!1)
                    },
                    okval: "去看看"
                }) : t()
            }
        })
    }
    ,
    Util.creatCode = function(t) {
        var e, i, o = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "123456789"], n = "";
        for (i = 0; i < t; i++)
            n += o[e = Math.floor(3 * Math.random())].substr(Math.floor(Math.random() * o[e].length), 1);
        return n
    }
    ,
    Util.loadAvatar = function(t) {
        var e = "https://accounts.processon.com";
        return location.origin.toLowerCase().indexOf("processon.com") < 0 && (e = ""),
            t ? '<img src="' + e + "/photo/" + t + '.png"/>' : '<img src="/assets/imgs/on.png"/>'
    }
    ,
    Util.filterXss = function(t) {
        return null == t || "" == t ? "" : (t = t.toString(),
            t = t.replace(/</g, "&lt;"),
            t = t.replace(/%3C/g, "&lt;"),
            t = t.replace(/>/g, "&gt;"),
            t = t.replace(/%3E/g, "&gt;"),
            t = t.replace(/'/g, "&apos;"),
            t = t.replace(/"/g, "&quot;"))
    }
    ,
    Util.restoreXss = function(t) {
        return null == t || "" == t ? "" : (t = t.replace(/&lt;/g, "<"),
            t = t.replace(/&gt;/g, ">"),
            t = t.replace(/&apos;/g, "'"),
            t = t.replace(/&quot;/g, '"'))
    }
    ,
    String.prototype.isEmpty = function() {
        return this.replace(/(^\s*)|(\s*$)/g, "").length <= 0
    }
    ,
    String.prototype.notEmpty = function() {
        return !this.isEmpty()
    }
    ,
    String.prototype.isEmail = function() {
        return !(this.isEmpty() || !/^([\w]+)(.[\w]+)*@([\w-]+\.){1,5}([A-Za-z]){2,8}$/.test(this))
    }
    ,
    Array.prototype.inArray = function(t) {
        for (var e = 0; e < this.length; e++)
            if (this[e] == t)
                return !0;
        return !1
    }
    ,
    Array.prototype.indexOf = function(t) {
        for (var e = 0; e < this.length; e++)
            if (this[e] == t)
                return e;
        return -1
    }
    ,
    Array.prototype.remove = function(t) {
        var e = this.indexOf(t);
        e > -1 && this.splice(e, 1)
    }
    ,
Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {
        var i, o;
        if (null == this)
            throw new TypeError(" this is null or not defined");
        var n = Object(this)
            , a = n.length >>> 0;
        if ("[object Function]" != {}.toString.call(t))
            throw new TypeError(t + " is not a function");
        for (e && (i = e),
                 o = 0; o < a; ) {
            var l;
            o in n && (l = n[o],
                t.call(i, l, o, n)),
                o++
        }
    }
),
    Util.getUrlParams = function(t) {
        var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)","i")
            , i = window.location.search.substr(1).match(e);
        return null != i ? unescape(i[2]) : null
    }
    ,
    Util.shapesCount = function(t) {
        $("#designer_canvas").find(".shape_box").length > 600 && Util.globalTopTip("本文件的图形数量已足够绘制一艘航空母舰，为了好的作图体验，建议您不要制作过大的文件哦", "top_error", 2e4, $("#designer"))
    }
    ,
    Util.GetNextMonthDay = function(t) {
        var e = new Date;
        days = e.getDate();
        var i = e.getFullYear()
            , o = parseInt(e.getMonth() + 1) + parseInt(t);
        o > 12 && (i = parseInt(i) + parseInt(parseInt(o) / 12 == 0 ? 1 : parseInt(o) / 12),
            o = parseInt(o) % 12);
        var n = e.getDate()
            , a = new Date(i,o,0);
        return n > (a = a.getDate()) && (n = a),
        o < 10 && (o = "0" + o),
        i + "年" + o + "月" + n + "日"
    }
    ,
    Util.GetNextDay = function(t, e) {
        if (e)
            i = new Date(e);
        else
            var i = new Date;
        var o = new Date(i);
        return o.setDate(i.getDate() + t),
        o.getFullYear() + "年" + (o.getMonth() + 1) + "月" + o.getDate() + "日"
    }
;

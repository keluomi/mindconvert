var Util = {};
Util.setCookie = function(b, c, a) {
    var d = new Date();
    d.setDate(d.getDate() + a);
    document.cookie = b + "=" + escape(c) + ((a == null) ? "" : ";path=/;expires=" + d.toGMTString())
}
;
Util.getCookies = function(b) {
    if (document.cookie.length > 0) {
        var c = document.cookie.indexOf(b + "=");
        if (c != -1) {
            c = c + b.length + 1;
            var a = document.cookie.indexOf(";", c);
            if (a == -1) {
                a = document.cookie.length
            }
            return unescape(document.cookie.substring(c, a))
        }
    }
    return ""
}
;
Util.globalTopTip = function(d, c, b, f, g) {
    if (typeof d == "undefined") {
        return
    }
    if (typeof d == "string" && d == "close") {
        $("#global_top_dialog").remove();
        return
    }
    if (b == null) {
        b = 5000
    }
    if (c == null) {
        c = "top_success"
    }
    var e = $("#global_top_dialog");
    if (e.length > 0) {
        e.remove()
    }
    e = $('<div id="global_top_dialog" class="global_top_dialog"><div class="left_arrow"></div>' + d + '<div class="right_arrow"></div></div>').appendTo("body");
    e.addClass(c);
    if (g) {
        e.find(".left_arrow").remove();
        e.find(".right_arrow").remove();
        e.addClass("noarrow")
    }
    var a = e.outerWidth();
    if (f) {
        e.css("top", $(f).offset().top + "px")
    } else {
        if ($("#header").length == 0) {
            e.css("top", "0px")
        }
    }
    e.css({
        "margin-left": -(a * 0.5) + "px"
    }).show();
    setTimeout(function() {
        e.addClass("show");
        setTimeout(function() {
            e.removeClass("show");
            setTimeout(function() {
                e.fadeOut("slow").remove()
            }, 250)
        }, b)
    }, 50)
}
;
var Tutorial = {
    data: [{
        title: "思维导图全新升级",
        text: "<div style='margin:0px -20px;padding:50px 20px 80px;display:flex;justify-content:space-between;text-align:center;font-size:13px;background:#f3f3f3;'><div><img style='display:block;margin:20px auto;width:100px;' src='/assets/images/mind/guide1.svg'/>更简洁的UI<br>一切让您更专注创作</div><div><img style='display:block;margin:20px auto;width:100px;' src='/assets/images/mind/guide2.svg'/>增加更多实用功能<br>和快捷键支持</div><div><img style='display:block;margin:20px auto;width:100px;' src='/assets/images/mind/guide3.svg'/>多人实时协作<br>零延迟，高效易用</div><div><img style='display:block;margin:20px auto;width:100px;' src='/assets/images/mind/guide4.svg'/>更多下载格式的支持</div></div>"
    }, {
        title: "一分钟学会思维导图 — 快速添加节点",
        img: "/assets/images/mind/step1.gif",
        text: "选中当前节点，使用 <span class='tutorial-key'>Enter</span>键增加同级节点，<span class='tutorial-key'>Tab</span>键增加子节点，<span class='tutorial-key'>Del</span>键增删除节点。"
    }, {
        title: "移动节点位置和排序",
        img: "/assets/images/mind/step2.gif",
        text: "拖动节点到另一个节点的上，可以移动节点位置或排序"
    }, {
        title: "用格式刷来复制节点的样式",
        img: "/assets/images/mind/step3.gif",
        text: "复用样式的时候，可以尝试使用<b>格式刷</b>功能，点击左上角的格式刷图标或者按快捷键 <span class='tutorial-key'>Ctrl</span> + <span class='tutorial-key'>g</span>"
    }, {
        title: "善于用右键菜单来提高效率",
        img: "/assets/images/mind/step4.gif",
        text: "很多便捷的操作都放在了右键菜单里，可以点开右键看一看"
    }, {
        title: "欢迎使用ProcessOn思维导图",
        img: "/assets/images/mind/step5.gif",
        text: "学会这些技巧，基本上可以轻松的玩转思维导图了<br>但想要更高效的使用思维导图，<b> 快捷键</b> 将是您需要了解的必备功能。您可以查看顶部菜单栏的 <b>帮助</b>，查看更多快捷键和帮助信息。"
    }],
    dom: null,
    init: function(b) {
        if (b) {
            return
        }
        this.step = 0;
        var a = $('<div class="tutorial-con mind-dlg"><h3></h3><h2></h2><div class="tutorial-image"></div><div class="tutorial-text"></div><div class="tutorial-step"></div><div class="tutorial-btn"><span style="font-size:13px;padding:6px 15px;" onclick="Tutorial.next()" class="mind-button">下一步</span><span style="font-size:13px;padding:6px 15px;display:none;" onclick="Tutorial.start()" class="mind-button">开始使用</span></div></div>');
        a.appendTo("body");
        this.dom = a;
        this.render(0);
        this.renderSteps();
        this.selectStep(0);
        this.initEvent()
    },
    step: 0,
    start: function() {
        this.step = 0;
        $(".tutorial-con").dialog("close");
        setTimeout(function() {
            $(".tutorial-con").remove()
        }, 500);
        tutorial = true;
        mind.operation.setConfig("mindTutorial", true)
    },
    next: function() {
        if (this.step >= this.data.length - 1) {
            return
        }
        this.step++;
        this.render(this.step);
        this.selectStep(this.step);
        this.toggleButton()
    },
    toggleButton: function() {
        if (this.step >= this.data.length - 1) {
            $(".tutorial-btn").children().eq(0).hide();
            $(".tutorial-btn").children().eq(1).show()
        } else {
            $(".tutorial-btn").children().eq(0).show();
            $(".tutorial-btn").children().eq(1).hide()
        }
    },
    redirect: function(a) {
        this.step = a;
        this.render(this.step);
        this.selectStep(this.step);
        this.toggleButton()
    },
    selectStep: function(a) {
        var b = this.dom.find(".tutorial-step");
        b.children().eq(a).addClass("active").siblings().removeClass("active")
    },
    renderSteps: function() {
        var d = this.dom;
        var c = d.find(".tutorial-step");
        var b = "";
        for (var a = 0; a < this.data.length; a++) {
            b += "<span></span>"
        }
        c.html(b)
    },
    render: function(b) {
        var e = this.dom;
        var h = e.find("h2")
            , d = e.find(".tutorial-image")
            , i = e.find(".tutorial-text")
            , c = e.find(".tutorial-step");
        var g = this.data[b];
        h.text(g.title);
        i.html(g.text);
        if (g.img != null) {
            var f = '<img src="' + g.img + '"/>';
            d.html(f);
            d.find("img").on("load", function() {
                a(e)
            })
        } else {
            d.empty();
            d.css({
                border: "none",
                padding: 0
            });
            a(e)
        }
        function a(j) {
            if (!j.is(":visible")) {
                j.dialog({
                    onClose: function() {
                        tutorial = true;
                        mind.operation.setConfig("mindTutorial", true)
                    }
                })
            }
        }
    },
    initEvent: function() {
        var b = this.dom
            , a = this;
        b.find(".tutorial-step").children().on("click", function() {
            var c = $(this).index();
            a.redirect(c)
        })
    }
};
(function() {
        $.fn.selectText = function() {
            var doc = document;
            var element = this[0];
            if (doc.body.createTextRange) {
                var range = document.body.createTextRange();
                range.moveToElementText(element);
                range.select()
            } else {
                if (window.getSelection) {
                    var selection = window.getSelection();
                    var range = document.createRange();
                    range.selectNodeContents(element);
                    selection.removeAllRanges();
                    selection.addRange(range)
                }
            }
        }
        ;
        $.fn.textMoveToEnd = function() {
            el = this[0];
            el.focus();
            var range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            var sel = window.getSelection();
            if (sel.anchorOffset != 0) {
                return
            }
            sel.removeAllRanges();
            sel.addRange(range)
        }
        ;
        $.fn.submitForm = function(opt) {
            var defaultOpt = {
                json: true
            };
            var options = $.extend(defaultOpt, opt);
            var form = $(this);
            if (options.onSubmit) {
                if (options.onSubmit.call(form) == false) {
                    return
                }
            }
            if (options.url) {
                form.attr("action", options.url)
            }
            var frameId = "submit_frame_" + (new Date().getTime());
            var frame = $("<iframe id=" + frameId + " name=" + frameId + "></iframe>").attr("src", window.ActiveXObject ? "javascript:false" : "about:blank").css({
                position: "absolute",
                top: -1000,
                left: -1000
            });
            form.attr("target", frameId);
            frame.appendTo("body");
            frame.bind("load", submitCallback);
            form.append("<input type='hidden' name='submitFormByHiddenFrame' id='submitFormByHiddenFrameParam' value='hiddenFrame'/>");
            form[0].submit();
            $("#submitFormByHiddenFrameParam").remove();
            var checkCount = 10;
            function submitCallback() {
                frame.unbind();
                var body = $("#" + frameId).contents().find("body");
                var data = body.html();
                if (data == "") {
                    if (--checkCount) {
                        setTimeout(submitCallback, 200);
                        return
                    }
                    return
                }
                var ta = body.find(">textarea");
                if (ta.length) {
                    data = ta.val()
                } else {
                    var pre = body.find(">pre");
                    if (pre.length) {
                        data = pre.html()
                    }
                }
                try {
                    eval("data=" + data);
                    if (data.error == "error") {
                        alert("error")
                    } else {
                        if (options.success) {
                            options.success(data)
                        }
                    }
                } catch (e) {
                    if (options.json) {
                        if (options.error) {
                            options.error(data)
                        }
                    } else {
                        if (options.success) {
                            options.success(data)
                        }
                    }
                }
                setTimeout(function() {
                    frame.unbind();
                    frame.remove()
                }, 100)
            }
        }
        ;
        $.fn.numberBox = function(opts, value) {
            opts = $.extend({
                sign: "px",
                width: 80,
                inputWidth: 56,
                variable: 1,
                callback: null
            }, opts);
            var obj = $(this);
            obj.html("<input type='text'/><div><span></span><span></span></div>");
            var input = obj.find("input")
                , span_top = obj.find("span").eq(0)
                , span_bottom = obj.find("span").eq(1);
            obj.css({
                width: opts.width
            });
            input.css({
                width: opts.inputWidth
            });
            if (value != null && value != "") {
                input.val(value + opts.sign)
            }
            span_top.on("click", function() {
                var val = input.val();
                if (val == "") {
                    return
                }
                val = Number(val.substring(0, val.indexOf(opts.sign)));
                if (isNaN(val)) {
                    return
                }
                var v = val += opts.variable;
                input.val(v + opts.sign);
                if (opts.callback != null) {
                    opts.callback(v)
                }
            });
            span_bottom.on("click", function() {
                var val = input.val();
                if (val == "") {
                    return
                }
                val = Number(val.substring(0, val.indexOf(opts.sign)));
                if (isNaN(val)) {
                    return
                }
                var v = val -= opts.variable;
                input.val(v + opts.sign);
                if (opts.callback != null) {
                    opts.callback(v)
                }
            })
        }
        ;
        $.fn.showCorner = function(opts) {
            var con = $(this);
            if (typeof options == "string") {
                if (options == "close") {
                    con.removeClass("active")
                }
                return
            }
            var tp = opts.type
                , pos = opts.pos;
            var targetCon = con.children("[tit=" + tp + "]");
            targetCon.show().siblings("div").hide();
            con.addClass("active");
            con.children(".mind-icons").on("click", function(e) {
                $(".mind-corner." + pos).removeClass("active")
            })
        }
        ;
        $.fn.dropdown = function(options) {
            var menu = $(this);
            if (typeof options == "string") {
                if (options == "close") {
                    menu.hide();
                    $(document).off("mousedown.mind-dropdown")
                }
                return
            }
            var tar = options.target;
            var offset = tar.offset();
            tar.addClass("selected");
            if (options.fade) {
                menu.fadeIn("normal")
            } else {
                menu.show()
            }
            var left;
            if (options.position == "center") {
                left = offset.left + tar.outerWidth() / 2 - menu.outerWidth() / 2
            } else {
                if (options.position == "right") {
                    left = offset.left + tar.outerWidth() - menu.outerWidth()
                } else {
                    left = offset.left
                }
            }
            var top = offset.top + tar.outerHeight();
            if (top + menu.outerHeight() > $(window).height()) {
                top = $(window).height() - menu.outerHeight()
            }
            if (left + menu.outerWidth() > $(window).width()) {
                left = $(window).width() - menu.outerWidth()
            }
            menu.css({
                top: top,
                left: left,
                minWidth: options.width ? options.width : tar.outerWidth() - 2
            });
            if (typeof options.bind == "undefined" || options.bind == true) {
                menu.find("li:not(.devider)").off().on("click", function() {
                    var item = $(this);
                    if (options.onSelect) {
                        options.onSelect(item)
                    }
                    menu.dropdown("close")
                })
            }
            menu.off("mousedown").on("mousedown", function(e) {
                e.stopPropagation()
            });
            $(document).off("mousedown.mind-dropdown").on("mousedown.mind-dropdown", function() {
                menu.dropdown("close")
            });
            $(document).off("mouseup.mind-dropdown").on("mouseup.mind-dropdown", function() {
                menu.dropdown("close");
                if (options.onClose) {
                    options.onClose()
                }
            })
        }
        ;
        $.fn.showPanel = function(opts) {
            opts = $.extend({
                target: null,
                panel: null
            }, opts);
            var dom = opts.target
                , offset = dom.offset()
                , box = opts.panel;
            var w = $(window).width()
                , h = $(window).height();
            var val = mind.operation.zoomVal / 100;
            var top = dom.offset().top + dom.height() * val + 12;
            var left = dom.offset().left - box.width() / 2 + dom.width() * val / 2 - 2;
            if (offset.top + box.height() > h) {
                top = h - box.height()
            }
            if (offset.left + box.width() > w) {
                left = w - box.width()
            } else {
                if (offset.left < box.width()) {
                    left = 8
                }
            }
            box.show().css({
                left: left,
                top: top,
                opacity: 1
            })
        }
        ;
        $.colorpicker = function(options) {
            var picker = $("#mind-color-picker")
                , util = mind.util;
            picker.find(".selected").removeClass("selected");
            picker.dropdown(options);
            var input = picker.find("input[tit=hex]");
            picker.find("div[co]").off("mousedown").on("mousedown", function() {
                if (options.onSelect) {
                    var color = $(this).css("background-color");
                    color = color.replace(/\s/g, "");
                    var hexColor = util.getHexColor(color);
                    if (hexColor == null) {
                        options.onSelect(null)
                    } else {
                        options.onSelect(hexColor.hex)
                    }
                }
                picker.dropdown("close")
            });
            if (options.setColor != null) {
                var color = options.setColor;
                input.val(color.hex)
            } else {
                input.val("")
            }
            picker.find("div[co]").off("mouseenter").on("mouseenter", function(e) {
                var color = $(this).css("background-color");
                color = color.replace(/\s/g, "");
                var hexColor = util.getHexColor(color);
                if (hexColor != null) {
                    input.val(hexColor.hex)
                } else {
                    input.val("")
                }
            });
            input.off("blur").on("blur", function(e) {
                var val = $.trim($(this).val());
                if (val == "") {
                    return
                }
                if (!util.isHexColor(val)) {
                    $(this).val("").focus();
                    return
                }
                if (options.onSelect) {
                    var color = val.replace(/\s/g, "");
                    options.onSelect(color)
                }
                picker.dropdown("close");
                e.stopPropagation()
            });
            input.off("click").on("click", function(e) {
                e.stopPropagation()
            });
            input.off("mouseup").on("mouseup", function(e) {
                e.stopPropagation()
            });
            input.off("mousedown").on("mousedown", function(e) {
                e.stopPropagation()
            });
            picker.on("mouseup", function(e) {
                e.stopPropagation()
            });
            picker.on("mousedown", function(e) {})
        }
        ;
        $.fn.datePicker = function(opts) {
            var defaults = {
                selected: null,
                minimumDate: null,
                maximumDate: null,
                dateFormat: null
            };
            var months = new Array("一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月");
            var abbreviations = new Array("一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月");
            var daySelector = "td:not(.m):not(:empty)";
            return this.each(function() {
                if (this.datePicker) {
                    return false
                }
                var options = $.extend({}, defaults, opts);
                var $input = $(this);
                var $container = null;
                var currentDate = null;
                var mode = null;
                var self = {
                    initialize: function() {
                        $(document).keydown(function(e) {
                            if (e.keyCode == 27) {
                                self.hide()
                            }
                        }).on("click.show", function() {
                            self.hide()
                        });
                        $input.on("click.show", function(e) {
                            self.show();
                            return false
                        }).keydown(function(e) {
                            if (e.keyCode == 13) {
                                self.entered();
                                return false
                            }
                        });
                        $container = self.initializeContainer().append(self.buildMonth(new Date())).delegate(daySelector, "click", self.clicked).delegate("td:not(:empty)", "hover", self.hover).delegate(".prev", "click", self.loadPrevious).delegate(".next", "click", self.loadNext).delegate(".month", "click", self.pickMonth).delegate(".year", "click", self.pickYear).click(function() {
                            return false
                        });
                        self.show();
                        var top = $input.offset().top
                            , left = $input.offset().left;
                        if (left + $container.width() > $(window).width()) {
                            left = $(window).width() - $container.outerWidth()
                        }
                        if (top + $container.height() > $(window).height()) {
                            top = $(window).height() - $container.outerHeight()
                        }
                        $container.css({
                            top: top,
                            left: left
                        })
                    },
                    parseDate: function(value) {
                        return new Date(value)
                    },
                    show: function() {
                        $container.show()
                    },
                    hide: function() {
                        $container.hide()
                    },
                    loadPrevious: function() {
                        $container.empty().append(self.buildMonth(new Date(currentDate.getFullYear(),currentDate.getMonth() - 1,1)))
                    },
                    loadNext: function() {
                        $container.empty().append(self.buildMonth(new Date(currentDate.getFullYear(),currentDate.getMonth() + 1,1)))
                    },
                    hover: function() {
                        $(this).toggleClass("hover")
                    },
                    clicked: function() {
                        var $cell = $(this);
                        if (mode == "month") {
                            $container.empty().append(self.buildMonth(new Date(currentDate.getFullYear(),(4 * ($cell.parent().index() - 1)) + $cell.index(),1)))
                        } else {
                            if (mode == "year") {
                                currentDate = new Date($cell.text(),0,1);
                                self.pickMonth()
                            } else {
                                $container.find("td.selected").removeClass("selected");
                                $cell.addClass("selected");
                                var date = new Date(currentDate.getFullYear(),currentDate.getMonth(),$cell.text());
                                var ndate = self.format(date);
                                $input.val(ndate).change();
                                if (options.selected != null) {
                                    options.selected(ndate)
                                }
                                self.hide()
                            }
                        }
                    },
                    entered: function() {
                        var date = self.parseDate($input.val().replace(/^\s*/, "").replace(/\s*$/, ""));
                        if (date == null) {
                            return
                        }
                        $container.empty().append(self.buildMonth(date)).find(daySelector).eq(date.getDate() - 1).click()
                    },
                    initializeContainer: function() {
                        return $("<div>").addClass("calendar").appendTo("body")
                    },
                    pickYear: function() {
                        mode = "year";
                        var table = document.createElement("table");
                        var start = currentDate.getFullYear() - 6;
                        if (options.minimumDate && options.minimumDate > start) {
                            start = options.minimumDate
                        }
                        for (var i = 0; i < 3; ++i) {
                            var row = table.insertRow(-1);
                            for (var j = 0; j < 4; ++j) {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = start + (4 * i) + j
                            }
                        }
                        $container.empty().append(table)
                    },
                    pickMonth: function() {
                        mode = "month";
                        var table = document.createElement("table");
                        var header = table.insertRow(-1);
                        var year = header.insertCell(-1);
                        year.colSpan = 4;
                        year.className = "m year";
                        year.innerHTML = currentDate.getFullYear();
                        for (var i = 0; i < 3; ++i) {
                            var row = table.insertRow(-1);
                            for (var j = 0; j < 4; ++j) {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = abbreviations[4 * i + j]
                            }
                        }
                        $container.empty().append(table)
                    },
                    buildMonth: function(date) {
                        mode = "day";
                        var first = new Date(date.getFullYear(),date.getMonth(),1);
                        var last = new Date(date.getFullYear(),date.getMonth() + 1,0);
                        currentDate = first;
                        var firstDay = first.getDay();
                        var totalDays = last.getDate();
                        var weeks = Math.ceil((totalDays + firstDay) / 7);
                        var table = document.createElement("table");
                        for (var i = 0, count = 1; i < weeks; ++i) {
                            var row = table.insertRow(-1);
                            for (var j = 0; j < 7; ++j,
                                ++count) {
                                var cell = row.insertCell(-1);
                                if (count > firstDay && count <= totalDays + firstDay) {
                                    cell.innerHTML = count - firstDay
                                }
                            }
                        }
                        var header = table.insertRow(0);
                        self.addHeaderCell(header, '<div class="prev">&laquo;</div>', 1);
                        self.addHeaderCell(header, '<div class="month">' + months[date.getMonth()] + " " + date.getFullYear() + "</div>", 5);
                        self.addHeaderCell(header, '<div class="next">&raquo;</div>', 1);
                        var $table = $(table);
                        if (options.minimumDate && options.minimumDate >= first) {
                            $table.find(".prev").hide()
                        }
                        if (options.maximumDate && options.maximumDate <= last) {
                            $table.find(".next").hide()
                        }
                        return $table
                    },
                    addHeaderCell: function(header, html, colspan) {
                        var cell = header.insertCell(-1);
                        cell.innerHTML = html;
                        cell.className = "m ";
                        cell.colSpan = colspan
                    },
                    format: function(date) {
                        if (options.dateFormat != null) {
                            var o = {
                                "M+": date.getMonth() + 1,
                                "d+": date.getDate(),
                                "h+": date.getHours(),
                                "m+": date.getMinutes(),
                                "s+": date.getSeconds(),
                                "q+": Math.floor((date.getMonth() + 3) / 3),
                                S: date.getMilliseconds()
                            };
                            var result = "";
                            if (/(y+)/.test(options.dateFormat)) {
                                result = options.dateFormat.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
                            }
                            for (var k in o) {
                                if (new RegExp("(" + k + ")").test(options.dateFormat)) {
                                    result = result.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length))
                                }
                            }
                            return result
                        } else {
                            return months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear()
                        }
                    }
                };
                this.datePicker = self;
                self.initialize()
            })
        }
        ;
        $.mask = function(opts) {
            if (opts != null && opts == "close") {
                $("#body-mask").remove();
                return
            }
            var mask = $("#body-mask");
            if (mask.length) {
                return
            }
            mask = $("<div id='body-mask'></div>").appendTo("body");
            mask.on("mousedown", function(e) {
                e.stopPropagation()
            })
        }
        ;
        $.fn.dialog = function(options) {
            var dialogWin = $(this);
            if (typeof options == "string") {
                if (options == "close") {
                    if ($("#body-mask") != null) {
                        $("#body-mask").remove()
                    }
                    dialogWin.hide()
                }
            } else {
                var defaults = {
                    fixed: true,
                    closable: true,
                    mask: true
                };
                if (!options) {
                    options = {};
                    options.width = dialogWin.outerWidth();
                    options.height = dialogWin.outerHeight()
                }
                options = $.extend(defaults, options);
                var dialogTitle = dialogWin.children("h3");
                if (dialogTitle.find(".mind-dlog-close").length == 0) {
                    var span = $("<span class='mind-dlog-close mind-icons'>&#xe622;</span>");
                    span.appendTo(dialogTitle);
                    span.on("click", function() {
                        if (options.onClose != null) {
                            options.onClose()
                        }
                        var parent = span.parent().parent();
                        parent.dialog("close")
                    })
                }
                if (options.mask) {
                    $.mask()
                }
                dialogWin.show()
            }
            return dialogWin
        }
        ;
        $.fn.confirm = function(options) {
            var obj = $(this);
            var confirmWin = $("#mind-confirm-con");
            if (!confirmWin.length) {
                confirmWin = $("<div id='mind-confirm-con'><div class='msg'></div><div class='buttons'><a class='okbtn'>确认</a>&nbsp;&nbsp;<a class='cancelbtn'>取消</a></div></div>").appendTo("body")
            }
            confirmWin.find(".msg").html(options.content);
            if (options.width) {
                confirmWin.css("width", options.width)
            }
            if (options.height) {
                confirmWin.css("height", options.height)
            }
            confirmWin.css({
                left: obj.offset().left - obj.width() / 2,
                top: obj.offset().top + obj.height() + 10,
                marginLeft: -options.width / 2
            }).show();
            confirmWin.find(".okbtn").off().on("click", function() {
                if (options.onConfirm) {
                    options.onConfirm()
                }
                confirmWin.remove()
            });
            confirmWin.find(".cancelbtn").off().on("click", function() {
                if (options.onCancel) {
                    options.onCancel()
                }
                confirmWin.remove()
            });
            confirmWin.on("mousedown.confirm", function(e) {
                e.stopPropagation()
            });
            $(document).on("mousedown.confirm", function() {
                if (options.onCancel) {
                    options.onCancel()
                }
                confirmWin.remove();
                $(document).off("mousedown.confirm")
            })
        }
        ;
        $.showTitleTip = function(title, delay, target_, pos) {
            var target = $(target_);
            var tip = $("#title_hover_tip");
            if (tip.length == 0) {
                tip = $("<div id='title_hover_tip'><div class='tip_arrow'></div><div class='tip_content'></div></div>").appendTo("body")
            }
            tip.find(".tip_content").html(title);
            tip.find(".tip_arrow").removeClass("tip_right").removeClass("tip_top").css("top", "");
            if (pos == "right") {
                tip.css({
                    left: target.offset().left + target.outerWidth() + 7,
                    top: target.offset().top + target.outerHeight() / 2 - tip.outerHeight() / 2
                });
                tip.find(".tip_arrow").attr("class", "tip_arrow tip_right").css("top", tip.outerHeight() / 2 - 7)
            } else {
                if (pos == "top") {
                    tip.css({
                        left: target.offset().left + target.outerWidth() / 2 - tip.outerWidth() / 2,
                        top: target.offset().top - tip.outerHeight()
                    });
                    tip.find(".tip_arrow").attr("class", "tip_arrow tip_top")
                } else {
                    if (pos == "left") {
                        tip.css({
                            left: target.offset().left - tip.outerWidth() - 7,
                            top: target.offset().top + target.outerHeight() / 2 - tip.outerHeight() / 2
                        });
                        tip.find(".tip_arrow").attr("class", "tip_arrow tip_left")
                    } else {
                        tip.css({
                            left: target.offset().left + target.outerWidth() / 2 - tip.outerWidth() / 2,
                            top: target.offset().top + target.outerHeight() + 6
                        });
                        tip.find(".tip_arrow").attr("class", "tip_arrow")
                    }
                }
            }
            tip.show().addClass("moving");
            if (delay != null) {
                setTimeout(function() {
                    tip.fadeOut(function() {
                        tip.remove()
                    })
                }, delay)
            }
        }
        ;
        $.topicCount = function(obj) {
            var topicLen = $(".topic-box").length;
            if (topicLen > 1200) {
                $.showTip("为了好的作图体验，建议您不要制作过大的文件", 15000)
            }
        }
        ;
        var showTiping = null;
        $.showTip = function(text, delay, pos, callback) {
            var tip = $("#mind-tip");
            if (text == "close") {
                tip.remove();
                return
            }
            if (tip.length == 0) {
                tip = $("<div id='mind-tip'><div class='mind-tip-text'></div></div>").appendTo("body");
                tip.append("<div class='mind-tip-close mind-icons'></div>");
                tip.children(".mind-tip-close").on("click", function() {
                    $.showTip("close")
                })
            }
            if (callback) {
                tip.children(".mind-tip-close").on("click.callback", function() {
                    callback()
                })
            } else {
                tip.children(".mind-tip-close").unbind("click.callback")
            }
            tip.children(".mind-tip-text").html(text);
            tip.css({
                marginLeft: -tip.width() / 2 - 30
            });
            if (pos != null && pos == "left_bottom") {
                tip.show().css({
                    bottom: 100,
                    left: 25,
                    marginLeft: "0",
                    top: "initial"
                })
            } else {
                tip.show().css({
                    top: 60
                })
            }
            if (delay != null && showTiping == null) {
                showTiping = setTimeout(function() {
                    $.showTip("close");
                    showTiping = null
                }, delay)
            }
        }
        ;
        $.loading = function(options) {
            if (options == "close") {
                var loading = $("#mind-loading");
                if (loading.length) {
                    loading.fadeOut().remove()
                }
                return
            }
            var loading = $('<div id="mind-loading"><span><label style="color:#666;font-family: "comic sans ms","Microsoft YaHei";font-size: 22px;">ProcessOn</label> <label style="color:rgb(80, 194, 139);font-family: "comic sans ms","Microsoft YaHei";font-size: 22px;">mind</label><label style="display:inline-block;" class="mind-icons rotate1">&#xe64a;</label></span></div>');
            $("body").append(loading)
        }
        ;
        $.ajaxSetup({
            cache: false
        });
        $("[title],[original-title]").live("mouseenter", function() {
            if ($(this).attr("disableTitle")) {
                return false
            }
            if ($("#hover_tip").length > 0) {
                return
            }
            var target = $(this);
            if (target.attr("title")) {
                target.attr("original-title", target.attr("title"));
                target.removeAttr("title")
            }
            if (!target.attr("original-title")) {
                return
            }
            var title = target.attr("original-title");
            var tip = $("#mind_hover_tip");
            if (tip.length == 0) {
                tip = $("<div id='mind_hover_tip'><div class='tip_arrow'></div><div class='tip_content'></div></div>").appendTo("body")
            }
            tip.find(".tip_content").html(title);
            $("#mind_hover_tip").show();
            tip.find(".tip_arrow").removeClass("tip_right").removeClass("tip_top").css("top", "");
            if (target.attr("title_pos") == "right") {
                tip.css({
                    left: target.offset().left + target.outerWidth() + 14,
                    top: target.offset().top + target.outerHeight() / 2 - tip.outerHeight() / 2
                });
                tip.find(".tip_arrow").attr("class", "tip_arrow tip_right").css("top", tip.outerHeight() / 2 - 7)
            } else {
                if (target.attr("title_pos") == "top") {
                    tip.css({
                        left: target.offset().left + target.outerWidth() / 2 - tip.outerWidth() / 2,
                        top: target.offset().top - tip.outerHeight() - 14
                    });
                    tip.find(".tip_arrow").attr("class", "tip_arrow tip_top")
                } else {
                    if (target.attr("title_pos") == "left") {
                        tip.css({
                            left: target.offset().left - tip.outerWidth() - 14,
                            top: target.offset().top + target.outerHeight() / 2 - tip.outerHeight() / 2
                        });
                        tip.find(".tip_arrow").attr("class", "tip_arrow tip_left")
                    } else {
                        tip.css({
                            left: target.offset().left + target.outerWidth() / 2 - tip.outerWidth() / 2,
                            top: target.offset().top + target.outerHeight() + 14
                        });
                        tip.find(".tip_arrow").attr("class", "tip_arrow")
                    }
                }
            }
        }).live("mouseleave", function() {
            $("#mind_hover_tip").hide()
        });
        $.fn.multiInput = function(opts, value, text) {
            var obj = $(this);
            if (typeof opts == "string" && opts == "setVal") {
                setVal(value, text);
                return
            }
            opts = $.extend({
                text: "请输入邮箱，回车添加",
                autoComplete: false,
                url: "",
                params: {}
            }, opts);
            obj.html("");
            var valsCon = $('<div class="multi-input-vals"></div>');
            var input = $('<div><input type="text" id="multi-input" placeholder="' + opts.text + '"></div>');
            obj.append(valsCon).append(input);
            input.find("input").off().on("keyup", function(e) {
                var txt = $.trim($(this).val());
                if (txt == "") {
                    return
                }
                if (e.keyCode == 13 && opts.setVal) {
                    var isEmail = /^([\w]+)(.[\w]+)*@([\w-]+\.){1,5}([A-Za-z]){2,8}$/.test(txt);
                    if (!isEmail) {
                        $(this).val("");
                        return
                    }
                    var html = opts.setVal(txt);
                    setVal(null, html);
                    $(this).val("")
                } else {
                    if (opts.autoComplete) {
                        opts.params = $.extend(opts.params, {
                            value: txt
                        });
                        $.ajax({
                            url: opts.url,
                            cache: false,
                            data: opts.params,
                            success: function(data) {
                                var html = opts.autoCompleteCallback(data);
                                $(".popWindow").remove();
                                if (html == "") {
                                    return
                                }
                                var htmlCon = $("<div class='popWindow'></div>").appendTo("body");
                                htmlCon.html(html);
                                htmlCon.popWindow({
                                    target: "#multi-input"
                                })
                            }
                        })
                    }
                }
            });
            $(document).on("click", ".multi-input-vals .closeme", function() {
                var closeBtn = $(this)
                    , txt = closeBtn.prev().text();
                if (txt != null && opts.deleteVal) {
                    closeBtn.parent().remove();
                    opts.deleteVal(txt)
                }
            });
            function setVal(val, text) {
                var vals = obj.find(".multi-input-vals");
                var icon = "&#xe639;"
                    , isEmail = /^([\w]+)(.[\w]+)*@([\w-]+\.){1,5}([A-Za-z]){2,8}$/.test(text);
                if (isEmail && val == null) {
                    icon = "&#xe609;";
                    val = text
                } else {
                    if (!isEmail && val == null) {
                        return
                    }
                }
                var html = '<span val="' + val + '" class="multi-input-value"><span class="mind-icons">' + icon + '</span><span class="multi-text">' + text + '</span><span class="mind-icons closeme">&#xe622;</span></span>';
                vals.append(html)
            }
        }
        ;
        $.fn.suggest = function(options) {
            var target = $(this);
            var defaults = {
                valueField: "value",
                offsetX: 0,
                offsetY: 0,
                width: target.outerWidth(),
                format: function(item) {
                    return item.text
                }
            };
            var opt = $.extend(defaults, options);
            var suggest = $(".suggest-menu");
            if (suggest.length < 1) {
                suggest = $("<ul class='suggest-menu'></ul>").appendTo("body")
            }
            suggest.width(opt.width);
            var index = -1;
            var last = "";
            var value = "";
            target.off("keydown.suggest").on("keydown.suggest", function(e) {
                if (e.keyCode == 40) {
                    e.preventDefault();
                    if (index < suggest.children().length - 1) {
                        index++;
                        suggest.find(".active").removeClass("active");
                        suggest.find("li[index=" + index + "]").addClass("active")
                    }
                } else {
                    if (e.keyCode == 38) {
                        e.preventDefault();
                        suggest.find(".active").removeClass("active");
                        if (index >= 0) {
                            index--;
                            suggest.find("li[index=" + index + "]").addClass("active")
                        }
                    } else {
                        if (e.keyCode == 13) {
                            var active = suggest.find(".active");
                            if (active.length) {
                                target.val(active.attr("val"))
                            }
                            if (opt.onEnter) {
                                opt.onEnter(target)
                            }
                            suggest.hide();
                            value = ""
                        }
                    }
                }
            }).off("keyup.suggest").on("keyup.suggest", function(e) {
                value = target.val();
                if (value == "") {
                    suggest.hide()
                } else {
                    if (value != last) {
                        index = -1;
                        $.get(opt.url, {
                            q: value
                        }, function(data) {
                            suggest.empty();
                            var items = data.items;
                            if (items.length == 0) {
                                suggest.hide();
                                value = ""
                            } else {
                                for (var i = 0; i < items.length; i++) {
                                    var item = items[i];
                                    var itemHtml = "<li index='" + i + "' class='suggest-item' val='" + item[opt.valueField] + "'>";
                                    itemHtml += opt.format(item);
                                    itemHtml += "</li>";
                                    suggest.append(itemHtml)
                                }
                                suggest.show();
                                suggest.attr("tabindex", 0);
                                var left = 0;
                                if (opt.position == "center") {
                                    left = target.offset().left + target.outerWidth() / 2 - suggest.outerWidth() / 2
                                } else {
                                    if (opt.position == "right") {
                                        left = target.offset().left + target.outerWidth() - suggest.outerWidth()
                                    } else {
                                        left = target.offset().left
                                    }
                                }
                                if (left + suggest.outerWidth() > $(window).width()) {
                                    left = $(window).width() - suggest.outerWidth()
                                }
                                var top = target.offset().top + target.outerHeight();
                                if (opt.autoPosition && top + opt.offsetY + suggest.outerHeight() > $(window).height() + $(document).scrollTop()) {
                                    suggest.css({
                                        top: $(window).height() - suggest.outerHeight() + $(document).scrollTop(),
                                        left: left + opt.offsetX
                                    })
                                } else {
                                    suggest.css({
                                        top: top + opt.offsetY,
                                        left: left + opt.offsetX
                                    })
                                }
                                suggest.find(".suggest-item").off("mousedown").on("mousedown", function(e) {
                                    e.preventDefault();
                                    target.val($(this).attr("val"));
                                    if (opt.onEnter) {
                                        opt.onEnter(target)
                                    }
                                    suggest.hide();
                                    last = value = ""
                                })
                            }
                        })
                    }
                }
                last = value
            }).off("blur.suggest").on("blur.suggest", function(e) {
                suggest.hide();
                last = ""
            })
        }
        ;
        var fromUrl = document.referrer;
        if (fromUrl && fromUrl.indexOf("processon.com") < 0) {
            Util.setCookie("processon_referrer", encodeURI(fromUrl), 1)
        }
    }
)(jQuery);
var popEditor = {
    params: {
        span: null,
        range: null,
        selection: null
    },
    init: function(f) {
        var e = $(f);
        var d = this.getSelection(), b = "", a;
        if (d == null) {
            return
        }
        this.params.range = d.range;
        this.params.selection = d.selection;
        this.renderMenu();
        var c = $(".pop-editor");
        this.renderMenuPos(e);
        this.initEvent(c)
    },
    getSelection: function() {
        var a = document.getSelection();
        if (!a.isCollapsed) {
            return {
                selection: a,
                range: a.getRangeAt(0)
            }
        } else {
            return null
        }
    },
    initEvent: function(a) {
        var b = this
            , a = $(".pop-editor");
        a.children("div").off("mousedown").on("mousedown", function(d) {
            var f = $(this)
                , c = f.data("key");
            if (c == "down") {
                a.find(".pop-editor-items").hide();
                f.find(".pop-editor-items").show()
            } else {
                if (c == "color") {
                    d.stopPropagation();
                    d.preventDefault();
                    $.colorpicker({
                        target: f,
                        setColor: "red",
                        onSelect: function(e) {
                            if (e == null) {
                                e = "transparent"
                            } else {
                                e = "#" + e
                            }
                            b.setStyle("ForeColor", e)
                        }
                    });
                    return
                } else {
                    b.setStyle(c)
                }
            }
            d.preventDefault();
            d.stopPropagation()
        });
        a.children("div").off("mouseup").on("mouseup", function(c) {
            c.stopPropagation();
            c.preventDefault()
        });
        a.find(".pop-editor-items > div").off("mousedown").on("mousedown", function(h) {
            var f = $(this)
                , d = f.parent().data("key")
                , g = f.text();
            var c = b.setStyle(d, g);
            h.stopPropagation();
            return false
        })
    },
    renderMenu: function() {
        var b = $(".pop-editor");
        if (b.length == 0) {
            var d = "<div class='pop-editor-items' data-key='f'><div>微软雅黑</div><div>宋体</div><div>黑体</div><div>楷体</div><div>宋体</div><div>Arial</div><div>Verdana</div><div>Georgia</div><div>Courier New</div><div>Impact</div><div>Tahoma</div><div>Lucida Console</div><div>Comic Sans MS</div><div>Times New Roman</div></div>";
            var a = "<div class='pop-editor-items' data-key='h'><div>H1</div><div>H2</div><div>H3</div><div>H4</div><div>H5</div><div>H6</div><div>P</div></div>";
            var c = "<div class='pop-editor'><div data-key='down'><span class='mind-icons icon-font'></span>" + d + "</div><div data-key='bold'><span class='mind-icons icon-bold'></span></div><div data-key='italic'><span class='mind-icons icon-italic'></span></div><div data-key='down'><span class='mind-icons icon-header'></span>" + a + "</div><div data-key='underline'><span class='mind-icons icon-underline'></span></div><div data-key='strikeThrough'><span style='font-size:17px;' class='mind-icons icon-zitizhonghuaxian'></span></div><div data-key='color'><span class='mind-icons icon-magic'></span></div><div data-key='insertUnorderedList'><span class='mind-icons icon-listul'></span></div><div data-key='insertOrderedList'><span class='mind-icons icon-listol'></span></div></div>";
            b = $(c).appendTo("body")
        }
    },
    renderMenuPos: function(b) {
        var a = $(".pop-editor");
        a.css({
            left: b.offset().left + b.outerWidth() / 2 - a.outerWidth() / 2,
            top: b.offset().top + b.outerHeight()
        }).show()
    },
    setStyle: function(b, d) {
        var a = ""
            , e = this.params
            , c = this;
        switch (b) {
            case "h":
                document.execCommand("formatBlock", false, "<" + d + ">");
                break;
            case "f":
                document.execCommand("FontName", false, d);
                break;
            default:
                document.execCommand(b, false, d);
                break
        }
        return a
    }
};
function getThemeById(b, a) {
    $.ajax({
        url: "/mindmap/gettheme",
        data: {
            id: b
        },
        success: function(c) {
            if (c.result) {
                a()
            } else {
                a(JSON.parse(c.theme))
            }
        },
        error: function() {}
    })
}
;
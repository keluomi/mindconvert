$(function() {
    function a(b) {
/*
        $.get("/diagraming/getdef?tempId=" + tempId, {
            id: chartId
        }, function(c) {
            b(JSON.parse(c.def))
        })

*/

        var def = "{\"id\":\"root\",\"tags\":[{\"text\":\"作者：蒋昕炜\",\"color\":\"#276F86\",\"background\":\"#d6f0f8\"},{\"text\":\"出版社：东方出版社\",\"color\":\"#276F86\",\"background\":\"#d6f0f8\"}],\"structure\":\"mind_free\",\"leftChildren\":[{\"id\":\"7a8a88bc4a7e\",\"title\":\"后记\",\"task\":{},\"parent\":\"root\",\"children\":[{\"id\":\"ca436e2972ce\",\"title\":\"项目管理能指导生活吗\",\"children\":[],\"parent\":\"7a8a88bc4a7e\"},{\"id\":\"b440135f4cc1\",\"title\":\"为什么选择做项目经理\",\"children\":[],\"parent\":\"7a8a88bc4a7e\"}],\"icons\":[],\"collapsed\":false},{\"id\":\"534f5d60ca52\",\"title\":\"项目经理职业规划\",\"task\":{},\"parent\":\"root\",\"children\":[{\"id\":\"3b629fcbd006\",\"title\":\"考证有用吗\",\"parent\":\"534f5d60ca52\",\"children\":[]},{\"id\":\"7cce701861e9\",\"title\":\"项目经理的价值是什么？\",\"style\":{\"background-color\":\"#31a8e0\"},\"parent\":\"534f5d60ca52\",\"children\":[]},{\"id\":\"23ede26ca586\",\"title\":\"特点\",\"parent\":\"534f5d60ca52\",\"children\":[{\"id\":\"061b743de161\",\"title\":\"政治敏感\",\"parent\":\"23ede26ca586\",\"children\":[]},{\"id\":\"9a81da9db86d\",\"title\":\"自信\",\"parent\":\"23ede26ca586\",\"children\":[]}]},{\"id\":\"ace7ec298bab\",\"title\":\"如何对待不可能完成的任务？\",\"parent\":\"534f5d60ca52\",\"children\":[]},{\"id\":\"f759909155d0\",\"title\":\"从技术头脑到业务头脑\",\"parent\":\"534f5d60ca52\",\"children\":[]}],\"icons\":[{\"text\":\"&#xe626\",\"index\":\"4\",\"color\":\"rgb(191, 30, 27)\",\"name\":\"priority\"}],\"collapsed\":false},{\"id\":\"9c5cf015ef86\",\"title\":\"项目团队与沟通\",\"task\":{},\"children\":[{\"id\":\"6bcb02b60bdc\",\"title\":\"项目经理\",\"children\":[{\"id\":\"2561da07a34a\",\"title\":\"一天的工作\",\"children\":[],\"parent\":\"6bcb02b60bdc\"},{\"id\":\"a1c71a6e9bc6\",\"title\":\"沟通模式\",\"parent\":\"6bcb02b60bdc\",\"children\":[]},{\"id\":\"1a59d31991fd\",\"title\":\"在沟通中的角色\",\"children\":[],\"parent\":\"6bcb02b60bdc\"},{\"id\":\"22c910885402\",\"title\":\"沟通因人而异\",\"parent\":\"6bcb02b60bdc\",\"children\":[]},{\"id\":\"bbc6faa7916a\",\"title\":\"适应而不是改变他人\",\"style\":{\"border-radius\":\"5px\",\"background-color\":\"#31a8e0\",\"border-width\":\"0\"},\"children\":[],\"parent\":\"6bcb02b60bdc\"},{\"id\":\"f3113aa9ad7d\",\"title\":\"人缘\",\"children\":[],\"parent\":\"6bcb02b60bdc\"}],\"parent\":\"9c5cf015ef86\",\"collapsed\":false},{\"id\":\"5f4e74c10b26\",\"title\":\"客户什么时候会满意？\",\"style\":{\"border-radius\":\"0px\",\"border-style\":\"solid\",\"background-color\":\"#ff99ff\",\"border-width\":\"0\"},\"parent\":\"9c5cf015ef86\",\"children\":[]},{\"id\":\"a72659878ffe\",\"title\":\"项目团队的特点\",\"children\":[{\"id\":\"414779c5429b\",\"title\":\"经验和工作热情哪个重要？\",\"parent\":\"a72659878ffe\",\"children\":[]},{\"id\":\"06deb614182f\",\"title\":\"项目团队的多样性\",\"children\":[],\"parent\":\"a72659878ffe\"}],\"parent\":\"9c5cf015ef86\",\"collapsed\":false},{\"id\":\"4e732a7bf86f\",\"title\":\"老板为什么会反对你？\",\"children\":[],\"parent\":\"9c5cf015ef86\"},{\"id\":\"8d4b4000a6df\",\"title\":\"计划与变化\",\"parent\":\"9c5cf015ef86\",\"children\":[]},{\"id\":\"79634b38c375\",\"title\":\"沟通技巧\",\"children\":[{\"id\":\"bf6d3cbe424e\",\"title\":\"画大饼是否有用\",\"children\":[],\"parent\":\"79634b38c375\"},{\"id\":\"bc816d6f938e\",\"title\":\"动之以情还是晓之以理\",\"parent\":\"79634b38c375\",\"children\":[]},{\"id\":\"9a545dd88d45\",\"title\":\"别人为什么要听你的？\",\"parent\":\"79634b38c375\",\"children\":[]},{\"id\":\"e23a23298fdb\",\"title\":\"项目汇报时，需要大量细节吗？\",\"parent\":\"79634b38c375\",\"children\":[]},{\"id\":\"ab775dff4cbe\",\"title\":\"当你的想法被否定时？\",\"children\":[],\"parent\":\"79634b38c375\"},{\"id\":\"591fedea4f10\",\"title\":\"让步，问题就能解决吗\",\"parent\":\"79634b38c375\",\"children\":[]},{\"id\":\"07804e1d8086\",\"title\":\"讨价还价是否有效？\",\"children\":[],\"parent\":\"79634b38c375\"}],\"parent\":\"9c5cf015ef86\",\"collapsed\":false}],\"parent\":\"root\",\"icons\":[{\"index\":\"3\",\"text\":\"&#xe635\",\"color\":\"rgb(99, 171, 247)\",\"name\":\"priority\"}],\"collapsed\":false}],\"title\":\"漫画中国式项目管理\",\"root\":true,\"theme\":\"colorLines\",\"children\":[{\"id\":\"0d9d0c59a7fd\",\"title\":\"引子\",\"children\":[{\"id\":\"c86613f2f51e\",\"title\":\"项目成功？\",\"children\":[{\"id\":\"c87987371fc5\",\"title\":\"客户（老板）为什么花钱做这件事？\",\"style\":{\"background-color\":\"#fac6d2\"},\"children\":[],\"parent\":\"c86613f2f51e\",\"icons\":[{\"index\":\"46\",\"name\":\"\"}]},{\"id\":\"ec05cab91361\",\"title\":\"项目成功可复制\",\"children\":[],\"parent\":\"c86613f2f51e\"}],\"parent\":\"0d9d0c59a7fd\"},{\"id\":\"fde344ffa56b\",\"title\":\"如何解决严重技术问题\",\"children\":[],\"parent\":\"0d9d0c59a7fd\"}],\"parent\":\"root\",\"collapsed\":false},{\"id\":\"5931f56a8815\",\"title\":\"项目需求\",\"parent\":\"root\",\"children\":[{\"id\":\"68f544c85ad0\",\"title\":\"需求分析业务导向\",\"style\":{\"background-color\":\"#f384ae\"},\"parent\":\"5931f56a8815\",\"children\":[],\"icons\":[{\"index\":\"32\",\"color\":\"rgb(255, 0, 0)\",\"name\":\"flag\"}]},{\"id\":\"f84c91a36a59\",\"title\":\"老板的想法靠谱？\",\"children\":[{\"id\":\"dddfa697f6a0\",\"title\":\"论证可行性\",\"parent\":\"f84c91a36a59\",\"children\":[]},{\"id\":\"cba166c422e8\",\"title\":\"与所有人沟通，形成自己的思路和想法\",\"parent\":\"f84c91a36a59\",\"children\":[]}],\"parent\":\"5931f56a8815\"},{\"id\":\"304f793459a2\",\"title\":\"需求是要确认的\",\"parent\":\"5931f56a8815\",\"children\":[]},{\"id\":\"f0f45980b74a\",\"title\":\"谁是项目的决定者\",\"children\":[],\"parent\":\"5931f56a8815\"},{\"id\":\"166b1667d06d\",\"title\":\"争吵和争论\",\"parent\":\"5931f56a8815\",\"children\":[]},{\"id\":\"9b09365a2153\",\"title\":\"表面原因和深层次原因\",\"children\":[{\"id\":\"7dd9db7c5a29\",\"title\":\"客户真实想法\",\"style\":{\"background-color\":\"#7dcdc2\"},\"parent\":\"9b09365a2153\",\"children\":[]}],\"parent\":\"5931f56a8815\"},{\"id\":\"62ff7ce97d5a\",\"title\":\"项目合同的“敞口协议”\",\"children\":[{\"id\":\"182a3b6d3420\",\"title\":\"量化\",\"style\":{\"border-radius\":\"5px\",\"background-color\":\"#7dcdc2\"},\"parent\":\"62ff7ce97d5a\",\"children\":[]}],\"parent\":\"5931f56a8815\"}],\"icons\":[{\"index\":\"0\",\"text\":\"&#xe67a\",\"color\":\"rgb(191, 30, 27)\",\"name\":\"priority\"}],\"collapsed\":false},{\"id\":\"562953e061f4\",\"title\":\"项目计划\",\"parent\":\"root\",\"children\":[{\"id\":\"9f88c2851f09\",\"title\":\"里程碑节点比验收节点更重要\",\"parent\":\"562953e061f4\",\"children\":[]},{\"id\":\"13aaf478e0f8\",\"title\":\"资源\",\"parent\":\"562953e061f4\",\"children\":[{\"id\":\"8ed2fdac6f00\",\"title\":\"资源冲突，无法避免\",\"children\":[],\"parent\":\"13aaf478e0f8\"},{\"id\":\"2eea2f333165\",\"title\":\"要争取\",\"children\":[],\"parent\":\"13aaf478e0f8\"}]},{\"id\":\"6c22df5ecc23\",\"title\":\"风险控制落实在计划中\",\"style\":{\"border-style\":\"solid\",\"background-color\":\"#cc99ff\",\"border-width\":\"0\"},\"children\":[],\"parent\":\"562953e061f4\"},{\"id\":\"8799230d8bd4\",\"title\":\"特点<br>\",\"children\":[{\"id\":\"0f1ab25d161d\",\"title\":\"项目的渐进明晰性\",\"children\":[],\"parent\":\"8799230d8bd4\"},{\"id\":\"01626ca613b5\",\"title\":\"<p>规划应非常<b>现实</b></p>\",\"children\":[],\"parent\":\"8799230d8bd4\"},{\"id\":\"561d28f46889\",\"title\":\"计划要简洁\",\"parent\":\"8799230d8bd4\",\"children\":[]}],\"parent\":\"562953e061f4\"}],\"icons\":[{\"text\":\"&#xe625\",\"index\":\"1\",\"color\":\"rgb(99, 171, 247)\",\"name\":\"priority\"}],\"collapsed\":false},{\"id\":\"9bc20ddaba86\",\"title\":\"项目控制\",\"parent\":\"root\",\"children\":[{\"id\":\"867d2fdfb0d2\",\"title\":\"<b>风险控制是一个持续的过程</b>\",\"parent\":\"9bc20ddaba86\",\"children\":[]},{\"id\":\"7367f0e7cd01\",\"title\":\"项目经理的工作\",\"children\":[{\"id\":\"6f69c69116f4\",\"title\":\"项目启动阶段\",\"parent\":\"7367f0e7cd01\",\"children\":[]},{\"id\":\"cb798a4ef97e\",\"title\":\"项目计划阶段\",\"children\":[],\"parent\":\"7367f0e7cd01\"},{\"id\":\"ce30fd435d83\",\"title\":\"项目执行阶段\",\"parent\":\"7367f0e7cd01\",\"children\":[]},{\"id\":\"45f7b3dc83c7\",\"title\":\"项目收尾阶段\",\"children\":[{\"id\":\"a2cf511b65da\",\"title\":\"验收\",\"parent\":\"45f7b3dc83c7\",\"children\":[]},{\"id\":\"5b827f354319\",\"title\":\"项目文档\",\"style\":{\"background-color\":\"#f384ae\"},\"parent\":\"45f7b3dc83c7\",\"children\":[]}],\"parent\":\"7367f0e7cd01\"},{\"id\":\"3afdaaf7105c\",\"title\":\"基于项目汇报的风险控制\",\"parent\":\"7367f0e7cd01\",\"children\":[]}],\"parent\":\"9bc20ddaba86\",\"collapsed\":false},{\"id\":\"9ebfb219886a\",\"title\":\"项目管理的规范化\",\"parent\":\"9bc20ddaba86\",\"children\":[{\"id\":\"c391ccb6f001\",\"title\":\"项目变更真的不可控？\",\"children\":[],\"parent\":\"9ebfb219886a\"},{\"id\":\"5e914cce6e88\",\"title\":\"项目成员的跨部门管理\",\"parent\":\"9ebfb219886a\",\"children\":[]},{\"id\":\"2a61e7cdb3be\",\"title\":\"项目中部门间的沟通\",\"parent\":\"9ebfb219886a\",\"children\":[]}]}],\"icons\":[{\"index\":\"2\",\"text\":\"&#xe62a\",\"color\":\"rgb(113, 203, 45)\",\"name\":\"priority\"}],\"collapsed\":false},{\"id\":\"7ed99fae5b05\",\"title\":\"节奏感\",\"free\":true,\"style\":{\"border-radius\":\"5px\",\"font-size\":16,\"border-style\":\"solid\",\"border-color\":\"#f384ae\",\"border-width\":\"1px\",\"font-weight\":\"bold\"},\"task\":{},\"parent\":\"root\",\"children\":[],\"icons\":[{\"text\":\"&#xe693\",\"index\":\"45\",\"color\":\"rgb(191, 30, 27)\",\"name\":\"\"}],\"pos\":{\"y\":10448,\"x\":10259}}],\"icons\":[{\"index\":\"48\",\"text\":\"&#xe693\",\"color\":\"rgb(191, 30, 27)\",\"name\":\"\"}],\"note\":\"1.内容以漫画的形式展现，配合简练的文字进行归纳与点题，提高了阅读的趣味性。\\n\\n2.适合职场新人和有一定工作经验的职场人士。\"}\n" +
            "        ";
        b(JSON.parse(def))
    }
    a(function(b) {
        mind = new mindDesigner("#mind_con",{
            chartId: chartId,
            readonly: true
        },JSON.stringify(b),themeDef);
        mind.util.clearSelect();
        initChartOperate();
        initCommentPost();
        warnUserClone()
    })
});
function initChartOperate() {
    h();
    $(window).on("resize.view", function() {
        h()
    });
    function h() {
        var j = $(window).height();
        $("#mind_con").height(j - 53)
    }
    $(".item[share]").on("click", function() {
        var j = $(".pop-con.share")
            , k = $(this);
        if (j.css("opacity") == 1) {
            j.css({
                opacity: 0,
                display: "none",
                right: -446
            });
            k.removeClass("active")
        } else {
            j.css({
                opacity: 1,
                display: "block",
                right: "2px"
            });
            k.addClass("active")
        }
    });
    $(".mind-view-left").css({
        width: $(".mind-view-left").innerWidth(),
        left: 0
    });
    $(".con-close").on("click", function() {
        var j = $(".pop-con");
        j.css({
            opacity: 0,
            display: "none",
            right: -446
        });
        $(".item[share]").removeClass("active")
    });
    $(".viewtitle .down").on("click", function() {
        var j = $(this);
        if ($(".chart-des").is(":visible")) {
            $(".chart-des").hide();
            j.html("&#xe617;");
            $(".chart-pubtime").hide()
        } else {
            j.html("&#xe68d;");
            $(".chart-des").show();
            $(".chart-pubtime").show()
        }
    });
    $("#movecenter").on("click", function() {
        mind.operation.moveToCenter.call(mind)
    });
    $("#userlike").on("click", function() {
        doLikeChart(this)
    });
    $("#userfav").on("click", function() {
        doFavourite()
    });
    $("#userReport").on("click", function() {
        $("#report-page").dialog();
        $("#btn_submit_report").enable().off().on("click", function() {
            var j = $("#report_content").val();
            if (!j) {
                Util.globalTopTip("举报信息不能为空", "top_error", 3000, $("#report-page"), true);
                return
            } else {
                if (j.length > 200) {
                    Util.globalTopTip("举报信息不能超过200个字符", "top_error", 3000, $("#report-page"), true);
                    return
                }
            }
            $(this).disable();
            Util.ajax({
                url: "/view/report",
                data: {
                    chartId: chartId,
                    content: j
                },
                success: function(k) {
                    Util.globalTopTip("您的举报信息已提交", null, 3000, $("#report-page"), true);
                    setTimeout(function() {
                        $("#report-page").dialog("close")
                    }, 3000)
                }
            })
        })
    });
    $(".controlls,.info-temp,.view-nav").on("mousedown", function(j) {
        j.stopPropagation()
    });
    var i = 1;
    $("#mind_con").bind("dragstart", function() {
        return false
    });
    $(document).on("dblclick", ".topic-box", function(k) {
        var j = $(this);
        j.children(".expand_box").trigger("click.expand")
    });
    var d = $("#mind_con")[0];
    var e = d.requestFullScreen || d.webkitRequestFullScreen || d.mozRequestFullScreen || d.msRequestFullScreen;
    if (e) {
        $("#mind_con").unbind("webkitfullscreenchange").bind("webkitfullscreenchange", function(j) {
            toogleFullDocument()
        });
        $(document).unbind("mozfullscreenchange").unbind("fullscreenchange").bind("mozfullscreenchange", function(j) {
            toogleFullDocument()
        }).bind("fullscreenchange", function(j) {
            toogleFullDocument()
        });
        $("#op_fullscreen").bind("click", function(j) {
            e.call(d)
        });
        $(window).bind("keydown", function(j) {
            if (j.keyCode == 122) {
                e.call(d);
                j.preventDefault()
            }
        })
    } else {
        $("#op_fullscreen").bind("click", function(j) {
            $.showTip("当前浏览器不支持全屏操作，请使用其他浏览器尝试", 2000);
            return
        });
        $(window).bind("keydown", function(j) {
            if (j.keyCode == 122) {
                return
            }
        })
    }
    $("#op_zoomin").bind("click", function() {
        mind.operation.zoomIn.call(mind, mind.designer)
    });
    $("#op_zoomout").bind("click", function() {
        mind.operation.zoomOut.call(mind, mind.designer)
    });
    var b = true;
    var c = false;
    $(".viewtitle .show-item").on("click", function() {
        if (b == false) {
            return
        }
        sliding("infoTemp");
        b = false;
        if (!c) {
            templates()
        }
        c = true;
        setTimeout(function() {
            b = true
        }, 500)
    });
    var g = false;
    $(".item[comment]").off().on("click", function() {
        if (b == false) {
            return
        }
        if (!$(this).hasClass("active") && $(".pop-con.share").css("opacity") == 1) {
            $(".share .con-close").trigger("click");
            $(".weixin-con").css("display", "none")
        } else {
            loadComments()
        }
        sliding("controlls");
        b = false;
        if (!g) {
            loadComments()
        }
        g = true;
        setTimeout(function() {
            b = true
        }, 500)
    });
    $(".info-temp .item-close").on("click", function() {
        $(".viewtitle .show-item").trigger("click")
    });
    $(".controlls .item-close").on("click", function() {
        $(".item[comment]").trigger("click")
    });
    var a = window.location.hash.substring(1);
    $(".viewdetail").on("click", ".item", function() {
        if ($(this).hasClass("active")) {
            return
        }
        if ($(this).hasClass("abstract")) {
            $(".outline-dlg").css("display", "block");
            loadOutline();
            window.location.hash = "outline"
        } else {
            if ($(this).hasClass("cont")) {
                $(".outline-dlg").css("display", "none");
                window.location.hash = "map"
            }
        }
        $(".nav-item.viewdetail .item").removeClass("active");
        $(this).addClass("active")
    });
    if (a == "outline") {
        $(".abstract").trigger("click")
    } else {
        if (a == "map" || a == "") {
            $(".cont").trigger("click")
        }
    }
    window.onresize = function() {
        if ($(".item[comment]").hasClass("active") && $(".info-temp").css("left") == "0px") {
            $(".mind-view-left").css("width", $("body").innerWidth() - 700)
        } else {
            if ($(".item[comment]").hasClass("active") || $(".info-temp").css("left") == "0px") {
                $(".mind-view-left").css("width", $("body").innerWidth() - 350)
            } else {
                $(".mind-view-left").css("width", "100%")
            }
        }
    }
    ;
    $("#comment").on("input", function() {
        if ($(this).html() == "") {
            $(this).html("<br/>")
        }
    });
    $(".mind-view-left,.textarea").on("click", function() {
        replyHide()
    });
    var f = false;
    $(document).off("mousedown.view1").on("mousedown.view1", function(k) {
        var j = k.pageX
            , l = k.pageY;
        $(document).on("mousemove.view1", function(m) {
            if (Math.abs(m.pageX - j) > 15 || Math.abs(m.pageY - l) > 15) {
                f = true
            }
        });
        $(document).on("mouseup.view1", function(m) {
            $(document).off("mousemove.view1");
            $(document).off("mouseup.view1");
            f = false
        })
    });
    $(document).off("mouseup.view").on("mouseup.view", ".topic-box:not(.free)", function(n) {
        if (f) {
            return
        }
        var m = $(this);
        var k = n.target.classList + "";
        if (k.indexOf("topic-link") >= 0) {
            return
        }
        if (k.indexOf("topic-box") >= 0 || k.indexOf("topic") >= 0) {
            var l = $(n.target);
            var o = l.attr("id") || l.parent().attr("id");
            var j = mind.model.getTopicById(o);
            if (o != "root" && !j.root) {
                mind.operation.focusTopic.call(mind, o)
            }
        }
    })
}
function replyHide() {
    $(".reply_box_ref").slideUp(200, function() {
        $(".reply_box_ref").remove()
    })
}
var comArr = [];
function sliding(b) {
    if (comArr.indexOf(b) == -1) {
        comArr.push(b)
    } else {
        comArr.remove(b)
    }
    var a = $(".mind-view-left").innerWidth();
    controllsTagger(b, a)
}
function controllsTagger(b, a) {
    if (b == "controlls") {
        if (comArr.indexOf("controlls") != -1) {
            $(".item[comment]").addClass("active");
            $(".mind-view-left").css("width", a - 350);
            $(".controlls").css("right", 0)
        } else {
            $(".item[comment]").removeClass("active");
            $(".mind-view-left").css("width", a + 350);
            $(".controlls").css("right", -350)
        }
    }
    if (b == "infoTemp") {
        if (comArr.indexOf("infoTemp") != -1) {
            setTimeout(function() {
                $(".info-temp").css("left", 0);
                $(".mind-view-left").css({
                    left: 350,
                    width: a - 350
                })
            }, 0)
        } else {
            $(".info-temp").css("left", -350);
            $(".mind-view-left,.outline-dlg").css({
                left: 0,
                width: a + 350
            })
        }
        $(".outline-dlg,.mind-container").css("width", "100%")
    }
    setTimeout(function() {
        $("#movecenter").trigger("click")
    }, 300)
}
function templates() {
    var a = [];
    Util.ajax({
        url: "/special/query",
        data: {
            page: 1,
            sidx: "order",
            sord: "asc"
        },
        success: function(b) {
            a = b.rows;
            if (a.length > 0) {
                specials(a)
            }
        }
    })
}
function specials(b) {
    var a = [];
    Util.ajax({
        url: "/special/chart_view?chartId=" + chartId,
        data: {},
        success: function(g) {
            if (!g.id) {
                a = '<div class="special-empty"><div class="empty-text">该模版暂未收入任何专题</div><a class="special-link" href="/diagrams/new#temp-template">去专题页看看</a></div>';
                $(".special-conent").html(a)
            } else {
                for (var d = 0; d < b.length; d++) {
                    var k = b[d].specialId;
                    for (var c = 0; c < g.id.length; c++) {
                        if (k == g.id[c]) {
                            var f = b[d];
                            var h = f.viewCount;
                            if (h - 0 > 1000) {
                                h = (h / 1000).toFixed(1) + "k"
                            }
                            a.push('<a href="/diagrams/new#temp-template?id=' + f.specialId + '"><div class="wrapper-banner-item"><div class="wrapper-item-img new_Hash" data-id = "' + f.specialId + '" data-allowPublish = "' + f.allowPublish + '" data-url="temp-template" ><img data-src= "' + f.banner + '" src="' + imagePath + "/file/response/" + f.thumbnail + '/special_image" alt="图片加载失败" /> <div class="wrapper-item-mask"><span class="mask-img"></span></div><div class="item-mask-text"><span class="icons">&#xe68c;</span><span>' + h + "</span></div></div></div></a>")
                        }
                    }
                }
                $(".special-conent").html(a.join(""))
            }
        }
    })
}
var isFullScreen = false;
function toogleFullDocument(b) {
    isFullScreen = !isFullScreen;
    if (isFullScreen) {
        fullDocument()
    } else {
        exitFullDocument()
    }
    var a = $("#op_fullscreen").parent();
    if (isFullScreen) {
        if (typeof b != "undefined") {
            a.show()
        } else {
            a.hide()
        }
    } else {
        a.show()
    }
}
function fullDocument() {
    $("#mind_con").addClass("full_document");
    $("#mind_con").css({
        height: window.screen.height
    });
    $("body").addClass("overhidden");
    $(".ico_fullscreen").addClass("exit");
    mind.operation.moveToCenter.call(mind)
}
function exitFullDocument() {
    $("#mind_con").removeClass("full_document");
    $("#mind_con").css({
        height: $(window).height() - 53
    });
    $("body").removeClass("overhidden");
    $(".ico_fullscreen").removeClass("exit");
    mind.operation.moveToCenter.call(mind)
}
var chartCloning = false;
function newCreateConfirm(a) {
    if (chartCloning) {
        return
    }
    chartCloning = true;
    Util.loadingball({});
    Util.ajax({
        url: "/diagraming/clone_check",
        data: {
            chartId: a,
            teamId: cteamId,
            orgId: corgId
        },
        success: function(b) {
            Util.loadingball({
                close: true
            });
            if (b.result == "clone") {
                location = "/diagraming/new?template=" + a + "&category=mind&team=" + cteamId + "&org=" + corgId;
                return
            }
            chartCloning = false;
            if (b.result == "cloneBuy") {
                Util.payWindow("open", {
                    chartId: a,
                    price: b.price
                }, function() {});
                return
            }
            if (b.result == "overd") {
                Util.globalTopTip("您的文件数量不足，无法克隆,您可以去 <a href='/upgrade' target='_blank'>升级账号</a>", "top_error", 5000);
                return
            }
            Util.globalTopTip("操作有误，请稍后再试", "top_error", 5000)
        }
    })
}
function initCommentPost() {
    $("#comment").bind("keydown", function(a) {
        if (a.ctrlKey && a.keyCode == 13) {
            submitComment()
        }
    }).streamInput({
        face: $("#showFaces")
    });
    $("#btn-comment").off().on("click", function(a) {
        if ($(this).attr("disabled")) {
            return
        }
        submitComment();
        a.stopPropagation()
    })
}
function submitComment(d, c, f, e) {
    var a = $("#comment").clone();
    if (d != null) {
        a = d
    }
    var b = a.html().replace(/<img(\s|\S)+?src=\"/g, ":lt: class=ico-face src=").replace(/\">/g, ":gt:").trim();
    b = Util.filterXss(b);
    if (b == "&lt;br&gt;" || b == "") {
        return
    } else {
        $("#btn-comment").attr("disabled", "disabled");
        Util.ajax({
            url: "/view/submitcomment",
            data: {
                chartId: chartId,
                content: b,
                ownerId: ownerId,
                refId: c,
                parentId: f
            },
            success: function(i) {
                if (i.result == "error_text") {
                    Util.globalTopTip("描述或标签中存在敏感词汇，请修改后再发布", "top_error", 3000, $(".controlls"), true);
                    return
                }
                var g = $("#comment_count")
                    , h = parseInt(g.text()) + 1;
                g.text(h);
                $("#comment-count").text(numberHandle(h));
                if (f) {
                    var j = $(".reply_list li[data-id=" + f + "]");
                    j.find(".replies").append(i)
                } else {
                    $(".reply_list").append(i);
                    $(".repler-right").scrollTop(9999)
                }
                $("#btn-comment").removeAttr("disabled");
                $("#comment").html("<br/>");
                checkCommentCount();
                a.remove();
                if (e != null) {
                    e()
                }
            }
        })
    }
}
function commentRef(b, a, e) {
    var d = $(b).parent().next(".reply_box_ref");
    $(".reply_box_ref").not(d).remove();
    if (d.length == 0) {
        d = $("<div class='reply_box_ref'><div class='white_line'></div>回复此评论：<div class='txt text-input' contentEditable='true' spellcheck='false' id='reply-input' accesskey='q' style='min-height:20px;line-height:22px;padding:0 5px'></div><span  class='button' >发表评论</span><span id='showfaces-reply' class='icons'>&#xe70e;</span></div>");
        $(b).parent().after(d);
        function c() {
            var f = d.children(".txt");
            submitComment(f, a, e, function() {
                d.remove()
            })
        }
        d.children(".txt").bind("keydown", function(f) {
            if (f.ctrlKey && f.keyCode == 13) {
                submitComment()
            }
        }).streamInput({
            face: $("#showfaces-reply")
        });
        d.children(".button").on("click", function() {
            c()
        })
    }
    $(".reply_box_ref").slideUp(200);
    if (d.is(":visible")) {
        d.slideUp(200, function() {
            $(".reply_box_ref").remove()
        })
    } else {
        d.slideDown(200);
        d.find(".txt").focus()
    }
}
function openDeldia(d, b, c) {
    var a = $("#stream_delete_confirm");
    if (a.length == 0) {
        a = $("<div id='stream_delete_confirm' class='alert'>确认删除此条评论吗？<div class='stream_delete_btns'><span class='button ok'>确定</span>&nbsp;&nbsp;&nbsp;<span class='cancel'>取消</span><div></div>").appendTo("body")
    }
    a.popMenu({
        target: $(c),
        position: "center",
        zindex: 19
    });
    a.find(".cancel").off().on("mousedown", function() {
        a.popMenu("close")
    });
    a.find(".ok").off().on("mousedown", function(f) {
        Util.ajax({
            url: "/view/delComments",
            data: {
                refId: b,
                chartId: chartId,
                parentId: d
            },
            success: function(h) {
                var e = "";
                if ($(c).parents("div").hasClass("reply_list-item")) {
                    e = 1;
                    $(c).parents(".reply_list-item").remove()
                } else {
                    e = $(c).parents("li").find("li").length + $(c).parents("li").find(".reply_list-item").length + 1;
                    $(c).parents("li").remove()
                }
                var i = $("#comment_count")
                    , g = Number(i.text()) - e;
                i.text(g);
                $("#comment-count").text(numberHandle(g));
                checkCommentCount()
            }
        });
        a.popMenu("close")
    })
}
function showFaces(c, b) {
    var a = $("#faces_dialog")
        , d = b || $("#comment");
    if (a.length > 0) {
        a.popMenu({
            target: c,
            position: "right",
            zindex: 19
        });
        return
    }
    var a = $('<div id="faces_dialog" class="faces-lib"><ul><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><div class="clear"></div></ul></div>');
    a.appendTo("body");
    a.popMenu({
        target: c,
        position: "right"
    });
    a.find("li").on("mousedown", function(h) {
        h.stopPropagation();
        var g = $(this).index();
        var f = "<img class='ico-face' src='/assets/images/faces/faces/" + (g + 1) + ".gif' />";
        d.append(f);
        a.popMenu("close")
    })
}
var currentSkip = -15;
function loadComments() {
    currentSkip += 15;
    Util.ajax({
        url: "/view/loadcomments",
        data: {
            chartId: chartId,
            skip: currentSkip,
            ownerId: ownerId
        },
        success: function(c) {
            $(".reply_list").append(c);
            var e = $(".item[comment] .item-count").text();
            var b = $(".reply_list").find("li").length + $(".reply_list-item").length;
            if (currentSkip >= 15) {
                var a = $(".repler-right").scrollTop();
                var d = setInterval(function() {
                    a += 150;
                    if (a >= $(".repler-right").scrollTop() + $(".repler-right").innerHeight()) {
                        clearInterval(d)
                    }
                    $(".repler-right").scrollTop(a)
                }, 40)
            }
            if (b >= 15) {
                $(".load_more").show()
            }
            if ($.trim(c) == "" || e == b) {
                $(".load_more").hide()
            }
            checkCommentCount()
        }
    })
}
function checkCommentCount() {
    var b = $(".reply_list");
    if ($.trim(b.text()) == "") {
        var a = "<div class='empty-tip'><div class='empty-img' style='margin-bottom:20px;'><img src='/assets/images/empty.png'></img></div><span class='tip-text'>评论区还是空的</span><span id='none-tip' style='display:block;color:#ADADAD;margin-top:10px;'>快来抢占沙发吧~</span></div>";
        b.html(a)
    } else {
        $(".empty-tip").remove()
    }
}
function doFavourite() {
    var a = $("#userfav");
    a.disable();
    if (a.hasClass("active")) {
        a.numberTip({
            val: "-1"
        })
    } else {
        a.numberTip()
    }
    Util.ajax({
        url: "/view/favouriteChart",
        data: {
            chartId: chartId
        },
        success: function(d) {
            a.enable();
            var e = a.find(".item-count")
                , c = Number(e.text());
            if (d.result == "save") {
                if (c < 1000) {
                    e.text(c + 1)
                }
                a.attr("class", "item active");
                $(a).find(".ico_box .icons").html("&#xe6d4;")
            } else {
                if (c < 1000) {
                    var b = c - 1;
                    e.text(b < 0 ? 0 : b)
                }
                a.attr("class", "item");
                $(a).find(".ico_box .icons").html("&#xe68a;")
            }
        }
    })
}
function doLikeChart() {
    var a = $("#userlike");
    a.disable();
    if (a.hasClass("active")) {
        a.numberTip({
            val: "-1"
        })
    } else {
        a.numberTip()
    }
    Util.ajax({
        url: "/view/dolike",
        data: {
            chartId: chartId
        },
        success: function(b) {
            a.enable();
            if (b.result) {
                a.attr("class", "item active");
                $(a).find(".ico_box .icons").html("&#xe6d5;")
            } else {
                a.attr("class", "item");
                $(a).find(".ico_box .icons").html("&#xe6d1;")
            }
            a.find(".item-count").text(numberHandle(b.count))
        }
    })
}
function showWeixin(g) {
    var f = $(g).offset().left;
    var e = $(g).offset().top;
    var c = window.location.href;
    var a = $("#pageurl_div");
    if (a.length > 0) {
        a.show();
        return
    }
    var d = $('<div id="pageurl_div" class="weixin-con"><img id="pageurl" src=""/><div>微信扫一扫 分享</div></div>');
    d.appendTo("body");
    var b = "https://api.qrserver.com/v1/create-qr-code/?data=" + c + "&show_wechat_share_tip=true&size=180x180";
    $("#pageurl").attr("src", b);
    $("#pageurl_div").css({
        right: "220px",
        top: "60px"
    }).show();
    $(document).on("mousedown", function() {
        $("#pageurl_div").hide()
    })
}
function warnUserClone() {
    var b = Util.getUrlParams("fromnew");
    if (!b == 0) {
        var c = $(".item-clone-opt")
            , a = c.length;
        if (a > 0) {
            $(".new-clone-tip").fadeIn();
            window.setTimeout(function() {
                $(".new-clone-tip").fadeOut()
            }, 5000)
        }
    } else {
        $(".new-clone-tip").hide()
    }
}
;
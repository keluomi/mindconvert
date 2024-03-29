function loadOutline() {
    var e = {
        target: "outline-container",
        line: {
            show: !0
        },
        readOnly: !0,
        indent: "wider"
    }
        , t = mind.model.topic;
    Outline.init(e, t)
}
var Outline = {
    init: function(e, t, n) {
        var o = {
            listType: "dot",
            indent: "default",
            target: "outline-con",
            line: {
                show: !1
            }
        };
        this.opts = $.extend(o, e),
            this.designer = document.getElementById(e.target),
            null != t ? this.controller.renderAll() : this.controller.add(),
            this.controller.initEvent()
    },
    initNodeEvent: function(e) {
        var t = document
            , n = e.querySelector(".node-self");
        n.addEventListener("mouseenter", function(e) {
            Outline.controller.posNodeBg(n, "hover"),
                e.stopPropagation()
        }),
            n.addEventListener("mouseleave", function(e) {
                t.querySelector(".outline-hover-bg");
                e.stopPropagation()
            }),
            n.addEventListener("mousedown", function(t) {
                var n = e.getAttribute("id").replace("ol_", "");
                mind.util.selectById.call(mind, n),
                    t.stopPropagation()
            }),
            $("#ol_root").off().on("click", function() {
                mind.util.selectById.call(mind, "root")
            }),
            this.opts.readOnly
    },
    controller: {
        setTitle: function(e) {
            $(Outline.designer).prev().html(e).attr("id", "ol_root")
        },
        renderAll: function(e) {
            var t = mind.model.topic
                , n = Outline.designer;
            if (e)
                return document.querySelector("#ol_" + e.id).innerHTML = "",
                    this.add(null, e),
                    void ((o = e.children) && !e.collapsed && this.renderChild(o));
            var o = t.children || []
                , r = t.leftChildren || [];
            this.setTitle(t.title),
                n.innerHTML = "";
            var l = o.concat(r);
            0 != l.length && this.renderChild(l, n)
        },
        renderChild: function(e, t) {
            for (var n = 0, o = e.length; n < o; n++) {
                var r = e[n];
                if (this.add(null, r, t),
                r.children.length > 0 && (void 0 == r.collapsed || !r.collapsed)) {
                    var l = r.children;
                    this.renderChild(l)
                }
            }
        },
        add: function(e, t, n) {
            var o = document
                , r = Outline.opts
                , l = (Outline.model,
                t ? t.id : util.newId())
                , i = null
                , d = o.querySelector("#ol_" + l);
            d ? i = d : (i = o.createElement("div"),
                "wider" == r.indent ? i.setAttribute("class", "node-element wider") : i.setAttribute("class", "node-element"),
                i.setAttribute("id", "ol_" + l),
            null != t && (null == n && (n = o.getElementById("ol_" + t.parent).querySelector(".node-children")),
                n.appendChild(i)));
            var c = o.createElement("div");
            c.setAttribute("class", "node-self"),
                i.appendChild(c);
            var s = o.createElement("span");
            c.appendChild(s);
            var a = o.createElement("span");
            s.appendChild(a);
            var u = o.createElement("div");
            u.setAttribute("class", "node-title"),
            r.readOnly || u.setAttribute("contenteditable", !0),
                u.setAttribute("spellcheck", "false"),
                u.setAttribute("autocapitalize", "off");
            var h = t ? t.title : "";
            u.innerHTML = h.replace("<br>", " "),
                c.appendChild(u);
            var p = o.createElement("div")
                , v = "node-children";
            r.line.show && (v += " line"),
            r.line.dashed && (v += " dashed"),
                p.setAttribute("class", v),
                i.appendChild(p),
                "num" == r.listType ? s.setAttribute("class", "node-type num") : s.setAttribute("class", "node-type dot"),
                null != t ? this.addStateIcon(t, i) : u.focus(),
                Outline.initNodeEvent(i)
        },
        addStateIcon: function(e, t) {
            var n = document
                , o = t.querySelector(".node-state")
                , r = t.querySelector(".node-self");
            if (e.children.length > 0 && null == o) {
                (o = n.createElement("div")).setAttribute("class", "node-state");
                var l = n.createElement("span");
                e.collapsed ? l.setAttribute("class", "collapse-icon closeIcon") : l.setAttribute("class", "collapse-icon openIcon"),
                    o.appendChild(l),
                    r.appendChild(o)
            }
        },
        selectNodeById: function(e) {
            var t = document.querySelector("#ol_" + e)
                , n = null;
            n = "root" == e ? t : t.querySelector(".node-self"),
                this.selectNode(n)
        },
        updateNodeById: function(e) {
            var t = e.id
                , n = e.insertChild;
            if ("root" != t) {
                if (n || "current" == e.rebuild) {
                    var o = document.querySelector("#ol_" + t)
                        , r = this.getNodeById(t);
                    return (i = o.querySelector(".node-children")) && (i.innerHTML = ""),
                        void this.renderAll(r)
                }
                var l = this.getParentNodeById(t);
                if ("root" != l.id) {
                    var i = (o = document.querySelector("#ol_" + l.id)).querySelector(".node-children");
                    i && (i.innerHTML = ""),
                        this.renderAll(l)
                } else
                    this.renderAll()
            } else
                this.renderAll()
        },
        foldNodeById: function(e) {
            var t = e.type
                , n = e.id;
            "show" != t ? this.closeChildren("ol_" + n) : this.openChildren("ol_" + n)
        },
        nodePosUpdate: function(e) {
            var t = e.id
                , n = e.target;
            if ("root" == n)
                this.renderAll();
            else {
                var o = document.querySelector("#ol_" + n)
                    , r = this.getNodeById(n)
                    , l = o.querySelector(".node-children");
                l && (l.innerHTML = ""),
                    this.renderChild(r.children)
            }
            if (t != n)
                if ("root" == t)
                    this.renderAll();
                else {
                    var i = this.getNodeById(t)
                        , d = document.querySelector("#ol_" + t).querySelector(".node-children");
                    d && (d.innerHTML = ""),
                        this.renderChild(i.children)
                }
        },
        openChildren: function(e) {
            var t = this.getNodeById(e.replace("ol_", ""))
                , n = document.querySelector("#" + e)
                , o = n.querySelector(".node-children");
            o && (o.innerHTML = ""),
                this.renderChild(t.children),
                $(o).show();
            var r = n.querySelector(".collapse-icon");
            r && (r.classList.remove("closeIcon"),
                r.classList.remove("openIcon"),
                r.classList.add("openIcon"))
        },
        closeChildren: function(e) {
            var t = document.getElementById(e)
                , n = t.querySelector(".node-children");
            $(n).hide();
            var o = t.querySelector(".collapse-icon");
            o && (o.classList.remove("openIcon"),
                o.classList.remove("closeIcon"),
                o.classList.add("closeIcon"))
        },
        selectNode: function(e) {
            this.posNodeBg(e, "current")
        },
        posNodeBg: function(e, t) {
            "hover" == t && document.querySelector(".outline-hover-bg"),
            "current" == t && document.querySelector(".outline-curt-bg");
            e.getBoundingClientRect()
        },
        getNodeById: function(e) {
            return mind.model.getTopicById(e)
        },
        getParentNodeById: function(e) {
            e = e.replace("ol_", "");
            var t = mind.model.getTopicById(e);
            return mind.model.getTopicById(t.parent)
        },
        initEvent: function() {
            var e = this;
            $(document).on("click", ".node-state", function(t) {
                var n = $(this)
                    , o = n.parent().parent().attr("id")
                    , r = $(n.children()[0]);
                r.hasClass("openIcon") ? (e.closeChildren(o),
                    r.removeClass("openIcon").addClass("closeIcon")) : (e.openChildren(o),
                    r.removeClass("closeIcon").addClass("openIcon")),
                    t.stopPropagation()
            })
        }
    },
    util: {
        newId: function() {
            function e() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            }
            return e() + "" + e() + e() + e()
        },
        copy: function(e) {
            return $.extend({}, e)
        },
        getElementIndex: function(e) {
            return $(e).index()
        },
        getCurrentDate: function() {
            var e = new Date
                , t = []
                , n = [];
            return t.push(e.getFullYear()),
                t.push(e.getMonth() + 1),
                t.push(e.getDate()),
                n.push(e.getHours()),
                n.push(e.getMinutes()),
                n.push(e.getSeconds()),
            t.join("-") + " " + n.join(":")
        },
        moveToEnd: function(e) {
            document.getElementById(e).setSelectionRange(1, 1)
        },
        removeAttribute: function(e, t) {
            if (e && t)
                for (var n = 0, o = e.length; n < o; n++)
                    e[n].removeAttribute(t)
        },
        setCursorPosition: function(e, t) {
            var n = document.getElementById("ol_" + e);
            if (null != n) {
                var o = n.querySelector(".node-title");
                null == t && (t = o.innerText.length);
                var r = o.childNodes[0];
                if (null != r) {
                    var l = document.createRange()
                        , i = window.getSelection();
                    l.setStart(r, t),
                        l.setEnd(r, t),
                        l.collapse(!0),
                        i.removeAllRanges(),
                        i.addRange(l),
                        o.focus()
                } else
                    o.focus()
            }
        }
    }
};

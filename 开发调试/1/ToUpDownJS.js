function(t) {
    $("#blog-news").prepend('<div id="rightMenu"> <div id="rtaDirectory" class="rightMenuItem" style="display:none"> <span class="rightMenuSpan rtaDirectorySpan"> 文章目录 </span> <i banmv class="iconfont icon-mulu"></i> </div> <div id="rightMenuHome" class="rightMenuItem" style="display:none" clickflg="true"> <span class="rightMenuSpan"> 访问主页 </span> <i class="iconfont icon-home"></i> </div> <span class="hideRightMenu"> <div id="rightDiggit" class="rightMenuItem" clickflg="false" style="display:none"> <span class="rightMenuSpan rightDiggitSpan"></span> <i class="iconfont icon-zan1"></i> </div> <div id="rightBuryit" class="rightMenuItem" clickflg="false" style="display:none"> <span class="rightMenuSpan rightBuryitSpan"></span> <i class="iconfont icon-buzan"></i> </div> <div id="rightDashang" class="rightMenuItem" clickflg="false" style="display:none"> <span class="rightMenuSpan rightDanshanSpan"> <div class="ds-pay"> <div class="ds-alipay" style="display:none"> <img \\> <span>Alipay</span> </div> <div class="ds-wecat" style="display:none"> <img \\> <span>WeChat</span> </div> </div> </span> <i class="iconfont icon-dashang2"></i> </div> <div id="rightGzh" class="rightMenuItem" clickflg="false" style="display:none"> <span class="rightMenuSpan rightGzhSpan"> <div class="ds-pay"> <div class="ds-gzh"> <img/><span>qrCode</span> </div> </div> </span> <i class="iconfont icon-erweima4"></i> </div> <div id="attention" class="rightMenuItem" clickflg="true"> <span class="rightMenuSpan attentionSpan"> 已关注 </span> <i class="iconfont icon-dianzan1"></i> </div> </span> <div id="rightMenuSite" class="rightMenuItem" clickflg="true"> <span class="rightMenuSpan"> 点击开启 </span> <i banmv class="iconfont icon-shezhi3"></i> </div> <div id="toUpDown" class="rightMenuItem" data="up"> <span class="rightMenuSpan toUpDownSpan"> 返回顶部 </span> <div id="toUpDownI"> <i banmv class="iconfont icon-zhiding"></i> </div> </div> </div>');
    const i = $("#rightMenu");
    i.find("i").on({
        mouseover: function () {
            void 0 === $(this).attr("banmv") && $(this).rotate({
                animateTo: -60,
                duration: 250,
                callback: function () {
                    $(this).rotate({
                        animateTo: 60,
                        duration: 250,
                        callback: function () {
                            $(this).rotate({
                                animateTo: -30,
                                duration: 150,
                                callback: function () {
                                    $(this).rotate({
                                        animateTo: 30,
                                        duration: 150,
                                        callback: function () {
                                            $(this).rotate({
                                                animateTo: 0,
                                                duration: 100
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    }),
        i.find(".rightMenuItem").on({
            mouseover: function () {
                $(this).find(".rightMenuSpan").stop().fadeIn(300)
            },
            mouseout: function () {
                $(this).find(".rightMenuSpan").stop().fadeOut(300)
            }
        }),
        $("#toUpDown").click((function () {
            if ("down" === $(this).attr("data")) {
                let i;
                i = t.__config.rtMenu.downScrollDom && $(t.__config.rtMenu.downScrollDom).length > 0 ? $(t.__config.rtMenu.downScrollDom).offset().top + 10 : $(document).height() - $(window).height(),
                    t.__tools.actScroll(i, 900)
            } else
                t.__tools.actScroll(0, 900)
        }
        )),
        t.__event.scroll.handle.push((() => {
            let i = $("#toUpDown")
                , e = $("#toUpDownI")
                , o = $(".toUpDownSpan");
            t.__event.scroll.docScroll = $(document).scrollTop(),
                t.__event.scroll.homeScroll = $("#home").offset().top - 40,
                t.__event.scroll.homeScroll <= t.__event.scroll.docScroll ? (e.rotate({
                    animateTo: 0
                }),
                    i.attr("data", "up"),
                    o.text("返回顶部")) : (e.rotate({
                        animateTo: -180
                    }),
                        i.attr("data", "down"),
                        o.text("跳至底部"))
        }
        )),
        (() => {
            let t = 0;
            setInterval((function () {
                t += 7,
                    $("#rightMenuSite i").rotate(t)
            }
            ), 30),
                $("#rightMenuSite").click((function () {
                    "true" === $(this).attr("clickflg") ? ($("#rightMenuSite .rightMenuSpan").text("点击关闭"),
                        $(this).attr("clickflg", "false")) : ($("#rightMenuSite .rightMenuSpan").text("点击开启"),
                            $(this).attr("clickflg", "true")),
                        $("#rightMenu .hideRightMenu").slideToggle(350)
                }
                ))
        }
        )(),
        t.__timeIds.followTId = window.setInterval((() => {
            let i = $("#p_b_follow");
            if (i.length > 0) {
                let e = "" !== i.text() ? $("#p_b_follow a").attr("onclick") : "";
                if (e && !!e.indexOf("unfollow") > 0) {
                    let t = $("#attention");
                    t.attr("onclick", e.replace("unfollow", "follow")).attr("clickflg", "false"),
                        t.find(".rightMenuSpan").text("关注"),
                        t.find("i").removeClass("icon-dianzan1").addClass("icon-dianzan")
                }
                t.__tools.clearIntervalTimeId(t.__timeIds.followTId)
            }
        }
        ), 1e3),
        t.__config.rtMenu.qrCode && $("#rightGzh").show().find(".ds-gzh img").attr("src", t.__config.rtMenu.qrCode),
        (t.__config.rtMenu.reward.alipay || t.__config.rtMenu.reward.wechatpay) && ($("#rightDashang").show(),
            t.__config.rtMenu.reward.alipay && $("#rightDashang .ds-alipay").show().find("img").attr("src", t.__config.rtMenu.reward.alipay),
            t.__config.rtMenu.reward.wechatpay && $("#rightDashang .ds-wecat").show().find("img").attr("src", t.__config.rtMenu.reward.wechatpay)),
        (() => {
            function i(t, i, e) {
                "false" === t.attr("clickflg") && (t.attr("clickflg", "true"),
                    i.text("提交中."),
                    setTimeout((() => {
                        i.text("提交中..")
                    }
                    ), 300),
                    setTimeout((() => {
                        i.text("提交中...")
                    }
                    ), 600),
                    setTimeout((() => {
                        i.text("更新中.")
                    }
                    ), 900),
                    setTimeout((() => {
                        i.text("更新中..")
                    }
                    ), 1200),
                    setTimeout((() => {
                        i.text("更新中...")
                    }
                    ), 1500),
                    setTimeout((() => {
                        i.text(e),
                            t.attr("clickflg", "false")
                    }
                    ), 1800))
            }
            t.__timeIds.diggitTId = window.setInterval((() => {
                let e = $(".diggit");
                if (e.length > 0) {
                    e.prepend('<i class="iconfont icon-zan1"></i>');
                    let o = $("#rightDiggit")
                        , n = o.find(".rightMenuSpan");
                    o.attr("onclick", e.attr("onclick")),
                        n.text($("#digg_count").text()),
                        o.show().click((function () {
                            i($(this), n, $("#digg_count").text())
                        }
                        )),
                        t.__tools.clearIntervalTimeId(t.__timeIds.diggitTId)
                }
            }
            ), 1e3),
                t.__timeIds.buryitTId = window.setInterval((() => {
                    let e = $(".buryit");
                    if (e.length > 0) {
                        e.prepend('<i class="iconfont icon-buzan"></i>');
                        let o = $("#rightBuryit")
                            , n = o.find(".rightMenuSpan");
                        o.attr("onclick", e.attr("onclick")),
                            n.text($("#bury_count").text()),
                            o.show().click((function () {
                                i($(this), n, $("#bury_count").text())
                            }
                            )),
                            t.__tools.clearIntervalTimeId(t.__timeIds.buryitTId)
                    }
                }
                ), 1e3)
        }
        )(),
        (() => {
            if ("home" !== t.__status.pageType) {
                let t = $("#rtaDirectory");
                t.show(),
                    t.click((function () {
                        let t = $("#articleDirectory");
                        t.length && (t.is(":hidden") ? t.fadeIn(300) : t.fadeOut(300))
                    }
                    ))
            }
        }
        )(),
        (() => {
            if ("home" !== t.__status.pageType) {
                let i = $("#rightMenuHome");
                i.show(),
                    i.click((function () {
                        window.location.href = t.__status.homeUrl
                    }
                    ))
            }
        }
        )()
} (t)
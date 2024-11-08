(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    54: function(e, t, n) {
        e.exports = n.p + "images/svg/unmiss-sound-button-muted-e74d67a0c85c3548f07d7564782a269c.svg"
    },
    60: function(e, t, n) {
        e.exports = n.p + "images/png/vv-soundoff-2x-cada8dcd42784b4d172eb8b6bd28e9c3.png"
    },
    61: function(e, t, n) {
        e.exports = n.p + "images/png/vv-soundon-2x-c5298244f1d7e90497f7eac6b33f56e2.png"
    },
    64: function(e, t, n) {
        e.exports = n.p + "images/svg/unmiss-close-button-dc13fd35130ef93fcd271ef2cd1f1739.svg"
    },
    65: function(e, t, n) {
        e.exports = n.p + "images/svg/unmiss-sound-button-unmuted-6218a79835f5e0b587f6da135b41b5da.svg"
    },
    66: function(e, t, n) {
        e.exports = n.p + "images/png/in-art-close-icon-128x128-16481b937f87b244a645cdbef0d930f8.png"
    },
    67: function(e, t, n) {
        e.exports = n.p + "images/png/in-art-soundon-icon-128x128-e5ac702b1980b321f96db67540a21dcf.png"
    },
    72: function(e, t, n) {
        e.exports = {
            replaceMacros: n(73)
        }
    },
    73: function(e, t) {
        e.exports = function(e, t) {
            return Object.keys(e).reduce(function(t, n) {
                return t.replace(new RegExp("%%".concat(n, "%%"),"g"), e[n])
            }, t)
        }
    },
    74: function(e) {
        e.exports = {
            231999: !0,
            237200: !0,
            237249: !0,
            237250: !0,
            237251: !0,
            237252: !0,
            237253: !0,
            237254: !0,
            237255: !0,
            237256: !0,
            237257: !0,
            237258: !0,
            237259: !0,
            237260: !0,
            237261: !0,
            247120: !0,
            247121: !0,
            247122: !0,
            247123: !0,
            247124: !0,
            247125: !0,
            247126: !0,
            247127: !0,
            247128: !0,
            247129: !0,
            247130: !0,
            247131: !0,
            247132: !0,
            247133: !0,
            247134: !0,
            247135: !0,
            247136: !0,
            247137: !0,
            247139: !0,
            247140: !0,
            247141: !0,
            247142: !0,
            247143: !0,
            247144: !0,
            247145: !0,
            247146: !0,
            247147: !0,
            247148: !0,
            247149: !0,
            247150: !0,
            247151: !0,
            248533: !0,
            248534: !0,
            248535: !0,
            248536: !0,
            248537: !0,
            248538: !0,
            248539: !0,
            248540: !0,
            248541: !0,
            248542: !0,
            248543: !0,
            248544: !0,
            248545: !0,
            248546: !0,
            248547: !0,
            248548: !0,
            248553: !0,
            248554: !0,
            248555: !0,
            248556: !0,
            252010: !0,
            252011: !0,
            252012: !0,
            252013: !0,
            252014: !0,
            252015: !0,
            252019: !0,
            252020: !0,
            252021: !0,
            252022: !0,
            257216: !0,
            257217: !0,
            257218: !0,
            257219: !0,
            257220: !0,
            257221: !0,
            260340: !0,
            260341: !0,
            260342: !0,
            260343: !0,
            260344: !0,
            260345: !0,
            260346: !0,
            260347: !0,
            260348: !0,
            260767: !0,
            260768: !0,
            260775: !0,
            260776: !0,
            260777: !0
        }
    },
    80: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(10)
          , r = n(45)
          , o = n.n(r)
          , a = n(46)
          , d = n.n(a)
          , u = n(2)
          , c = n.n(u)
          , l = n(3)
          , s = n(0)
          , v = n(50)
          , p = n(7)
          , h = n.n(p)
          , f = n(37)
          , g = ["onAdLoaded", "onAdDismissed"];
        function m() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.a;
            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g).reduce(function(t, n) {
                var i = e(n);
                return i ? Object.assign(t, h()({}, n, i)) : t
            }, {})
        }
        var y = n(8)
          , E = n(32)
          , A = function(e) {
            return new Promise(function(t) {
                e.addEventListener("scroll", function n() {
                    e.removeEventListener("scroll", n);
                    t()
                })
            }
            )
        }
          , b = n(24)
          , k = n(12)
          , C = {
            create: function(e) {
                return Object(k.a)(e)
            }
        }
          , w = n(9)
          , T = n.n(w);
        function I(e) {
            try {
                return e && "object" === T()(e) ? JSON.stringify(e) : e
            } catch (e) {}
            return e
        }
        var S = n(1)
          , P = n(13)
          , x = function(e) {
            return "string" == typeof e
        }
          , _ = function(e) {
            if (!e)
                return !1;
            var t = e.type
              , n = e.delivery
              , i = e.url;
            return "video/mp4" === t && "progressive" === n && x(i)
        }
          , R = function(e) {
            if (!e)
                return !1;
            var t = e.type
              , n = e.url;
            return "application/javascript" === t && function(e) {
                return "VPAID" === e.apiFramework
            }(e) && x(n)
        }
          , L = function(e, t) {
            return e.bitrate > t.bitrate || void 0 === e.bitrate ? 1 : e.bitrate < t.bitrate || void 0 === t.bitrate ? -1 : 0
        }
          , D = function(e) {
            return e ? e.filter(_).sort(L)[0] : void 0
        }
          , O = function(e) {
            return e ? e.filter(R)[0] : void 0
        }
          , M = function(e) {
            if (!e)
                return 16 / 9;
            var t = parseInt(e.width, 10)
              , n = parseInt(e.height, 10);
            return t && n ? t / n : 16 / 9
        }
          , V = n(15)
          , N = n(11)
          , U = n(48)
          , B = n.n(U)
          , F = n(47)
          , W = n.n(F)
          , z = n(49)
          , H = n.n(z)
          , j = n(4)
          , K = function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j.b)();
            return e && "string" == typeof e.disclosureMessage ? e.disclosureMessage : "ADVERTISEMENT"
        }
          , q = n(33)
          , Q = n(31);
        function Z(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.a
              , n = t.open(e, "_blank");
            n || ((n = t.open("", "_blank")).location.href = e);
            n && (n.opener = null)
        }
        var J = n(39)
          , G = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            return function() {
                return --t >= 0 && e.apply(void 0, arguments)
            }
        };
        function X() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.a
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.h;
            e.addEventListener("player.pp_completed_view", G(function() {
                t(S.a.COMPLETED_VIEW)
            }));
            e.addEventListener("player.ended", G(function() {
                t(S.a.COMPLETE)
            }));
            e.addEventListener("player.playing", G(function() {
                t(S.a.IMP);
                t(S.a.START)
            }));
            e.addEventListener("player.firstQuartile", G(function() {
                t(S.a.FIRST_QUARTILE)
            }));
            e.addEventListener("player.midpoint", G(function() {
                t(S.a.MIDPOINT)
            }));
            e.addEventListener("player.thirdQuartile", G(function() {
                t(S.a.THIRD_QUARTILE)
            }));
            e.addEventListener("player.AdClickThru", function() {
                t(S.a.VIDEO_CLICK)
            })
        }
        var Y = function() {
            var e;
            return e = {},
            h()(e, window.MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, S.a.error.MEDIA_ERR_SRC_NOT_SUPPORTED),
            h()(e, window.MediaError.MEDIA_ERR_ABORTED, S.a.error.MEDIA_ERR_ABORTED),
            h()(e, window.MediaError.MEDIA_ERR_NETWORK, S.a.error.MEDIA_ERR_NETWORK),
            h()(e, window.MediaError.MEDIA_ERR_DECODE, S.a.error.MEDIA_ERR_DECODE),
            e
        };
        function $(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.a
              , n = !1
              , i = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Y)();
            ["timeupdate", "firstQuartile", "midpoint", "thirdQuartile", "ended", "AdClickThru", "readytoplay"].forEach(function(n) {
                e.dispatcher.addEventListener(n, function(i, r) {
                    t.dispatchEvent({
                        type: "player." + n,
                        target: e
                    }, r)
                })
            });
            e.dispatcher.addEventListener("playing", function() {
                t.dispatchEvent({
                    type: "player.playing",
                    target: e
                });
                if (n) {
                    t.dispatchEvent({
                        type: "player.resume",
                        target: e
                    });
                    n = !1
                }
            });
            e.dispatcher.addEventListener("pause", function() {
                t.dispatchEvent({
                    type: "player.pause",
                    target: e
                });
                n = !0
            });
            e.dispatcher.addEventListener("error", function(n) {
                var r = new l.a(n.message,n.errorType);
                r.src = n.mediaFileUrl;
                if (n.originalEvent && n.originalEvent.target) {
                    n.originalEvent.target.error && n.originalEvent.target.error.code && (r.errorType = i[n.originalEvent.target.error.code]);
                    if (n.originalEvent.target.src) {
                        r.message = "Unable to play file " + n.originalEvent.target.src;
                        r.src = n.originalEvent.target.src
                    }
                }
                t.dispatchEvent({
                    type: "player.error",
                    target: e
                }, [r])
            })
        }
        var ee = n(40)
          , te = function(e) {
            return e && e.jquery ? e[0] : e
        }
          , ne = n(36)
          , ie = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.a;
                o()(this, e);
                this.viewabilityEventDispatcher = t;
                this.globalEventBus = n;
                this.playerHasStartedPlaying = !1
            }
            d()(e, [{
                key: "startTracking",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y.f
                      , t = this;
                    this.viewabilityEventDispatcher.addEventListener("inview", function() {
                        t.playerHasStartedPlaying && e(S.a.INVIEW)
                    });
                    this.viewabilityEventDispatcher.addEventListener("outofview", function() {
                        t.playerHasStartedPlaying && e(S.a.OUTOFVIEW)
                    });
                    this.globalEventBus.addEventListener("player.playing", function() {
                        t.playerHasStartedPlaying = !0
                    });
                    this.globalEventBus.addEventListener("player.ended", function() {
                        t.playerHasStartedPlaying = !1
                    })
                }
            }]);
            return e
        }()
          , re = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne.a
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ie;
                o()(this, e);
                this.dispatcher = new t(this);
                this.viewabilityTracker = new n(this.dispatcher);
                this.viewabilityTracker.startTracking()
            }
            d()(e, [{
                key: "onShow",
                value: function() {
                    this.dispatcher.dispatchEvent("inview")
                }
            }, {
                key: "onHide",
                value: function() {
                    this.dispatcher.dispatchEvent("outofview")
                }
            }]);
            return e
        }();
        function oe(e, t, n) {
            var i, r, o, a, d, u, c = function(e, t) {
                var n = e.getBoundingClientRect();
                return {
                    top: n.top + t.pageYOffset,
                    left: n.left + t.pageXOffset
                }
            }(e, n), l = n.pageYOffset, s = n.pageXOffset;
            if (!(o = n.document.documentElement,
            a = e,
            o !== a && o.contains(a)))
                return !1;
            i = {
                left: c.left,
                top: c.top,
                right: c.left + e.offsetWidth,
                bottom: c.top + e.offsetHeight
            };
            r = {
                top: l,
                bottom: l + n.innerHeight,
                left: s,
                right: s + n.innerWidth
            };
            return (d = i,
            u = r,
            Math.max(0, Math.min(d.right, u.right) - Math.max(d.left, u.left)) * Math.max(0, Math.min(d.bottom, u.bottom) - Math.max(d.top, u.top))) >= e.offsetWidth * e.offsetHeight * t
        }
        var ae = function(e) {
            H()(t, e);
            function t(e, n) {
                var i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.a, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : oe;
                o()(this, t);
                var d = null;
                (i = B()(this, W()(t).call(this))).timerID = setInterval(function() {
                    var t = a(n, e, r);
                    d !== t && ((d = t) ? i.onShow() : i.onHide())
                }, 100);
                return i
            }
            d()(t, [{
                key: "destroy",
                value: function() {
                    clearInterval(this.timerID)
                }
            }]);
            return t
        }(re)
          , de = function(e) {
            H()(t, e);
            function t(e) {
                var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V.a;
                o()(this, t);
                n = B()(this, W()(t).call(this));
                var r = null
                  , a = i().getAMPContext();
                n.removeIntersectionObserver = a.observeIntersection(function(t) {
                    var i = t[0].intersectionRatio >= e && !a.hidden;
                    r !== i && ((r = i) ? n.onShow() : n.onHide())
                });
                return n
            }
            d()(t, [{
                key: "destroy",
                value: function() {
                    this.removeIntersectionObserver && this.removeIntersectionObserver()
                }
            }]);
            return t
        }(re)
          , ue = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V.b
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ae
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : de;
            return t(window) ? new i(e.viewablePercentage) : new n(e.viewablePercentage,e.elementToWatch)
        };
        function ce(e, t, n) {
            var i, r, o, a = (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ue)({
                elementToWatch: (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : te)(e.container),
                viewablePercentage: (i = t.viewablePercentage,
                r = .5,
                o = Number(i),
                isNaN(o) || o < 0 || o > 1 ? r : o)
            }), d = function() {
                return e.pause.apply(e)
            }, u = function() {
                return e.play.apply(e)
            };
            if ("false" === t.playThrough || n()) {
                e.dispatcher.one("ended", function() {
                    a.dispatcher.removeEventListener("inview", u);
                    a.dispatcher.removeEventListener("outofview", d)
                });
                a.dispatcher.addEventListener("inview", u);
                a.dispatcher.addEventListener("outofview", d)
            } else
                a.dispatcher.one("inview", u)
        }
        function le(e, t, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : P.a.outOfViewPauseOverride
              , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : b.a
              , o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ce;
            n.expandBeforePlayback ? r.one("expanded", function() {
                o(e, t, i)
            }) : e.dispatcher.one("readytoplay", function() {
                o(e, t, i)
            })
        }
        function se(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : X
              , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : $
              , o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : le;
            (arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : ee.a).initWithPlayer(e);
            r(e);
            i();
            o(e, t, n)
        }
        var ve = function() {
            function e(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.b;
                o()(this, e);
                this.domElement = document.createElement("img");
                i.reset(this.domElement);
                this.domElement.className = "unruly_program_icon";
                i.setImportant(this.domElement, {
                    width: t.width + "px",
                    height: t.height + "px",
                    position: "absolute",
                    background: "transparent"
                });
                switch (t.xPosition) {
                case "left":
                    i.setImportant(this.domElement, {
                        left: "0px"
                    });
                    break;
                case "right":
                    i.setImportant(this.domElement, {
                        right: "0px"
                    });
                    break;
                default:
                    i.setImportant(this.domElement, {
                        left: t.xPosition + "px"
                    })
                }
                switch (t.yPosition) {
                case "top":
                    i.setImportant(this.domElement, {
                        top: "0px"
                    });
                    break;
                case "bottom":
                    i.setImportant(this.domElement, {
                        bottom: "0px"
                    });
                    break;
                default:
                    i.setImportant(this.domElement, {
                        top: t.yPosition + "px"
                    })
                }
                this.domElement.src = t.resource.url;
                this.domElement.addEventListener("click", function(e) {
                    e.preventDefault && e.preventDefault();
                    e.stopPropagation && e.stopPropagation();
                    n();
                    return !1
                })
            }
            d()(e, [{
                key: "src",
                get: function() {
                    return this.domElement.src
                }
            }]);
            return e
        }()
          , pe = n(34);
        function he(e, t) {
            e.setImportantStyle({
                position: "relative",
                "padding-bottom": "".concat(1 / t * 100, "%"),
                height: 0
            })
        }
        function fe(e) {
            e.setImportantStyle({
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0
            })
        }
        function ge(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
              , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}
              , o = r.resetStyles
              , a = void 0 === o ? pe.a.resetStyles : o
              , d = r.$
              , u = void 0 === d ? C.create : d
              , c = r.styles
              , s = void 0 === c ? Q.a : c
              , v = r.enable
              , p = void 0 === v ? P.a : v
              , h = r.layout
              , f = void 0 === h ? {
                initContainer: he,
                initElement: fe
            } : h
              , g = r.eventBus
              , m = void 0 === g ? b.a : g
              , y = u('<div class="unruly_in_article_placement">')
              , E = u('<div class="unruly_in_article_video_container">');
            a(y);
            a(E);
            f.initContainer(E, t);
            f.initElement(e);
            s.setImportantStyle(E, {
                "background-color": "transparent",
                "margin-top": "1px",
                "width": "640px",
                "transform": "translate(-50%, 0)",
                "left": "50%",
                "display": "inline-block !important"
            });
            y.mouseenter(function() {
                return m.dispatchEvent("inarticle.mouseenter")
            });
            y.mouseleave(function() {
                return m.dispatchEvent("inarticle.mouseleave")
            });
            var A = {
                overflow: "hidden",
                position: "relative",
                "max-height": "1px",
                opacity: 1
            };
            p && !p.expandBeforePlayback && (A.transition = "max-height 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s");
            if (n) {
                if (!(i && i[0] && i[0].getBoundingClientRect))
                    throw new l.a("basePlacement required in fullscreen mode");
                var k = Object.create(A)
                  , w = -i[0].getBoundingClientRect().left;
                k.width = "100vw";
                k.height = "100vh";
                k["z-index"] = 1e3;
                k.left = "".concat(w, "px");
                s.setImportantStyle(y, k)
            } else
                s.setImportantStyle(y, A);
            E.append(e);
            y.append(E);
            return {
                domElement: y,
                aspectRatioContainer: E,
                destroy: function() {
                    s.remove(y)
                }
            }
        }
        function me(e, t) {
            return new l.a("Method not implemented: ".concat(e),void 0,{
                args: t
            })
        }
        function ye(e) {
            return new Promise(function(t) {
                ["AdError", "error", "ended", "AdStopped", "adstoptimeout"].forEach(function(n) {
                    e.dispatcher.addEventListener(n, function() {
                        t(n)
                    })
                })
            }
            )
        }
        var Ee, Ae, be = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = arguments.length > 1 ? arguments[1] : void 0;
                o()(this, e);
                this.videoContainer = n.container;
                this.player = n;
                this.options = t
            }
            d()(e, [{
                key: "populate",
                value: function(e) {
                    this.attachEvents(e);
                    this.render();
                    this.renderLayers();
                    this.renderIcons(e);
                    this.load(e)
                }
            }, {
                key: "attachEvents",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ye;
                    (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : se)(this.player, e, this.getProps());
                    !function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.a
                          , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : J.a.shrinkAdServerIFrame;
                        e.dispatcher.one("setupcomplete", function() {
                            n();
                            t.dispatchEvent("placement.addedtodom")
                        })
                    }(this.player);
                    this.playerSubscription = n(this.player).then(function(e) {
                        return t.onAdFinishedPlaying(e)
                    })
                }
            }, {
                key: "load",
                value: function(e) {
                    this.player.load(e)
                }
            }, {
                key: "renderIcons",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , i = n.openWindow
                      , r = void 0 === i ? Z : i
                      , o = n.appendStyles
                      , a = void 0 === o ? Q.a.append : o
                      , d = n.trackThirdParty
                      , u = void 0 === d ? y.h : d
                      , c = n.ClickThroughIcon
                      , l = void 0 === c ? ve : c;
                    if ("true" === e.useVASTIcon) {
                        var s = e.icons["unruly-opt-out"];
                        if (s) {
                            var v = new l(s,function() {
                                t.player.pause();
                                u(S.a.UNRULY_OPT_OUT_CLICK);
                                r(s.clickThrough)
                            }
                            );
                            a(this.videoContainer[0], v.domElement)
                        }
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge
                      , t = this.getAspectRatio();
                    this.inArticleContainer = e(this.videoContainer, t)
                }
            }, {
                key: "renderLayers",
                value: function() {
                    throw me("renderLayers")
                }
            }, {
                key: "getAspectRatio",
                value: function() {
                    throw me("getAspectRatio")
                }
            }, {
                key: "onAdFinishedPlaying",
                value: function(e) {
                    throw me("onAdFinishedPlaying", [e])
                }
            }, {
                key: "expand",
                value: function() {
                    return Promise.reject(me("expand"))
                }
            }, {
                key: "publishLifecycleEvent",
                value: function(e, t) {
                    return Promise.resolve(Object(l.b)(this.options[e])(t))
                }
            }, {
                key: "mute",
                value: function() {
                    this.player.mute()
                }
            }, {
                key: "unmute",
                value: function() {
                    this.player.unmute()
                }
            }, {
                key: "getAdTypeName",
                value: function() {
                    return "inArticle"
                }
            }, {
                key: "getProps",
                value: function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P.a).expandBeforePlayback;
                    return {
                        expandBeforePlayback: void 0 !== e && e
                    }
                }
            }, {
                key: "getCollapseDetails",
                value: function(e) {
                    var t = Math.round(this.player.getDuration());
                    return {
                        collapseReason: e,
                        elapsedTime: "ended" === e ? t : this.player.getElapsedTime(),
                        duration: t
                    }
                }
            }]);
            return e
        }(), ke = (Ee = pe.a.resetStyles,
        Ae = C.create,
        function() {
            return Ee(Ae.apply(void 0, arguments))
        }
        ), Ce = {
            opacity: .5,
            margin: "0 18px",
            "padding-top": "2px"
        }, we = {
            "font-family": "sans-serif",
            "font-size": "10px",
            "text-align": "center",
            "line-height": "21px"
        }, Te = "–– ADVERTISEMENT ––";
        function Ie() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Te
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ke
              , i = n('<div class="unruly_ia_disclosure_text">');
            i.text(t);
            i.setImportantStyle(we);
            var r = n('<div class="unruly_ia_disclosure">');
            r.append(i);
            r.setImportantStyle(Ce);
            r.setImportantStyle(e);
            return r
        }
        var Se = {
            createImage: function(e, t) {
                return new window.Image(e,t)
            }
        }
          , Pe = function() {
            function e(t) {
                var n = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ke
                  , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : b.a
                  , d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : y.f
                  , u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Se;
                o()(this, e);
                this.options = i;
                this.muted = !0;
                this.domElement = r('<img class="unruly_ia_volume"/>');
                this.domElement.attr("src", this.options.icons.initial);
                this.domElement.setImportantStyle(this.options.style);
                this.mouseLeaveListener = function() {
                    return n.domElement.setImportantStyle({
                        opacity: .25
                    })
                }
                ;
                this.mouseEnterListener = function() {
                    return n.domElement.setImportantStyle({
                        opacity: 1
                    })
                }
                ;
                if (!0 === i.shouldFadeInOnUserInteraction) {
                    a.addEventListener("inarticle.mouseenter", this.mouseEnterListener);
                    a.addEventListener("inarticle.mouseleave", this.mouseLeaveListener)
                }
                this.domElement.click(function(e) {
                    n.toggleSound(t, d);
                    n.muted = !n.muted;
                    n.domElement.attr("src", n.chooseImageUrl());
                    e && e.stopPropagation()
                });
                this.preloadSoundOnImage(u)
            }
            d()(e, [{
                key: "toggleSound",
                value: function(e, t) {
                    if (this.muted) {
                        e.unmute();
                        t(S.a.UNMUTE)
                    } else {
                        e.mute();
                        t(S.a.MUTE)
                    }
                }
            }, {
                key: "preloadSoundOnImage",
                value: function(e) {
                    var t = e.createImage();
                    t.onload = function() {}
                    ;
                    t.src = this.options.icons.muted;
                    var n = e.createImage();
                    n.onload = function() {}
                    ;
                    n.src = this.options.icons.unmuted
                }
            }, {
                key: "chooseImageUrl",
                value: function() {
                    return this.muted ? this.options.icons.muted : this.options.icons.unmuted
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.a;
                    e.removeEventListener("inarticle.mouseenter", this.mouseEnterListener);
                    e.removeEventListener("inarticle.mouseleave", this.mouseLeaveListener);
                    this.domElement.remove()
                }
            }]);
            return e
        }()
          , xe = n(60)
          , _e = n.n(xe)
          , Re = n(61)
          , Le = n.n(Re)
          , De = function(e) {
            return new (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pe)(e,{
                icons: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    muted: _e.a,
                    unmuted: Le.a,
                    initial: _e.a
                },
                style: {
                    "z-index": 100,
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    padding: 0,
                    width: "48px",
                    height: "48px",
                    cursor: "pointer",
                    opacity: 1,
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
                }
            })
        };
        var Oe = {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            color: "white",
            "margin-top": "12px",
            "font-family": "sans-serif",
            "font-size": "9px",
            "line-height": "normal",
            "padding-top": "0px",
            "text-shadow": "0 1px 2px rgba(0, 0, 0, .8)"
        }
          , Me = function(e) {
            H()(t, e);
            function t() {
                o()(this, t);
                return B()(this, W()(t).apply(this, arguments))
            }
            d()(t, [{
                key: "getAspectRatio",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.a;
                    return e.screen.availWidth / e.screen.availHeight
                }
            }, {
                key: "onAdFinishedPlaying",
                value: function() {
                    (e = this.volumeButton) && e.destroy && e.destroy();
                    var e
                }
            }, {
                key: "expand",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q.a.setImportantStyle
                      , t = this.inArticleContainer;
                    e(t.domElement, {
                        "max-height": "100vh",
                        "margin-top": "16px",
                        opacity: 1,
                        "background-color": "black"
                    });
                    e(t.aspectRatioContainer, {
                        "margin-top": "0"
                    });
                    return Promise.resolve(!0)
                }
            }, {
                key: "render",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.createContainer
                      , n = void 0 === t ? ge : t
                      , i = e.setImportantStyle
                      , r = void 0 === i ? Q.a.setImportantStyle : i
                      , o = e.aspectRatio
                      , a = void 0 === o ? this.getAspectRatio() : o;
                    this.inArticleContainer = n(this.videoContainer, a, !0, this.options.basePlacement);
                    r(this.videoContainer, {
                        width: "100vw",
                        height: "100vh"
                    })
                }
            }, {
                key: "renderLayers",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.append
                      , n = void 0 === t ? Q.a.append : t
                      , i = e.createVerticalVideoVolumeButton
                      , r = void 0 === i ? De : i
                      , o = e.createInArticleDisclosure
                      , a = void 0 === o ? Ie : o
                      , d = e.getDisclosureMessage
                      , u = void 0 === d ? K : d;
                    this.disclosure = a(Oe, u());
                    this.volumeButton = r(this.player);
                    n(this.videoContainer, this.disclosure);
                    n(this.inArticleContainer.domElement, this.volumeButton.domElement)
                }
            }, {
                key: "getAdTypeName",
                value: function() {
                    return "fullscreenVerticalVideo"
                }
            }, {
                key: "getAdType",
                value: function() {
                    return q.a.InArticle
                }
            }]);
            return t
        }(be)
          , Ve = n(23)
          , Ne = n.n(Ve)
          , Ue = n(62)
          , Be = n.n(Ue);
        function Fe(e) {
            return "number" == typeof e && e > 0
        }
        var We = {
            getForAd: function(e) {
                var t = e.getPotentialVideoSize();
                return t && "object" === T()(t) && Fe(t.width) && Fe(t.height) ? t : null
            },
            getPercentageOfScreen: function(e, t) {
                var n = e.width * e.height;
                return isNaN(n) ? 0 : n * (t / 100)
            },
            getWidthForArea: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.6;
                return Math.floor(Math.sqrt(e * t))
            }
        }
          , ze = n(64)
          , He = n.n(ze)
          , je = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ke;
                o()(this, e);
                this.player = t;
                var r = i('<div class="unruly_ia_bottombar"></div>')
                  , a = i('<div class="unruly_ia_progressbar"></div>');
                a.setImportantStyle({
                    height: "2px",
                    width: 0,
                    "background-color": "#0bbbef",
                    transition: "all 0.1s linear",
                    position: "relative"
                });
                r.append(a);
                this.progressBar = a;
                r.setImportantStyle({
                    height: "20px"
                });
                n.forEach(function(e) {
                    return r.append(e)
                });
                this.domElement = r
            }
            d()(e, [{
                key: "populate",
                value: function() {
                    var e = this;
                    this.player.dispatcher.addEventListener("timeupdate", function(t, n) {
                        if (void 0 !== n) {
                            var i = n.percentComplete;
                            i <= 100 && e.progressBar.setImportantStyle({
                                width: "".concat(i, "%")
                            })
                        }
                    })
                }
            }]);
            return e
        }();
        function Ke(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ke)('<img class="unruly_ia_closebutton">');
            n.attr("src", e);
            n.setImportantStyle(t);
            return n
        }
        var qe = function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
              , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ke;
            o()(this, e);
            var r = i('<div class="unruly_ia_furniture"></div>');
            n.forEach(function(e) {
                return r.append(e)
            });
            r.setImportantStyle(t);
            this.domElement = r
        }
          , Qe = 28
          , Ze = "ADVERTISEMENT";
        function Je() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ze
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Qe
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ke
              , r = Ie(e, t);
            r.setImportantStyle({
                display: "inline-block",
                position: "relative",
                "min-width": "100px",
                height: "".concat(n, "px"),
                background: "currentColor",
                "vertical-align": "top",
                margin: "0px 5px 0px 0px",
                opacity: 1,
                "padding-left": "".concat(n / 2, "px"),
                "padding-right": "".concat(n / 4, "px"),
                "padding-top": "0px"
            });
            r.find(".unruly_ia_disclosure_text").setImportantStyle({
                color: "white",
                "line-height": "".concat(n, "px")
            });
            var o = i('<div class="unruly_ia_pinned_disclosure_crescent"></div>');
            o.setImportantStyle({
                overflow: "hidden",
                height: "".concat(n, "px"),
                width: "".concat(n / 2, "px"),
                position: "absolute",
                display: "inline-block",
                right: "-".concat(n / 2, "px"),
                top: "0px"
            });
            r.append(o);
            var a = i("<div></div>");
            a.setImportantStyle({
                display: "inline-block",
                margin: "0px",
                color: "currentColor",
                width: "".concat(n, "px"),
                height: "".concat(n / 2, "px"),
                position: "relative",
                top: "-".concat(n / 4, "px"),
                left: "0px",
                "border-radius": " 50%",
                border: " solid 0px transparent",
                "box-shadow": " -33px 0 0 0 currentColor",
                padding: "".concat(n / 2, "px")
            });
            o.append(a);
            return r
        }
        var Ge = n(54)
          , Xe = n.n(Ge)
          , Ye = n(65)
          , $e = n.n(Ye)
          , et = function(e) {
            return new (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pe)(e,{
                icons: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    unmuted: $e.a,
                    muted: Xe.a,
                    initial: Xe.a
                },
                style: {
                    "z-index": 100,
                    padding: 0,
                    width: "28px",
                    height: "28px",
                    cursor: "pointer",
                    opacity: 1,
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                    background: "currentColor",
                    "border-radius": "50%",
                    display: "inline-block",
                    "pointer-events": "auto"
                }
            })
        }
          , tt = function(e) {
            H()(t, e);
            function t(e, n) {
                var i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.a;
                o()(this, t);
                i = B()(this, W()(t).call(this, e, n));
                if (r.isMobile() && r.isLandscape())
                    throw new l.a("Pinned In-Article not supported on landscape mobile orientation",S.a.error.UNSUPPORTED_BROWSER);
                return i
            }
            d()(t, [{
                key: "getProps",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P.a;
                    return c()({}, Be()(W()(t.prototype), "getProps", this).call(this, e), {
                        expandBeforePlayback: !1
                    })
                }
            }, {
                key: "getAspectRatio",
                value: function() {
                    return 16 / 9
                }
            }, {
                key: "_getScreenResolution",
                value: function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.a).screen
                }
            }, {
                key: "_getMinAdSpaceWidth",
                value: function() {
                    return 200
                }
            }, {
                key: "_getMaxAdSpaceWidth",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.a;
                    return [450, We.getWidthForArea(We.getPercentageOfScreen(this._getScreenResolution(e), 30))].filter(function(e) {
                        return e > 0
                    }).reduce(function(e, t) {
                        return Math.min(e, t)
                    }, Number.MAX_VALUE)
                }
            }, {
                key: "_getAdSpaceWidth",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.a
                      , t = this._getMinAdSpaceWidth()
                      , n = this._getMaxAdSpaceWidth()
                      , i = We.getWidthForArea(We.getPercentageOfScreen(this._getScreenResolution(e), 8));
                    if (i) {
                        if (i <= n && i >= t)
                            return "".concat(i, "px");
                        if (i > n)
                            return "".concat(n, "px")
                    }
                    return "".concat(n < t ? n : t, "px")
                }
            }, {
                key: "_cleanup",
                value: function() {
                    this.volumeButton && this.volumeButton.destroy()
                }
            }, {
                key: "_collapse",
                value: function(e) {
                    (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Q.a).setImportantStyle(this.inArticleContainer.domElement, {
                        "max-height": 0,
                        "margin-top": 0
                    });
                    this.options.onCollapseCallback && this.options.onCollapseCallback(this.getCollapseDetails(e));
                    setTimeout(this.inArticleContainer.destroy, 5e3);
                    this.publishLifecycleEvent("onAdDismissed")
                }
            }, {
                key: "_collapseAndCleanupWhenInview",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ue
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : te;
                    this._cleanup();
                    var r = n({
                        elementToWatch: i(this.player.container),
                        viewablePercentage: .5
                    });
                    r.dispatcher.addEventListener("inview", function n() {
                        t._collapse(e);
                        r.dispatcher.removeEventListener("inview", n);
                        r.destroy()
                    })
                }
            }, {
                key: "onAdFinishedPlaying",
                value: function(e) {
                    this._collapseAndCleanupWhenInview(e)
                }
            }, {
                key: "_getFurnitureHeight",
                value: function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.a).isMobile() ? 74 : 50
                }
            }, {
                key: "expand",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.a
                      , t = this.inArticleContainer
                      , n = Math.floor(t.domElement.width() / this.getAspectRatio() + this._getFurnitureHeight(e));
                    t.domElement.setImportantStyle({
                        "max-height": "".concat(n, "px"),
                        opacity: 1
                    });
                    this.bottomBar.populate();
                    return Promise.resolve(!0)
                }
            }, {
                key: "applyContainerStyles",
                value: function() {
                    this.inArticleContainer.domElement.setImportantStyle({
                        position: "fixed",
                        bottom: "0.5em",
                        right: "0.5em",
                        width: this._getAdSpaceWidth(),
                        "z-index": 2147483647
                    })
                }
            }, {
                key: "setUpMobileOrientationEvent",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.a
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.a;
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y.f;
                    t.isMobile() && n.addEventListener("resize", function() {
                        e.inArticleContainer.domElement.get(0).style.display = t.isLandscape() ? "none" : "inline-block"
                    })
                }
            }, {
                key: "render",
                value: function() {
                    Be()(W()(t.prototype), "render", this).call(this);
                    this.applyContainerStyles();
                    this.setUpMobileOrientationEvent()
                }
            }, {
                key: "_createCloseButton",
                value: function() {
                    return Ke(He.a, {
                        height: "28px",
                        width: "28px",
                        margin: "0",
                        cursor: "pointer",
                        right: "-12px",
                        display: "inline-block",
                        position: "relative",
                        "z-index": "999",
                        background: "currentColor",
                        "border-radius": "50%",
                        "pointer-events": "auto",
                        left: "auto"
                    })
                }
            }, {
                key: "onCloseClicked",
                value: function() {
                    this.player.skip()
                }
            }, {
                key: "renderLayers",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._createCloseButton
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Je
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : et
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : K
                      , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : qe
                      , a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : je
                      , d = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Q.a
                      , u = t();
                    u.click(function(t) {
                        t.stopPropagation();
                        e.onCloseClicked()
                    });
                    this.volumeButton = i(this.player);
                    var c = [n({}, r()), this.volumeButton.domElement];
                    this.options.removeCloseButton || (c = [u].concat(Ne()(c)));
                    this.topBar = new o({
                        "text-align": "right",
                        height: "28px",
                        "padding-left": "10px",
                        position: "relative",
                        color: "black",
                        "margin-bottom": "5px"
                    },c);
                    d.prepend(this.inArticleContainer.domElement, this.topBar.domElement);
                    this.bottomBar = new a(this.player);
                    this.bottomBar.domElement.setImportantStyle({
                        height: "auto"
                    });
                    d.append(this.inArticleContainer.domElement, this.bottomBar.domElement)
                }
            }, {
                key: "getAdTypeName",
                value: function() {
                    return "pinned"
                }
            }, {
                key: "getAdType",
                value: function() {
                    return q.a.Unmissable
                }
            }]);
            return t
        }(be);
        var nt = function(e) {
            H()(t, e);
            function t() {
                o()(this, t);
                return B()(this, W()(t).apply(this, arguments))
            }
            d()(t, [{
                key: "getAspectRatio",
                value: function() {
                    return 9 / 16
                }
            }, {
                key: "onAdFinishedPlaying",
                value: function() {
                    (e = this.volumeButton) && e.destroy && e.destroy();
                    var e
                }
            }, {
                key: "expand",
                value: function() {
                    var e = Math.floor(this.inArticleContainer.domElement.width() / this.getAspectRatio());
                    this.inArticleContainer.domElement.setImportantStyle({
                        "max-height": "".concat(e, "px"),
                        "margin-top": "16px",
                        opacity: 1,
                        "background-color": "black"
                    });
                    return Promise.resolve(!0)
                }
            }, {
                key: "render",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge;
                    this.inArticleContainer = e(this.videoContainer, this.getAspectRatio(), !1, null)
                }
            }, {
                key: "renderLayers",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : De
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ie
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : K
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Q.a
                      , r = t({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        color: "white",
                        "margin-top": "12px",
                        "font-family": "sans-serif",
                        "font-size": "9px",
                        "line-height": "normal",
                        "padding-top": "0px",
                        "text-shadow": "0 1px 2px rgba(0, 0, 0, .8)"
                    }, n());
                    i.append(this.videoContainer, r);
                    this.volumeButton = e(this.player);
                    i.append(this.videoContainer, this.volumeButton.domElement)
                }
            }, {
                key: "getAdTypeName",
                value: function() {
                    return "verticalVideo"
                }
            }, {
                key: "getAdType",
                value: function() {
                    return q.a.InArticle
                }
            }]);
            return t
        }(be)
          , it = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object(V.a)().getAMPContext();
            return new Promise(function(n, i) {
                !function(e, t) {
                    if (!(e.screen && e.screen.availWidth && e.screen.availHeight))
                        throw new Error("Cannot access window.screen");
                    if (!(t && t.requestResize && t.onResizeDenied))
                        throw new Error("AMP resize API not available")
                }(e, t);
                t.onResizeSuccess(function() {
                    return n()
                });
                t.onResizeDenied(function() {
                    return i(new Error("resize failed"))
                });
                t.requestResize(e.screen.availWidth, e.screen.availHeight);
                setTimeout(function() {
                    return i(new Error("resize failed: timeout"))
                }, 100)
            }
            )
        };
        function rt(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , i = n.FullscreenInArticleAdSpace
              , r = void 0 === i ? Me : i
              , o = n.VerticalInArticleAdSpace
              , a = void 0 === o ? nt : o
              , d = n.PinnedInArticleAdSpace
              , u = void 0 === d ? tt : d
              , c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : N.a
              , s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {
                return Object(V.a)().isAMP
            }
              , v = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : it;
            return new Promise(function(n, i) {
                if (e === r || e === a) {
                    if (!(c.isMobile() || t.skipIOSCheck))
                        return i(new l.a("Vertical Video not supported on desktop"));
                    if (s() && e === a)
                        return v().then(function() {
                            return n(e)
                        }).catch(function() {
                            return i(new l.a("Could not resize to vertical video on AMP"))
                        })
                } else if (e === u && !t.canRunUnmissable)
                    return i(new l.a("Pinned is not supported on this website"));
                return n(e)
            }
            )
        }
        var ot = function(e) {
            E.b.setImportant(e, {
                filter: "blur(4px)"
            });
            E.b.setImportant(e.parentElement, {
                overflow: "hidden"
            })
        }
          , at = function(e, t, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.b
              , r = i.createElement("div", e);
            i.setImportant(r, {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                "background-color": n,
                opacity: t,
                margin: 0,
                padding: 0,
                border: 0,
                cursor: "pointer"
            });
            return r
        };
        function dt(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : at
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ot
              , i = t(e, 1, "#b7b7b7");
            i.setAttribute("id", "unruly_postvideo_fallback_endslate");
            n(i);
            return i
        }
        function ut(e) {
            var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : at)(e, .8, "#fff");
            t.setAttribute("id", "unruly_postvideo_endslate");
            return t
        }
        var ct = n(66)
          , lt = n.n(ct)
          , st = n(67)
          , vt = n.n(st);
        function pt(e) {
            return new (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pe)(e,{
                icons: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    unmuted: vt.a,
                    muted: Xe.a,
                    initial: Xe.a
                },
                style: {
                    "z-index": 100,
                    padding: 0,
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                    opacity: .25,
                    float: "right",
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                    transition: "all 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95)",
                    background: "black",
                    "border-radius": "50%",
                    display: "inline-block"
                },
                shouldFadeInOnUserInteraction: !0
            })
        }
        var ht = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , i = n.isAMP
              , r = void 0 === i ? V.b : i
              , o = n.getContext
              , a = r((void 0 === o ? V.a : o)().window)
              , d = Math.floor(e.domElement.width() / t + 50)
              , u = {
                "max-height": "".concat(d, "px"),
                opacity: 1
            };
            return a ? c()({}, u, {
                "margin-top": "0px",
                transition: "none"
            }) : c()({}, u, {
                "margin-top": "16px"
            })
        }
          , ft = function(e) {
            H()(t, e);
            function t() {
                o()(this, t);
                return B()(this, W()(t).apply(this, arguments))
            }
            d()(t, [{
                key: "getAspectRatio",
                value: function() {
                    return 16 / 9
                }
            }, {
                key: "_cleanup",
                value: function() {
                    this.volumeButton && this.volumeButton.destroy();
                    this.bottomBar.progressBar && this.bottomBar.progressBar.remove()
                }
            }, {
                key: "_collapse",
                value: function(e) {
                    (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Q.a).setImportantStyle(this.inArticleContainer.domElement, {
                        "max-height": 0,
                        "margin-top": 0
                    });
                    this.publishLifecycleEvent("onCollapseCallback", this.getCollapseDetails(e));
                    setTimeout(this.inArticleContainer.destroy, 5e3);
                    this.publishLifecycleEvent("onAdDismissed")
                }
            }, {
                key: "_cleanupButNotCollapse",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ot
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.b.insertAfter
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.b.insertBefore
                      , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : dt;
                    this._cleanup();
                    i(r(document), this.player.videoEl);
                    var o = e(document);
                    t(this.player.videoEl);
                    n(this.player.videoEl, o)
                }
            }, {
                key: "_collapseAndCleanupWhenInview",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ue
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : te;
                    this._cleanup();
                    var r = n({
                        elementToWatch: i(this.player.container),
                        viewablePercentage: .5
                    });
                    r.dispatcher.addEventListener("inview", function n() {
                        t._collapse(e);
                        r.dispatcher.removeEventListener("inview", n);
                        r.destroy()
                    })
                }
            }, {
                key: "_shouldCollapseOnAdFinishedPlaying",
                value: function(e, t) {
                    return t.collapseOnComplete || "ended" !== e
                }
            }, {
                key: "onAdFinishedPlaying",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P.a;
                    if (this._shouldCollapseOnAdFinishedPlaying(e, t))
                        this._collapseAndCleanupWhenInview(e);
                    else {
                        this._cleanupButNotCollapse();
                        this.hasAdEndedButNotCollapsed = !0
                    }
                }
            }, {
                key: "expand",
                value: function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).getExpandedStyle
                      , t = void 0 === e ? ht : e
                      , n = this.inArticleContainer
                      , i = t(n, this.getAspectRatio());
                    n.domElement.setImportantStyle(i);
                    this.bottomBar.populate();
                    return Promise.resolve(!0)
                }
            }, {
                key: "_createCloseButton",
                value: function() {
                    var e = Ke(lt.a, {
                        height: "18px",
                        width: "18px",
                        float: "right",
                        opacity: .25,
                        transition: "all 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95)",
                        margin: "2px 2px 1px 0",
                        outline: "1px solid transparent",
                        "min-width": "0",
                        cursor: "pointer",
                        left: "auto",
                        right: "auto"
                    });
                    !function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.a;
                        t.addEventListener("inarticle.mouseenter", function() {
                            return e.setImportantStyle({
                                opacity: "unset"
                            })
                        });
                        t.addEventListener("inarticle.mouseleave", function() {
                            return e.setImportantStyle({
                                opacity: .25
                            })
                        })
                    }(e);
                    return e
                }
            }, {
                key: "_createDisclosureButton",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K;
                    return Ie({}, e() ? "".concat("––", " ").concat(e(), " ").concat("––") : "")
                }
            }, {
                key: "onCloseClicked",
                value: function() {
                    this.player.skip();
                    this.hasAdEndedButNotCollapsed && this.onAdFinishedPlaying("collapsedAfterEnded")
                }
            }, {
                key: "renderLayers",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._createCloseButton
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._createDisclosureButton
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pt
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qe
                      , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : je
                      , a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Q.a;
                    this.hasAdEndedButNotCollapsed = !1;
                    var d = t();
                    d.click(function(t) {
                        t.stopPropagation();
                        e.onCloseClicked()
                    });
                    this.topBar = new r({
                        height: "22px"
                    },[d, n()]);
                    a.prepend(this.inArticleContainer.domElement, this.topBar.domElement);
                    this.volumeButton = i(this.player);
                    this.bottomBar = new o(this.player,[this.volumeButton.domElement]);
                    a.append(this.inArticleContainer.domElement, this.bottomBar.domElement)
                }
            }, {
                key: "getAdTypeName",
                value: function() {
                    return "horizontal"
                }
            }, {
                key: "getAdType",
                value: function() {
                    return q.a.InArticle
                }
            }]);
            return t
        }(be);
        function gt(e) {
            (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.a).dispatchEvent({
                type: "player." + S.a.COMPLETED_VIEW,
                target: e
            })
        }
        function mt(e, t) {
            var n = e.target;
            n.getCurrentTime() >= 30 && t(n)
        }
        function yt(e, t) {
            t(e.target)
        }
        function Et() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.a
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gt
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mt
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yt
              , r = {}
              , o = G(function(e) {
                t(e);
                r.unsubscribe && r.unsubscribe()
            })
              , a = function(e) {
                return n(e, o)
            }
              , d = function(e) {
                return i(e, o)
            };
            e.addEventListener("player.timeupdate", a);
            e.addEventListener("player.ended", d);
            r.unsubscribe = function() {
                e.removeEventListener("player.timeupdate", a);
                e.removeEventListener("player.ended", d)
            }
        }
        var At = {}
          , bt = [S.a.FIRST_QUARTILE, S.a.MIDPOINT, S.a.THIRD_QUARTILE];
        function kt(e, t, n) {
            if (!At[e]) {
                !function(e, t, n) {
                    -1 !== bt.indexOf(e) && n.dispatchEvent({
                        type: "player." + e,
                        target: t
                    })
                }(e, t, n);
                At[e] = !0
            }
        }
        function Ct() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.a
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wt;
            e.addEventListener("player.timeupdate", function(e) {
                var n = e.target;
                t(n)
            })
        }
        function wt(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.a
              , n = e.getDuration()
              , i = n / 4
              , r = e.getCurrentTime();
            r >= i && r < 2 * i ? kt(S.a.FIRST_QUARTILE, e, t) : r >= 2 * i && r < 3 * i ? kt(S.a.MIDPOINT, e, t) : r >= 3 * i && r < n && kt(S.a.THIRD_QUARTILE, e, t)
        }
        var Tt = {
            ZENTRICK_JSVPAID: "zentrick_jsvpaid",
            ZENTRICK_MP4: "zentrick_mp4",
            values: function() {
                return [this.ZENTRICK_JSVPAID, this.ZENTRICK_MP4]
            }
        }
          , It = function(e) {
            var t, n = function() {
                t = !1
            };
            return function() {
                return t || (t = Promise.resolve(e()).then(n).catch(function() {
                    n();
                    throw Error("nonreenterant function has rejected")
                }))
            }
        };
        function St(e) {
            return n.e(3).then(n.bind(null, 79)).then(function(t) {
                return new (0,
                t.default)(e)
            })
        }
        function Pt(e) {
            return e.isSupportedMobileDevice() || e.isSupportedTablet()
        }
        function xt(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , i = n.browser
              , r = void 0 === i ? N.a : i
              , o = n.createVideoAdapter
              , a = void 0 === o ? St : o
              , d = n.publisherWindow
              , u = void 0 === d ? s.a : d
              , c = n.nonreenterant
              , l = void 0 === c ? It : c
              , v = n.useMobileVideoAdaptor;
            if (!(void 0 === v ? Pt : v)(r))
                return Promise.resolve(t);
            var p = e.document.createElement("style");
            p.innerText = "*::-webkit-media-controls-start-playback-button {display: none!important;-webkit-appearance: none;}";
            e.document.body.insertBefore(p, e.document.body.firstChild);
            return Promise.resolve().then(function() {
                return a({
                    defaultMuted: !0,
                    autoplay: !1,
                    spriteEnabled: !1,
                    videoSlot: t,
                    audioSlot: new window.Audio,
                    spriteSlot: e.document.createElement("div"),
                    proxy: !0,
                    nativeMutedEnabled: r.isSupportedAndroid(),
                    seekingDurationOffset: 100
                })
            }).then(function(e) {
                return e.start().then(function() {
                    !function(e, t, n, i) {
                        if (!e.armed) {
                            var r = i(e.update.bind(e))
                              , o = t.supportsMobileAutoPlay() ? "click" : "touchstart";
                            n.document.addEventListener(o, r);
                            e.addEventListener("arm", function() {
                                n.document.removeEventListener(o, r)
                            })
                        }
                    }(e, r, u, l);
                    return e
                })
            })
        }
        var _t = Math.min
          , Rt = Math.max;
        var Lt = function() {
            function e(t, n) {
                var i = this;
                o()(this, e);
                this.vpaidCreative = t;
                this.playerDispatcher = n;
                this.duration = 0;
                this.backupDuration = 0;
                var r = function() {
                    var e = t.adRemainingTime && t.adRemainingTime();
                    i.recordInitialAdRemainingTime(e)
                };
                ["AdRemainingTimeChange", "AdStarted", "AdVideoStart", "vast:start"].forEach(function(e) {
                    return t.once(e, r)
                });
                var a = function() {
                    i.adRemainingTimeTimeout = setTimeout(function() {
                        0 === i.getDuration() && i.playerDispatcher.dispatchEvent("adremainingtime_timeout")
                    }, 5e3);
                    i.timeUpdateTimer || (i.timeUpdateTimer = setInterval(function() {
                        var e = {
                            percentComplete: i.getPercentComplete()
                        };
                        i.playerDispatcher.dispatchEvent("timeupdate", e)
                    }, 100))
                };
                t.once("AdVideoStart", a);
                t.once("vast:start", a);
                ["AdStopped", "AdError", "error", "vast:complete", "vpaid:AdStopped"].forEach(function(e) {
                    return t.once(e, function() {
                        i.clearTimeouts()
                    })
                });
                t.on("AdDurationChange", this.updateInitialDuration.bind(this))
            }
            d()(e, [{
                key: "getDuration",
                value: function() {
                    this.recordInitialDuration();
                    return this.duration || this.backupDuration || 0
                }
            }, {
                key: "clearTimeouts",
                value: function() {
                    clearInterval(this.adRemainingTimeTimeout);
                    clearInterval(this.timeUpdateTimer)
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    var e = this.vpaidCreative.adRemainingTime && this.vpaidCreative.adRemainingTime();
                    if (e >= 0) {
                        this.recordInitialAdRemainingTime(e);
                        var t = this.getDuration();
                        return Rt(0, _t(t, t - e))
                    }
                    return 0
                }
            }, {
                key: "recordInitialAdRemainingTime",
                value: function(e) {
                    !this.backupDuration && e >= 0 && (this.backupDuration = e)
                }
            }, {
                key: "updateInitialDuration",
                value: function() {
                    var e = this.vpaidCreative.adDuration && this.vpaidCreative.adDuration();
                    e >= 0 && (this.duration = e)
                }
            }, {
                key: "recordInitialDuration",
                value: function() {
                    this.duration || this.updateInitialDuration()
                }
            }, {
                key: "getPercentComplete",
                value: function() {
                    var e = this.getDuration();
                    return e ? 100 * this.getCurrentTime() / e : 0
                }
            }]);
            return e
        }()
          , Dt = n(52)
          , Ot = function(e, t) {
            var n = new (0,
            Dt.c.MediaFile);
            Object.assign(n, e);
            n.uri = e.url;
            if (300 === e.width && 250 === e.height) {
                n.width = t.width();
                n.height = t.height()
            }
            return n
        }
          , Mt = function(e) {
            var t = e.mediaFile
              , n = e.campaignConfig
              , i = e.container
              , r = e.createExecutorMediaFile
              , o = void 0 === r ? Ot : r
              , a = Dt.c.VAST
              , d = Dt.c.InLine
              , u = Dt.c.Linear
              , c = Dt.c.Click
              , l = new a
              , s = new d
              , v = new u;
            v.mediaFiles.push(o(t, i));
            var p = new c;
            p.uri = n.clickThroughs.video.url;
            v.videoClicks.clickThrough = p;
            v.adParameters = n.adParameters;
            s.creatives.add(v);
            l.ads.add(s);
            return l
        };
        var Vt = function(e) {
            var t = e.campaignConfig
              , n = e.videoSlot;
            return "true" === t.tag_dbm_ias_fix ? {
                videoSlot: void 0,
                videoSlotCreationDisabled: !0
            } : {
                videoSlot: n,
                videoSlotCreationDisabled: !1
            }
        };
        function Nt(e) {
            var t = e.campaignConfig
              , n = e.mediaFile
              , i = e.container
              , r = e.videoSlot
              , o = e.adUnitContainer;
            return Object(Dt.a)([Mt({
                mediaFile: n,
                campaignConfig: t,
                container: o
            })], function(e) {
                var t = e.container
                  , n = e.videoSlotConfig;
                return {
                    minWidth: 0,
                    maxWidth: 1 / 0,
                    minHeight: 0,
                    maxHeight: 1 / 0,
                    minBitrate: 0,
                    maxBitrate: 1 / 0,
                    videoSlotCanAutoPlay: !0,
                    clickToResume: !0,
                    autoDisposeDisabled: !0,
                    pauseBeforeExecuteDisabled: !0,
                    videoSlotCreationDisabled: n.videoSlotCreationDisabled,
                    container: t,
                    videoSlot: n.videoSlot,
                    iframeProperties: {
                        id: "unruly_vpaid_container"
                    }
                }
            }({
                container: i,
                videoSlotConfig: Vt({
                    campaignConfig: t,
                    videoSlot: r
                })
            }))
        }
        var Ut = n(56)
          , Bt = n.n(Ut);
        function Ft(e) {
            return function(t) {
                return t.map(function(t) {
                    return t.type === e ? t.data : void 0
                })
            }
        }
        function Wt() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).vastChain;
            e = void 0 === e ? [] : e;
            var t = Bt()(e, 1)[0];
            return void 0 === t ? {} : t
        }
        var zt = Ft("VASTLoaderError");
        var Ht = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(e) {
                return t.reduce(function(e, t) {
                    return t(e)
                }, e)
            }
        }(Ft("message"), Ft("vastError"), function(e) {
            return e.map(function(e) {
                return new v.b(e.code,void 0,e.message)
            }).map(function(t) {
                var n = e.orElse({}).cause;
                n && (t.data = n);
                return t
            }).map(function(t) {
                return zt(e).map(Wt).map(function(e) {
                    return c()({}, t, {}, e)
                }).orElse(t)
            })
        });
        function jt(e) {
            var t = e.executor
              , n = e.width
              , i = e.height;
            return t.resize(n, i)
        }
        function Kt(e, t) {
            Object(l.c)(e).map(function(e) {
                var n, i, r = (n = function(e) {
                    try {
                        return "string" == typeof e ? JSON.parse(e) : e
                    } catch (e) {}
                    return e
                }(e)) && "object" === T()(n) ? n : {}, o = (i = r,
                Ht(Object(l.c)(i))).orElse(!1);
                o ? t.dispatchEvent("AdError", o) : t.dispatchEvent("AdLog", r)
            })
        }
        var qt = function(e, t) {
            for (var n in e)
                e.hasOwnProperty(n) && t(n)
        }
          , Qt = {
            map: function(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "addEventListener";
                qt(n, function(r) {
                    e[i](r, function(e) {
                        return t.dispatchEvent(n[r], e)
                    })
                })
            }
        };
        function Zt(e) {
            var t = e.executor
              , n = e.dispatcher
              , i = e.events;
            (void 0 === i ? Qt : i).map(t, n, {
                "vast:start": "playing",
                "vast:firstQuartile": "firstQuartile",
                "vast:midpoint": "midpoint",
                "vast:thirdQuartile": "thirdQuartile",
                "vast:complete": "ended",
                "vast:error": "error",
                "vpaid:AdError": "AdError",
                "vpaid:AdStopped": "AdStopped",
                didCancel: "AdStopped",
                clickThrough: "AdClickThru"
            }, "on")
        }
        var Jt = n(25)
          , Gt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Jt.a.getState();
            e._sessionId = t.sessionId
        };
        function Xt(e) {
            var t = e.mediaFile
              , n = e.campaignConfig
              , i = e.container
              , r = e.videoSlot
              , o = e.dispatcher
              , a = e.adUnitContainer
              , d = e.createZentrickExecutor
              , u = void 0 === d ? Nt : d
              , c = e.hookEventsBetweenDispatcherAndExecutor
              , l = void 0 === c ? Zt : c
              , s = e.resizeExecutorToAdUnitContainer
              , v = void 0 === s ? jt : s
              , p = e.convertToErrorOrLog
              , h = void 0 === p ? Kt : p
              , f = e.retrofitWindowWithZentrickParameters;
            (void 0 === f ? Gt : f)();
            var g = u({
                mediaFile: t,
                campaignConfig: n,
                container: i,
                videoSlot: r,
                adUnitContainer: a
            });
            l({
                executor: g,
                dispatcher: o
            });
            g.on("vast:start", function() {
                g.muted = !0;
                v({
                    executor: g,
                    width: a.width(),
                    height: a.height()
                })
            });
            g.on("vpaid:AdLog", function(e) {
                h(e, o)
            });
            return g
        }
        function Yt(e, t, n) {
            var i = n.createElement(e, t);
            n.reset(i);
            n.setImportant(i, {
                position: "absolute",
                width: "100%",
                height: "100%"
            });
            return i
        }
        var $t = function(e) {
            return function(t) {
                t.catchLocation = e;
                return Promise.reject(t)
            }
        }
          , en = function() {
            function e(t, n) {
                var i = t.adParameters
                  , r = t.clickThroughs
                  , a = t.tag_dbm_ias_fix
                  , d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : k.a
                  , u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ne.a;
                o()(this, e);
                if (!n)
                    throw new l.a("Element not provided");
                this.container = d(n);
                this.adParameters = i;
                this.clickthrough = r.video.url;
                this.muteOnPlay = "true" === a || !(!window.parent || !window.parent.context);
                this.hasExecuted = !1;
                this.dispatcher = new u(this);
                this.videoAdapterUpdate = null
            }
            d()(e, [{
                key: "supports",
                value: function() {
                    return {
                        ownQuartileTimer: function() {
                            return !0
                        },
                        ownCompletedViewTimer: function() {
                            return !1
                        },
                        clickThrough: function() {
                            return !1
                        }
                    }
                }
            }, {
                key: "load",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.b
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.a
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : b.a
                      , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Xt
                      , a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : xt
                      , d = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Lt
                      , u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Pt;
                    r.one("placement.addedtodom", function() {
                        e.executor.load().then(function() {
                            n.reset(s.a.document.getElementById("zentrickPlayer"));
                            e.dispatcher.dispatchEvent("readytoplay");
                            e.dispatcher.dispatchEvent("adimpression")
                        }, function() {})
                    });
                    this.videoEl = Yt("video", document, n);
                    this.videoEl = function(e) {
                        e.setAttribute("playsinline", "true");
                        e.muted = !0;
                        return e
                    }(this.videoEl);
                    var c = Yt("div", document, n);
                    n.setImportant(c, {
                        top: 0,
                        left: 0,
                        "z-index": 0
                    });
                    n.setImportant(this.videoEl, {
                        top: 0,
                        left: 0,
                        opacity: 1
                    });
                    this.container.prepend(c);
                    this.container.prepend(this.videoEl);
                    a(s.a, this.videoEl).then(function(n) {
                        e.videoAdapter = n;
                        u(i) && (e.videoAdapterUpdate = It(function() {
                            return e.videoAdapter.update()
                        }));
                        e.executor = o({
                            mediaFile: e.mediaFile,
                            campaignConfig: t,
                            container: c,
                            videoSlot: n,
                            dispatcher: e.dispatcher,
                            adUnitContainer: e.container
                        });
                        e.executor.on("willExecute", function() {
                            e.mute()
                        });
                        e.timingHelper = new d((r = e.executor,
                        {
                            once: function(e, t) {
                                r.once(e, t)
                            },
                            on: function(e, t) {
                                r.on(e, t)
                            },
                            adRemainingTime: function() {
                                return r.remainingTime
                            },
                            adDuration: function() {
                                return r.duration
                            }
                        }),e.dispatcher);
                        var r;
                        e.dispatcher.dispatchEvent("setupcomplete")
                    })
                }
            }, {
                key: "play",
                value: function() {
                    if (this.hasExecuted)
                        return this.executor.resume().catch($t("zentrickPlayer.play#resume"));
                    this.hasExecuted = !0;
                    this.muteOnPlay && this.mute();
                    return this.executor.execute().catch(function() {})
                }
            }, {
                key: "pause",
                value: function() {
                    return this.executor.pause().catch($t("zentrickPlayer.pause"))
                }
            }, {
                key: "paused",
                value: function() {
                    return this.executor.paused
                }
            }, {
                key: "skip",
                value: function() {
                    this.executor.cancel().catch($t("zentrickPlayer.skip"))
                }
            }, {
                key: "mute",
                value: function() {
                    this.executor.muted = !0;
                    this.executor.volume = 0
                }
            }, {
                key: "unmute",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.a
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pt
                      , i = "string" == typeof this.videoAdapter.src && this.videoAdapter.src.length > 0;
                    if (n(t) && !this.videoAdapter.armed && i)
                        return this.videoAdapterUpdate().then(function() {
                            if (e.videoAdapter.armed) {
                                e.executor.muted = !1;
                                e.executor.volume = 1
                            }
                        });
                    this.executor.muted = !1;
                    this.executor.volume = 1;
                    return Promise.resolve()
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.timingHelper ? this.timingHelper.getDuration() : 0
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.timingHelper ? this.timingHelper.getCurrentTime() : 0
                }
            }, {
                key: "getElapsedTime",
                value: function() {
                    var e = this.getDuration() - this.getCurrentTime();
                    return Math.round(e)
                }
            }]);
            return e
        }()
          , tn = function(e) {
            H()(t, e);
            function t(e, n, i) {
                var r, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : k.a, d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ne.a, u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : O;
                o()(this, t);
                (r = B()(this, W()(t).call(this, e, n, a, d))).mediaFile = u(e.mediaFiles);
                return r
            }
            d()(t, [{
                key: "getPlayerType",
                value: function() {
                    return Tt.ZENTRICK_JSVPAID
                }
            }]);
            return t
        }(en)
          , nn = function(e) {
            H()(t, e);
            function t(e, n, i) {
                var r, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : k.a, d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ne.a, u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : D;
                o()(this, t);
                (r = B()(this, W()(t).call(this, e, n, a, d))).mediaFile = u(e.mediaFiles);
                return r
            }
            d()(t, [{
                key: "getPlayerType",
                value: function() {
                    return Tt.ZENTRICK_MP4
                }
            }]);
            return t
        }(en);
        function rn(e, t, n) {
            var i, r, o, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, d = a.ErrorType, u = void 0 === d ? l.a : d, c = a.ZentrickPlayers, s = void 0 === c ? {
                ZentrickPlayerJSVPAID: tn,
                ZentrickPlayerMP4: nn
            } : c, v = a.initialiseQuartileTimer, p = void 0 === v ? Ct : v, f = a.completedViewTimerInitialiser, g = void 0 === f ? Et : f, m = a.trackActivate, E = void 0 === m ? y.f : m, A = (i = {},
            h()(i, Tt.ZENTRICK_JSVPAID, s.ZentrickPlayerJSVPAID),
            h()(i, Tt.ZENTRICK_MP4, s.ZentrickPlayerMP4),
            i);
            Tt.values().forEach(function(e) {
                o || n.supportsVideoPlayerType(e) && (o = A[e])
            });
            if (!o)
                throw new u("No compatible media file found",S.a.error.NO_COMPATIBLE_MEDIA_FILE_FOUND,{
                    mediaFiles: JSON.stringify(t.mediaFiles)
                });
            r = new o(t,e,n);
            E(S.a.COMPATIBLE_MEDIA_FILE, {
                player: r.getPlayerType(),
                mediaFile: JSON.stringify(r.mediaFile),
                mediaFiles: JSON.stringify(t.mediaFiles)
            });
            r.supports().ownQuartileTimer() || p();
            r.supports().ownCompletedViewTimer() || g();
            return r
        }
        var on = {
            LOOP: "loop",
            CLICK_THROUGH: "click_through",
            values: function() {
                return [this.LOOP, this.CLICK_THROUGH]
            }
        }
          , an = function(e) {
            H()(t, e);
            function t(e, n, i) {
                var r, a, d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, u = d.isMP4, c = void 0 === u ? _ : u, l = d.isJavascriptVPAID, s = void 0 === l ? R : l;
                o()(this, t);
                (a = B()(this, W()(t).call(this, e, n, i, {
                    isMP4: c,
                    isJavascriptVPAID: s
                }))).supportedPlayerFeatures = (r = {},
                h()(r, on.LOOP, !1),
                h()(r, on.CLICK_THROUGH, !0),
                r);
                return a
            }
            d()(t, [{
                key: "adType",
                value: function() {
                    return "inArticle"
                }
            }, {
                key: "supportsVideoCoverSizing",
                value: function() {
                    return !0
                }
            }]);
            return t
        }(function() {
            function e(t, n, i) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                  , a = r.isMP4
                  , d = void 0 === a ? _ : a
                  , u = r.isJavascriptVPAID
                  , c = void 0 === u ? R : u;
                o()(this, e);
                this.supportedVideoPlayers = {};
                this.supportedPlayerFeatures = {};
                this.supportedVideoPlayers[Tt.HTML5] = !1;
                this.supportedVideoPlayers[Tt.ZENTRICK_JSVPAID] = t.mediaFiles.some(c);
                this.supportedVideoPlayers[Tt.ZENTRICK_MP4] = t.mediaFiles.some(d)
            }
            d()(e, [{
                key: "supportsVideoPlayerType",
                value: function(e) {
                    return !!this.supportedVideoPlayers[e]
                }
            }, {
                key: "supportsVideoPlayerFeature",
                value: function(e) {
                    return !!this.supportedPlayerFeatures[e]
                }
            }]);
            return e
        }());
        function dn(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rn
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : an
              , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ke
              , o = (arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Q.a).setImportantStyle;
            if (!e)
                throw new l.a("No campaignConfig provided");
            var a = r('<div class="unruly_in_article_video_content_container">')
              , d = new i(e,t.width,t.height);
            o(a, {
                "background-color": "transparent"
            });
            return n(a, e, d)
        }
        function un(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , i = n.HorizontalInArticleAdSpace
              , r = void 0 === i ? ft : i
              , o = n.FullscreenInArticleAdSpace
              , a = void 0 === o ? Me : o
              , d = n.VerticalInArticleAdSpace
              , u = void 0 === d ? nt : d
              , c = n.PinnedInArticleAdSpace
              , s = void 0 === c ? tt : c
              , v = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
              , p = v.setupPlayer
              , h = void 0 === p ? dn : p
              , f = v.getMediaFileAspectRatio
              , g = void 0 === f ? M : f
              , m = v.enable
              , y = void 0 === m ? P.a : m
              , E = v.validate
              , A = void 0 === E ? rt : E;
            if (!e)
                throw new l.a("No campaignConfig provided");
            t.removeCloseButton = e.removeCloseButton;
            var b = h(e, t.basePlacementSize)
              , k = g(b.mediaFile);
            return A(function(e, t, n, i) {
                var r = i.HorizontalInArticleAdSpace
                  , o = i.FullscreenInArticleAdSpace
                  , a = i.VerticalInArticleAdSpace
                  , d = i.PinnedInArticleAdSpace;
                return n ? t.fullscreenInArticleSupported ? o : a : "true" === e.pinned ? d : r
            }(e, y, k < 1, {
                HorizontalInArticleAdSpace: r,
                FullscreenInArticleAdSpace: a,
                VerticalInArticleAdSpace: u,
                PinnedInArticleAdSpace: s
            }), y).then(function(n) {
                var i = new n(t,b);
                i.populate(e);
                return i
            })
        }
        var cn = function(e) {
            return 0 === e.trim().indexOf("<") ? "html" : "script"
        }
          , ln = function(e, t) {
            var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).getDisplayCreativeType;
            "script" === (void 0 === n ? cn : n)(e) ? function(e, t) {
                var n = t.createElement("script");
                n.innerHTML = e;
                t.body.appendChild(n)
            }(e, t) : function(e, t) {
                t.write(e)
            }(e, t)
        }
          , sn = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.ClickThroughIcon
              , i = void 0 === n ? ve : n
              , r = t.openWindow
              , o = void 0 === r ? Z : r
              , a = t.trackThirdParty
              , d = void 0 === a ? y.h : a
              , u = t.TrackingEvent
              , c = void 0 === u ? S.a : u
              , l = e.icons["unruly-opt-out"];
            return l ? new i(l,function() {
                d(c.PRIVACY_POLICY);
                o(l.clickThrough)
            }
            ).domElement : null
        }
          , vn = n(38)
          , pn = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.trackThirdParty
              , i = void 0 === n ? vn.a : n
              , r = t.TrackingEvent
              , o = void 0 === r ? S.a : r;
            return e.addEventListener("click", function() {
                i(o.BANNER_CLICK)
            })
        }
          , hn = n(72)
          , fn = function(e, t) {
            var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).replaceMacros
              , i = void 0 === n ? hn.replaceMacros : n
              , r = t.createElement("script");
            r.type = "text/javascript";
            r.src = i(e, "https://z.moatads.com/unrulydisplaygen728067510566/moatad.js#moatClientLevel1=%%level1%%&moatClientLevel2=%%level2%%&moatClientLevel3=%%level3%%&moatClientLevel4=%%level4%%&moatClientSlicer1=%%slicer1%%&moatClientSlicer2=%%slicer2%%&zMoatPD=%%slicer3%%");
            r.id = "moat-script";
            var o = t.createElement("noscript");
            o.className = i(e, "MOAT-unrulydisplaygen728067510566?moatClientLevel1=%%level1%%&amp;moatClientLevel2=%%level2%%&amp;moatClientLevel3=%%level3%%&amp;moatClientLevel4=%%level4%%&amp;moatClientSlicer1=%%slicer1%%&amp;moatClientSlicer2=%%slicer2%%&amp;zMoatPD=%%slicer3%%");
            o.id = "moat-noscript";
            t.body.appendChild(r);
            t.body.appendChild(o)
        }
          , gn = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.elementStyleReset
              , i = void 0 === n ? pe.a : n
              , r = t.styles
              , o = void 0 === r ? Q.a : r
              , a = t.publisherWindow
              , d = void 0 === a ? s.a : a
              , u = t.getDisclosureMessage
              , c = void 0 === u ? K : u
              , l = t.renderOptOutIcon
              , v = void 0 === l ? sn : l
              , p = t.injectDisplayCreative
              , h = void 0 === p ? ln : p
              , f = t.trackDisplayClickEvents
              , g = void 0 === f ? pn : f
              , m = t.injectMoatTags
              , y = void 0 === m ? fn : m
              , E = function() {
                var e;
                return (e = d.document).createElement.apply(e, arguments)
            }
              , A = E("div");
            i.resetStyles(A);
            A.className = "unruly_in_article_placement";
            o.setImportantStyle(A, {
                margin: "16px 0 0"
            });
            var b = E("div");
            b.className = "unruly_ia_disclosure";
            b.innerText = "–– ".concat(c(), " ––");
            i.resetStyles(b);
            o.setImportantStyle(b, {
                "font-family": "sans-serif",
                "font-size": "10px",
                "text-align": "center",
                "line-height": "22px",
                height: "22px",
                opacity: ".5"
            });
            var k = E("div");
            k.className = "unruly_ia_display_container";
            i.resetStyles(k);
            o.setImportantStyle(k, {
                width: "100%",
                height: "250px",
                "text-align": "center",
                display: "inline-block !important"

            });
            var C = E("iframe");
            C.src = "about:blank";
            C.className = "unruly_ia_display_creative_container";
            i.resetStyles(C);
            o.setImportantStyle(C, {
                width: "300px",
                height: "250px",
                border: "none",
                display: "inline-block !important"
            });
            var w = !1;
            C.addEventListener("load", function() {
                if (!w) {
                    w = !0;
                    var t = C.contentDocument;
                    h(e.adm, t);
                    e.viewability && e.viewability.Moat && y(e.viewability.Moat, t);
                    var n = v(e);
                    t.body.appendChild(n);
                    g(t.body);
                    var i = t.createElement("style");
                    i.innerHTML = "html, body { margin: 0 !important; padding: 0 !important; overflow: hidden !important }";
                    t.body.appendChild(i);
                    t.close()
                }
            });
            k.appendChild(C);
            A.appendChild(b);
            A.appendChild(k);
            return A
        }
          , mn = function() {
            var e = {};
            return {
                populate: function(t) {
                    var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).renderDisplayAd
                      , i = void 0 === n ? gn : n;
                    e.domElement = i(t)
                },
                inArticleContainer: e,
                getAdTypeName: function() {
                    return "inArticleDisplay"
                }
            }
        }
          , yn = function(e) {
            var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).inArticleDisplayAdSpace
              , n = (void 0 === t ? mn : t)();
            n.populate(e);
            return Promise.resolve(n)
        }
          , En = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.getContext
              , n = void 0 === t ? V.a : t
              , i = e.isAMP
              , r = void 0 === i ? V.b : i
              , o = e.publisherWindow;
            if (r(void 0 === o ? s.a : o)) {
                var a = n().getAMPContext();
                a && "function" == typeof a.renderStart && a.renderStart()
            }
        }
          , An = n(22)
          , bn = function(e) {
            return e && "VastError" === e.name
        }
          , kn = [[S.a.error.NO_ADS, function(e) {
            return bn(e) && 303 === e.code
        }
        ], [S.a.error.NO_COMPATIBLE_MEDIA_FILE_FOUND, function(e) {
            return bn(e) && 403 === e.code
        }
        ]];
        function Cn(e, t) {
            return "AdError" === e ? kn.reduce(function(e, n) {
                var i = Bt()(n, 2)
                  , r = i[0];
                return (0,
                i[1])(t) ? r : e
            }, S.a.error.AD_ERROR) : S.a.error.ERROR
        }
        function wn(e, t, n, i) {
            ["AdError", "error"].forEach(function(r) {
                e.player.dispatcher.addEventListener(r, function(e, o) {
                    var a = function(e, t, n, i) {
                        var r = t.apid
                          , o = t.cid
                          , a = t.crid;
                        return new l.a("In Article Error",i(n, e),Object.assign({
                            apid: r,
                            cid: o,
                            crid: a
                        }, function(e) {
                            return e && (e instanceof Error || e instanceof l.a || e instanceof v.b || e.message || e.data)
                        }(e) ? {
                            message: I(e.message),
                            data: I(e.data),
                            vastURL: I(e.uri)
                        } : {
                            data: I(e)
                        }))
                    }(o, t, r, i);
                    n(a)
                })
            })
        }
        function Tn(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : An.a
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {}
              , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Cn;
            return new Promise(function(n, o) {
                t.player.dispatcher.one("adimpression", function() {
                    return n()
                });
                wn(t, e, function(e) {
                    o(e)
                }, r);
                i()
            }
            ).then(function() {
                wn(t, e, function(e) {
                    n("Error", e.errorType, e.errorParams)
                }, r)
            })
        }
        var In = 16 / 9;
        function Sn(e) {
            var t = Math.floor(e.width());
            return {
                width: t,
                height: Math.floor(t / In)
            }
        }
        function Pn(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b.a
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : A;
            t.expandBeforePlayback ? n.one("player.readytoplay", function() {
                return i(s.a).then(e)
            }) : n.one("player.playing", e)
        }
        var xn = function(e) {
            (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.f)("ia_collapsed", e)
        };
        function _n(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , i = n.inArticleDisplayAdSpaceFactory
              , r = void 0 === i ? yn : i
              , o = n.inArticleAdSpaceFactory
              , a = void 0 === o ? un : o
              , d = n.getVideoSize
              , u = void 0 === d ? Sn : d
              , l = n.getAdLifecycleHooksViaPublisherAPI
              , s = void 0 === l ? m : l;
            return e.display ? r(e) : a(e, c()({}, s(), {
                onCollapseCallback: xn,
                basePlacement: t,
                basePlacementSize: u(t)
            }))
        }
        var Rn = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.create;
                o()(this, e);
                this.placementConfig = t;
                this.basePlacementSelector = t.config.format.inArticle.basePlacement.selector;
                this.basePlacement = n(this.basePlacementSelector);
                if (1 !== this.basePlacement.length)
                    throw new l.a("Cannot find base placement: ".concat(this.basePlacementSelector),S.a.error.NO_MATCHING_PLACEMENT);
                this.adType = "inArticle"
            }
            d()(e, [{
                key: "populate",
                value: function(e) {
                    var t = this
                      , n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).createAdSpace
                      , i = void 0 === n ? _n : n;
                    this.campaignConfig = e;
                    return i(e, this.basePlacement).then(function(n) {
                        return e.display ? t.populateDisplay(n, e) : t.populateVideo(n, e)
                    })
                }
            }, {
                key: "populateVideo",
                value: function(e, t) {
                    var n = this
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , r = i.setUpExpansion
                      , o = void 0 === r ? Pn : r
                      , a = i.subscribeToAdImpression
                      , d = void 0 === a ? Tn : a
                      , u = i.applyStylesUsingSelectors
                      , c = void 0 === u ? E.a : u
                      , l = i.trackActivate
                      , s = void 0 === l ? y.f : l
                      , v = i.eventBus
                      , p = void 0 === v ? b.a : v
                      , h = i.optionallyCallAMPRenderStart
                      , f = void 0 === h ? En : h;
                    return Promise.resolve(e).then(function(e) {
                        n.adSpace = e;
                        o(function() {
                            return n.adSpace.publishLifecycleEvent("onAdLoaded").then(function() {
                                f();
                                n.expand(s, p)
                            })
                        }, e.getProps());
                        return e
                    }).then(function(e) {
                        e.inArticleContainer.domElement.get(0).setAttribute("data-unruly-ad-type", e.getAdTypeName());
                        c(e.inArticleContainer.domElement.get(0), n.placementConfig.config.format.inArticle.styles);
                        n.basePlacement.append(e.inArticleContainer.domElement);
                        return e
                    }).then(function(e) {
                        t.placement = e.getAdType();
                        return e
                    }).then(function(e) {
                        return d(t, e)
                    }).then(function() {
                        return {
                            ad: n,
                            campaignConfig: t
                        }
                    })
                }
            }, {
                key: "populateDisplay",
                value: function(e, t) {
                    var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).applyStylesUsingSelectors
                      , i = void 0 === n ? E.a : n;
                    this.adSpace = e;
                    this.placementConfig.config.format && this.placementConfig.config.format.inArticle && this.placementConfig.config.format.inArticle.styles && i(e.inArticleContainer.domElement, this.placementConfig.config.format.inArticle.styles);
                    this.basePlacement.append(e.inArticleContainer.domElement);
                    return Promise.resolve({
                        ad: this,
                        campaignConfig: t
                    })
                }
            }, {
                key: "expand",
                value: function(e, t) {
                    this.adSpace.expand();
                    e("ia_expanded");
                    t.dispatchEvent("expanded")
                }
            }, {
                key: "getPlayerContainer",
                value: function() {
                    return this.adSpace.videoContainer
                }
            }, {
                key: "getPotentialVideoSize",
                value: function() {
                    return Sn(this.basePlacement)
                }
            }, {
                key: "getAdTypeName",
                value: function() {
                    return this.adSpace.getAdTypeName()
                }
            }]);
            return e
        }();
        function Ln(e) {
            if (e && e.config && e.config.format) {
                var t = Object.keys(e.config.format);
                return t.length > 0 ? t[0] : void 0
            }
        }
        function Dn(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.InArticleAd
              , i = void 0 === n ? Rn : n
              , r = t.getFormatName
              , o = void 0 === r ? Ln : r
              , a = t.UnrulyError
              , d = void 0 === a ? l.a : a
              , u = o(e);
            switch (u) {
            case "inArticle":
                return new i(e);
            default:
                throw new d("Unrecognised ad format '".concat(u, "'"))
            }
        }
        var On = n(20);
        function Mn(e) {
            var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.a).document.createElement("a");
            t.href = e;
            return t.hostname
        }
        function Vn() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.a
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mn;
            return {
                site: {
                    ref: e.context.referrer,
                    page: e.context.canonicalUrl,
                    domain: t(e.context.canonicalUrl)
                }
            }
        }
        function Nn() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.a
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mn;
            return {
                site: {
                    ref: e.document.referrer,
                    page: e.location.href,
                    domain: t(e.location.href)
                }
            }
        }
        var Un = function(e, t) {
            e(t);
            return t
        }
          , Bn = n(5)
          , Fn = function(e) {
            return function() {
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                    n[i] = arguments[i];
                return n.reduce(function(e, t) {
                    return e.then(function(e) {
                        return Promise.resolve(t(e))
                    })
                }, Promise.resolve(e))
            }
        }
          , Wn = function(e) {
            return e instanceof Error
        };
        var zn = {
            impression: S.a.IMP
        }
          , Hn = function(e) {
            return zn[e] || e
        }
          , jn = n(35);
        function Kn(e) {
            var t = {}
              , n = ["apid", "skid", "aid", "crid", "cid", "vid", "playThrough", "bidder_name", "demand_partner", "demand_source", "txid", "deal_id", "rtb_all_adomains", "rtb_adid", "rtb_crid", "rtb_seatid"];
            if (!e)
                return {};
            e.getExtensions().forEach(function(e) {
                e.getDetailsByPath("Property").forEach(function(e) {
                    -1 !== n.indexOf(e["@id"]) && (t[e["@id"]] = e.nodeValue)
                })
            });
            return t
        }
        function qn(e) {
            return void 0 === e || null === e || "number" == typeof e && 0 !== e && !e ? [] : Array.isArray(e) ? e : [e]
        }
        function Qn(e, t) {
            (function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , n = [];
                e.getExtensions().forEach(function(e) {
                    var i = e.getDetailsByPath(t + "CustomTrackingEvents.CustomTracking");
                    if (i) {
                        i.forEach(function(e) {
                            e.nodeValue = v.e.convertProtocol(e.nodeValue)
                        });
                        n = n.concat(i)
                    }
                });
                return n.filter(function(e) {
                    return v.e.isNonEmptyString(e.nodeValue)
                })
            }
            )(t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "").forEach(function(t) {
                var n = t["@event"];
                e.tracking[n] = function(e, t) {
                    e instanceof Array != 1 && (e = []);
                    return e.concat(t)
                }(e.tracking[n], t.nodeValue)
            })
        }
        function Zn(e) {
            var t = e.vastResponse
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jn.a.ensureProtocolPrefix
              , i = t.inline.VAST.Ad.InLine
              , r = i.AdTitle && i.AdTitle.nodeValue || ""
              , o = {
                skid: null,
                apid: null,
                adParameters: void 0,
                items: {
                    title: {
                        text: r
                    },
                    description: {
                        text: i.Description && i.Description.nodeValue || ""
                    },
                    disclosureMessage: {
                        text: "Advertisement"
                    },
                    thumbnail: {
                        attributes: {
                            alt: r,
                            title: r
                        }
                    }
                },
                clickThroughs: {
                    title: {},
                    thumbnail: {},
                    disclosureMessage: {},
                    expandedVideo: {},
                    video: {}
                },
                tracking: {},
                sharing: {}
            };
            !function(e, t) {
                var n = t.getNonLinearCreative();
                n && (e.items.thumbnail.attributes.src = n.getStaticResource() || "")
            }(o, t);
            !function(e, t, n) {
                var i = t.getLinearCreative();
                if (!i)
                    throw new l.a("There was no linear creative in the VAST",S.a.error.NO_LINEAR_CREATIVE);
                e.mediaFiles = i.getMediaFiles().map(function(e) {
                    return function(e, t) {
                        var n = e.type
                          , i = e.delivery
                          , r = e.url
                          , o = e.bitrate
                          , a = e.width
                          , d = e.height
                          , u = e.apiFramework;
                        return {
                            type: n,
                            delivery: i,
                            url: t(r),
                            bitrate: o,
                            width: a,
                            height: d,
                            apiFramework: u
                        }
                    }(e, n)
                });
                var r = i.getClickThrough();
                e.clickThroughs.expandedVideo.url = r;
                e.clickThroughs.thumbnail.url = r;
                e.clickThroughs.title.url = r;
                e.clickThroughs.disclosureMessage.url = r;
                e.clickThroughs.video.url = r;
                e.adParameters = i.getAdParameters();
                e.icons = i.getIcons()
            }(o, t, n);
            !function(e, t) {
                var n = t.inline.VAST.Ad.InLine;
                for (var i in S.a)
                    e.tracking[S.a[i]] = [];
                e.tracking[S.a.IMP] = t.getImpressions();
                if (t.linearCreative) {
                    ["creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "mute", "unmute", "pause", "rewind", "resume", "fullscreen", "exitFullscreen", "expand", "collapse", "acceptInvitationLinear", "closeLinear", "skip", "progress"].forEach(function(n) {
                        var i = e.tracking[n] || [];
                        e.tracking[n] = i.concat(t.linearCreative.getTrackingEvents(n))
                    });
                    var r = t.linearCreative.getAllClickTrackersAsMap()
                      , o = Object.keys
                      , a = function(e, t) {
                        return e.concat(r[t])
                    }
                      , d = function(e) {
                        return o(r).filter((t = e,
                        function(e) {
                            return e !== t
                        }
                        )).reduce(a, []);
                        var t
                    };
                    e.tracking[S.a.VIDEO_CLICK] = d(S.a.POST_VIDEO_CLICK);
                    e.tracking[S.a.POST_VIDEO_CLICK] = d(S.a.VIDEO_CLICK);
                    var u = t.linearCreative.getIcons()["unruly-opt-out"];
                    e.tracking[S.a.UNRULY_OPT_OUT_CLICK] = u ? u.clickTracking : []
                }
                Qn(e, t);
                t.wrappers.forEach(function(t) {
                    var n = t.VAST.Ad.Wrapper;
                    (n.Creatives && n.Creatives.Creative || []).filter(function(e) {
                        return e.NonLinearAds && e.NonLinearAds.NonLinear
                    }).forEach(function(t) {
                        qn(t.NonLinearAds.NonLinear.NonLinearClickTracking).forEach(function(t) {
                            e.tracking[S.a.CLICK] = e.tracking[S.a.CLICK].concat(t.nodeValue)
                        })
                    });
                    n.Extensions && n.Extensions.Extension && qn(n.Extensions.Extension).filter(function(e) {
                        return e.Property
                    }).forEach(function(t) {
                        qn(t.Property).forEach(function(t) {
                            e[t["@id"]] = t.nodeValue
                        })
                    })
                });
                n.Extensions && n.Extensions.Extension && qn(n.Extensions.Extension).forEach(function(t) {
                    t.SharingUrl && (e.sharing.sharingUrl = t.SharingUrl.nodeValue);
                    t.DisclosureMessage && (e.items.disclosureMessage.text = t.DisclosureMessage.nodeValue)
                })
            }(o, t);
            !function(e, t) {
                var n = t.inline.VAST.Ad.InLine;
                Qn(e, t, "UnrulyCreative.");
                n.Extensions && n.Extensions.Extension && qn(n.Extensions.Extension).filter(function(e) {
                    return e.UnrulyCreative
                }).forEach(function(t) {
                    qn(t.UnrulyCreative.Property).forEach(function(t) {
                        e[t["@id"]] = t.nodeValue
                    })
                })
            }(o, t);
            return o
        }
        var Jn, Gn = function(e) {
            var t = e.bid;
            return {
                items: {
                    disclosureMessage: {
                        text: "Advertisement"
                    }
                },
                tracking: t.ext.tracking,
                display: "inline-block !important"
                ,
                adm: t.adm,
                viewability: t.ext.viewability,
                w: 300,
                h: 250,
                icons: {
                    "unruly-opt-out": {
                        clickThrough: "https://rtb-privacy-policy.unrulymedia.com/index.html",
                        clickTracking: [],
                        height: 42,
                        width: 42,
                        program: "unruly-opt-out",
                        resource: {
                            type: "image/png",
                            url: "//video.unrulymedia.com/native/opt-out-icon2.png"
                        },
                        xPosition: "right",
                        yPosition: "bottom"
                    }
                }
            }
        }, Xn = n(74), Yn = function(e) {
            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xn)[e.apid] ? c()({}, e, {
                viewablePercentage: .75
            }) : e
        }, $n = n(17), ei = (Jn = {},
        h()(Jn, v.c.NO_ADS.code, S.a.error.NO_ADS),
        h()(Jn, v.c.GENERAL_WRAPPER_ERROR.code, S.a.error.NO_ADS),
        h()(Jn, v.c.VAST_SCHEMA_ERROR.code, S.a.error.AD_REQUEST_FAILED),
        h()(Jn, v.c.XML_PARSE_ERROR.code, S.a.error.AD_REQUEST_FAILED),
        h()(Jn, v.c.WRAPPER_URI_TIMEOUT.code, S.a.error.AD_REQUEST_FAILED),
        Jn);
        function ti(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Kn
              , n = ei[e.code] || S.a.error.ERROR
              , i = function(e, t) {
                if (!e.vastResponse)
                    return;
                var n = t(e.vastResponse);
                e.vastResponse.getLastVASTURL() && (n.vastURL = e.vastResponse.getLastVASTURL());
                return Object.keys(n).length > 0 ? n : void 0
            }(e, t);
            return new l.a(e.message,n,i)
        }
        function ni(e) {
            return "string" != typeof e ? "undefined" : 0 === e.trim().toLowerCase().indexOf("data") ? "DATA_URI" : e.length > 600 ? "URI_TOO_LONG" : e
        }
        var ii = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.trackActivate
              , n = void 0 === t ? y.f : t
              , r = e.extractApidSkidFromVastResponse
              , o = void 0 === r ? Kn : r
              , a = e.stopwatch
              , d = void 0 === a ? i.a : a
              , u = e.sanitiseVASTURI
              , l = void 0 === u ? ni : u;
            return {
                logStart: function(e) {
                    d.start("vast_" + e.requestNumber)
                },
                logEnd: function(e) {
                    d.stop("vast_" + e.requestNumber);
                    n(S.a.prefixed.VAST_REQUEST_X + e.requestNumber, c()({}, o(e.vastResponse), {
                        vast_url: l(e.uri)
                    }))
                }
            }
        };
        function ri(e) {
            var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).makeVASTRequestLogger
              , n = (void 0 === t ? ii : t)();
            e.addEventListener("requestStart", n.logStart);
            e.addEventListener("requestEnd", n.logEnd)
        }
        var oi = n(6)
          , ai = n(78)
          , di = n(16);
        function ui(e, t, n, i) {
            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}
              , o = r.getVideoSizeForAd
              , a = void 0 === o ? We.getForAd : o
              , d = r.getSerialisedPlacementTypes
              , u = void 0 === d ? q.b : d
              , l = r.getGitHash
              , s = void 0 === l ? di.c : l
              , v = r.getConsentParams
              , p = void 0 === v ? On.d : v
              , h = r.withSiteEnvironment
              , f = void 0 === h ? oi.a.withSiteEnvironment : h
              , g = r.enable
              , m = void 0 === g ? P.a : g
              , y = a(t)
              , E = Object.keys(y || {}).reduce(function(e, t) {
                e["video_".concat(t)] = y[t];
                return e
            }, {})
              , A = Object(ai.a)(c()({
                uuid: e.config.targetingUUID
            }, n, {}, p(), {}, E, {
                allowDisplay: m.allowDisplay
            }, u(e.config), {
                "unr.site.env": f()()["unr.site.env"],
                h: s()
            }));
            return "".concat(i, "?").concat(A)
        }
        var ci = function(e, t, n, i) {
            var r = (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}).buildAdCallUrl
              , o = void 0 === r ? ui : r;
            return function(r) {
                return c()({}, r, {
                    url: o(e, t, n, i.VAST_ENDPOINT)
                })
            }
        }
          , li = function() {
            return function(e) {
                return c()({}, e, {
                    corsCookieDomainBlacklist: ["cloud-video.unrulymedia.com", "video.unrulymedia.com", "test.corp.unrulymedia.com", "test.video.unrulymedia.com"]
                })
            }
        }
          , si = function(e, t) {
            return function(n) {
                return e.VAST_URL_OVERRIDE && t.__unrulyInArticleVASTURL ? c()({}, n, {
                    url: t.__unrulyInArticleVASTURL
                }) : n
            }
        }
          , vi = function(e) {
            return function(t) {
                return e.config && e.config.vastURL ? c()({}, t, {
                    url: e.config.vastURL
                }) : t
            }
        }
          , pi = n(21);
        function hi(e) {
            var t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jn.a, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.a, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pi.a;
            return function(e) {
                return e.getQueryParameterValue("unruly_override")
            }(i) || (t = o,
            (n = Object(j.b)(t)) && n.tagId ? n.tagId : null) || function(e, t) {
                var n = Object(j.b)(t);
                return n && n.placements && n.placements[e] && n.placements[e].tagId ? n.placements[e].tagId : null
            }(e, r)
        }
        var fi = function(e) {
            var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).getUnrulyOverride
              , n = void 0 === t ? hi : t;
            return function(t) {
                var i = n(e.config.placementId)
                  , r = t.headers ? c()({}, t.headers, {
                    "X-Unruly-Override": i
                }) : {
                    "X-Unruly-Override": i
                };
                return i ? c()({}, t, {
                    headers: r
                }) : t
            }
        }
          , gi = function(e) {
            return function(t) {
                return e.__unrulyInArticleVASTBody ? c()({}, t, {
                    httpMethod: "POST",
                    data: e.__unrulyInArticleVASTBody,
                    contentType: "application/xml"
                }) : t
            }
        }
          , mi = function(e, t, n, i, r, o) {
            var a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {}
              , d = a.logLegacyVASTRequests
              , u = void 0 === d ? ri : d
              , c = a.withOverrideHeaders
              , l = void 0 === c ? fi : c
              , v = a.withOptionalPOSTOverrides
              , p = void 0 === v ? gi : v
              , h = a.withVASTURL
              , f = void 0 === h ? ci : h
              , g = a.withCORSCookieDomainBlacklist
              , m = void 0 === g ? li : g
              , y = a.withOptionalVASTURLOverride
              , E = void 0 === y ? si : y
              , A = a.withOptionalPublisherConfigURLOverride
              , b = void 0 === A ? vi : A
              , k = a.publisherWindow
              , C = void 0 === k ? s.a : k;
            u(o);
            return Promise.resolve(e).then(f(t, n, i, r)).then(m()).then(E(r, C)).then(b(t)).then(l(t)).then(p(C)).then(o.requestVastChain)
        }
          , yi = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.publisherWindow
              , n = void 0 === t ? s.a : t
              , i = e.getPublisherConfiguration
              , r = void 0 === i ? j.b : i
              , o = n.__unrulyInArticleVASTBody
              , a = "prebid" === r().supplyMode;
            return o || a
        }
          , Ei = function(e, t, n, i) {
            var r = (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}).buildAdCallUrl
              , o = void 0 === r ? ui : r;
            return function(r) {
                return c()({}, r, {
                    url: o(e, t, n, i.OPENRTB_ENDPOINT)
                })
            }
        }
          , Ai = n(75)
          , bi = n.n(Ai)
          , ki = function(e) {
            var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).fetch
              , n = void 0 === t ? window.fetch : t
              , i = e.url
              , r = e.httpMethod
              , o = bi()(e, ["url", "httpMethod"])
              , a = r ? c()({}, o, {
                method: r,
                credentials: "include"
            }) : c()({}, o, {
                credentials: "include"
            });
            return i ? n(i, a).then(function(e) {
                if (204 === e.status) {
                    var t = new Error("Empty VAST Response");
                    t.code = 303;
                    t.name = "VastError";
                    return Promise.reject(t)
                }
                return e.json()
            }) : Promise.reject(new Error("Missing VAST config URL."))
        }
          , Ci = function(e) {
            return (new DOMParser).parseFromString(e, "application/xml")
        }
          , wi = function(e, t) {
            var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).stringToXML
              , i = void 0 === n ? Ci : n
              , r = e.adm;
            return c()({}, t, {
                url: void 0,
                vastBody: i(r),
                vastBodyUrl: t.url
            })
        }
          , Ti = function(e, t) {
            var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).bidToVASTConfig
              , i = void 0 === n ? wi : n;
            if (!e.ext.creativeformat)
                throw new Error("Creative format is not present");
            var r = "JS/HTML"
              , o = "VAST";
            switch (e.ext.creativeformat) {
            case r:
                return e;
            case o:
            default:
                return i(e, t)
            }
        }
          , Ii = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.makeOpenRTBAdCall
              , i = void 0 === n ? ki : n
              , r = t.returnBidOrVASTConfig
              , o = void 0 === r ? Ti : r;
            return i(e).then(function(e) {
                return function(e) {
                    if (!(e && e.seatbid && e.seatbid[0]))
                        throw new Error("Invalid Bid Response");
                    return e && e.seatbid && e.seatbid[0].bid[0]
                }(e)
            }).then(function(t) {
                return o(t, e)
            })
        }
          , Si = function(e) {
            var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).makeVASTRequestLogger
              , n = (void 0 === t ? ii : t)();
            n.logStart({
                requestNumber: 0
            });
            e.addEventListener("requestStart", function(e) {
                0 === e.requestNumber || n.logStart(e)
            });
            e.addEventListener("requestEnd", function(e) {
                n.logEnd(e)
            })
        }
          , Pi = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.getOpenRTBDemand
              , i = void 0 === n ? Ii : n
              , r = t.logOpenRTBRequests
              , o = void 0 === r ? Si : r;
            return function(t) {
                o(e);
                return i(t).then(function(t) {
                    return !("adm"in t) ? e.requestVastChain(t) : t
                })
            }
        }
          , xi = function(e, t, n, i, r, o) {
            var a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {}
              , d = a.withOpenRTBURL
              , u = void 0 === d ? Ei : d
              , c = a.makeOpenRTBRequest
              , l = void 0 === c ? Pi : c
              , v = a.withCORSCookieDomainBlacklist
              , p = void 0 === v ? li : v
              , h = a.withOptionalVASTURLOverride
              , f = void 0 === h ? si : h
              , g = a.publisherWindow
              , m = void 0 === g ? s.a : g
              , y = a.withOverrideHeaders
              , E = void 0 === y ? fi : y;
            return Promise.resolve(e).then(u(t, n, i, r)).then(p()).then(f(r, m)).then(E(t)).then(l(o))
        };
        function _i(e, t, n, i) {
            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}
              , o = r.vastErrorMapper
              , a = void 0 === o ? ti : o
              , d = r.getVASTDemand
              , u = void 0 === d ? mi : d
              , c = r.isLegacyVASTEndpointDemand
              , l = void 0 === c ? yi : c
              , s = r.getOpenRTBDemand
              , v = void 0 === s ? xi : s
              , p = r.env
              , h = void 0 === p ? {
                VAST_URL_OVERRIDE: $n.h,
                VAST_ENDPOINT: $n.g,
                OPENRTB_ENDPOINT: $n.b
            } : p;
            return Promise.resolve({}).then(function(r) {
                return l() ? u(r, e, t, n, h, i) : v(r, e, t, n, h, i)
            }).catch(function(e) {
                throw a(e)
            })
        }
        function Ri(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.trackActivate
              , r = void 0 === n ? y.f : n
              , o = t.trackThirdParty
              , a = void 0 === o ? vn.a : o
              , d = t.startStopWatch
              , u = void 0 === d ? i.a.start : d;
            e.display ? a(S.a.CREATIVE_RECEIVED) : r(S.a.CREATIVE_RECEIVED);
            u("ad_render");
            return e
        }
        var Li = new v.a
          , Di = function(e) {
            return function e(t) {
                if ("function" == typeof t)
                    try {
                        return e(t())
                    } catch (e) {
                        return Promise.reject(e)
                    }
                return !t || Wn(t) ? Promise.reject(t) : Promise.resolve(t)
            }(!!(e && e.config && e.config.targetingUUID)).catch(function() {
                throw {
                    type: S.a.error.SKIN_SETUP_FAILED,
                    message: "no targeting uuid in skin"
                }
            })
        }
          , Oi = function(e) {
            return Promise.all([Di(e)])
        };
        function Mi(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , i = n.enrichParametersFromPlacement
              , r = void 0 === i ? y.a : i
              , o = n.trackActivate
              , a = void 0 === o ? y.f : o
              , d = n.getConsentParams
              , u = void 0 === d ? On.d : d;
            a(S.a.ADCALL, r(c()({
                site: t.site
            }, u()), e.config));
            return t
        }
        function Vi(e) {
            var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.b.getCustomTracking)();
            return Object.keys(t).map(function(e) {
                return {
                    eventName: Hn(e),
                    customTrackingUrls: t[e]
                }
            }).reduce(function(e, t) {
                var n, i = t.eventName, r = t.customTrackingUrls;
                (n = {
                    object: e.tracking,
                    key: i
                }).object[n.key] || (n.object[n.key] = []);
                e.tracking[i] = [].concat(Ne()(e.tracking[i]), Ne()(r));
                return e
            }, e)
        }
        var Ni = function(e) {
            return e instanceof v.d
        };
        function Ui(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.transformVASTToCampaignConfig
              , i = void 0 === n ? Zn : n
              , r = t.transformBidToCampaignConfig
              , o = void 0 === r ? Gn : r;
            return Ni(e) ? i({
                vastResponse: e
            }) : o({
                bid: e
            })
        }
        var Bi = function() {
            return function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V.b
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vn
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nn;
                return e(window) ? t() : n()
            }()
        };
        function Fi(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mi;
            return function(n) {
                return t(e, n)
            }
        }
        function Wi(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _i
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Li;
            return function(r) {
                return n(e, t, r, i)
            }
        }
        function zi(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , i = n.registerCampaignConfig
              , r = void 0 === i ? y.d : i
              , o = n.chain
              , a = void 0 === o ? Fn : o
              , d = n.createAdCallTracker
              , u = void 0 === d ? Fi : d
              , c = n.fetchDemand
              , l = void 0 === c ? Wi : c
              , s = n.apply75PercentOverrides
              , v = void 0 === s ? Yn : s
              , p = n.supplyMode
              , h = void 0 === p ? Object(j.b)(Object(Bn.a)()).supplyMode : p
              , f = n.trackCreativeReceived
              , g = void 0 === f ? Ri : f;
            return a(e)(Oi, Bi, "prebid" === h ? function(e) {
                return e
            }
            : u(e), l(e, t), Ui, v, Vi, function(e) {
                return Un(r, e)
            }, g)
        }
        var Hi = function(e) {
            var t = e.campaignConfig
              , n = e.getGitHash
              , r = void 0 === n ? di.c : n
              , o = e.stopwatch
              , a = void 0 === o ? i.a : o;
            return {
                sampleRate: .05,
                eventCategory: "terrax",
                dimensions: [r(), t.pid, t.bidder_name, t.rtb_crid, t.rtb_adid],
                vastLoadTime: a.getTime("vast_0")
            }
        }
          , ji = function(e) {
            var t = e.campaignConfig
              , n = e.initialiseZentrickDiagnostics
              , i = void 0 === n ? Dt.b : n
              , r = e.buildZentrickDiagnostics;
            i((void 0 === r ? Hi : r)({
                campaignConfig: t
            }))
        }
          , Ki = function(e, t) {
            var n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            return function(e, t, n) {
                return t.filter(function(t) {
                    return -1 !== t.name.indexOf(e)
                }).map(function(e) {
                    return n.reduce(function(t, n) {
                        t[n] = e[n];
                        return t
                    }, {
                        name: e.name
                    })
                })
            }(e, (n = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window).performance
            }(t)) ? n.getEntries() : [], i)
        }
          , qi = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ki
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pi.a
              , n = ["duration", "connectStart", "connectEnd", "domainLookupStart", "domainLookupEnd", "requestStart", "responseStart", "responseEnd"];
            return e($n.c, t, n).reduce(function(e, t, i) {
                n.forEach(function(n) {
                    e["prebid_exchange_request_".concat(i, "_").concat(n)] = t[n]
                });
                return e
            }, {})
        }
          , Qi = function(e) {
            return "inArticleDisplay" === e ? S.a.LOADED : S.a.PP_IMP
        };
        function Zi() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.windowScope
              , r = void 0 === n ? Object(Bn.a)() : n
              , o = t.stopwatch
              , a = void 0 === o ? i.a : o
              , d = t.trackThirdParty
              , u = void 0 === d ? y.h : d
              , l = t.getPublisherConfiguration
              , s = void 0 === l ? j.b : l
              , v = t.getPrebidRequestProperties
              , p = void 0 === v ? qi : v
              , h = t.getImpressionEventName
              , f = void 0 === h ? Qi : h;
            a.stop("ad_render");
            var g = "prebid" === (s(r) || {}).supplyMode ? p() : {}
              , m = c()({}, g, {}, {
                adFormat: e
            });
            u(f(e), m)
        }
        n.d(t, "populatePlacement", function() {
            return Ji
        });
        function Ji(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.trackImpression
              , r = void 0 === n ? Zi : n
              , o = t.adFactory
              , a = void 0 === o ? Dn : o
              , d = t.getCampaignConfig
              , u = void 0 === d ? zi : d
              , c = t.stopwatch
              , l = void 0 === c ? i.a : c
              , s = t.initialiseDiagnostics
              , v = void 0 === s ? ji : s
              , p = t.eventBus
              , h = void 0 === p ? b.a : p
              , f = a(e);
            l.start("adAge");
            return Promise.resolve().then(function() {
                return u(e, f)
            }).then(function(e) {
                v({
                    campaignConfig: e
                });
                h.dispatchEvent("populateAd", f);
                return f.populate(e)
            }).then(function(e) {
                var t = e.ad
                  , n = t && t.getAdTypeName ? t.getAdTypeName() : "";
                r(n)
            })
        }
    }
}]);
//# sourceMappingURL=https://test.corp.unrulymedia.com/native/sourcemaps/chunks/chunk-populatePlacement-f4ef79eab565c749186c.js.map

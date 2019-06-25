(function(modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: false
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.loaded = true;
        return module.exports
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "/scripts/dist/";
    return __webpack_require__(0)
})([function(module, exports, __webpack_require__) {
    "use strict";
    var _getBaseUrl = __webpack_require__(1);
    var _getBaseUrl2 = _interopRequireDefault(_getBaseUrl);
    var _getQueryParams2 = __webpack_require__(2);
    var _getQueryParams3 = _interopRequireDefault(_getQueryParams2);
    var _createWidgets = __webpack_require__(3);
    var _createWidgets2 = _interopRequireDefault(_createWidgets);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }
    var baseUrl = (0, _getBaseUrl2.default)({
        project: "events"
    });
    var _getQueryParams = (0, _getQueryParams3.default)(),
        agendaPath = _getQueryParams.agendaPath;
    var agendaPathDecoded = agendaPath ? decodeURIComponent(agendaPath) : "";
    var location = encodeURIComponent(document.location);
    (0, _createWidgets2.default)('div[name="bizzabo-web-agenda"]', function(element) {
        var uniqueName = element.getAttribute("data-unique-name");
        var params = window.location.search.substring(1);
        var paramArr = ["widget=true", "url=" + location];
        if (params) {
            paramArr.push(params)
        }
        return {
            label: "agenda",
            src: baseUrl + "/" + uniqueName + "/agenda/" + agendaPathDecoded + "?" + paramArr.join("&"),
            resizer: {
                heightCalculationMethod: "taggedElement",
                minHeight: 700
            },
            attrs: {
                frameborder: "0",
                allowtransparency: "true",
                width: "100%"
            },
            styles: {
                width: "100%",
                overflow: "hidden",
                backgroundColor: "transparent"
            }
        }
    })
}, function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var findScriptDefault = function findScriptDefault() {
        return document.currentScript
    };
    var findScriptBySrc = function findScriptBySrc() {
        return document.querySelector('script[src*="organizer.bizzabo.com/widgets"]')
    };
    var findCurrentScript = function findCurrentScript() {
        return findScriptDefault() || findScriptBySrc()
    };
    var getEnvironmentFromScript = function getEnvironmentFromScript(project, script) {
        var src = script.getAttribute("src");
        var parts = src.match(/^http(s?):\/\/((\w+)-)?organizer\.bizzabo\.com\b/);
        if (parts) {
            var prefix = parts[3] ? parts[3] + "-" : "";
            var envPart = parts ? prefix : null;
            return "https://" + envPart + project + ".bizzabo.com"
        } else {
            var partsKube = src.match(/^http(s?):\/\/((.+)-)?organizer(\.[\w]+)\.dev\.bizzabo\.com\b/);
            var _prefix = partsKube[3] ? partsKube[3] + "-" : "";
            var _envPart = partsKube ? _prefix : null;
            var extPart = partsKube[4];
            return "https://" + _envPart + project + extPart + ".dev.bizzabo.com"
        }
    };
    var getEnvironment = function getEnvironment(project) {
        var script = findCurrentScript();
        if (!script) {
            return null
        }
        return getEnvironmentFromScript(project, script) || null
    };
    var getBaseUrl = function getBaseUrl(_ref) {
        var project = _ref.project;
        return getEnvironment(project)
    };
    exports.default = getBaseUrl
}, function(module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _slicedToArray = function() {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;
            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break
                }
            } catch (err) {
                _d = true;
                _e = err
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]()
                } finally {
                    if (_d) throw _e
                }
            }
            return _arr
        }
        return function(arr, i) {
            if (Array.isArray(arr)) {
                return arr
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i)
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }
    }();
    exports.default = function() {
        var queryString = window.location.search.substring(1);
        var params = {};
        var queries = queryString.split("&");
        for (var i = 0, l = queries.length; i < l; i++) {
            var _queries$i$split = queries[i].split("="),
                _queries$i$split2 = _slicedToArray(_queries$i$split, 2),
                key = _queries$i$split2[0],
                value = _queries$i$split2[1];
            params[key] = value
        }
        return params
    }
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                }
            }
        }
        return target
    };
    var _iframeResizer = __webpack_require__(4);
    var _iframeResizer2 = _interopRequireDefault(_iframeResizer);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        }
    }
    var uid = function uid() {
        return Math.floor(Math.random() * 1e9).toString(36)
    };
    var createMessageCallback = function createMessageCallback(_ref) {
        var element = _ref.element,
            afterScroll = _ref.afterScroll,
            onMessage = _ref.onMessage;
        return function(messageData) {
            if (messageData.message === "scrollToTop") {
                setTimeout(function() {
                    element && element.scrollIntoView(true);
                    afterScroll && afterScroll()
                }, 0);
                return
            }
            if (messageData.message === "communityIframeShouldResize") {
                var _ref2 = messageData || {},
                    _ref2$iframe = _ref2.iframe;
                _ref2$iframe = _ref2$iframe === undefined ? {} : _ref2$iframe;
                var _ref2$iframe$style = _ref2$iframe.style,
                    style = _ref2$iframe$style === undefined ? {} : _ref2$iframe$style,
                    _ref2$iframe$iFrameRe = _ref2$iframe.iFrameResizer,
                    iFrameResizer = _ref2$iframe$iFrameRe === undefined ? {} : _ref2$iframe$iFrameRe;
                style.height = "700px";
                style["max-height"] = "100vh";
                iFrameResizer.resize();
                return
            }
            onMessage && onMessage(messageData)
        }
    };
    var attachWidgetIframe = function attachWidgetIframe(_ref3) {
        var src = _ref3.src,
            element = _ref3.element,
            _ref3$resizer = _ref3.resizer,
            resizer = _ref3$resizer === undefined ? {} : _ref3$resizer,
            _ref3$label = _ref3.label,
            label = _ref3$label === undefined ? null : _ref3$label,
            afterScroll = _ref3.afterScroll,
            _ref3$attrs = _ref3.attrs,
            attrs = _ref3$attrs === undefined ? {} : _ref3$attrs,
            _ref3$styles = _ref3.styles,
            styles = _ref3$styles === undefined ? {} : _ref3$styles,
            _ref3$onMessage = _ref3.onMessage,
            onMessage = _ref3$onMessage === undefined ? null : _ref3$onMessage;
        element.setAttribute("data-done", "done");
        element.style.width = "100%";
        element.style.overflow = "hidden";
        var iframe = document.createElement("IFRAME");
        Object.keys(attrs).forEach(function(key) {
            return iframe.setAttribute(key, attrs[key])
        });
        Object.keys(styles).forEach(function(key) {
            return iframe.style[key] = styles[key]
        });
        iframe.setAttribute("src", src);
        element.appendChild(iframe);
        var id = "Bizzabo-iFrameResizer-" + (label ? label + "-" : "") + uid();
        (0, _iframeResizer2.default)(_extends({
            id: id,
            messageCallback: createMessageCallback({
                element: element,
                afterScroll: afterScroll,
                onMessage: onMessage
            }),
            checkOrigin: false
        }, resizer), iframe);
        return iframe
    };
    var createWidgets = function createWidgets(selectors, configCreator) {
        selectors = typeof selectors === "string" ? [selectors] : selectors;
        for (var i = 0; i < selectors.length; i++) {
            var selector = selectors[i];
            var elements = document.querySelectorAll(selector + ":not([data-done])");
            for (var _i = 0; _i < elements.length; _i++) {
                var element = elements[_i];
                var iframeConfig = configCreator(element);
                attachWidgetIframe(_extends({}, iframeConfig, {
                    element: element
                }))
            }
        }
    };
    exports.default = createWidgets
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(undefined) {
        "use strict";
        if (typeof window === "undefined") return;
        var count = 0,
            logEnabled = false,
            hiddenCheckEnabled = false,
            msgHeader = "message",
            msgHeaderLen = msgHeader.length,
            msgId = "[iFrameSizer]",
            msgIdLen = msgId.length,
            pagePosition = null,
            requestAnimationFrame = window.requestAnimationFrame,
            resetRequiredMethods = {
                max: 1,
                scroll: 1,
                bodyScroll: 1,
                documentElementScroll: 1
            },
            settings = {},
            timer = null,
            logId = "Host Page",
            defaults = {
                autoResize: true,
                bodyBackground: null,
                bodyMargin: null,
                bodyMarginV1: 8,
                bodyPadding: null,
                checkOrigin: true,
                inPageLinks: false,
                enablePublicMethods: true,
                heightCalculationMethod: "bodyOffset",
                id: "iFrameResizer",
                interval: 32,
                log: false,
                maxHeight: Infinity,
                maxWidth: Infinity,
                minHeight: 0,
                minWidth: 0,
                resizeFrom: "parent",
                scrolling: false,
                sizeHeight: true,
                sizeWidth: false,
                warningTimeout: 5e3,
                tolerance: 0,
                widthCalculationMethod: "scroll",
                closedCallback: function() {},
                initCallback: function() {},
                messageCallback: function() {
                    warn("MessageCallback function not defined")
                },
                resizedCallback: function() {},
                scrollCallback: function() {
                    return true
                }
            };

        function addEventListener(obj, evt, func) {
            if ("addEventListener" in window) {
                obj.addEventListener(evt, func, false)
            } else if ("attachEvent" in window) {
                obj.attachEvent("on" + evt, func)
            }
        }

        function removeEventListener(el, evt, func) {
            if ("removeEventListener" in window) {
                el.removeEventListener(evt, func, false)
            } else if ("detachEvent" in window) {
                el.detachEvent("on" + evt, func)
            }
        }

        function setupRequestAnimationFrame() {
            var vendors = ["moz", "webkit", "o", "ms"],
                x;
            for (x = 0; x < vendors.length && !requestAnimationFrame; x += 1) {
                requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"]
            }
            if (!requestAnimationFrame) {
                log("setup", "RequestAnimationFrame not supported")
            }
        }

        function getMyID(iframeId) {
            var retStr = "Host page: " + iframeId;
            if (window.top !== window.self) {
                if (window.parentIFrame && window.parentIFrame.getId) {
                    retStr = window.parentIFrame.getId() + ": " + iframeId
                } else {
                    retStr = "Nested host page: " + iframeId
                }
            }
            return retStr
        }

        function formatLogHeader(iframeId) {
            return msgId + "[" + getMyID(iframeId) + "]"
        }

        function isLogEnabled(iframeId) {
            return settings[iframeId] ? settings[iframeId].log : logEnabled
        }

        function log(iframeId, msg) {
            output("log", iframeId, msg, isLogEnabled(iframeId))
        }

        function info(iframeId, msg) {
            output("info", iframeId, msg, isLogEnabled(iframeId))
        }

        function warn(iframeId, msg) {
            output("warn", iframeId, msg, true)
        }

        function output(type, iframeId, msg, enabled) {
            if (true === enabled && "object" === typeof window.console) {
                console[type](formatLogHeader(iframeId), msg)
            }
        }

        function iFrameListener(event) {
            function resizeIFrame() {
                function resize() {
                    setSize(messageData);
                    setPagePosition(iframeId);
                    callback("resizedCallback", messageData)
                }
                ensureInRange("Height");
                ensureInRange("Width");
                syncResize(resize, messageData, "init")
            }

            function processMsg() {
                var data = msg.substr(msgIdLen).split(":");
                return {
                    iframe: settings[data[0]] && settings[data[0]].iframe,
                    id: data[0],
                    height: data[1],
                    width: data[2],
                    type: data[3]
                }
            }

            function ensureInRange(Dimension) {
                var max = Number(settings[iframeId]["max" + Dimension]),
                    min = Number(settings[iframeId]["min" + Dimension]),
                    dimension = Dimension.toLowerCase(),
                    size = Number(messageData[dimension]);
                log(iframeId, "Checking " + dimension + " is in range " + min + "-" + max);
                if (size < min) {
                    size = min;
                    log(iframeId, "Set " + dimension + " to min value")
                }
                if (size > max) {
                    size = max;
                    log(iframeId, "Set " + dimension + " to max value")
                }
                messageData[dimension] = "" + size
            }

            function isMessageFromIFrame() {
                function checkAllowedOrigin() {
                    function checkList() {
                        var i = 0,
                            retCode = false;
                        log(iframeId, "Checking connection is from allowed list of origins: " + checkOrigin);
                        for (; i < checkOrigin.length; i++) {
                            if (checkOrigin[i] === origin) {
                                retCode = true;
                                break
                            }
                        }
                        return retCode
                    }

                    function checkSingle() {
                        var remoteHost = settings[iframeId] && settings[iframeId].remoteHost;
                        log(iframeId, "Checking connection is from: " + remoteHost);
                        return origin === remoteHost
                    }
                    return checkOrigin.constructor === Array ? checkList() : checkSingle()
                }
                var origin = event.origin,
                    checkOrigin = settings[iframeId] && settings[iframeId].checkOrigin;
                if (checkOrigin && "" + origin !== "null" && !checkAllowedOrigin()) {
                    throw new Error("Unexpected message received from: " + origin + " for " + messageData.iframe.id + ". Message was: " + event.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.")
                }
                return true
            }

            function isMessageForUs() {
                return msgId === ("" + msg).substr(0, msgIdLen) && msg.substr(msgIdLen).split(":")[0] in settings
            }

            function isMessageFromMetaParent() {
                var retCode = messageData.type in {
                    true: 1,
                    false: 1,
                    undefined: 1
                };
                if (retCode) {
                    log(iframeId, "Ignoring init message from meta parent page")
                }
                return retCode
            }

            function getMsgBody(offset) {
                return msg.substr(msg.indexOf(":") + msgHeaderLen + offset)
            }

            function forwardMsgFromIFrame(msgBody) {
                log(iframeId, "MessageCallback passed: {iframe: " + messageData.iframe.id + ", message: " + msgBody + "}");
                callback("messageCallback", {
                    iframe: messageData.iframe,
                    message: JSON.parse(msgBody)
                });
                log(iframeId, "--")
            }

            function getPageInfo() {
                var bodyPosition = document.body.getBoundingClientRect(),
                    iFramePosition = messageData.iframe.getBoundingClientRect();
                return JSON.stringify({
                    iframeHeight: iFramePosition.height,
                    iframeWidth: iFramePosition.width,
                    clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                    clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                    offsetTop: parseInt(iFramePosition.top - bodyPosition.top, 10),
                    offsetLeft: parseInt(iFramePosition.left - bodyPosition.left, 10),
                    scrollTop: window.pageYOffset,
                    scrollLeft: window.pageXOffset
                })
            }

            function sendPageInfoToIframe(iframe, iframeId) {
                function debouncedTrigger() {
                    trigger("Send Page Info", "pageInfo:" + getPageInfo(), iframe, iframeId)
                }
                debouce(debouncedTrigger, 32)
            }

            function startPageInfoMonitor() {
                function setListener(type, func) {
                    function sendPageInfo() {
                        if (settings[id]) {
                            sendPageInfoToIframe(settings[id].iframe, id)
                        } else {
                            stop()
                        }
                    }["scroll", "resize"].forEach(function(evt) {
                        log(id, type + evt + " listener for sendPageInfo");
                        func(window, evt, sendPageInfo)
                    })
                }

                function stop() {
                    setListener("Remove ", removeEventListener)
                }

                function start() {
                    setListener("Add ", addEventListener)
                }
                var id = iframeId;
                start();
                if (settings[id]) {
                    settings[id].stopPageInfo = stop
                }
            }

            function stopPageInfoMonitor() {
                if (settings[iframeId] && settings[iframeId].stopPageInfo) {
                    settings[iframeId].stopPageInfo();
                    delete settings[iframeId].stopPageInfo
                }
            }

            function checkIFrameExists() {
                var retBool = true;
                if (null === messageData.iframe) {
                    warn(iframeId, "IFrame (" + messageData.id + ") not found");
                    retBool = false
                }
                return retBool
            }

            function getElementPosition(target) {
                var iFramePosition = target.getBoundingClientRect();
                getPagePosition(iframeId);
                return {
                    x: Math.floor(Number(iFramePosition.left) + Number(pagePosition.x)),
                    y: Math.floor(Number(iFramePosition.top) + Number(pagePosition.y))
                }
            }

            function scrollRequestFromChild(addOffset) {
                function reposition() {
                    pagePosition = newPosition;
                    scrollTo();
                    log(iframeId, "--")
                }

                function calcOffset() {
                    return {
                        x: Number(messageData.width) + offset.x,
                        y: Number(messageData.height) + offset.y
                    }
                }

                function scrollParent() {
                    if (window.parentIFrame) {
                        window.parentIFrame["scrollTo" + (addOffset ? "Offset" : "")](newPosition.x, newPosition.y)
                    } else {
                        warn(iframeId, "Unable to scroll to requested position, window.parentIFrame not found")
                    }
                }
                var offset = addOffset ? getElementPosition(messageData.iframe) : {
                        x: 0,
                        y: 0
                    },
                    newPosition = calcOffset();
                log(iframeId, "Reposition requested from iFrame (offset x:" + offset.x + " y:" + offset.y + ")");
                if (window.top !== window.self) {
                    scrollParent()
                } else {
                    reposition()
                }
            }

            function scrollTo() {
                if (false !== callback("scrollCallback", pagePosition)) {
                    setPagePosition(iframeId)
                } else {
                    unsetPagePosition()
                }
            }

            function findTarget(location) {
                function jumpToTarget() {
                    var jumpPosition = getElementPosition(target);
                    log(iframeId, "Moving to in page link (#" + hash + ") at x: " + jumpPosition.x + " y: " + jumpPosition.y);
                    pagePosition = {
                        x: jumpPosition.x,
                        y: jumpPosition.y
                    };
                    scrollTo();
                    log(iframeId, "--")
                }

                function jumpToParent() {
                    if (window.parentIFrame) {
                        window.parentIFrame.moveToAnchor(hash)
                    } else {
                        log(iframeId, "In page link #" + hash + " not found and window.parentIFrame not found")
                    }
                }
                var hash = location.split("#")[1] || "",
                    hashData = decodeURIComponent(hash),
                    target = document.getElementById(hashData) || document.getElementsByName(hashData)[0];
                if (target) {
                    jumpToTarget()
                } else if (window.top !== window.self) {
                    jumpToParent()
                } else {
                    log(iframeId, "In page link #" + hash + " not found")
                }
            }

            function callback(funcName, val) {
                return chkCallback(iframeId, funcName, val)
            }

            function actionMsg() {
                if (settings[iframeId] && settings[iframeId].firstRun) firstRun();
                switch (messageData.type) {
                    case "close":
                        if (settings[iframeId].closeRequestCallback) chkCallback(iframeId, "closeRequestCallback", settings[iframeId].iframe);
                        else closeIFrame(messageData.iframe);
                        break;
                    case "message":
                        forwardMsgFromIFrame(getMsgBody(6));
                        break;
                    case "scrollTo":
                        scrollRequestFromChild(false);
                        break;
                    case "scrollToOffset":
                        scrollRequestFromChild(true);
                        break;
                    case "pageInfo":
                        sendPageInfoToIframe(settings[iframeId] && settings[iframeId].iframe, iframeId);
                        startPageInfoMonitor();
                        break;
                    case "pageInfoStop":
                        stopPageInfoMonitor();
                        break;
                    case "inPageLink":
                        findTarget(getMsgBody(9));
                        break;
                    case "reset":
                        resetIFrame(messageData);
                        break;
                    case "init":
                        resizeIFrame();
                        callback("initCallback", messageData.iframe);
                        break;
                    default:
                        resizeIFrame()
                }
            }

            function hasSettings(iframeId) {
                var retBool = true;
                if (!settings[iframeId]) {
                    retBool = false;
                    warn(messageData.type + " No settings for " + iframeId + ". Message was: " + msg)
                }
                return retBool
            }

            function iFrameReadyMsgReceived() {
                for (var iframeId in settings) {
                    trigger("iFrame requested init", createOutgoingMsg(iframeId), document.getElementById(iframeId), iframeId)
                }
            }

            function firstRun() {
                if (settings[iframeId]) {
                    settings[iframeId].firstRun = false
                }
            }

            function clearWarningTimeout() {
                if (settings[iframeId]) {
                    clearTimeout(settings[iframeId].msgTimeout);
                    settings[iframeId].warningTimeout = 0
                }
            }
            var msg = event.data,
                messageData = {},
                iframeId = null;
            if ("[iFrameResizerChild]Ready" === msg) {
                iFrameReadyMsgReceived()
            } else if (isMessageForUs()) {
                messageData = processMsg();
                iframeId = logId = messageData.id;
                if (settings[iframeId]) {
                    settings[iframeId].loaded = true
                }
                if (!isMessageFromMetaParent() && hasSettings(iframeId)) {
                    log(iframeId, "Received: " + msg);
                    if (checkIFrameExists() && isMessageFromIFrame()) {
                        actionMsg()
                    }
                }
            } else {
                info(iframeId, "Ignored: " + msg)
            }
        }

        function chkCallback(iframeId, funcName, val) {
            var func = null,
                retVal = null;
            if (settings[iframeId]) {
                func = settings[iframeId][funcName];
                if ("function" === typeof func) {
                    retVal = func(val)
                } else {
                    throw new TypeError(funcName + " on iFrame[" + iframeId + "] is not a function")
                }
            }
            return retVal
        }

        function closeIFrame(iframe) {
            var iframeId = iframe.id;
            log(iframeId, "Removing iFrame: " + iframeId);
            if (iframe.parentNode) {
                iframe.parentNode.removeChild(iframe)
            }
            chkCallback(iframeId, "closedCallback", iframeId);
            log(iframeId, "--");
            delete settings[iframeId]
        }

        function getPagePosition(iframeId) {
            if (null === pagePosition) {
                pagePosition = {
                    x: window.pageXOffset !== undefined ? window.pageXOffset : document.documentElement.scrollLeft,
                    y: window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop
                };
                log(iframeId, "Get page position: " + pagePosition.x + "," + pagePosition.y)
            }
        }

        function setPagePosition(iframeId) {
            if (null !== pagePosition) {
                window.scrollTo(pagePosition.x, pagePosition.y);
                log(iframeId, "Set page position: " + pagePosition.x + "," + pagePosition.y);
                unsetPagePosition()
            }
        }

        function unsetPagePosition() {
            pagePosition = null
        }

        function resetIFrame(messageData) {
            function reset() {
                setSize(messageData);
                trigger("reset", "reset", messageData.iframe, messageData.id)
            }
            log(messageData.id, "Size reset requested by " + ("init" === messageData.type ? "host page" : "iFrame"));
            getPagePosition(messageData.id);
            syncResize(reset, messageData, "reset")
        }

        function setSize(messageData) {
            function setDimension(dimension) {
                messageData.iframe.style[dimension] = messageData[dimension] + "px";
                log(messageData.id, "IFrame (" + iframeId + ") " + dimension + " set to " + messageData[dimension] + "px")
            }

            function chkZero(dimension) {
                if (!hiddenCheckEnabled && "0" === messageData[dimension]) {
                    hiddenCheckEnabled = true;
                    log(iframeId, "Hidden iFrame detected, creating visibility listener");
                    fixHiddenIFrames()
                }
            }

            function processDimension(dimension) {
                setDimension(dimension);
                chkZero(dimension)
            }
            var iframeId = messageData.iframe.id;
            if (settings[iframeId]) {
                if (settings[iframeId].sizeHeight) {
                    processDimension("height")
                }
                if (settings[iframeId].sizeWidth) {
                    processDimension("width")
                }
            }
        }

        function syncResize(func, messageData, doNotSync) {
            if (doNotSync !== messageData.type && requestAnimationFrame) {
                log(messageData.id, "Requesting animation frame");
                requestAnimationFrame(func)
            } else {
                func()
            }
        }

        function trigger(calleeMsg, msg, iframe, id, noResponseWarning) {
            function postMessageToIFrame() {
                var target = settings[id] && settings[id].targetOrigin;
                log(id, "[" + calleeMsg + "] Sending msg to iframe[" + id + "] (" + msg + ") targetOrigin: " + target);
                iframe.contentWindow.postMessage(msgId + msg, target)
            }

            function iFrameNotFound() {
                warn(id, "[" + calleeMsg + "] IFrame(" + id + ") not found")
            }

            function chkAndSend() {
                if (iframe && "contentWindow" in iframe && null !== iframe.contentWindow) {
                    postMessageToIFrame()
                } else {
                    iFrameNotFound()
                }
            }

            function warnOnNoResponse() {
                function warning() {
                    if (settings[id] && !settings[id].loaded && !errorShown) {
                        errorShown = true;
                        warn(id, "IFrame has not responded within " + settings[id].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ingored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning.")
                    }
                }
                if (!!noResponseWarning && settings[id] && !!settings[id].warningTimeout) {
                    settings[id].msgTimeout = setTimeout(warning, settings[id].warningTimeout)
                }
            }
            var errorShown = false;
            id = id || iframe.id;
            if (settings[id]) {
                chkAndSend();
                warnOnNoResponse()
            }
        }

        function createOutgoingMsg(iframeId) {
            return iframeId + ":" + settings[iframeId].bodyMarginV1 + ":" + settings[iframeId].sizeWidth + ":" + settings[iframeId].log + ":" + settings[iframeId].interval + ":" + settings[iframeId].enablePublicMethods + ":" + settings[iframeId].autoResize + ":" + settings[iframeId].bodyMargin + ":" + settings[iframeId].heightCalculationMethod + ":" + settings[iframeId].bodyBackground + ":" + settings[iframeId].bodyPadding + ":" + settings[iframeId].tolerance + ":" + settings[iframeId].inPageLinks + ":" + settings[iframeId].resizeFrom + ":" + settings[iframeId].widthCalculationMethod
        }

        function setupIFrame(iframe, options) {
            function setLimits() {
                function addStyle(style) {
                    if (Infinity !== settings[iframeId][style] && 0 !== settings[iframeId][style]) {
                        iframe.style[style] = settings[iframeId][style] + "px";
                        log(iframeId, "Set " + style + " = " + settings[iframeId][style] + "px")
                    }
                }

                function chkMinMax(dimension) {
                    if (settings[iframeId]["min" + dimension] > settings[iframeId]["max" + dimension]) {
                        throw new Error("Value for min" + dimension + " can not be greater than max" + dimension)
                    }
                }
                chkMinMax("Height");
                chkMinMax("Width");
                addStyle("maxHeight");
                addStyle("minHeight");
                addStyle("maxWidth");
                addStyle("minWidth")
            }

            function newId() {
                var id = options && options.id || defaults.id + count++;
                if (null !== document.getElementById(id)) {
                    id = id + count++
                }
                return id
            }

            function ensureHasId(iframeId) {
                logId = iframeId;
                if ("" === iframeId) {
                    iframe.id = iframeId = newId();
                    logEnabled = (options || {}).log;
                    logId = iframeId;
                    log(iframeId, "Added missing iframe ID: " + iframeId + " (" + iframe.src + ")")
                }
                return iframeId
            }

            function setScrolling() {
                log(iframeId, "IFrame scrolling " + (settings[iframeId] && settings[iframeId].scrolling ? "enabled" : "disabled") + " for " + iframeId);
                iframe.style.overflow = false === (settings[iframeId] && settings[iframeId].scrolling) ? "hidden" : "auto";
                switch (settings[iframeId] && settings[iframeId].scrolling) {
                    case true:
                        iframe.scrolling = "yes";
                        break;
                    case false:
                        iframe.scrolling = "no";
                        break;
                    default:
                        iframe.scrolling = settings[iframeId] ? settings[iframeId].scrolling : "no"
                }
            }

            function setupBodyMarginValues() {
                if ("number" === typeof(settings[iframeId] && settings[iframeId].bodyMargin) || "0" === (settings[iframeId] && settings[iframeId].bodyMargin)) {
                    settings[iframeId].bodyMarginV1 = settings[iframeId].bodyMargin;
                    settings[iframeId].bodyMargin = "" + settings[iframeId].bodyMargin + "px"
                }
            }

            function checkReset() {
                var firstRun = settings[iframeId] && settings[iframeId].firstRun,
                    resetRequertMethod = settings[iframeId] && settings[iframeId].heightCalculationMethod in resetRequiredMethods;
                if (!firstRun && resetRequertMethod) {
                    resetIFrame({
                        iframe: iframe,
                        height: 0,
                        width: 0,
                        type: "init"
                    })
                }
            }

            function setupIFrameObject() {
                if (Function.prototype.bind && settings[iframeId]) {
                    settings[iframeId].iframe.iFrameResizer = {
                        close: closeIFrame.bind(null, settings[iframeId].iframe),
                        resize: trigger.bind(null, "Window resize", "resize", settings[iframeId].iframe),
                        moveToAnchor: function(anchor) {
                            trigger("Move to anchor", "moveToAnchor:" + anchor, settings[iframeId].iframe, iframeId)
                        },
                        sendMessage: function(message) {
                            message = JSON.stringify(message);
                            trigger("Send Message", "message:" + message, settings[iframeId].iframe, iframeId)
                        }
                    }
                }
            }

            function init(msg) {
                function iFrameLoaded() {
                    trigger("iFrame.onload", msg, iframe, undefined, true);
                    checkReset()
                }
                addEventListener(iframe, "load", iFrameLoaded);
                trigger("init", msg, iframe, undefined, true)
            }

            function checkOptions(options) {
                if ("object" !== typeof options) {
                    throw new TypeError("Options is not an object")
                }
            }

            function copyOptions(options) {
                for (var option in defaults) {
                    if (defaults.hasOwnProperty(option)) {
                        settings[iframeId][option] = options.hasOwnProperty(option) ? options[option] : defaults[option]
                    }
                }
            }

            function getTargetOrigin(remoteHost) {
                return "" === remoteHost || "file://" === remoteHost ? "*" : remoteHost
            }

            function processOptions(options) {
                options = options || {};
                settings[iframeId] = {
                    firstRun: true,
                    iframe: iframe,
                    remoteHost: iframe.src.split("/").slice(0, 3).join("/")
                };
                checkOptions(options);
                copyOptions(options);
                if (settings[iframeId]) {
                    settings[iframeId].targetOrigin = true === settings[iframeId].checkOrigin ? getTargetOrigin(settings[iframeId].remoteHost) : "*"
                }
            }

            function beenHere() {
                return iframeId in settings && "iFrameResizer" in iframe
            }
            var iframeId = ensureHasId(iframe.id);
            if (!beenHere()) {
                processOptions(options);
                setScrolling();
                setLimits();
                setupBodyMarginValues();
                init(createOutgoingMsg(iframeId));
                setupIFrameObject()
            } else {
                warn(iframeId, "Ignored iFrame, already setup.")
            }
        }

        function debouce(fn, time) {
            if (null === timer) {
                timer = setTimeout(function() {
                    timer = null;
                    fn()
                }, time)
            }
        }

        function fixHiddenIFrames() {
            function checkIFrames() {
                function checkIFrame(settingId) {
                    function chkDimension(dimension) {
                        return "0px" === (settings[settingId] && settings[settingId].iframe.style[dimension])
                    }

                    function isVisible(el) {
                        return null !== el.offsetParent
                    }
                    if (settings[settingId] && isVisible(settings[settingId].iframe) && (chkDimension("height") || chkDimension("width"))) {
                        trigger("Visibility change", "resize", settings[settingId].iframe, settingId)
                    }
                }
                for (var settingId in settings) {
                    checkIFrame(settingId)
                }
            }

            function mutationObserved(mutations) {
                log("window", "Mutation observed: " + mutations[0].target + " " + mutations[0].type);
                debouce(checkIFrames, 16)
            }

            function createMutationObserver() {
                var target = document.querySelector("body"),
                    config = {
                        attributes: true,
                        attributeOldValue: false,
                        characterData: true,
                        characterDataOldValue: false,
                        childList: true,
                        subtree: true
                    },
                    observer = new MutationObserver(mutationObserved);
                observer.observe(target, config)
            }
            var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
            if (MutationObserver) createMutationObserver()
        }

        function resizeIFrames(event) {
            function resize() {
                sendTriggerMsg("Window " + event, "resize")
            }
            log("window", "Trigger event: " + event);
            debouce(resize, 16)
        }

        function tabVisible() {
            function resize() {
                sendTriggerMsg("Tab Visable", "resize")
            }
            if ("hidden" !== document.visibilityState) {
                log("document", "Trigger event: Visiblity change");
                debouce(resize, 16)
            }
        }

        function sendTriggerMsg(eventName, event) {
            function isIFrameResizeEnabled(iframeId) {
                return settings[iframeId] && "parent" === settings[iframeId].resizeFrom && settings[iframeId].autoResize && !settings[iframeId].firstRun
            }
            for (var iframeId in settings) {
                if (isIFrameResizeEnabled(iframeId)) {
                    trigger(eventName, event, document.getElementById(iframeId), iframeId)
                }
            }
        }

        function setupEventListeners() {
            addEventListener(window, "message", iFrameListener);
            addEventListener(window, "resize", function() {
                resizeIFrames("resize")
            });
            addEventListener(document, "visibilitychange", tabVisible);
            addEventListener(document, "-webkit-visibilitychange", tabVisible);
            addEventListener(window, "focusin", function() {
                resizeIFrames("focus")
            });
            addEventListener(window, "focus", function() {
                resizeIFrames("focus")
            })
        }

        function factory() {
            function init(options, element) {
                function chkType() {
                    if (!element.tagName) {
                        throw new TypeError("Object is not a valid DOM element")
                    } else if ("IFRAME" !== element.tagName.toUpperCase()) {
                        throw new TypeError("Expected <IFRAME> tag, found <" + element.tagName + ">")
                    }
                }
                if (element) {
                    chkType();
                    setupIFrame(element, options);
                    iFrames.push(element)
                }
            }

            function warnDeprecatedOptions(options) {
                if (options && options.enablePublicMethods) {
                    warn("enablePublicMethods option has been removed, public methods are now always available in the iFrame")
                }
            }
            var iFrames;
            setupRequestAnimationFrame();
            setupEventListeners();
            return function iFrameResizeF(options, target) {
                iFrames = [];
                warnDeprecatedOptions(options);
                switch (typeof target) {
                    case "undefined":
                    case "string":
                        Array.prototype.forEach.call(document.querySelectorAll(target || "iframe"), init.bind(undefined, options));
                        break;
                    case "object":
                        init(options, target);
                        break;
                    default:
                        throw new TypeError("Unexpected data type (" + typeof target + ")")
                }
                return iFrames
            }
        }

        function createJQueryPublicMethod($) {
            if (!$.fn) {
                info("", "Unable to bind to jQuery, it is not fully loaded.")
            } else if (!$.fn.iFrameResize) {
                $.fn.iFrameResize = function $iFrameResizeF(options) {
                    function init(index, element) {
                        setupIFrame(element, options)
                    }
                    return this.filter("iframe").each(init).end()
                }
            }
        }
        if (window.jQuery) {
            createJQueryPublicMethod(window.jQuery)
        }
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        } else if (typeof module === "object" && typeof module.exports === "object") {
            module.exports = factory()
        } else {
            window.iFrameResize = window.iFrameResize || factory()
        }
    })()
}]);
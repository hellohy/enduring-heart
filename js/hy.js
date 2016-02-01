/**
 @ Name : hellohy Javascript Library
 @ Author :hellohy
 @ Email : hitcloudy@gmail.com
 功能：
 1:  ID选择器$
 2： 事件处理
 3： 显示，隐藏showOrHide
 4： AJAX
 5： 获取html内容
 6： 设置html内容
 7:  获取元素样式
 8:  获取浏览器型号
 9:  获取某年某月某天是星期几
 10: 判断iOS还是android设备
 11: 兼容浏览器窗口位置
 12: 以json格式设置元素样式
 13：16进制随机颜色
 14: 动态加载JS
 调用方法：
 HY.example();
 */
var HY = {
    //1:  ID选择器
    $: function (id) {
        if (typeof id == "string") return document.getElementById(id);
        return id;
    },
    //2:  事件处理
    // 添加句柄
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
            //FF，
            // true - 事件句柄在捕获阶段执行
            // false- false- 默认。事件句柄在冒泡阶段执行
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler); //IE
        } else {
            element['on' + type] = handler;
        }
    },
    // 删除句柄
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false); //FF
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler); //IE
        } else {
            element['on' + type] = null;
        }
    },
    //返回对event的引用，如果是DOM0级，返回的是window.event
    getEvent: function (event) {
        return event ? event : window.event;
    },
    //获取事件类型
    getType: function (event) {
        return event.type;
    },
    //获取事件目标
    getElement: function (event) {
        return event.target || event.srcElement; //IE:srcElement
    },
    //阻止事件的默认行为
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false; //IE
        }
    },
    //阻止事件冒泡
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true; //IE
        }
    },
    //3： 显示和隐藏
    showOrHide: function (id) { //-----显示，隐藏-----
        var oTarget = this.$(id);
        if (!oTarget) {
            return false;
        }
        oTarget.style.display == 'none' ? oTarget.style.display = 'block' : oTarget.style.display = 'none';
    },
    //4:   AJAX
    ajax: function (obj) {
        if (!obj.url) {
            return false;
        }
        ;
        var method = obj.type || "GET";
        var async = obj.async || true;
        var dataType = obj.dataType;
        var XHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        XHR.open(method, obj.url, async);
        /**
         * 1.method http方法，例如：POST、GET、PUT及PROPFIND。大小写不敏感。
         * 2.url 请求的URL地址，可以为绝对地址也可以为相对地址。
         * 3.async 布尔型，指定此请求是否为异步方式，默认为true。如果为真，当状态改变时会调用onreadystatechange属性指定的回调函数。
         */
        // method=post时
        if (method === 'post') {
            XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            XHR.setRequestHeader("Content-length", paramsSend.length);
            XHR.setRequestHeader("Connection", "close");
        }
        XHR.send(null);
        if (obj.sendBefore) {
            obj.sendBefore();
        }
        ;
        XHR.onreadystatechange = function () {
            /**
             0: 未初始化.还没有调用open() 方法.
             1: 载入.已调用send() 方法,正在发送请求
             2: 载入完成.send() 方法完成,已收到全部响应内容,这个时候的数据是可能没法使用,因为这个数据是加密过的,也有可能是为了节省带宽,进行压缩过的.
             3: 解析.正在解析相应内容
             4: 完成.响应内容解析完成,可以在客户端调用了.
             */
            if (XHR.readyState == 4 && (XHR.status >= 200 && XHR.status < 300 || XHR.status == 304)) {
                if (obj.success) {
                    if (dataType && dataType.toLocaleLowerCase() === "json") {
                        obj.success(eval("(" + XHR.responseText + ")"))
                    } else if (dataType && dataType.toLocaleLowerCase() === "xml") {
                        obj.success(XHR.responseXML)
                    } else {
                        obj.success(XHR.responseText);
                    }
                }
                ;
                if (obj.complete) {
                    obj.complete()
                }
            } else {
                if (obj.complete) {
                    obj.complete()
                }
                if (obj.error) {
                    obj.error("The XMLHttpRequest failed. status: " + XHR.status);
                }

            }

        }
    },
    //5:  获取html内容
    getInnerText: function (element) {
        return (typeof element.textContent == 'string') ?
            element.textContent : element.innerText;
    },
    //6:  设置html内容
    setInnerText: function (element, text) {
        if (typeof element.textContent == 'string') {
            element.textContent = text;
        } else {
            element.innerText = text;
        }
    },
    //7:  获取元素样式
    getStyle: function (node, cssprop) {
        // currentStyle ie中获取<style>和外部css的样式
        // background-color,backgroundColor都可以使用.
        cssprop = cssprop.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (node.currentStyle) {
            return node.currentStyle[cssprop];
            // getComputedStyle(elementRef, pseudoElementName) w3c支持的,获取<style>和外部css的样式
        } else if (document.defaultView && document.defaultView.getComputedStyle) {
            return document.defaultView.getComputedStyle(node, '').getPropertyValue(cssprop);
        } else {
            // inline style
            return node.style[cssprop];
        }
    },
    //8:  获取浏览器型号
    getBrowser: function () {
        var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
            (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
                (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
                    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
                        (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
                            (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
        if (Sys.ie) document.write('IE: ' + Sys.ie);
        if (Sys.firefox) document.write('Firefox: ' + Sys.firefox);
        if (Sys.chrome) document.write('Chrome: ' + Sys.chrome);
        if (Sys.opera) document.write('Opera: ' + Sys.opera);
        if (Sys.safari) document.write('Safari: ' + Sys.safari);
    },
    // 9:  获取某年某月某天是星期几
    getWeek: function (date) {
        var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        return weekday[date.getDay()]; //2015年10月2号new Date(2015,9,2).getDay();
    },
    //10: 判断iOS还是android设备
    getMobile: function () {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        console.log('是否是Android：' + isAndroid);
        console.log('是否是iOS：' + isiOS);
    },
    // 11: 兼容浏览器窗口位置
    getScrennPos: function () {
        /**
         IE,Safari,Opera,Chrome支持screenLeft和screenTop
         Safari,Chrome,Firefox支持screenX和screenY(Opera对这个属性支持有差异)
         */
        var left = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
        var top = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;
        return {
            left: left,
            top: top
        };
    },
    // 12: 以json格式设置元素样式
    setElementsCss: function (elements, json) {
        var length = elements.length;
        if (length == 0) return;
        else if (!length) { //单个元素
            for (var key in jsonCss) {
                elements.style[key] = json[key];
            }
        } else { //元素集合
            for (var i = 0; i < length; i++) {
                for (var key in json) {
                    elements[i].style[key] = json[key];
                }
            }
        }
        // HY.setElementCss(squares, {"color":"red","backgroundColor":"green"});
    },
    //13： 随机颜色
    randomColor: function () {
        var arrHex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        var strHex = "#";
        var index;
        for (var i = 0; i < 6; i++) {
            //取得0-15之间的随机整数
            index = Math.round(Math.random() * 15);
            strHex += arrHex[index];
        }
        return strHex;
    },
    //14:  动态加载JS
    loadScript: function (url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (typeof(callback) !== "undefined") {
            if (script.readyState) {
                script.onreadystatechange = function () {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        callback();
                    }
                }
            } else {
                script.onload = function () {
                    callback();
                }
            }

        }
        script.src = url;
        document.body.appendChild(script);
    },
    //15:   解决页面闪烁
    remSet: function () {
        var textSize = parseInt($(".mobile-wrapper").width() / 9.6);
        $("html").css("font-size", textSize);
    }
//remSet();
//$(window).on("resize",function(){
//    remSet();
//});
}
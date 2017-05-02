!function () {
    function o(w, v, i) {
        return w.getAttribute(v) || i
    }

    function j(i) {
        return document.getElementsByTagName(i)
    }

    function l() {
        var i = j("script"), w = i.length, v = i[w - 1];
        return {l: w, z: o(v, "zIndex", 2), o: o(v, "opacity", 0.5), c: o(v, "color", "60,201,245"), n: o(v, "count", 99)}
    }

    function k() {
        r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }

    function b() {
        e.clearRect(0, 0, r, n);
        var w = [f].concat(t);
        var x, v, A, B, z, y;
        t.forEach(function (i) {
            i.x += i.xa, i.y += i.ya, i.xa *= i.x > r || i.x < 0 ? -1 : 1, i.ya *= i.y > n || i.y < 0 ? -1 : 1, e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);
            for (v = 0; v < w.length; v++) {
                x = w[v];
                if (i !== x && null !== x.x && null !== x.y) {
                    B = i.x - x.x, z = i.y - x.y, y = B * B + z * z;
                    y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(), e.lineWidth = A / 2, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke())
                }
            }
            w.splice(w.indexOf(i), 1)
        }), m(b)
    }

    var u = document.createElement("canvas"), s = l(), c = "c_n" + s.l, e = u.getContext("2d"), r, n, m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (i) {
            window.setTimeout(i, 1000 / 45)
        }, a = Math.random, f = {x: null, y: null, max: 20000};
    u.id = c;
    u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o;
    j("body")[0].appendChild(u);
    k(), window.onresize = k;
    window.onmousemove = function (i) {
        i = i || window.event, f.x = i.clientX, f.y = i.clientY
    }, window.onmouseout = function () {
        f.x = null, f.y = null
    };
    for (var t = [], p = 0; s.n > p; p++) {
        var h = a() * r, g = a() * n, q = 2 * a() - 1, d = 2 * a() - 1;
        t.push({x: h, y: g, xa: q, ya: d, max: 6000})
    }
    setTimeout(function () {
        b()
    }, 100)
}();
(function() {

    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;
    //
    initHeader();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        //height = window.innerHeight;
        height = window.innerWidth*9/16;
        //需要根据屏幕大小确定画布的区域。
        target = {x: 0, y: height};

        largeHeader = document.getElementById('canvas');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('canvas-demo');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
            ctx.fill();
        };
    }

})();


// 按钮添加属性on 事件添加属性go
function onGo(s, m, n) {
    var x = document.getElementById(m),
        y = document.getElementById(n),
        c = s.className;
    if (c != null && c.indexOf(' on') > -1) {
        s.className = c.replace(' on', '');
        x.className = x.className.replace(' go', '');
        y.className = y.className.replace(' go', '');
    } else {
        s.className = c + ' on';
        x.className = x.className + ' go';
        y.className = y.className + ' go';
    }
}


var mainutil = {
    gno:function(o){
        if(o){
            o = o
        }else{
            o = {}
        }
        return o;
    },
    gns:function(s){
        if(s){
            s = s;
        }else{
            s = ""
        }
    },
    getUrlParam:function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  // 匹配目标参数
        if (r != null) return unescape(r[2]); return null; // 返回参数值
    },
    getRootPath:function() {
        var pathName = window.location.pathname.substring(1);
        var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
         return window.location.protocol + '//' + window.location.host + '/' + webName + '/';
    //	return window.location.protocol + '//' + window.location.host + '/'; 
    }
}
/*!1.2.8 kooboy_li@163.com*/!function(){var e=document,t=window;if(e.__)t.postMessage({_b:"_a",_d:"_c"},"*");else{t.addEventListener("message",function(e){var t=e.data;t&&"_a"==t._b&&"_c"==t._d&&d._c()},!1),e.__=1;var a={_q:"#008B00",_s:"#FF3030",_r:"#BC8F8F",_A:"#FF3030",_O:"#9AC0CD",_P:"#8B5F65",_Q:"#EED5B7",_ag:"#94d694"},i={_ah:550,_ai:470,_aj:530,_ak:400,_al:490,_am:34,_an:6,_ao:15,_H:5,_ap:5,_aq:40,_ar:40,_i:{r:0,g:153,b:102},_j:{r:255,g:255,b:0},_u:15,_v:5,_w:12,_x:5,_y:12},r=["FFC125","C71585","CDBA96","FF7F00","BA55D3","8B4726","7CFC00","4A4A4A","EE7AE9"],n={_G:"#CC9966",_F:"#99CCCC",_E:"#FF9999",_D:"#CCCC99"},o={_r:"mib",_t:"mia"},s=function(t){return e.getElementById(t)},l={_Y:function(e,t,a){var i,r=e(window),n=e(document),o=function(e){(e=window.getSelection)?e().removeAllRanges():(e=window.document.selection)&&(e.empty?e.empty():e=null)},s=function(e){e.preventDefault()},l=function(e){i.iMove&&i.move(e)},c=function(a){if(i){n[t]("mousemove touchmove",l)[t]("mouseup touchend",c)[t]("keydown mousewheel DOMMouseScroll",s),r[t]("blur",c);var o=i.node;e(o)[t]("losecapture",c),o.setCapture&&o.releaseCapture(),i.iStop&&i.stop(a),i=null}};return{_W:function(t,u,f){c(),t&&(o(),t.setCapture&&t.setCapture(),i={move:u,stop:f,node:t,iMove:a(u),iStop:a(f)},n.on("mousemove touchmove",l).on("mouseup touchend",c).on("keydown mousewheel DOMMouseScroll",s),r.on("blur",c),e(t).on("losecapture",c))},_X:o}}},c=/[&<>]/g,u={"&":"amp","<":"lt",">":"gt"},f=function(e){return e.replace(c,function(e){return"&"+u[e]+";"})},d={_L:function(){var t=e.createElement("div");t.innerHTML='<div class="mie" id="_at"><ul class="mip mid" id="_au"><li class="mil min mim" id="_aL">\u25b3</li><li class="mik min mim">VOM</li><li class="mik min mim">Tracer</li><li class="mik min mim">Manager</li></ul><div id="_aM"><div style="width:{_ah}px;height:{_ak}px;overflow-x:auto;overflow-y:hidden" id="_aR"><canvas width="{_ah}" height="{_ak}" id="_aw"></canvas></div><label class="mik mih"><input type="checkbox" class="mij" id="_aJ">\u63a7\u5236\u53f0\u663e\u793aview\u4fe1\u606f</label><label class="mik mih"><input type="checkbox" class="mij" id="_z" checked="checked">\u663e\u793a\u7ec4\u4ef6view</label><ul class="mip mik" id="_b_"></ul></div><div id="_aN" style="height:{_ak}px;overflow:scroll;overflow-x:auto;display:none;padding:8px"></div><div id="_aO" style="display:none"><div style="height:{_ak}px;overflow:scroll;overflow-x:auto" id="_aV"><canvas width="{_aj}" height="{_ak}" id="_aA"></canvas></div><ul class="mip min" id="_aY"></ul></div><div id="_aE" class="mir"></div><div id="_aU" class="mir"></div></div>'.replace(/\{(\w+|(?:@\{[^\}]+\}))\}/g,function(e,t){return i[t]||e}),e.documentElement.appendChild(t),d._as(),k._e()._ae("#_at","#_au")},_as:function(){d._av();var e,t=k._e();t._aa("_aw","mousemove",d._ax=function(a){clearTimeout(e),e=setTimeout(function(){var e=t._a_("_aw");d._ay({x:a.pageX-e.left,y:a.pageY-e.top})},10)}),t._aa("_aw","mouseout",d._az=function(){clearTimeout(e),d._ay({x:-1,y:-1})}),t._aa("_aA","mousemove",d._aB=function(a){clearTimeout(e),e=setTimeout(function(){var e=t._a_("_aA");d._aC({x:a.pageX-e.left,y:a.pageY-e.top})},10)}),t._aa("_aA","mouseout",d._aD=function(){clearTimeout(e),d._aC({x:-1,y:-1})}),t._aa("_aE","mouseover",d._aF=function(){clearTimeout(d._aG)}),t._aa("_aE","mouseout",d._aH=function(){d._aI()}),t._aa("_aJ","click",function(){s("_aJ").checked&&window.console.dir(t._p().all())}),t._aa("_z","click",function(){k._M()}),t._aa("_at","click",d._aK=function(e){var a;"_aL"==e.target.id?(a=s("_at"),"\u25b3"==e.target.innerHTML?(a.style.height=i._am+"px",a.style.width="40px",a.style.overflow="hidden",e.target.innerHTML="\u25bd",t._af("#_au").addClass("mis")):(a.style.height=i._ai+"px",a.style.width=i._ah+"px",a.style.overflow="inherit",e.target.innerHTML="\u25b3",t._af("#_au").removeClass("mis"))):"VOM"==e.target.innerHTML?((a=s("_aM")).style.display="block",(a=s("_aN")).style.display="none",(a=s("_aO")).style.display="none"):"Tracer"==e.target.innerHTML?((a=s("_aM")).style.display="none",(a=s("_aO")).style.display="none",(a=s("_aN")).style.display="block"):"Manager"==e.target.innerHTML&&((a=s("_aM")).style.display="none",(a=s("_aN")).style.display="none",(a=s("_aO")).style.display="block")})},_c:function(){var e=s("_aL"),t=k._e();if("\u25bd"==e.innerHTML){var a=s("_at");a.style.height=i._ai+"px",a.style.width=i._ah+"px",a.style.overflow="inherit",e.innerHTML="\u25b3",t._af("#_au").removeClass("mis")}},_av:function(){var e=k._e();e._ab("_aw","mousemove",d._ax),e._ab("_aw","mouseout",d._az),e._ab("_aA","mousemove",d._aP),e._ab("_aA","mouseout",d._aD),e._ab("_aL","click",d._aK),e._ab("_aE","mouseoout",d._aH),e._ab("_aE","mouseover",d._aF)},_aS:function(t,a){clearTimeout(d._aG),s("_aJ").checked&&window.console.log(t);var r=s("_aQ");r||((r=e.createElement("div")).className="mif",r.id="_aQ",e.body.appendChild(r));var n=s("_aE");n.style.display="block";var o=a.center.x-i._al/2-s("_aR").scrollLeft;n.style.left=o+"px",n.style.top=a.center.y+a.radius+i._am+5+"px";var l=k._e();l._Z(r.style,t.id),r.style.display="block",n.innerHTML='<ul><li><b class="mic">id:</b>{id}</li><li><b class="mic">view:</b>{view}</li>{events} {location} {share} {mixins} {state}<li class="mio">{ex}</li><li><b class="mic">resources</b></li><li style="{_al}px;overflow:auto;max-height:200px">{res}</li></ul>'.replace(/\{(\w+|(?:@\{[^\}]+\}))\}/g,function(e,r){switch(r){case"id":return a.id;case"view":if(t){if(t.$v||t.path)return f(t.path);if(t.view)return f(t.view.path)}return"";case"events":var n=k._f(t);return n.total?'<li><b class="mic">listen:</b>'+n.list+"</li>":"";case"share":var o=k._g(t);return o.length?'<li><b class="mic">share:</b>'+o+"</li>":"";case"location":var s=k._h(t);if(s.path||s.keys&&s.keys.length){var c=[];return s.path&&c.push('<span style="color:#FFC125">path</span>'),s.keys&&(c=c.concat(s.keys)),'<li><b class="mic">location:</b>'+c+"</li>"}return"";case"mixins":var u=k._m(t);if(u.length){var d=l._ac(u);return'<li><b class="mic">mixins:</b>'+(d=d.join(","))+"</li>"}return"";case"state":var _=k._n(t);return _.length?'<li><b class="mic">state:</b>'+_.join(",")+"</li>":"";case"ex":if(a.il)return"\u88ab\u5b64\u7acb\u7684\u8282\u70b9\uff0c\u597d\u53ef\u601c\u2026\u2026";if(!t)return"vframe\u5df2\u88ab\u9500\u6bc1\uff0c\u4f46\u672a\u4ecevom\u4e2d\u79fb\u9664";if(t.path){if(t.cM&&!t.view||t.$c&&!t.$v)return"\u672a\u52a0\u8f7dview"}else if(!t.view)return"\u672a\u52a0\u8f7dview";if(t.cM){if(!t.fcc)return t.rC!=t.cC?"\u6b63\u7b49\u5f85\u5b50view\u52a0\u8f7d":"\u6b63\u7b49\u5f85view\u52a0\u8f7d"}else if(!t.$cr)return t.$rc!=t.$cc?"\u6b63\u7b49\u5f85\u5b50view\u52a0\u8f7d":"\u6b63\u7b49\u5f85view\u52a0\u8f7d";return t.fca||t.$ca?"\u7b49\u5f85view\u6e32\u67d3":"";case"res":var h=[],v=t&&t.view&&t.view.$res,m=void 0;if(v=v||t&&t.$v&&t.$v.$r){for(var p in v){m=!0;break}if(m){h.push('<table style="width:100%"><tr><td>key</td><td>type</td></tr>');for(var p in v)h.push("<tr><td>",p,"</td><td>",l._ad(v[p]),"</td></tr>");h.push("</table>")}}return h.join("");default:return i[r]||e}})},_aI:function(){var e=s("_aE"),t=s("_aQ");d._aG=setTimeout(function(){e.style.display="none",t.style.display="none"},150)},_aW:function(e){clearTimeout(d._aT);var t=s("_aU");t.style.display="block",t.style.left=e.rect[0]+"px";var a=e.rect[1]+e.rect[3]+i._am;a-=s("_aV").scrollTop,t.style.top=a+"px",t.innerHTML="<ul><li><b>key:</b>{id}</li><li><b>url:</b>{url}</li><li><b>\u63cf\u8ff0:</b>{desc}</li><li><b>\u7f13\u5b58:</b>{cache}</li><li><b>\u6e05\u7406\u7f13\u5b58:</b>{cleans}</li><li><b>\u9884\u5904\u7406:</b>{hasAfter}</li></ul>".replace(/\{(\w+)\}/g,function(t,a){switch(a){case"id":return e.id;default:return e[a]||t}})},_aX:function(){var e=s("_aU");d._aT=setTimeout(function(){e.style.display="none"},150)},_aZ:function(e){s("_aY").innerHTML='<li class="mik mig">{groups}\u4e2a\u63a5\u53e3\u6587\u4ef6\uff0c\u5171{total}\u4e2a\u63a5\u53e3</li>'.replace(/\{(\w+)\}/g,function(t,a){switch(a){case"groups":return e.groups.length;case"total":return e.total;default:return t}})},_ba:function(e){s("_b_").innerHTML='<li class="mik mig mii">view\u7edf\u8ba1:[{count}]</li>'.replace(/\{(\w+)\}/g,function(t,a){switch(a){case"count":return"com:"+e.comTotal+",vom:"+e.vomTotal+",total:"+e.total;default:return t}})},_bb:function(e){s("_aA").height=0|e},_bc:function(e){var t=s("_aw");t.width=0|e,t.parentNode.scrollLeft=(t.width-i._aj)/2},_ay:function(e){},_aC:function(e){}};!function(e,t){var a=document.createElement("style");document.documentElement.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}(0,'vframe{display:block}.mi_:before{width:12px;content:"M";height:12px;border-radius:6px;position:absolute;background-color:#008b00;opacity:.4;font-size:10px;line-height:12px;text-align:center;color:#fff}.mia:before{background-color:#ff3030}.mib:before{background-color:#bc8f8f}.mic{padding-right:5px}.mid{background:#eee;cursor:move;margin:0;padding:0}.mie{position:fixed;right:20px;top:20px;width:550px;height:470px;z-index:2147483647;-webkit-box-shadow:0 0 5px #b9b9b9;box-shadow:0 0 5px #b9b9b9;background-color:#fff;font-size:12px;line-height:1.5}.mif{position:absolute;opacity:.7;background-color:#90ee90}.mie ul{list-style:none;padding:0;margin:0}.mig{padding:5px}.mih{height:28px;line-height:28px;margin:0 0 0 5px;padding:0}.mii{color:#bbb}.mij{margin-right:3px}.mik{float:left}.mil{float:right}.mim{cursor:pointer}.min{padding:8px}.mio{color:red}.mip:after,.mip:before{content:"";display:table}.mip:after{clear:both}.mip{*zoom:1}.miq{height:1px;border:0;padding:0;margin:5px;background:rgba(0,0,0,.2);background:-webkit-gradient(linear,left top,right top,from(rgba(165,69,243,0)),color-stop(.5,hsla(270,6%,49%,.33)),to(rgba(165,69,243,0)))}.mir{position:absolute;background-color:#eee;padding:8px;width:440px;display:none;-webkit-box-shadow:0 2px 2px 2px #b9b9b9;box-shadow:0 2px 2px 2px #b9b9b9;word-break:break-all}.mis:before{left:4px;bottom:5px}.mis:after,.mis:before{content:" ";position:absolute;top:10px;border:2px dotted #b9b1b1;height:10px;cursor:move}.mis:after{left:9px}');var _={_N:function(t,a){var i=s("_aN");if(_._bd){var r=e.createElement("hr");r.className="miq",i.insertBefore(r,i.firstChild),delete _._bd}var n=e.createElement("div");n.innerHTML=t,a&&(n.style.color=a),i.insertBefore(n,i.firstChild),i.getElementsByTagName("div").length>200&&(i.removeChild(i.lastChild),i.removeChild(i.lastChild)),clearTimeout(_._be),_._be=setTimeout(function(){_._bd=!0},1500)}},h={_bh:function(){var e=h;e.list=[],delete e._bf,d._ay=function(t){var a,i;if(e._bf?(i=e._bf,Math.pow(Math.pow(i.center.x-t.x,2)+Math.pow(i.center.y-t.y,2),.5)>i.radius&&(e._bg({item:i,action:"leave"}),delete e._bf,a=!0)):a=!0,a)for(var r=e.list.length-1;r>=0;r--)if(i=e.list[r],Math.pow(Math.pow(i.center.x-t.x,2)+Math.pow(i.center.y-t.y,2),.5)<=i.radius){e._bf!=i&&(e._bf=i,e._bg({item:i,action:"enter"}));break}}},_bk:function(){var e=h;e.managerList=[],delete e._bi,d._aC=function(t){var a,i,r;if(e._bi?(r=(i=e._bi).rect,(t.x<r[0]||t.y<r[1]||t.x>r[0]+r[2]||t.y>r[1]+r[3])&&(e._bj({item:i,action:"leave"}),delete e._bi,a=!0)):a=!0,a)for(var n=e.managerList.length-1;n>=0;n--)r=(i=e.managerList[n]).rect,t.x>=r[0]&&t.y>=r[1]&&t.x<=r[0]+r[2]&&t.y<=r[1]+r[3]&&e._bi!=i&&(e._bi=i,e._bj({item:i,action:"enter"}))}},_bl:function(e,t,a){var r=0,n=0,o={},s=function(e,t){e.deep=t,t>n&&(n=t),o[t]||(o[t]=0),e.leftCount=o[t],o[t]++,o[t]>r&&(r=o[t]);for(var a=0;a<e.children.length;a++)e.children[a],s(e.children[a],e.deep+1)};e.deepMap=o,s(e,1,0);var l=t/(r=Math.max(r,e.isolated.length+1))-i._an,c=a/n-i._an,u=t,f=2*i._ao;l<f?(l=f,(u=f*r+(r+1)*i._an)>3e4&&(u=3e4),d._bc(u)):d._bc(u);var _=Math.floor(Math.min(c,l)/2),h=(_/20).toFixed(1);return{width:u,margin:i._an,radius:_,band:h}},_M:function(e,t){if(e.id){var n=i._ah,o=i._ak,l=h;l._bh();var c=l._bl(e,n,o);n=c.width;var u=s("_aw").getContext("2d");u.clearRect(0,0,n,o);var f=2*c.radius-2*(c.band+1)-1;l.$tWidth||(l.$tWidth={});var _=function(e){return l.$tWidth[e]||(u.font="normal 12px Arial",l.$tWidth[e]=u.measureText(e).width),l.$tWidth[e]},v=function(e){for(var t=1,a=0;t<=e.length;){if(!((a+=_(e.substring(t-1,t)))<f))return e.substring(0,t-3)+"..";t+=1}return e},m=0,p=function(t,a,i,o){if(i){u.beginPath();var s=180*Math.atan((a.y-i.y)/(a.x-i.x))/Math.PI;s<0&&(s+=180);var l=Math.round(i.x+c.radius*Math.cos(s*Math.PI/180)),f=Math.round(i.y+c.radius*Math.sin(s*Math.PI/180));u.moveTo(l,f),u.lineTo(a.x,a.y),u.lineWidth=c.band/1.5,u.strokeStyle=o,u.stroke()}var d=e.deepMap[t.deep+1];if(d)for(var _=(n-(d*c.radius*2+(d-1)*c.margin))/2,h="#"+r[m++%r.length],v=0,g=void 0;v<t.children.length;v++)g=t.children[v],p(g,{x:_+g.leftCount*(2*c.radius+c.margin)+c.radius,y:a.y+c.margin+2*c.radius},a,h)},g=function(i,r){u.moveTo(r.x,r.y),u.beginPath(),u.arc(r.x,r.y,c.radius,0,2*Math.PI,!0),u.fillStyle=i.status,i.id==t&&(i.flag?u.fillStyle=a._ag:u.fillStyle=i.status,i.flag=!i.flag),u.fill();var o=Math.max(.5,c.radius/10),s=r.y+c.radius/2,f=r.x-c.radius/2+o;if(i.event&&(u.beginPath(),u.arc(f,s,o,0,2*Math.PI,!0),u.fillStyle=i.event,u.fill()),i.location&&(u.beginPath(),u.arc(r.x,s+o,o,0,2*Math.PI,!0),u.fillStyle=i.location,u.fill()),i.mixins){var d=s,_=s+o,h=((y=f)+(M=r.x)+Math.sqrt(3)*(_-d))/2-(M-y)/10,m=(d+_-Math.sqrt(3)*(M-y))/2+(M-y)/3;u.beginPath(),u.arc(h,m,o,0,2*Math.PI,!0),u.fillStyle=i.mixins,u.fill()}if(i.shared){var p=r.x+c.radius/2-o;u.beginPath(),u.arc(p,s,o,0,2*Math.PI,!0),u.fillStyle=i.shared,u.fill()}if(i.state){var d=s+o,_=s,h=((y=r.x)+(M=r.x+c.radius/2-o)+Math.sqrt(3)*(_-d))/2+(M-y)/10,m=(d+_-Math.sqrt(3)*(M-y))/2+(M-y)/3;u.beginPath(),u.arc(h,m,o,0,2*Math.PI,!0),u.fillStyle=i.state,u.fill()}if(i.inline){u.beginPath();var b=c.radius-c.band-1,x=-2*Math.PI/360*60,w=-2*Math.PI/360*120,y=r.x+b*Math.cos(x),d=r.y+b*Math.sin(x),M=r.x+b*Math.cos(w),_=r.y+b*Math.sin(w);u.moveTo(y,d),u.quadraticCurveTo(r.x,r.y-b/2,M,_),u.moveTo(y,d),u.quadraticCurveTo(r.x,r.y-c.radius-c.band,M,_),u.fillStyle="#fff",u.fill()}u.moveTo(r.x,r.y),u.beginPath(),u.arc(r.x,r.y,c.radius-c.band-1,0,2*Math.PI,!0),u.lineWidth=c.band,u.strokeStyle="#fff",u.stroke(),l.list.push({id:i.id,center:r,il:i.il,radius:c.radius}),u.beginPath(),u.moveTo(r.x,r.y),u.font="normal 12px Arial",u.fillStyle="#eee";var k=v(i.id),T=Math.round(u.measureText(k).width),$=(2*c.radius-T)/2;u.fillText(k,r.x+$-c.radius,r.y+4);var C=e.deepMap[i.deep+1];if(C)for(var q=(n-(C*c.radius*2+(C-1)*c.margin))/2,S=0,E=void 0;S<i.children.length;S++)E=i.children[S],g(E,{x:q+E.leftCount*(2*c.radius+c.margin)+c.radius,y:r.y+c.margin+2*c.radius})},b=e.isolated,x=n/2;if(b.length){x=(n-(b.length+1)*c.radius*2+b.length*c.margin)/2;for(var w=0;w<b.length;w++)g(b[w],{x:x+(w+1)*(2*c.radius+c.margin)+c.radius,y:c.margin+c.radius});x+=c.radius}p(e,{x:x,y:c.margin+c.radius}),g(e,{x:x,y:c.margin+c.radius}),d._ba(e,c)}},_S:function(e){var t=h;t._bk();var a=i._ap*(e.rows+1)+e.rows*i._aq+(i._ar+i._ap)*e.groups.length;d._bb(a);var n=s("_aA").getContext("2d");n.clearRect(0,0,i._aj,a);var o=i._ap,l=(i._aj-(1+i._H)*i._ap)/i._H|0,c=(n.font="normal 14px Arial",n.measureText("M").width),u=function(e,a,i,r){e.beginPath(),e.moveTo(a[0],a[1]),e.fillStyle=i.color,e.fillRect(a[0],a[1],a[2],a[3]),e.beginPath(),e.moveTo(a[0],a[1]+10),e.font="normal 14px Arial",e.fillStyle="#282828";for(var n,o=i.id;(o.length-3)*c>a[2];)o=o.slice(0,-1),n=!0;n&&(o=o.slice(0,-3)+"..."),e.fillText(o,a[0]+5,a[1]+25),i.package=r,i.rect=a,t.managerList.push(i)};!function(e){for(var t=0;t<e.length;t++){var a=e[t],s=i._ap,c=!1;n.beginPath(),n.moveTo(s,o),n.font="normal 14px Arial",n.fillStyle="#282828",n.fillText(a.name,s+5,o+25),o+=i._ar;var f=void 0,d=void 0,_=Math.max(a.maxLeft,a.maxRight),h={},v=0,m=(_-a.maxLeft)/2*(i._aq+i._ap),p=(_-a.maxRight)/2*(i._aq+i._ap);for(f=0;f<_;f++){var g=a.cleans.left[f],b=a.cleans.right[f];g&&(u(n,[s,o+m,150,i._aq],g,a.name),h[g.id]=g),b&&(u(n,[i._aj-i._ap-150,o+p,150,i._aq],b,a.name),h[b.id]=b,b.lineColor=r[v++%r.length]),o+=i._ap+i._aq}for(var x in h)if((d=h[x]).cleans)for(var w={x:d.rect[0]+d.rect[2],y:d.rect[1]+(d.rect[3]/2|0)},y=(d.cleans+"").split(","),M=y.length-1;M>=0;M--){var k=h[y[M]],T={x:k.rect[0],y:k.rect[1]+(k.rect[3]/2|0)};n.beginPath(),n.moveTo(w.x,w.y),n.lineTo(T.x,T.y),n.lineWidth=1,n.strokeStyle="#"+(k.lineColor||"996699"),n.stroke()}for(f=0;f<a.caches.length;f++)u(n,[s,o,l,i._aq],a.caches[f],a.name),(f+1)%i._H==0?(s=i._ap,o+=i._ap+i._aq,c=!1):(s+=l+i._ap,c=!0);for(s=i._ap,c&&(o+=i._ap+i._aq),f=0;f<a.items.length;f++)d=a.items[f],u(n,[s,o,l,i._aq],d,a.name),(f+1)%i._H==0?(s=i._ap,o+=i._ap+i._aq,c=!1):(s+=l+i._ap,c=!0);s=i._ap,c&&(o+=i._ar)}}(e.groups),d._aZ(e)},_bg:function(e){var t=k._e()._p();"enter"==e.action?d._aS(t.get(e.item.id),e.item):d._aI()},_bj:function(e){"enter"==e.action?d._aW(e.item):d._aX()}},v={$:["zepto","fn.jquery"],jquery:["fn.jquery"],zepto:["zepto"],magix:["safeExec","toTry"]},m={},p=window.KISSY,g={_J:function(){p.use("node")},_o:function(){return(p.Env.mods["magix/magix"]?p.require("magix/magix"):p.require("magix")).config("rootId")},_p:function(){if(p.Env.mods["magix/magix"])return p.require("magix/vom");var e=p.require("magix");return e.VOM||e.Vframe},_C:function(){var e=p.Env.mods,t=[];for(var a in e){var i=e[a].exports||e[a].value;i&&(i.$mMetas&&i.$mCache||i.$mm&&i.$mc||i.$m&&i.$c)&&t.push({name:e[a].name,exports:i})}return t},_K:function(){var e=p.Env.mods["magix/magix"],t=p.Env.mods.node;if(e){var a=p.Env.mods["magix/vom"];return e.status===p.Loader.Status.ATTACHED&&a&&a.status===p.Loader.Status.ATTACHED&&t&&t.status===p.Loader.Status.ATTACHED}try{return(e=p.require("magix"))&&e.toTry&&t&&t.status===p.Loader.Status.ATTACHED}catch(e){return!1}},_Z:function(e,t){var a=p.require("node").one("#"+t);if(a){var i,r=a,n={height:r.outerHeight?r.outerHeight():r.height(),width:r.outerWidth?r.outerWidth():r.width()};if(n.height)i=r.offset(),e.left=i.left+"px",e.top=i.top+"px",e.position="absolute",n.width=Math.max(n.width,r.children().width()||0),r;else{var o=4;do{if(r=r.children(),n.height=r.height(),r,n.height){var s=r.css("position");"fixed"==s?(s=r.css("left"),e.left=s,e.position=s,s=r.css("top"),e.top=s,s=r.css("right"),e.right=s,s=r.css("bottom"),e.bottom=s):(i=r.offset(),e.left=i.left+"px",e.top=i.top+"px",e.position="absolute",n.width=Math.max(n.width,r.children().width()||0));break}o--}while(r.length&&!n.height&&o>=0)}var l,c=-1;do{l||(l="none"==a.css("display"));var u=parseInt(a.css("z-index"))||1;u&&u>c&&(c=u),a=a.parent()}while(a);l&&(n={width:0,height:0}),1==c&&(c=2147483640),e.zIndex=c+1,e.width=n.width+"px",e.height=n.height+"px"}},_a_:function(e){return p.require("node").one("#"+e).offset()},_aa:function(e,t,a){var i=p.require("node");return p.isString(e)&&(e="#"+e),i.one(e).on(t,a)},_ab:function(e,t,a){var i=p.require("node");return p.isString(e)&&(e="#"+e),i.one(e).detach(t,a)},_ac:function(e){for(var t=p.Env.mods,a=[],i=0;i<e.length;i++){var r=e[i];if(r)if(r["\x1e"])a.push('<span style="color:#C71585">State.clean("'+r["\x1e"]+'")</span>');else for(var n in t){var o=t[n];if((o.exports||o.value)==r){a.push(n);break}}a.length<=i&&a.push("unknown")}return a},_ad:function(e){var t="",a=e.res||e.e;if(a)if(a.all&&a.constructor&&a.constructor.cached)t="Magix.Service";else if(a.fetchAll||a.all&&a.one&&a.next&&a.then)t="Model Manager";else if(a.bricks)t="Pagelet";else if(a.__attrs&&a.__attrVals&&a.constructor){var i=p.Env.mods,r=void 0;for(var n in i){var o=i[n],s=o.value||o.exports;if(s&&a.constructor==s){t=o.name,r=!0;break}}r||(t=a.hasOwnProperty("pagelet")?"Brick":"extend S Attribute")}else t=p.isFunction(a)?"\u51fd\u6570\u6216\u6784\u9020\u5668":p.type(a);else t=p.type(a);return t},_T:function(e){var t=p.Loader.Utils.attachMod;p.Loader.Utils.attachMod=function(){t.apply(p.Loader.Utils,arguments),e()}},_ae:function(e,t){var a=p.one(e),i=l._Y(p.one,"detach",p.isFunction);p.one(t).on("mousedown",function(e){if(e.target.id==t.slice(1)){var r=parseInt(a.css("right"),10),n=parseInt(a.css("top"),10),o=e.pageX,s=e.pageY;i._W(e.target,function(e){i._X();var t=e.pageX-o,l=e.pageY-s;n+l<0&&(l=-n),a.css({right:r-t,top:n+l})})}})},_R:function(e){for(var t=e.length-1;t>=0;t--){var a=e[t],i=p.one("#"+a.id);i&&i.removeClass("mia").removeClass("mib").addClass("mi_"),a.cls&&i&&i.addClass(o[a.cls])}},_af:function(e){return p.one(e)},_U:function(e){var t=p.Env.mods.magix;if(t&&(t=p.require("magix"))&&t.View&&t.View.prototype.share){var a=t.View.prototype.share;t.View.prototype.share=function(){a.apply(this,arguments),e()}}}},b={_J:function(){},_T:function(e){if(window.MutationObserver){new window.MutationObserver(function(){clearTimeout(void 0),setTimeout(e,1e3)}).observe(document.body,{subtree:!0,childList:!0,characterData:!0})}},_bm:function(e){var t=require.s.contexts._.defined,a=t[e]||m[e];if(!a&&v[e]){var i=v[e];for(var r in t){for(var n=!1,o=i.length-1;o>=0;o--){for(var s=i[o].split("."),l=t[r];s.length&&l;)l=l[s.shift()];if(l){n=!0;break}}if(n){a=t[r],m[e]=a;break}}}return a},_bn:function(){return this._bm("$")||this._bm("jquery")||this._bm("zepto")},_o:function(){var e=this._bm("magix/magix");return(e||this._bm("magix")).config("rootId")},_p:function(){var e=this._bm("magix/vom");if(e)return e;var t=this._bm("magix");return t.VOM||t.Vframe},_C:function(){var e=require.s.contexts._.defined,t=[];for(var a in e){var i=e[a];i&&(i.$mMetas&&i.$mCache||i.$mm&&i.$mc||i.$m&&i.$c)&&t.push({name:a,exports:i})}return t},_K:function(){return this._bm("magix/magix")||this._bm("magix")},_Z:function(e,t){var a,i=this._bn(),r=i("#"+t),n=r,o={height:n.outerHeight?n.outerHeight():n.height(),width:n.outerWidth?n.outerWidth():n.width()};if(o.height)a=n.offset(),e.left=a.left+"px",e.top=a.top+"px",e.position="absolute",o.width=Math.max(o.width,n.children().width()||0),n;else{var s=4;do{if(n=n.children(),o.height=n.height(),n,o.height){var l=n.css("position");"fixed"==l?(l=n.css("left"),e.left=l,e.position=l,l=n.css("top"),e.top=l,l=n.css("right"),e.right=l,l=n.css("bottom"),e.bottom=l):(a=n.offset(),e.left=a.left+"px",e.top=a.top+"px",e.position="absolute",o.width=Math.max(o.width,n.children().width()||0));break}s--}while(n.length&&!o.height&&s>=0)}var c,u=-1;do{c||(c="none"==r.css("display"));var f=parseInt(r.css("z-index"))||1;f&&f>u&&(u=f),r=r.parent()}while(r.length&&i.contains(document.body,r[0]));c&&(o={width:0,height:0}),1==u&&(u=2147483640),e.zIndex=u+1,e.width=o.width+"px",e.height=o.height+"px"},_a_:function(e){return this._bn()("#"+e).offset()},_aa:function(e,t,a){var i=this._bn();return"string"==i.type(e)&&(e="#"+e),i(e).on(t,a)},_ab:function(e,t,a){var i=this._bn();return"string"==i.type(e)&&(e="#"+e),i(e).off(t,a)},_ac:function(e){for(var t=require.s.contexts._.defined,a=[],i=0;i<e.length;i++){var r=e[i];if(r)if(r["\x1e"])a.push('<span style="color:#C71585">State.clean("'+r["\x1e"]+'")</span>');else for(var n in t)if(t[n]==r){a.push(n);break}a.length<=i&&a.push("unknown")}return a},_ad:function(e){var t=e.res||e.e,a=this._bn(),i=a.type(e);return t&&(t.all&&t.constructor&&t.constructor.cached?i="Magix.Service":t.fetchAll||t.all&&t.one&&t.next&&t.then?i="Model Manager":t.bricks?i="Pagelet":a.isFunction(t)&&(i="\u51fd\u6570\u6216\u6784\u9020\u5668")),i},_ae:function(e,t){var a=this._bn(),i=a(e),r=l._Y(a,"off",a.isFunction);a(t).on("mousedown",function(e){if(e.target.id==t.slice(1)){var a=parseInt(i.css("right"),10),n=parseInt(i.css("top"),10),o=e.pageX,s=e.pageY;r._W(e.target,function(e){r._X();var t=e.pageX-o,l=e.pageY-s;n+l<0&&(l=-n),i.css({right:a-t,top:n+l})})}})},_R:function(e){for(var t=this._bn(),a=e.length-1;a>=0;a--){var i=e[a],r=t("#"+i.id);r&&r.removeClass("mia").removeClass("mib").addClass("mi_"),i.cls&&r&&r.addClass(o[i.cls])}},_af:function(e){return this._bn()(e)},_U:function(e){var t=this._bm("magix");if(t&&t.View&&t.View.prototype.share){var a=t.View.prototype.share;t.View.prototype.share=function(){a.apply(this,arguments),e()}}}},x={},w={},y={};for(var M in b)x[M]=w[M]=y[M]=b[M];x._bm=function(e){var t=seajs.cache,a=m[e];if(!a)for(var i in t){var r=t[i];if(r.id===e)return r.exports}if(!a&&v[e]){var n=v[e];for(var i in t){for(var o=!1,s=n.length-1;s>=0;s--){for(var l=n[s].split("."),c=t[i].exports;l.length&&c;)c=c[l.shift()];if(c){o=!0;break}}if(o){a=t[i].exports,m[e]=a;break}}}return a},x._C=function(){var e=seajs.cache,t=[];for(var a in e){var i=e[a],r=i.exports;r&&r.$m&&r.$s&&t.push({name:i.id,exports:r})}return t},x._ac=function(e){for(var t=seajs.cache,a=[],i=0;i<e.length;i++){var r=e[i];if(r)if(r["\x1e"])a.push('<span style="color:#C71585">State.clean("'+r["\x1e"]+'")</span>');else for(var n in t){var o=t[n];if(o.exports==r){a.push(o.id);break}}a.length<=i&&a.push("unknown")}return a},w._bm=function(e){var t;try{t=require(e)}catch(e){}return t||window.console.warn("seajs standalone\u6a21\u5f0f\u4e0b\u65e0\u6cd5\u627e\u5230\u6a21\u5757\uff1a"+e+"\uff0c\u4e5f\u65e0\u6cd5\u667a\u80fd\u63a2\u6d4b\u3002\u5982\u9700\u66f4\u591a\u5e2e\u52a9\u4fe1\u606f\u8bf7\u9489\u9489\u8054\u7cfb\uff1a\u884c\u5217"),t},w._C=function(){return[]},w._ac=function(e){return new Array(e.length+2).join("unknown").slice(1)},y._bm=function(e,t){if("magix"==key)return window.Magix},y._bn=function(){return window.$||window.jQuery},y._o=function(){return Magix.config("rootId")},y._p=function(){return Magix.VOM||Magix.Vframe},y._C=function(){return[]},y._ac=function(e){return new Array(e.length+2).join("unknown").slice(1)},y._K=function(){return!0};var k={_e:function(){return window.KISSY?g:window.requirejs?b:window.seajs?x:window.define&&window.require?w:window.Magix?y:void window.console.error("getEnvError:\u65e0\u6cd5\u5728\u5f53\u524d\u73af\u5883\u4e0b\u542f\u52a8Magix Inspector\uff0c\u5982\u9700\u66f4\u591a\u5e2e\u52a9\uff0c\u8bf7\u9489\u9489\u8054\u7cfb\uff1a\u884c\u5217")},_f:function(e){var t=[],a=0;if(e){var i=e.view&&(e.view.events||e.view.$evts)||e.$v&&e.$v.$eo,n=[],o=[];for(var s in i){a++;var l=i[s];isFinite(l)?(1==(1&l)&&n.push(s),2==(2&l)&&o.push(s)):n.push(s)}var c=e.view&&e.view.tmplEvents;c&&c.length&&(n=n.concat(c),a+=c.length),n.length&&t.push("&lt;"+n+"&gt;");var u=e.$v&&e.$v.$el,f=[],d=[],_=[],h={};if(u){for(var v=0,m=void 0;v<u.length;v++)if(m=u[v],a++,m.e)m.e==window?f.push(m.n):m.e==document&&d.push(m.n);else{var p=h[m.s];p?p.push(m.n):h[m.s]=[m.n]}for(var s in h)_.push("$"+s+"&lt;"+h[s]+"&gt;")}var g=e.$v&&e.$v.$so;if(o.length){for(var b={},x=0,w=void 0,y=void 0;x<o.length;x++){w=g[y=o[x]];for(var M in w){var k=b[M];k?k.push(y):b[M]=[y]}}for(var s in b)_.push("$"+s+"&lt;"+b[s]+"&gt;")}f.length&&t.push('<span style="color:#'+r[1]+'">$win&lt;'+f+"&gt;</span>"),d.length&&t.push('<span style="color:#'+r[3]+'">$doc&lt;'+d+"&gt;</span>"),_.length&&t.push('<span style="color:#'+r[4]+'">'+_+"</span>")}return{list:t,total:a}},_g:function(e){var t=[];if(e&&e.$v){var a=e.$v.$sd;if(a)for(var i in a)t.push(i)}return t},_h:function(e){var t,a=[];if(e){if(e.view){var i=e.view.$ol;i&&(t=i.pn,a=i.keys||i.ks)}if(e.$v){var r=e.$v.$l;r&&r.f&&(t=r.p,a=r.k)}}return{path:t,keys:a}},_k:function(e,t){var a=i._i,r=i._j,n=(r.r-a.r)/t,o=(r.g-a.g)/t,s=(r.b-a.b)/t;return"#"+("0"+parseInt(a.r+e*n).toString(16)).slice(-2)+("0"+parseInt(a.g+e*o).toString(16)).slice(-2)+("0"+parseInt(a.b+e*s).toString(16)).slice(-2)},_l:function(e){if(e){var t=e.view;if(t)return!t.template&&!t.tmpl;if(t=e.$v)return!t.tmpl}return!1},_m:function(e){if(e){var t=e.$v;if(t&&t.mixins)return t.mixins}return[]},_n:function(e){if(e){var t=e.$v;if(t&&t.$os)return t.$os}return[]},_B:function(e){var t=e._o(),r=e._p(),n=[],o={},l={total:0,comTotal:0,vomTotal:0,children:[]},c=r.all(),u={},f=!1;for(var d in c)c.hasOwnProperty(d)&&l.vomTotal++,u[d]=1;var _=function(e,t){var s=r.get(e),c={};if(s){l.total++,t.id=s.id,c.id=s.id,delete u[s.id],s.fcc||s.$cr?(t.status=a._q,c.cls=""):s.fca||s.$ca?(t.status=a._r,c.cls="_r",(s.cM&&!s.view||s.$c&&!s.$v)&&(t.status=a._s,c.cls="_t")):(t.status=a._s,c.cls="_t"),n.push(c),o[s.id]=t;var d=k._f(s).total;if(d){var h=i._u;d=Math.min(d,h),t.event=k._k(d,h)}var v=k._g(s);if(v.length){var m=i._v,p=Math.min(v.length,m);t.shared=k._k(p,m)}var g=k._h(s);if(g.path||g.keys&&g.keys.length){var b=i._w,x=g.keys||[],p=Math.min(b,x.length);t.location=k._k(p,b)}var w=k._m(s);if(w.length){var y=i._x,p=Math.min(w.length,y);t.mixins=k._k(p,y)}var M=k._n(s);if(M.length){var m=i._y,p=Math.min(M.length,m);t.state=k._k(p,m)}t.inline=k._l(s);var T=s.path;(t.inline||T&&T.indexOf("/gallery/")>0)&&(f=!0,t.component=!0,l.comTotal++);var $=s.cM||s.$c;for(var C in $){var q={children:[]};_(C,q),q.id&&t.children.push(q)}}};_(t,l);var h=s("_z");h&&h.checked||!f||(f=function(e){for(var t=e.children.length-1;t>=0;t--){var a=e.children[t];a.component?e.children.splice(t,1):f(a)}})(l);var v=[];for(var m in u)v.push({id:m,il:!0,status:a._A,children:[]}),n.push({id:m,cls:"_t"});return l.isolated=v,{tree:l,flattened:n,map:o}},_I:function(e){for(var t=e._C(),a=[],r=0,o={},s=0,l={},c=0,u=0;u<t.length;u++){var f=t[u],d=f.exports.$mMetas||f.exports.$mm||f.exports.$m;d._$id||(d._$id="t"+c++),l[d._$id]&&(l[d._$id].continued=!0),l[d._$id]=f}for(var _=0;_<t.length;_++){var h=t[_],v=[],m={left:[],right:[]},p=[],g=0,b=0,x=0,w=void 0,y=void 0,M=h.exports.$mMetas||h.exports.$mm||h.exports.$m;if(delete M._$id,!h.continued){for(w in M)if((y=M[w]).cleans)for(var k=(y.cleans+"").split(","),T=0;T<k.length;T++)o[k[T]]=w;for(w in M){y=M[w];var $=n._D,C={id:w,color:$,url:y.url||y.uri,cache:(y.cache||0|y.cacheTime)/1e3+"sec",desc:y.desc||"",cleans:y.cleans||"",cleaned:o[w]||"",hasAfter:y.after?(y.after+"").substr(0,200):""};y.cleans?($=n._E,C.color=$,m.left.push(C),b++):o[w]?($=n._F,C.color=$,m.right.push(C),x++):y.cache||y.cacheTime?($=n._G,C.color=$,p.push(C)):(v.push(C),g++),s++}}r+=Math.ceil(g/i._H),r+=Math.max(b,x),r+=Math.ceil(p.length/i._H),a.push({name:h.name,rows:r,cleans:m,caches:p,maxLeft:b,maxRight:x,items:v})}return{groups:a,rows:r,total:s}},_J:function(t){var a=k._e();a._J();var i=50,r=function(){--i?e.body&&a._K()?t():setTimeout(r,500):window.console.error("prepareError:\u65e0\u6cd5\u5728\u5f53\u524d\u73af\u5883\u4e0b\u542f\u52a8Magix Inspector(\u9700\u8981\u7684\u6a21\u5757\u5982jquery,magix\u7b49\u68c0\u6d4b\u4e0d\u5230)\uff0c\u5982\u9700\u66f4\u591a\u5e2e\u52a9\uff0c\u8bf7\u65fa\u65fa\u8054\u7cfb\uff1a\u884c\u5217")};r()},_V:function(){k._J(function(){d._L();var e,t,i,r,n,o=k._e(),s=o._p(),l=0,c=function(){r&&t&&(l=0,h._M(n.tree),clearInterval(t),r=t="")},u=function(){l=16,r&&!t&&(h._M(n.tree,r),t=setInterval(function(){l?(l--,h._M(n.tree,r)):c()},600))};document.onmouseout=document.onmouseover=function(e){clearTimeout(i),i=setTimeout(function(){for(var t,a=s.all(),i="mouseout"==e.type?e.relatedTarget:e.target;i&&i.parentNode;){var n=i.id;if(n&&a[n]){t=n;break}i=i.parentNode}t?t!=r&&(r=t,u()):c()},50)};var f=function(e){e.on("created",function(){_._N("vframe:"+e.id+"["+(e.path||e.view.path||"")+"]\u6e32\u67d3\u5b8c\u6bd5",a._q),m()}),e.on("alter",function(t){if(t.id&&!t.logged){t.logged=1;var i=s.get(t.id);i&&_._N("\u4ecevframe:"+i.id+"["+(i.path||i.view.path||"")+"] \u53d1\u8d77\u754c\u9762\u53d8\u66f4",a._O)}_._N("vframe:"+e.id+"\u6536\u5230\u53d8\u66f4\u6d88\u606f",a._r),m()}),e.on("viewInited",function(){_._N("vframe:"+e.id+"\u7684view["+e.view.path+"]\uff0cinit\u8c03\u7528\u5b8c\u6bd5",a._q)}),e.on("viewUnmounted",function(){var t=e.path||e.view&&e.view.path||"";t&&(t="["+t+"]"),_._N("vframe:"+e.id+"\u7684view"+t+"\u9500\u6bc1\u5b8c\u6bd5",a._P)}),e.on("viewMounted",function(){_._N("vframe:"+e.id+"\u7684view["+(e.path||e.view.path||"")+"]\uff0c\u9996\u6b21\u6e32\u67d3\u5b8c\u6bd5",a._q)}),e.___mh=!0},v=function(){var e=s.all();for(var t in e){var a=s.get(t);a.___mh||f(a)}},m=function(t){if(t)if("remove"==t.type)if(t.vframe){var i=t.vframe.path;!i&&t.vframe.view&&(i=t.vframe.view.path),i=i?"("+i+")":"",_._N("\u4eceVOM\u4e2d\u79fb\u9664vframe:"+t.vframe.id+i,a._Q)}else _._N("remove:",t);else"created"==t.type&&v();clearTimeout(e),e=setTimeout(function(){c(),n=k._B(o),h._M(n.tree),u(),o._R(n.flattened)},0)};s.on("add",function(e){m(),e.vframe.pId&&_._N("\u627e\u5230vframe:"+e.vframe.pId+"\u7684\u5b50vframe:"+e.vframe.id,a._O),_._N("\u521b\u5efavframe:"+e.vframe.id,a._O),f(e.vframe)}),s.on("remove",m);var p=s.get(o._o());p&&p.on("created",m),v(),m(),k._M=m;var g,b=function(){clearTimeout(g),g=setTimeout(function(){var e=k._I(o);h._S(e)},500)};o._T(b),o._U(m),b()})}};k._V()}}();
(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{192:function(e,t,a){e.exports=a.p+"static/media/006-thunderstorm.a3ae7e9e.svg"},193:function(e,t,a){e.exports=a.p+"static/media/019-raining.f334d20a.svg"},194:function(e,t,a){e.exports=a.p+"static/media/023-rain-4.66e73bdb.svg"},195:function(e,t,a){e.exports=a.p+"static/media/016-snowing-1.d416e972.svg"},196:function(e,t,a){e.exports=a.p+"static/media/031-cloudy.a510d1e4.svg"},197:function(e,t,a){e.exports=a.p+"static/media/013-sunny.fa3a4662.svg"},198:function(e,t,a){e.exports=a.p+"static/media/035-cloud.e12bfaaf.svg"},199:function(e,t,a){e.exports=a.p+"static/media/empty.25fc67bb.svg"},201:function(e,t,a){e.exports=a(409)},407:function(e,t,a){},409:function(e,t,a){"use strict";a.r(t);a(202),a(214);var n=a(0),r=a.n(n),c=a(89),i=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(43),l=a(200),s=a(28),m=Object(l.a)((function(e,t){var a=t.type,n=t.payload;switch(a){case"SET_CURRENT":return Object(s.a)(Object(s.a)({},e),{},{data:Object(s.a)(Object(s.a)({},e.data),{},{current:n})});case"SET_FORECAST":return Object(s.a)(Object(s.a)({},e),{},{data:Object(s.a)(Object(s.a)({},e.data),{},{forecast:n})});case"HANDLE_SEARCH":return Object(s.a)(Object(s.a)({},e),{},{search:n});default:return Object(s.a)({},e)}}),{data:{current:{},forecast:{}},search:""},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),u=a(90),d=function(e){var t=Object(o.d)(),a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],l=c[1],s=Object(o.c)(),m=function(e){if(e.preventDefault(),i&&""!==i.trim())return d(i)},d=function(e){return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=bdb758c73d929483146ad6c4d174a694")).then((function(e){return e.json()})).then((function(e){s({type:"SET_CURRENT",payload:e}),"404"!==e.cod&&fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.coord.lat,"&lon=").concat(e.coord.lon,"&exclude=current,minutely,hourly,alerts&appid=bdb758c73d929483146ad6c4d174a694")).then((function(e){return e.json()})).then((function(e){return s(function(e){return{type:"SET_FORECAST",payload:e}}(e))})).catch((function(e){return console.log(e)}))}))},p=function(e){l(e),s({type:"HANDLE_SEARCH",payload:e}),d(t.getState().search)},_=Object(n.useCallback)((function(){"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(e){fetch("https://ipinfo.io/json?token=839702aade76be").then((function(e){return e.json()})).then((function(e){p(e.city)}))}),(function(e){p("Kiyv")})):p("Kiyv")}),[s]);return Object(n.useEffect)((function(){_()}),[_]),r.a.createElement("form",{className:"search__bar",onSubmit:m},r.a.createElement("input",{type:"text",placeholder:"Your City",value:i,className:"text--reg search__input",onChange:function(e){return l(e.target.value)},onBlur:m}),r.a.createElement("span",{className:"search__input-bg"}),r.a.createElement("input",{type:"submit",className:"search__button",value:""}))},p=(a(407),function(e){return r.a.createElement("div",{className:"app__background-wrapper"},r.a.createElement("div",{className:"app__background"}))}),_=a(192),f=a.n(_),x=a(193),E=a.n(x),g=a(194),h=a.n(g),b=a(195),v=a.n(b),N=a(196),w=a.n(N),y=a(197),O=a.n(y),j=a(198),D=a.n(j),S=function(e){return["Wen","Thu","Fri","Sat","Sun","Mon","Tue"][e%7]},k=function(e){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e]},F=function(e){return e>=200&&e<300?f.a:e>=300&&e<400?E.a:e>=500&&e<600?h.a:e>=600&&e<700?v.a:e>=700&&e<800?w.a:800===e?O.a:e>=801&&e<900?D.a:void 0},C=function(e){var t=e.current,a=t.weather,n=t.main;return"404"===t.cod?null:r.a.createElement("section",{className:"dashboard"},r.a.createElement("div",{className:"dashboard__icon"},r.a.createElement("img",{src:F(a[0].id),alt:F(a[0].main),className:"dashboard__icon-image"}),r.a.createElement("p",{className:"text text--reg dashboard__icon-text"},a[0].main)),r.a.createElement("div",{className:"dashboard__temperature"},r.a.createElement("h1",{className:"text text--header dashboard__temperature-text--main"},Math.round(n.temp-273.15).toFixed(1),"\xb0C"),r.a.createElement("h3",{className:"text text--orange text--header dashboard__temperature-text--fl"},"Feels like ",Math.round(n.feels_like-273.15).toFixed(1),"\xb0C")),r.a.createElement("div",{className:"dashboard__date"},r.a.createElement("p",{className:"text text--reg dashboard__date-text"},S((new Date).getDate()),", ",r.a.createElement("span",{className:"text--orange"},(new Date).getDate()," ",k((new Date).getMonth())," ",(new Date).getFullYear()))))},T=function(e){var t=e.current,a=t.main,n=t.wind;return"404"===t.cod?null:r.a.createElement("ul",{className:"list info"},function(e){var t=a.humidity,c=a.pressure,i=n.speed,o=n.deg;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"text text--reg info__item"},r.a.createElement("p",{className:"text info__text--key info__text--humidity"},"Humidity"),r.a.createElement("strong",{className:"text info__text--value"},t," %")),r.a.createElement("li",{className:"text text--reg info__item"},r.a.createElement("p",{className:"text info__text--key info__text--pressure"},"Air pressure"),r.a.createElement("strong",{className:"text info__text--value"},(.750063755419211*c).toFixed(2),"mm")),r.a.createElement("li",{className:"text text--reg info__item"},r.a.createElement("p",{className:"text info__text--key info__text--wind"},"Wind"),r.a.createElement("strong",{className:"text info__text--value"},i,"m/s ",function(e){return e>=0&&e<45?"\ud83e\udc6c":e>=45&&e<90?"\ud83e\udc69":e>=90&&e<135?"\ud83e\udc6d":e>=135&&e<180?"\ud83e\udc6a":e>=180&&e<225?"\ud83e\udc6e":e>=225&&e<270?"\ud83e\udc6b":e>=270&&e<315?"\ud83e\udc6f":e>=315&&e<360?"\ud83e\udc68":void 0}(o))))}())},M=a(412),R=a(411),A=(a(408),function(e){var t=e.forecast,a=Object(n.useState)(window.innerWidth),c=Object(u.a)(a,2),i=c[0],o=c[1];Object(n.useEffect)((function(e){window.addEventListener("resize",(function(e){return o(window.innerWidth)})),window.addEventListener("rotationchange",(function(e){return o(window.innerWidth)}))}),[]);var l;return 0===Object.keys(t).length?null:r.a.createElement(r.a.Fragment,null,i>1024?(l=t.daily,r.a.createElement("ul",{className:"list slider"},l.map((function(e,t){var a=e.temp,n=e.feels_like,c=e.weather,i=a.min,o=a.max,l=n.day,s=n.night,m=n.eve,u=n.morn,d=(new Date).getDate()+t,p=Date.now()+864e5*t;return r.a.createElement("li",{className:"text--center slider__item",key:t},r.a.createElement("p",{className:"text text--reg slider__item-text--date"},S(d),", ",d,"\xa0",k(new Date(p).getMonth()),"\xa0",new Date(p).getFullYear()),r.a.createElement("img",{src:F(c[0].id),alt:c[0].main,className:"slider__item-logo"}),r.a.createElement("div",null,r.a.createElement("p",{className:"text text--reg slider__item-text--temperature"},Math.round((i+o)/2-273.15).toFixed(1),"\xb0C"),r.a.createElement("p",{className:"text text--orange text--reg slider__item-text--fl"},"Feels like ",Math.round((l+s+m+u)/4-273.15).toFixed(1),"\xb0C")))})))):function(e){return r.a.createElement(M.a,{slidesPerView:3,loop:!1,className:"slider"},e.map((function(e,t){var a=e.temp,n=e.feels_like,c=e.weather;return r.a.createElement(R.a,{className:"text--center slider__item",key:t},r.a.createElement("p",{className:"text text--reg slider__item-text--date"},S((new Date).getDate()+(t+1)),", ",(new Date).getDate()+(t+1),"\xa0",k(new Date(Date.now()+864e5*(t+1)).getMonth()),"\xa0",new Date(Date.now()+864e5*(t+1)).getFullYear()),r.a.createElement("img",{src:F(c[0].id),alt:c[0].main,className:"slider__item-logo"}),r.a.createElement("div",null,r.a.createElement("p",{className:"text text--reg slider__item-text--temperature"},Math.round((a.min+a.max)/2-273.15).toFixed(1),"\xb0C"),r.a.createElement("p",{className:"text text--orange text--reg slider__item-text--fl"},"Feels like ",Math.round((n.day+n.night+n.eve+n.morn)/4-273.15).toFixed(1),"\xb0C")))})))}(t.daily))}),W=a(199),L=a.n(W),H=function(e){var t=e.city,a=void 0===t?"city name":t;return r.a.createElement("section",{className:"empty"},r.a.createElement("img",{src:L.a,alt:"Empty",className:"empty__icon"}),r.a.createElement("p",{className:"text text--reg empty__text"},"Can't get data for ",r.a.createElement("span",{className:"text--orange"},a)))},J=Object(o.b)((function(e){return{data:e.data}}))((function(e){var t=Object(o.d)(),a=t.getState().data,n=a.current,c=a.forecast;return 0===Object.values(n).length?null:404===+n.cod?r.a.createElement(H,{city:t.getState().search}):r.a.createElement("main",null,r.a.createElement(C,{current:n}),r.a.createElement(A,{forecast:c}),r.a.createElement(T,{current:n}))}));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:m},r.a.createElement(p,null),r.a.createElement(d,null),r.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[201,1,2]]]);
//# sourceMappingURL=main.37355dec.chunk.js.map
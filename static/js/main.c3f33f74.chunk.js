(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(32).concat([function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n,a,r,s,i=c(26),o=c.n(i),l=c(7),u=c(4),d=(c(32),c(33),c(0)),j=function(){return Object(d.jsx)("footer",{className:"footer App__footer",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"footer__inner",children:[Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("img",{src:"img/header-img/LOGO.png",alt:"logo"})}),Object(d.jsxs)("ul",{className:"footer__info nav",children:[Object(d.jsx)("li",{className:"nav__item footer__info-item",children:Object(d.jsx)("a",{target:"_blank",className:"link footer__info-link",href:"https://github.com/dissolveyo",rel:"noreferrer",children:"Github"})}),Object(d.jsx)("li",{className:"nav__item footer__info-item",children:Object(d.jsx)("a",{target:"_blank",className:"link footer__info-link",href:"https://github.com/dissolveyo",rel:"noreferrer",children:"Contacts"})}),Object(d.jsx)("li",{className:"nav__item footer__info-item",children:Object(d.jsx)("a",{target:"_blank",className:"link footer__info-link",href:"https://github.com/dissolveyo",rel:"noreferrer",children:"Rights"})})]}),Object(d.jsxs)("button",{type:"button",className:"footer__back-btn",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:[Object(d.jsx)("p",{children:"Back to top"}),Object(d.jsx)("i",{className:"icon icon--arrow-up footer__back-btn-arow"})]})]})})})},b=(c(36),c(1)),p=c(8),h=c.n(p),m=function(e){var t=e.text,c=e.to;return Object(d.jsx)(l.c,{to:c,className:function(e){var t=e.isActive;return h()("nav__link","link",{"nav__link--active":t})},children:t})},O=(c(37),function(){return Object(d.jsxs)("ul",{className:"nav",children:[Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)(m,{to:"/",text:"Home"})}),Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)(m,{to:"phones",text:"Phones"})}),Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)(m,{to:"tablets",text:"Tablets"})}),Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsx)(m,{to:"accessories",text:"Accessories"})})]})}),f=c(5),x=c(10);!function(e){e.Four="4",e.Eight="8",e.Sixteen="16",e.All="all"}(n||(n={})),function(e){e.Home="/",e.Phones="/phones",e.Tablets="/tablets",e.Accessories="/accessories",e.Favorites="/favorites",e.Cart="/cart"}(a||(a={})),function(e){e.Newest="Newest",e.Alphabetically="Alphabetically",e.Cheapest="Cheapest"}(r||(r={})),function(e){e.Screen="screen",e.Resolution="resolution",e.Processor="processor",e.RAM="ram",e.Capacity="capacity",e.Camera="camera",e.Zoom="zoom",e.Cell="cell"}(s||(s={}));var _,v=Object.values(s),g=function(e,t){return t-e},N=function(e,t){var c=e.price,n=e.fullPrice,a=t.price,r=t.fullPrice,s=g(c,n);return g(a,r)-s},y=function(e,t){var c=e.price;return t.price-c},w=function(e,t){return e.filter((function(e){return e.category===t}))},k=function(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(f.a)(e,2),n=t[0],a=t[1];null===a?c.delete(n):Array.isArray(a)?(c.delete(n),a.forEach((function(e){c.append(n,e)}))):c.set(n,a)})),c.toString()},C=function(e,t){return t.year-e.year},P=function(e,t){return e.name.localeCompare(t.name)},A=function(e,t){var c;if(!e)return[];(c=Object(x.a)(e),t.has("sort"))&&(c=function(e,t){switch(t){case r.Newest.toLowerCase():return e.sort(C);case r.Alphabetically.toLowerCase():return e.sort(P);case r.Cheapest.toLowerCase():return e.sort(y).reverse();default:return e}}(c,t.get("sort")||""));if(t.has("query")){var n,a=null===(n=t.get("query"))||void 0===n?void 0:n.toLowerCase();c=c.filter((function(e){return e.name.toLowerCase().includes(a||"")}))}return c},S=function(e,t,c){var n=null===e||void 0===e?void 0:e.namespaceId,a=null===e||void 0===e?void 0:e.capacity,r=null===e||void 0===e?void 0:e.color,s="".concat(n,"-");return t&&!c?"".concat(s).concat(a,"-").concat(t).toLowerCase():!t&&c?"".concat(s).concat(c,"-").concat(r).toLowerCase():"".concat(s).concat(a,"-").concat(r)},F=function(e){return e[0].toUpperCase()+e.slice(1)},q=c(13),I=c(27),T=["children","params"],E=function(e){var t=e.children,c=e.params,n=Object(I.a)(e,T),a=Object(l.d)(),r=Object(f.a)(a,1)[0];return Object(d.jsx)(l.b,Object(q.a)(Object(q.a)({to:{search:k(r,c)}},n),{},{children:t}))},L=function(){var e=Object(l.d)(),t=Object(f.a)(e,2),c=t[0],n=t[1],a=Object(u.k)().pathname.slice(1),r=c.get("query")||"";return Object(d.jsxs)("div",{className:"header__utils-search-wrap",children:[Object(d.jsx)("input",{id:"search",value:r,className:"header__utils-search",type:"text",placeholder:"Search in ".concat(a,"..."),onChange:function(e){var t=k(c,{query:e.target.value||null,page:null});n(t)}}),Object(d.jsx)("label",{htmlFor:"search",children:Object(d.jsx)(E,{params:{query:null},children:Object(d.jsx)("i",{"data-cy":"searchDelete",className:h()("icon","icon--search","header__search-icon",{"icon--cross":r})})})})]})};!function(e){e.Increase="increase",e.Decrease="decrease"}(_||(_={}));var U,D=Object(b.createContext)({cart:[],addToCart:function(){},removeFromCart:function(){},handleQuantityChange:function(){}}),M=function(e){var t=e.children,c=function(e,t){var c=Object(b.useState)((function(){var c=localStorage.getItem(e);return c?JSON.parse(c):t})),n=Object(f.a)(c,2),a=n[0],r=n[1];return[a,function(t){localStorage.setItem(e,JSON.stringify(t)),r(t)}]}("cart",[]),n=Object(f.a)(c,2),a=n[0],r=n[1];return Object(d.jsx)(D.Provider,{value:{cart:a,addToCart:function(e){r([].concat(Object(x.a)(a),[e]))},removeFromCart:function(e){r(Object(x.a)(a.filter((function(t){return t.product.id!==e}))))},handleQuantityChange:function(e,t){var c;switch(t){case _.Increase:c=a.map((function(t){if(t.id===e){var c=t.quantity+1;return Object(q.a)(Object(q.a)({},t),{},{quantity:c})}return t}));break;case _.Decrease:c=a.map((function(t){if(t.id===e){var c=t.quantity-1;return Object(q.a)(Object(q.a)({},t),{},{quantity:c})}return t}));break;default:c=a}r(c)}},children:t})},R=Object(b.createContext)({favItems:[],addToFav:function(){},removeFromFav:function(){}}),B=function(e){var t=e.children,c=Object(b.useState)([]),n=Object(f.a)(c,2),a=n[0],r=n[1];return Object(d.jsx)(R.Provider,{value:{favItems:a,addToFav:function(e){r((function(t){return[].concat(Object(x.a)(t),[e])}))},removeFromFav:function(e){r((function(t){return Object(x.a)(t.filter((function(t){return t.id!==e})))}))}},children:t})};!function(e){e.Phones="/phones",e.Tablets="/tablets",e.Accessories="/accessories",e.Favorites="/favorites"}(U||(U={}));var $,J=Object.values(U),Q=function(){var e=Object(u.k)().pathname,t=J.includes(e),c=Object(b.useContext)(D).cart,n=Object(b.useContext)(R).favItems,a=0!==c.length,r=0!==n.length,s="/cart"!==e;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsxs)("nav",{className:"header__nav",children:[Object(d.jsx)(l.b,{className:"header__logo",to:"/",children:Object(d.jsx)("img",{src:"img/header-img/LOGO.png",className:"header__logo-img",alt:"logo"})}),s&&Object(d.jsx)(O,{})]}),Object(d.jsxs)("div",{className:"header__utils",children:[t&&Object(d.jsx)(L,{}),s&&Object(d.jsx)(l.b,{to:"favorites",className:"header__link","aria-label":"icon",children:Object(d.jsx)("i",{className:"icon icon--fav header__action-icon",children:r&&Object(d.jsx)("div",{className:"header__cart-length",children:null===n||void 0===n?void 0:n.length})})}),Object(d.jsx)(l.b,{to:"cart",className:"header__link","aria-label":"icon",children:Object(d.jsx)("i",{className:"icon icon--cart header__action-icon",children:a&&Object(d.jsx)("div",{className:"header__cart-length",children:null===c||void 0===c?void 0:c.length})})})]})]})},G=c(6),H=c(3),Y=c.n(H);!function(e){e.Phones="phones",e.Tablets="tablets",e.Accessories="accessories"}($||($={}));var z="https://mate-academy.github.io/react_phone-catalog/_new/products.json",W=[{backImageUrl:"img/category/phone-bg.png",imageUrl:"img/category/phone.png",name:"Mobile Phones",quantity:void 0,link:a.Phones},{backImageUrl:"img/category/tablets-bg.png",imageUrl:"img/category/tablets.png",name:"Tablets",quantity:void 0,link:a.Tablets},{backImageUrl:"img/category/accs-bg.png",imageUrl:"img/category/accs.png",name:"Accessories",quantity:void 0,link:a.Accessories}],Z="translate .7s ease-in-out",K=["img/banners/banner-phones.png","img/banners/banner-tablets.png","img/banners/banner-accessories.png"],V=function(e,t,c){return e*t+(e-1*c)}(4,272,14),X=1040,ee=function(e){return fetch(e).then((function(e){var t;if(!e.ok)throw Error();if(null===(t=e.headers.get("content-type"))||void 0===t||!t.includes("application/json"))throw new Error;return e.json()}))},te=function(){var e=Object(G.a)(Y.a.mark((function e(){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(z);case 2:return t=e.sent,e.abrupt("return",t.sort(N));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(G.a)(Y.a.mark((function e(){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(z);case 2:return t=e.sent,e.abrupt("return",t.sort(y));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(G.a)(Y.a.mark((function e(){var t,c,n,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(z);case 2:return t=e.sent,c=w(t,$.Phones).length,n=w(t,$.Tablets).length,a=w(t,$.Accessories).length,e.abrupt("return",[c,n,a]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(G.a)(Y.a.mark((function e(t){var c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(z);case 2:return c=e.sent,e.abrupt("return",c.filter((function(e){return e.category===t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re={phones:function(){return ae($.Phones)},tablets:function(){return ae($.Tablets)},accessories:function(){return ae($.Accessories)}},se=function(){var e=Object(G.a)(Y.a.mark((function e(t){var c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee("".concat("https://mate-academy.github.io/react_phone-catalog/_new/products/").concat(t,".json"));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(G.a)(Y.a.mark((function e(t){var c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee("".concat(z));case 2:return c=e.sent,e.abrupt("return",c.find((function(e){return e.phoneId===t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){return.5-Math.random()},le=function(){var e=Object(G.a)(Y.a.mark((function e(){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(z);case 2:return t=e.sent,e.abrupt("return",t.sort(oe));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=(c(38),function(){return Object(d.jsxs)("button",{type:"button",className:"back-button","data-cy":"backButton",onClick:function(){window.history.back()},children:[Object(d.jsx)("i",{className:"icon icon--arrow-left"}),"Back"]})}),de=(c(39),function(e){var t=e.pathes,c=t.length;return Object(d.jsx)("div",{className:"App__breadcrumb",children:Object(d.jsxs)("div",{className:"breadcrumb",children:[Object(d.jsx)(l.b,{to:"/",className:"icon icon--house"}),t.map((function(e,t){var n=function(e){switch(!0){case e.includes(a.Phones):return["Phones",a.Phones];case e.includes(a.Tablets):return["Tablets",a.Tablets];case e.includes(a.Accessories):return["Accessories",a.Accessories];case e.includes(a.Favorites):return["Favorites",a.Accessories];case e.includes(a.Cart):return["Cart",a.Cart];default:return e}}(e),r=Array.isArray(n),s=r?n[1]:e,i=r?n[0]:e;return t===c-1?Object(d.jsxs)("div",{className:"breadcrumb__part",children:[Object(d.jsx)("i",{className:"icon icon--arrow-right--disabled"}),Object(d.jsx)("p",{className:"breadcrumb__text",children:i})]},s):Object(d.jsxs)("div",{className:"breadcrumb__part",children:[Object(d.jsx)("i",{className:"icon icon--arrow-right--disabled"}),Object(d.jsx)(l.b,{to:s,className:"breadcrumb__link",children:i})]},e)}))]})})}),je=function(e){var t=e.capacityOptions,c=e.currentProduct;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"product-info__options-title",children:"Select capacity"}),Object(d.jsx)("div",{className:"product-info__options-body",children:t.map((function(e){var t=e===c.capacity,n=S(c,void 0,e);return Object(d.jsx)(l.b,{to:"../".concat(n),type:"button",className:h()("product-info__capacity-btn",{"product-info__capacity-btn--active":t}),children:e},e)}))})]})},be=function(e){var t=e.product,c=e.width,n=e.height,a=Object(b.useContext)(D),r=a.cart,s=a.addToCart,i=a.removeFromCart,o=r.find((function(e){return e.product.id===t.id}));return Object(d.jsx)("button",{style:{width:c,height:n},type:"button",className:h()("button","button--primary",{"button--selected":o}),onClick:function(){if(o)i(t.id);else{var e=function(e){return{id:crypto.randomUUID(),product:e,quantity:1}}(t);s(e)}},children:o?"Added to cart":"Add to cart"})},pe=function(e){var t=e.colors,c=e.currentProduct;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"product-info__options-title",children:"Available colors"}),Object(d.jsx)("div",{className:"product-info__options-body",children:t.map((function(e){var t=c.color===e,n=S(c,e),a=function(e){switch(e){case"midnightgreen":return"green";case"spacegray":return"gray";default:return e}}(e);return Object(d.jsx)(l.b,{to:"../".concat(n),children:Object(d.jsx)("div",{className:h()("product-info__color-wrap",{"product-info__color-wrap--active":t}),children:Object(d.jsx)("div",{style:{backgroundColor:a},className:"product-info__color"})})},e)}))})]})},he=function(e){var t=e.width,c=e.height,n=e.product,a=Object(b.useContext)(R),r=a.favItems,s=a.addToFav,i=a.removeFromFav,o=r.find((function(e){return e.id===n.id}));return Object(d.jsx)("button",{style:{width:t,height:c},type:"button",className:"icon--btn",onClick:function(){o?i(n.id):s(n)},children:Object(d.jsx)("i",{className:h()("icon","icon--fav",{"icon--fav-active":o})})})},me=(c(40),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})}),Oe=(c(41),function(e){var t=e.article,c=t.text,n=t.title;return Object(d.jsxs)("div",{className:"product-article",children:[Object(d.jsx)("h4",{className:" product-article__title title title--small ",children:n}),c.map((function(e){return Object(d.jsx)("p",{className:"product-article__text",children:e},e)}))]})}),fe=(c(42),function(e){var t=e.articles;return Object(d.jsx)("div",{className:"product-about",children:t.map((function(e){return Object(d.jsx)("div",{className:"product-about__article",children:Object(d.jsx)(Oe,{article:e})},e.title)}))})}),xe=(c(43),c(44),function(e){var t=e.product,c=t.name,n=t.price,a=t.screen,r=t.capacity,s=t.ram,i=t.image,o=t.fullPrice,u=t.phoneId,j=t.category;return Object(d.jsxs)("div",{className:"product-card","data-cy":"cardsContainer",children:[Object(d.jsxs)(l.b,{className:"product-card__link",to:"/".concat(j,"/").concat(u),children:[Object(d.jsx)("img",{className:"product-card__img",src:i,alt:c}),Object(d.jsx)("p",{className:"product-card__title",children:c}),Object(d.jsxs)("div",{className:"product-card__prices",children:[Object(d.jsx)("p",{className:"product-card__price",children:"$".concat(o)}),Object(d.jsx)("p",{className:"product-card__discount",children:"$".concat(n)})]})]}),Object(d.jsxs)("div",{className:"product-card__tech",children:[Object(d.jsxs)("div",{className:"product-card__pair",children:[Object(d.jsx)("p",{className:"product-card__pair-prop",children:"Screen"}),Object(d.jsx)("p",{className:"product-card__pair-value",children:a})]}),Object(d.jsxs)("div",{className:"product-card__pair",children:[Object(d.jsx)("p",{className:"product-card__pair-prop",children:"Capacity"}),Object(d.jsx)("p",{className:"product-card__pair-value",children:r})]}),Object(d.jsxs)("div",{className:"product-card__pair",children:[Object(d.jsx)("p",{className:"product-card__pair-prop",children:"RAM"}),Object(d.jsx)("p",{className:"product-card__pair-value",children:s})]})]}),Object(d.jsxs)("div",{className:"product-card__actions",children:[Object(d.jsx)(be,{width:176,height:40,product:t}),Object(d.jsx)(he,{width:40,height:40,product:t})]})]})}),_e=function(e){var t=e.title,c=e.products,n=Object(b.useState)(0),a=Object(f.a)(n,2),r=a[0],s=a[1],i=272*c.length+16*(c.length-1),o=r===c.length-4,l=0===r;return Object(d.jsxs)("div",{className:"product-slider",children:[Object(d.jsxs)("div",{className:"product-slider__info",children:[Object(d.jsx)("h3",{className:"product-slider__title title title--large",children:t}),Object(d.jsxs)("div",{className:"product-slider__buttons",children:[Object(d.jsx)("button",{disabled:l,type:"button",className:"product-slider__button","aria-label":"slider-btn",onClick:function(){s((function(e){return e-1}))},children:Object(d.jsx)("i",{className:h()("icon","icon--arrow-left",{"icon--arrow-left--disabled":l})})}),Object(d.jsx)("button",{disabled:o,type:"button",className:"product-slider__button","aria-label":"slider-btn",onClick:function(){s((function(e){return e+1}))},children:Object(d.jsx)("i",{className:h()("icon","icon--arrow-right",{"icon--arrow-right--disabled":o})})})]})]}),Object(d.jsx)("div",{style:{widows:V},className:"product-slider__content-wrap",children:Object(d.jsx)("ul",{style:{width:i,translate:-286*r,transition:Z},className:"product-slider__content",children:c.map((function(e){return Object(d.jsx)("li",{className:"product-slider__item",children:Object(d.jsx)(xe,{product:e})},e.id)}))})})]})},ve=function(e){var t=e.property,c=e.value,n="string"===typeof c;return Object(d.jsxs)("div",{className:"product-info__pair",children:[Object(d.jsx)("div",{className:"product-info__property",children:F(t)}),Object(d.jsx)("div",{className:"product-info__value",children:n?c:c.join(", ")})]})},ge=function(e){var t=e.techSpecs;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){var t=e[0],c=e[1];return Object(d.jsx)(ve,{property:t,value:c},t)}))})},Ne=(c(45),function(){var e=Object(b.useState)(null),t=Object(f.a)(e,2),c=t[0],n=t[1],a=Object(b.useState)(null),r=Object(f.a)(a,2),s=r[0],i=r[1],o=Object(b.useState)(),l=Object(f.a)(o,2),j=l[0],p=l[1],m=Object(b.useState)(),O=Object(f.a)(m,2),x=O[0],_=O[1],g=Object(b.useState)(!1),N=Object(f.a)(g,2),y=N[0],w=N[1],k=Object(u.k)().pathname,C=Object(u.o)().productId,P=void 0===C?"":C,A=function(){var e=Object(G.a)(Y.a.mark((function e(t){var c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se(t);case 3:c=e.sent,n(c),p(null===c||void 0===c?void 0:c.images[0]),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),w(!0),n(null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(G.a)(Y.a.mark((function e(){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie(P);case 2:t=e.sent,i(t||null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(G.a)(Y.a.mark((function e(){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:t=e.sent,_(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(b.useEffect)((function(){Promise.all([A(P),S(),F()])}),[P]);var q=Object(b.useMemo)((function(){return c?function(e){var t=[];return Object.entries(e).forEach((function(e){var c=Object(f.a)(e,2),n=c[0],a=c[1];v.includes(n)&&t&&t.push([n,a])})),t}(c):[]}),[c]),I=q.slice(0,4),T=(null===c||void 0===c?void 0:c.colorsAvailable)||[],E=(null===c||void 0===c?void 0:c.capacityAvailable)||[],L=!c&&!y;return Object(d.jsxs)("section",{className:"product-info",children:[Object(d.jsx)(de,{pathes:[k,(null===s||void 0===s?void 0:s.name)||""]}),Object(d.jsx)(ue,{}),c&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"product-info__name title title--large",children:c.name}),Object(d.jsxs)("div",{className:"product-info__content",children:[Object(d.jsx)("div",{className:"product-info__images",children:c.images.map((function(e){var t=e===j;return Object(d.jsx)("button",{className:h()("product-info__image-btn",{"product-info__image-btn--active":t}),type:"button",onClick:function(){return function(e){p(e)}(e)},children:Object(d.jsx)("img",{className:"product-info__image",src:e,alt:e},e)},e)}))}),Object(d.jsx)("img",{className:"product-info__main-image",src:j,alt:j}),Object(d.jsxs)("div",{className:"product-info__short-description",children:[Object(d.jsx)("div",{className:"product-info__options",children:Object(d.jsx)(pe,{currentProduct:c,colors:T})}),Object(d.jsx)("div",{className:"product-info__options",children:Object(d.jsx)(je,{currentProduct:c,capacityOptions:E})}),Object(d.jsxs)("div",{className:"product-info__prices",children:[Object(d.jsx)("p",{className:"product-info__price",children:"$".concat(c.priceDiscount)}),Object(d.jsx)("p",{className:"product-info__fullprice",children:"$".concat(c.priceRegular)})]}),Object(d.jsx)("div",{className:"product-info__actions",children:s&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(be,{width:273,height:48,product:s}),Object(d.jsx)(he,{width:48,height:48,product:s})]})}),Object(d.jsx)("div",{className:"product-info__characteristics",children:Object(d.jsx)(ge,{techSpecs:I})})]})]}),Object(d.jsxs)("div",{className:"product-info__description",children:[Object(d.jsxs)("div",{className:"product-info__about","data-cy":"productDescription",children:[Object(d.jsx)("h3",{className:"product-info__subtitle",children:"About"}),Object(d.jsx)(fe,{articles:c.description})]}),Object(d.jsxs)("div",{className:"product-info__tech-spec",children:[Object(d.jsx)("h3",{className:"product-info__subtitle",children:"Tech specs"}),Object(d.jsx)("div",{className:"product-info__tech-text",children:Object(d.jsx)(ge,{techSpecs:q})})]})]})]}),L&&Object(d.jsx)(me,{}),y&&Object(d.jsx)("h1",{className:"title title--large",children:"Phone was not found"}),x?Object(d.jsx)(_e,{title:"You may also like",products:x}):Object(d.jsx)(me,{})]})}),ye=function(){var e=Object(u.k)().pathname;return Object(b.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},we=c(9),ke=(c(46),function(e){var t=e.title,c=e.searchName,n=e.options,a=Object(b.useState)(""),r=Object(f.a)(a,2),s=r[0],i=r[1],o=Object(l.d)(),u=Object(f.a)(o,1)[0],j=Object(b.useState)(!1),p=Object(f.a)(j,2),m=p[0],O=p[1],x=41*n.length;Object(b.useEffect)((function(){var e=u.get(c);if(e){var t=F(e);i(t)}}),[s]);var _=function(e){e.target.className.includes("dropdown")||O(!1)};Object(b.useEffect)((function(){return document.addEventListener("click",_),function(){document.removeEventListener("click",_)}}),[]);return Object(d.jsxs)("div",{className:"dropdown",style:{width:150},children:[Object(d.jsx)("p",{className:"dropdown__title",children:t}),Object(d.jsxs)("div",{className:"dropdown__body",children:[Object(d.jsxs)("button",{style:{width:150},id:"title",className:"dropdown__item dropdown__item--main",type:"button",onClick:function(){O((function(e){return!e}))},children:[s||"Choose",Object(d.jsx)("i",{className:"icon icon--arrow-down dropdown__arrow"})]}),Object(d.jsx)("ul",{className:h()("dropdown__list",{"dropdown__list--open":m}),style:{width:150,height:m?x:0},children:n.map((function(e){var t;return Object(d.jsx)(E,{className:"dropdown__item dropdown__item--option",params:(t={},Object(we.a)(t,c,e.toLowerCase()),Object(we.a)(t,"page",null),t),onClick:function(){return t=e,O(!1),void i(t);var t},children:e},e)}))})]})]})}),Ce=function(e){var t=e.category;return Object(d.jsx)("h2",{className:"title title--large",children:"".concat(t," not found")})},Pe=function(){return Object(d.jsx)("p",{className:"title title--large",children:"There are no products matching the current search criteria"})},Ae=(c(47),c(48),function(e){var t=e.products;return Object(d.jsx)("ul",{"data-cy":"productList",className:"product-list",children:t.map((function(e){return Object(d.jsx)("li",{className:"product-list__item",children:Object(d.jsx)(xe,{product:e})},e.id)}))})}),Se=function(e){var t=e.products,c=e.perPage,n=e.currentPage,a=(n-1)*c,r=n*c,s=Math.ceil(t.length/c),i=1===n,o=n===s,l=t.slice(a,r),u=function(e,t){for(var c=[],n=e;n<=t;n+=1)c.push(n);return c}(1,s),j=t.length>c,b=i?n:n-1,p=o?n:n+1;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{"data-cy":"pagination",className:"pagination",children:[Object(d.jsx)("div",{className:"pagination__content",children:Object(d.jsx)(Ae,{products:l})}),j&&Object(d.jsxs)("ul",{className:"pagination__buttons",children:[Object(d.jsx)("li",{className:h()("page-item",{disabled:i}),children:Object(d.jsx)(E,{"data-cy":"paginationLeft",className:h()("pagination__slide-btn","icon--btn",{"pagination__slide-btn--disabled":i}),type:"button",params:{page:"".concat(b)},children:Object(d.jsx)("i",{className:h()("icon","icon--arrow-left",{"icon--arrow-left--disabled":i})})})}),u.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(E,{className:h()("pagination__page-btn","icon--btn",{"pagination__page-btn-selected":e===n}),params:{page:"".concat(e)},children:e})},e)})),Object(d.jsx)("li",{className:h()("page-item",{disabled:o}),children:Object(d.jsx)(E,{"data-cy":"paginationRight",className:h()("pagination__slide-btn","icon--btn",{"pagination__slide-btn--disabled":o}),params:{page:"".concat(p)},children:Object(d.jsx)("i",{className:h()("icon","icon--arrow-right",{"icon--arrow-right--disabled":o})})})})]})]})})},Fe=(c(49),Object.values(r)),qe=Object.values(n),Ie=function(){var e=Object(G.a)(Y.a.mark((function e(t,c){var n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:n=e.sent,t(n);case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),Te=function(e){var t=e.title,c=e.getProducts,a=Object(b.useState)(null),r=Object(f.a)(a,2),s=r[0],i=r[1],o=Object(l.d)(),j=Object(f.a)(o,1)[0],p=Object(u.k)().pathname;Object(b.useEffect)((function(){Ie(i,c)}),[]);var h=j.get("page")||1,m=null!==s,O=A(s||[],j),x=0===(null===s||void 0===s?void 0:s.length)&&m,_=0===(null===O||void 0===O?void 0:O.length)&&!x,v=function(e,t){switch(+(e.get("perPage")||"all")){case+n.Four:return+n.Four;case+n.Eight:return+n.Eight;case+n.Sixteen:return+n.Sixteen;default:return t.length}}(j,O);return Object(d.jsxs)("section",{className:"products",children:[Object(d.jsx)(de,{pathes:[p]}),Object(d.jsxs)("div",{className:"products__header",children:[Object(d.jsx)("h2",{className:"products__title title title--large",children:t}),m&&Object(d.jsx)("p",{className:"products__quantity",children:"".concat(s.length," models")})]}),x?Object(d.jsx)(Ce,{category:t}):Object(d.jsxs)("div",{className:"products__filter",children:[Object(d.jsx)("div",{className:"dropdown",children:Object(d.jsx)(ke,{options:Fe,title:"Sort by",searchName:"sort"})}),Object(d.jsx)("div",{className:"dropdown",children:Object(d.jsx)(ke,{options:qe,title:"Items on page",searchName:"perPage"})})]}),s?Object(d.jsx)("div",{className:"products__list",children:Object(d.jsx)(Se,{products:O,perPage:v,currentPage:+h})}):Object(d.jsx)(me,{}),_&&Object(d.jsx)(Pe,{})]})},Ee=function(){return Object(d.jsx)("section",{className:"accessories",children:Object(d.jsx)(Te,{title:"Accessories",getProducts:re.accessories})})},Le=(c(50),function(e){var t=e.cartItem,c=Object(b.useContext)(D),n=c.removeFromCart,a=c.handleQuantityChange,r=t.product,s=t.quantity,i=t.id,o=r.image,l=r.name,u=r.price,j=r.id,p=s<=1;return Object(d.jsxs)("div",{className:"cart-item",children:[Object(d.jsx)("button",{"data-cy":"cartDeleteButton",type:"button",onClick:function(){n&&n(j)},children:Object(d.jsx)("i",{className:"cart-item__cross icon icon--cross"})}),Object(d.jsx)("img",{className:"cart-item__image",src:o,alt:o}),Object(d.jsx)("p",{className:"cart-item__name",children:l}),Object(d.jsxs)("div",{className:"cart-item__quantity",children:[Object(d.jsx)("button",{className:h()("cart-item__btn","cart-item__quantity-decrease",{"cart-item__quantity-decrease--disabled":p}),type:"button","aria-label":"qunatity-decrease",onClick:function(){a&&a(i,_.Decrease)}}),Object(d.jsx)("p",{className:"cart-item__quantity-text","data-cy":"productQauntity",children:s}),Object(d.jsx)("button",{onClick:function(){a&&a(i,_.Increase)},className:"cart-item__btn cart-item__quantity-increase",type:"button","aria-label":"qunatity-increase"})]}),Object(d.jsx)("p",{className:"cart-item__price",children:"$".concat(u*s)})]})}),Ue=(c(51),function(e){var t=e.cartProducts;return Object(d.jsx)("ul",{className:"cart-list",children:t.map((function(e){return Object(d.jsx)("li",{className:"cart-list__item",children:Object(d.jsx)(Le,{cartItem:e})},e.id)}))})}),De=(c(52),function(e){var t=e.message;return Object(d.jsx)("div",{className:h()("notification",{"notification--hidden":!t}),children:t})}),Me=(c(53),function(){var e=Object(b.useContext)(D).cart,t=Object(b.useState)(""),c=Object(f.a)(t,2),n=c[0],a=c[1],r=0===(null===e||void 0===e?void 0:e.length),s=e&&!r,i=function(e){return null===e||void 0===e?void 0:e.map((function(e){var t=e.product;return e.quantity*t.price})).reduce((function(e,t){return e+t}),0)}(e||[]),o=function(e){return null===e||void 0===e?void 0:e.map((function(e){return e.quantity})).reduce((function(e,t){return e+t}),0)}(e||[]);return Object(d.jsxs)("section",{className:"cart-page",children:[Object(d.jsx)(ue,{}),Object(d.jsx)("h2",{className:"cart-page__title title title--large",children:"Cart"}),Object(d.jsxs)("div",{className:"cart-page__body",children:[Object(d.jsxs)("div",{className:"cart-page__products",children:[s&&Object(d.jsx)(Ue,{cartProducts:e}),r&&Object(d.jsx)("h2",{className:"title title--large",children:"Your cart is empty"})]}),Object(d.jsxs)("div",{className:"cart-page__action",children:[Object(d.jsx)("h3",{className:"title title--large cart-page__total",children:"$".concat(i)}),Object(d.jsx)("p",{className:"cart-page__info",children:"Total for ".concat(o," items")}),Object(d.jsx)("div",{className:"cart-page__checkout-wrapper",children:Object(d.jsx)("button",{type:"button",className:"cart-page__checkout",onClick:function(){!function(e,t){t(e);var c=setTimeout((function(){t(""),clearTimeout(c)}),3e3)}("We are sorry, but this feature is not implemented yet",a)},children:"Checkout"})})]}),Object(d.jsx)("div",{className:"cart-page__message",children:Object(d.jsx)(De,{message:n})})]})]})}),Re=(c(54),function(){var e=Object(b.useContext)(R).favItems,t=Object(u.k)().pathname,c=Object(l.d)(),n=Object(f.a)(c,1)[0],a=0!==(null===e||void 0===e?void 0:e.length)&&e,r=A(e||[],n),s=0===r.length&&0!==(null===e||void 0===e?void 0:e.length);return Object(d.jsxs)("section",{className:"fav-page",children:[Object(d.jsx)(de,{pathes:[t]}),Object(d.jsx)("h1",{className:"fav-page__title title title--large",children:"Favourites"}),Object(d.jsx)("p",{className:"fav-page__amount",children:"".concat(r.length," items")}),a?Object(d.jsx)(Ae,{products:r}):Object(d.jsx)("h2",{className:"title title--large",children:"You don`t have favorites"}),s&&Object(d.jsx)(Pe,{})]})}),Be=(c(55),function(e){var t=e.category,c=t.link,n=t.backImageUrl,a=t.imageUrl,r=t.name,s=t.quantity;return Object(d.jsxs)("div",{className:"category__item",children:[Object(d.jsx)(l.b,{to:c,children:Object(d.jsxs)("div",{className:"category__item-wrapper",children:[Object(d.jsx)("div",{style:{backgroundImage:"url(".concat(n,")")},className:"category__item-bg"}),Object(d.jsx)("img",{className:"category__item-photo",src:"".concat(a),alt:r})]})}),Object(d.jsxs)("div",{className:"category__item-info",children:[Object(d.jsx)(l.b,{to:c,children:Object(d.jsx)("h5",{className:"category__item-title title title--small",children:r})}),Object(d.jsx)("p",{className:"category__item-quantity",children:"".concat(s," models")})]})]})}),$e=(c(56),function(e){var t=e.categories;return Object(d.jsx)("ul",{className:"category",children:t.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(Be,{category:e})},e.link)}))})}),Je=(c(57),function(){var e=Object(b.useState)(0),t=Object(f.a)(e,2),c=t[0],n=t[1],a=K.length-1;return Object(d.jsxs)("div",{className:"Carousel home-page__carousel",children:[Object(d.jsx)("button",{className:"Carousel__button Carousel__button--left",type:"button","aria-label":"left",onClick:function(){n(0===c?a:function(e){return e-1})}}),Object(d.jsx)("div",{style:{width:X},className:"Carousel__content",children:Object(d.jsx)("ul",{style:{width:X,translate:-1040*c,transition:Z},className:"Carousel__list",children:K.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsx)("img",{className:"Carousel__content-item",width:X,src:e,alt:"".concat(t)})},e)}))})}),Object(d.jsx)("button",{type:"button",className:"Carousel__button Carousel__button--right","aria-label":"right",onClick:function(){n(c===a?0:function(e){return e+1})}}),Object(d.jsx)("div",{className:"Carousel__pick-buttons",children:K.map((function(e,t){return Object(d.jsx)("button",{className:h()("Carousel__pick-button",{"Carousel__pick-button--active":c===t}),"aria-label":e,type:"button",onClick:function(){n(t)}},e)}))})]})}),Qe=(c(58),function(){var e=Object(b.useState)(null),t=Object(f.a)(e,2),c=t[0],n=t[1],a=Object(b.useState)(null),r=Object(f.a)(a,2),s=r[0],i=r[1],o=Object(b.useState)(null),l=Object(f.a)(o,2),u=l[0],j=l[1],p=function(){var e=Object(G.a)(Y.a.mark((function e(){var t,c;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne();case 2:for(t=e.sent,c=0;c<t.length;c+=1)W[c].quantity=t[c]||0;j(W);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(G.a)(Y.a.mark((function e(){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(G.a)(Y.a.mark((function e(){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){Promise.all([h(),m(),p()])}),[]),Object(d.jsxs)("section",{className:"home-page",children:[Object(d.jsx)(Je,{}),Object(d.jsx)("div",{className:"hot-prices home-page__block home-page__hot-prices",children:c?Object(d.jsx)(_e,{title:"Hot Prices",products:c}):Object(d.jsx)(me,{})}),Object(d.jsx)("div",{className:"home-page__block",children:u?Object(d.jsx)($e,{categories:u}):Object(d.jsx)(me,{})}),Object(d.jsx)("div",{className:"brand-new home-page__block",children:s?Object(d.jsx)(_e,{title:"Brand new models",products:s}):Object(d.jsx)(me,{})})]})}),Ge=(c(59),function(){return Object(d.jsxs)("div",{className:"not-found",children:[Object(d.jsx)("h1",{className:"not-found__title title title--large",children:"Page not found"}),Object(d.jsx)(ue,{})]})}),He=function(){return Object(d.jsx)("section",{className:"phones",children:Object(d.jsx)(Te,{title:"Mobile Phones",getProducts:re.phones})})},Ye=function(){return Object(d.jsx)("section",{className:"tablets",children:Object(d.jsx)(Te,{title:"Tablets",getProducts:re.tablets})})},ze=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(Q,{}),Object(d.jsx)("main",{className:"App__main",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/",element:Object(d.jsx)(Qe,{})}),Object(d.jsxs)(u.a,{path:"/phones",children:[Object(d.jsx)(u.a,{index:!0,element:Object(d.jsx)(He,{})}),Object(d.jsx)(u.a,{path:":productId",element:Object(d.jsx)(Ne,{})})]}),Object(d.jsxs)(u.a,{path:"/tablets",children:[Object(d.jsx)(u.a,{index:!0,element:Object(d.jsx)(Ye,{})}),Object(d.jsx)(u.a,{path:":productId",element:Object(d.jsx)(Ne,{})})]}),Object(d.jsxs)(u.a,{path:"/accessories",children:[Object(d.jsx)(u.a,{index:!0,element:Object(d.jsx)(Ee,{})}),Object(d.jsx)(u.a,{path:":productId",element:Object(d.jsx)(Ne,{})})]}),Object(d.jsx)(u.a,{path:"/cart",element:Object(d.jsx)(Me,{})}),Object(d.jsx)(u.a,{path:"/favorites",element:Object(d.jsx)(Re,{})}),Object(d.jsx)(u.a,{path:"*",element:Object(d.jsx)(Ge,{})})]})})}),Object(d.jsx)(j,{}),Object(d.jsx)(ye,{})]})};o.a.render(Object(d.jsx)(l.a,{children:Object(d.jsx)(M,{children:Object(d.jsx)(B,{children:Object(d.jsx)(ze,{})})})}),document.getElementById("root"))}]),[[60,1,2]]]);
//# sourceMappingURL=main.c3f33f74.chunk.js.map
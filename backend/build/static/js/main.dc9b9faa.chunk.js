(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(1),a=c.n(n),s=c(20),i=c.n(s),o=(c(46),c(23)),d=(c(47),c(5)),l=c(3),j=(c(48),c(4)),u=function(e){var t=e.click,c=Object(j.c)((function(e){return e.cart})).cartItems;return Object(r.jsxs)("nav",{className:"navbar",children:[Object(r.jsx)("div",{className:"navbar__logo",children:Object(r.jsx)("h2",{children:"Ecommerce Website"})}),Object(r.jsxs)("ul",{className:"navbar__links",children:[Object(r.jsx)("li",{children:Object(r.jsxs)(d.b,{to:"/cart",className:"cart__link",children:[Object(r.jsx)("i",{className:"fas fa-shopping-cart"}),Object(r.jsxs)("span",{children:["Cart ",Object(r.jsx)("span",{className:"cartlogo__badge",children:c.reduce((function(e,t){return Number(t.qty)+e}),0)})]})]})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/",children:"Shop"})})]}),Object(r.jsxs)("div",{className:"hamburger__menu",onClick:t,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})]})},p=(c(54),function(e){var t=e.show,c=e.click,n=["sidedrawer"],a=Object(j.c)((function(e){return e.cart})).cartItems;return t&&n.push("show"),Object(r.jsx)("div",{className:n.join(" "),children:Object(r.jsxs)("ul",{className:"sidedrawer__links",onClick:c,children:[Object(r.jsx)("li",{children:Object(r.jsxs)(d.b,{to:"/cart",children:[Object(r.jsx)("i",{className:"fas fa-shopping-cart"}),Object(r.jsxs)("span",{children:["Cart"," ",Object(r.jsx)("span",{className:"sidedrawer__cartbadge",children:a.reduce((function(e,t){return Number(t.qty)+e}),0)})]})]})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/",children:"Shop"})})]})})}),b=(c(55),function(e){var t=e.click;return e.show&&Object(r.jsx)("div",{className:"backdrop",onClick:t})}),O=(c(56),c(57),function(e){var t=e.imageUrl,c=e.description,n=e.price,a=e.name,s=e.productId;return Object(r.jsxs)("div",{className:"product",children:[Object(r.jsx)("img",{src:t,alt:a}),Object(r.jsxs)("div",{className:"product__info",children:[Object(r.jsx)("p",{className:"info__name",children:a}),Object(r.jsxs)("p",{className:"info__description",children:[c.substring(0,100),"..."]}),Object(r.jsxs)("p",{className:"info__price",children:["$",n]}),Object(r.jsx)(d.b,{to:"/product/".concat(s),className:"info__button",children:"View"})]})]})}),h=c(11),m=c.n(h),f=c(18),x="GET_PRODUCTS_REQUEST",_="GET_PRODUCTS_SUCCESS",g="GET_PRODUCTS_FAIL",v="GET_PRODUCT_DETAILS_REQUEST",y="GET_PRODUCT_DETAILS_SUCCESS",N="GET_PRODUCT_DETAILS_FAIL",S="GET_PRODUCT_DETAILS_RESET",I=c(19),k=c.n(I),C=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.getProducts})),c=t.products,a=t.loading,s=t.error;return Object(n.useEffect)((function(){e(function(){var e=Object(f.a)(m.a.mark((function e(t){var c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:x}),e.next=4,k.a.get("/api/products");case 4:c=e.sent,r=c.data,t({type:_,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:g,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(r.jsxs)("div",{className:"homescreen",children:[Object(r.jsx)("h2",{className:"homescreen__title",children:"Latest Products"}),Object(r.jsx)("div",{className:"homescreen__products",children:a?Object(r.jsx)("h2",{children:"Loading..."}):s?Object(r.jsx)("h2",{children:s}):c.map((function(e){return Object(r.jsx)(O,{name:e.name,description:e.description,price:e.price,imageUrl:e.imageUrl,productId:e._id},e._id)}))})]})},T=c(15),E=(c(76),"ADD_TO_CART"),w="REMOVE_FROM_CART",D=function(e,t){return function(){var c=Object(f.a)(m.a.mark((function c(r,n){var a,s;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,k.a.get("/api/products/".concat(e));case 2:a=c.sent,s=a.data,r({type:E,payload:{product:s._id,name:s.name,imageUrl:s.imageUrl,price:s.price,countInStock:s.countInStock,qty:t}}),localStorage.setItem("cart",JSON.stringify(n().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},U=function(e){var t=e.match,c=e.history,a=Object(n.useState)(1),s=Object(o.a)(a,2),i=s[0],d=s[1],l=Object(j.b)(),u=Object(j.c)((function(e){return e.getProductDetails})),p=u.loading,b=u.error,O=u.product;Object(n.useEffect)((function(){var e;O&&t.params.id!==O._id&&l((e=t.params.id,function(){var t=Object(f.a)(m.a.mark((function t(c){var r,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:v}),t.next=4,k.a.get("/api/products/".concat(e));case 4:r=t.sent,n=r.data,c({type:y,payload:n}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:N,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[l,t,O]);return Object(r.jsx)("div",{className:"productscreen",children:p?Object(r.jsx)("h2",{children:"Loading..."}):b?Object(r.jsx)("h2",{children:b}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"productscreen__left",children:[Object(r.jsx)("div",{className:"left__image",children:Object(r.jsx)("img",{src:O.imageUrl,alt:O.name})}),Object(r.jsxs)("div",{className:"left__info",children:[Object(r.jsx)("p",{className:"left__name",children:O.name}),Object(r.jsxs)("p",{children:["Price: $",O.price]}),Object(r.jsxs)("p",{children:["Description: ",O.description]})]})]}),Object(r.jsx)("div",{className:"productscreen__right",children:Object(r.jsxs)("div",{className:"right__info",children:[Object(r.jsxs)("p",{children:["Price:",Object(r.jsxs)("span",{children:["$",O.price]})]}),Object(r.jsxs)("p",{children:["Status:",Object(r.jsx)("span",{children:O.countInStock>0?"In Stock":"Out of Stock"})]}),Object(r.jsxs)("p",{children:["Qty",Object(r.jsx)("select",{value:i,onChange:function(e){return d(e.target.value)},children:Object(T.a)(Array(O.countInStock).keys()).map((function(e){return Object(r.jsx)("option",{value:e+1,children:e+1},e+1)}))})]}),Object(r.jsx)("p",{children:Object(r.jsx)("button",{type:"button",onClick:function(){l(D(O._id,i)),c.push("/cart")},children:"Add To Cart"})})]})})]})})},P=(c(77),c(78),function(e){var t=e.item,c=e.qtyChangeHandler,n=e.removeHandler;return Object(r.jsxs)("div",{className:"cartitem",children:[Object(r.jsx)("div",{className:"cartitem__image",children:Object(r.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(r.jsx)(d.b,{to:"/product/".concat(t.product),className:"cartItem__name",children:Object(r.jsx)("p",{children:t.name})}),Object(r.jsxs)("p",{className:"cartitem__price",children:["$",t.price]}),Object(r.jsx)("select",{value:t.qty,onChange:function(e){return c(t.product,e.target.value)},className:"cartItem__select",children:Object(T.a)(Array(t.countInStock).keys()).map((function(e){return Object(r.jsx)("option",{value:e+1,children:e+1},e+1)}))}),Object(r.jsx)("button",{className:"cartItem__deleteBtn",onClick:function(){return n(t.product)},children:Object(r.jsx)("i",{className:"fas fa-trash"})})]})}),R=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.cart})).cartItems;Object(n.useEffect)((function(){}),[]);var c=function(t,c){e(D(t,c))},a=function(t){e(function(e){return function(t,c){t({type:w,payload:e}),localStorage.setItem("cart",JSON.stringify(c().cart.cartItems))}}(t))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"cartscreen",children:[Object(r.jsxs)("div",{className:"cartscreen__left",children:[Object(r.jsx)("h2",{children:"Shopping Cart"}),0===t.length?Object(r.jsxs)("div",{children:["Your Cart Is Empty ",Object(r.jsx)(d.b,{to:"/",children:"Go Back"})]}):t.map((function(e){return Object(r.jsx)(P,{item:e,qtyChangeHandler:c,removeHandler:a},e.product)}))]}),Object(r.jsxs)("div",{className:"cartscreen__right",children:[Object(r.jsxs)("div",{className:"cartscreen__info",children:[Object(r.jsxs)("p",{children:["Subtotal (",t.reduce((function(e,t){return Number(t.qty)+e}),0),") items"]}),Object(r.jsxs)("p",{children:["$",t.reduce((function(e,t){return e+t.price*t.qty}),0).toFixed(2)]})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Proceed To Checkout"})})]})]})})};var A=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(r.jsxs)(d.a,{children:[Object(r.jsx)(u,{click:function(){return a(!0)}}),Object(r.jsx)(p,{show:c,click:function(){return a(!1)}}),Object(r.jsx)(b,{show:c,click:function(){return a(!1)}}),Object(r.jsx)("main",{className:"app",children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/",component:C}),Object(r.jsx)(l.a,{exact:!0,path:"/product/:id",component:U}),Object(r.jsx)(l.a,{exact:!0,path:"/cart",component:R})]})})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))},F=c(12),q=c(39),G=c(40),J=c(13),$={cartItems:[]},B=Object(F.combineReducers)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var c=t.payload,r=e.cartItems.find((function(e){return e.product===c.product}));return r?Object(J.a)(Object(J.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?c:e}))}):Object(J.a)(Object(J.a)({},e),{},{cartItems:[].concat(Object(T.a)(e.cartItems),[c])});case w:return Object(J.a)(Object(J.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}},getProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading:!0,products:[]};case _:return{products:t.payload,loading:!1};case g:return{loading:!1,error:t.payload};default:return e}},getProductDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{loading:!0};case y:return{loading:!1,product:t.payload};case N:return{loading:!1,error:t.payload};case S:return{product:{}};default:return e}}}),H=[q.a],M={cart:{cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}},Q=Object(F.createStore)(B,M,Object(G.composeWithDevTools)(F.applyMiddleware.apply(void 0,H)));i.a.render(Object(r.jsx)(j.a,{store:Q,children:Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(A,{})})}),document.getElementById("root")),L()}},[[79,1,2]]]);
//# sourceMappingURL=main.dc9b9faa.chunk.js.map
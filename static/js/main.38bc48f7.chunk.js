(this.webpackJsonpustraa=this.webpackJsonpustraa||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(5),s=c.n(r),i=(c(45),c(46),c(34)),o=c.n(i),l=c(36),u=c(31),j=c(17),d=c(81),p=c(78),b=c(80),h=c(3);function m(){var e=Object(n.useState)(0),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(0),i=Object(j.a)(s,2),m=i[0],O=i[1],g=Object(n.useState)([]),x=Object(j.a)(g,2),f=x[0],y=x[1],_=Object(n.useState)("[+] View More"),v=Object(j.a)(_,2),w=v[0],k=v[1],C=a.a.useState(null),N=Object(j.a)(C,2),T=N[0],S=N[1],V=Object(n.useState)(""),L=Object(j.a)(V,2),A=L[0],F=L[1],M=function(){S(null)};function D(e,t){return I.apply(this,arguments)}function I(){return(I=Object(l.a)(o.a.mark((function e(t,c){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=".concat(t)).then((function(e){return e.json()}));case 2:n=e.sent,a=[n.products[0],n.products[1],n.products[2]],O([].concat(a)),r=Object(u.a)(n.products),y(Object(u.a)(r)),F(c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){fetch("https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob",{headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){r(e),y(e.product_list.products),O([e.product_list.products[0],e.product_list.products[1],e.product_list.products[2]]),F(e.category_list[0].category_name)}))}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Our Products"}),Object(h.jsxs)("div",{className:"cataGory",children:[Object(h.jsx)("div",{className:"viewall",children:"View All"}),c.category_list?c.category_list.map((function(e,t){return Object(h.jsx)("div",{onClick:function(){D(e.category_id,e.category_name)},id:e.category_id,style:{backgroundImage:"url(".concat(e.category_image,")")},children:e.category_name},e.category_name)})):null,Object(h.jsx)("div",{className:"viewall",children:"View All"})]}),Object(h.jsx)("div",{className:"product",style:{marginLeft:"100px",marginTop:"50px"},children:m?m.map((function(e,t){return Object(h.jsxs)("div",{className:"proItem",children:[Object(h.jsx)("img",{src:e.image_urls.x200,alt:e.name}),Object(h.jsxs)("div",{style:{marginTop:"20px",marginLeft:"20px"},children:[e.name,Object(h.jsxs)("span",{style:{marginLeft:"10px"},children:[e.rating,"*"]}),Object(h.jsxs)("p",{children:["(",e.weight," gm)"]}),Object(h.jsxs)("h4",{children:["\u20b9 ",e.price_new,Object(h.jsx)("span",{style:{marginLeft:"10px",textDecoration:"line-through",fontWeight:"normal"},children:e.price})]}),!0===e.is_in_stock?Object(h.jsx)("button",{className:"stock",children:"ADD TO CART"}):Object(h.jsx)("button",{className:"nostock",children:"OUT OF STOCK"})]})]},e.name)})):null}),c?Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"view",onClick:function(){"[+] View More"===w?(O(Object(u.a)(f)),k("[-] View Less")):(O([f[0],f[1],f[2]]),k("[+] View More"))},children:w}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{className:"selcat",children:"Catagory => ".concat(A)}),Object(h.jsxs)("div",{children:[Object(h.jsx)(d.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){S(e.currentTarget)},className:"dropdown",children:"Change Catagory"}),Object(h.jsx)(p.a,{id:"simple-menu",anchorEl:T,keepMounted:!0,open:Boolean(T),onClose:M,children:c.category_list?c.category_list.map((function(e,t){return Object(h.jsx)(b.a,{onClick:function(){D(e.category_id,e.category_name),M()},id:e.category_id,children:e.category_name},e.category_name)})):null})]})]})]}):null]})}var O=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(m,{})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),g()}},[[52,1,2]]]);
//# sourceMappingURL=main.38bc48f7.chunk.js.map
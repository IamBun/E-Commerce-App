"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[746],{6746:function(e,i,r){r.r(i),r.d(i,{default:function(){return y}});var t="detailProduct_detailProduct__okKvL",n="detailProduct_miniImg__gekiO",s="detailProduct_imgMain__lpW2Z",c="detailProduct_detailDescription__S3E5A",d="detailProduct_middle__dwjzq",a="detailProduct_bottom__FPDB2",o="detailProduct_description__6ZJ1n",l="detailProduct_products__cXGMo",u="detailProduct_formButton__vKTDu",h="detailProduct_backToShopBtn__zdHOs",m=r(9434),g=r(948),p=r(5217),x=r(7689),_=r(5431),j=r(2791),f=r(8174),v=(r(5462),r(184)),P=function(e){var i=(0,m.v9)((function(e){return e.data.currentData})),r=(0,m.v9)((function(e){return e.currentUser.email})),P=(0,m.v9)((function(e){return e.cart})),y=(0,x.s0)(),C=(0,m.I0)(),k=(0,j.useRef)(),N=i.find((function(i){return i._id.$oid===e.id})),O=i.filter((function(i){return i.category===N.category&&i._id.$oid!==e.id})),b=function(e){var i=O[e]._id.$oid;y("/detail/".concat(i))};return(0,v.jsxs)(v.Fragment,{children:[i.length>0&&(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:t,children:[(0,v.jsxs)("div",{className:n,children:[(0,v.jsx)("img",{src:N.img1}),(0,v.jsx)("img",{src:N.img2}),(0,v.jsx)("img",{src:N.img3}),(0,v.jsx)("img",{src:N.img4})]}),(0,v.jsx)("div",{className:s,children:(0,v.jsx)("img",{src:N.img1})}),(0,v.jsxs)("div",{className:c,children:[(0,v.jsx)("h1",{children:N.name}),(0,v.jsx)("h3",{children:(0,p.lz)(N.price)}),(0,v.jsx)("p",{children:N.short_desc}),(0,v.jsxs)("h3",{children:["Category : ",N.category]}),(0,v.jsxs)("div",{className:u,children:[(0,v.jsxs)("form",{children:[(0,v.jsx)("label",{htmlFor:"",for:"qty",children:"Quantity:"}),(0,v.jsx)("input",{ref:k,type:"number",name:"qty",id:"qty",min:"1",max:"10",step:"1",defaultValue:1})]}),(0,v.jsx)("button",{onClick:function(i){i.preventDefault();var t=k.current.value,n={id:N._id.$oid,image:N.img1,name:N.name,price:N.price,quantity:Number(t)};if(!r)return f.Am.warn("Login to continue !"),!1;if(r&&(0===P.length&&(C(_.U.addToCart(n)),f.Am.success("Added")),P.length>0)){for(var s=0;s<P.length;s++)if(P[s].id===e.id)return f.Am.warning("You have ".concat(P[s].name,". Modify your quantity in your cart"),{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),-1;C(_.U.addToCart(n)),f.Am.success("Added")}},children:"Add to cart"})]})]})]}),(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("span",{children:"Description"}),(0,v.jsx)("h3",{children:"PRODUCT DESCRIPTION"}),(0,v.jsx)("p",{className:o,children:N.long_desc})]}),(0,v.jsxs)("div",{className:a,children:[(0,v.jsx)("h3",{children:"RELATED PRODUCTS"}),(0,v.jsx)("div",{className:l,children:O.length>0&&O.map((function(e,i){return(0,v.jsx)(g.Z,{item:e,click:b,index:i},i)}))})]}),(0,v.jsx)("div",{className:h,children:(0,v.jsx)("button",{onClick:function(e){e.preventDefault(),y("/shop")},children:" Back To ShopPage"})})]}),0===i.length&&(0,v.jsx)("h1",{children:"Loading..."}),(0,v.jsx)(f.Ix,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})},y=function(){var e=(0,x.UO)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(P,{id:e.productId})})}}}]);
//# sourceMappingURL=746.aff669a7.chunk.js.map
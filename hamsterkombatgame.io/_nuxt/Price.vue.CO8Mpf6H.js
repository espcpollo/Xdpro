import{d as o,o as l,c as u,a as r,u as a,az as c,m as p,b as g,E as i,L as s}from"./entry.jxkJNJ9E.js";const x={class:"diamond"},_=["srcset"],y=["src"],h=o({__name:"Diamond",setup(e){return(t,n)=>(l(),u("picture",x,[r("source",{srcset:a(c).DIAMOND_WEBP,type:"image/webp"},null,8,_),r("img",{class:"img-responsive",src:a(c).DIAMOND},null,8,y)]))}}),S={class:"price"},b={class:"price-image"},v=o({__name:"Price",props:{price:{type:Number,required:!0},text:{type:String,required:!1},size:{type:String,default:"normal"},prefix:{type:String,required:!1},affix:{type:String,required:!1},color:{type:String,required:!1},round:{type:Boolean,default:!0,required:!1},fraction:{type:Number,default:2,required:!1}},setup(e){const t=e;function n(){switch(t.size){case"super-small":return"is-14";case"small":return"is-18";case"normal":return"is-20";case"large":return"is-28";case"x-large":return"is-40";case"xx-large":return"is-60";default:return"is-20"}}function d(){switch(t.color){case"yellow":return"text-yellow";case"green":return"text-green";case"orange":return"text-orange";case"blue":return"text-blue";case"red":return"text-red";default:return""}}const m=p();return(q,D)=>{const f=h;return l(),u("div",S,[r("div",b,[g(f,{class:i(n())},null,8,["class"])]),r("div",{class:i(["price-value",d()])},s(e.prefix)+s(e.text?e.text:a(m).numberFormat(e.price,e.round,!1,e.fraction))+s(e.affix),3)])}}});export{v as _,h as a};
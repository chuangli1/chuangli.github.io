import{d as f,h as r,o as g,a as B,b as l,B as p,G as d,F as h,s as _}from"./vendor.6f35fcad.js";const k={class:"fill"},y={class:"item"},x=_(" \u8BF7\u8F93\u5165\u5BF9\u8C61\u7684key\uFF1A "),b={class:"item"},j=_(" \u8BF7\u8F93\u5165keys\u5BF9\u5E94\u7684\u586B\u5145\u503C\uFF1A "),A=f({emits:["on-result"],setup(C,{emit:v}){const u=r(""),a=r(""),m=()=>{const n=u.value.split(","),e=a.value.split(`
`).map(i=>i.split(",")),s=[];if(e.length){const i=e[0].length;for(let o=0;o<i;o++){let c={};for(let t=0;t<n.length;t++)e[t]&&e[t][o]!==void 0?c[n[t]]=e[t][o]:c[n[t]]="";s.push(JSON.stringify(c))}}const F=`[
	${s.join(`,
	`).replace(/\,/g,`,
		`).replace(/\{/g,`{
		`).replace(/\}/g,`
	}`)}
]`;v("on-result",F)};return(n,e)=>(g(),B(h,null,[l("div",k,[l("div",y,[x,p(l("input",{class:"input","onUpdate:modelValue":e[0]||(e[0]=s=>u.value=s)},null,512),[[d,u.value]])]),l("div",b,[j,p(l("textarea",{class:"values","onUpdate:modelValue":e[1]||(e[1]=s=>a.value=s)},null,512),[[d,a.value]])])]),l("button",{onClick:m,class:"button"},"\u63D0\u4EA4")],64))}});export{A as default};

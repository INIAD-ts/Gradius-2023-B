(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{171:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return i(4829)}])},4829:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return _}});var n=i(5893),s=i(1163),a=i(7294),r=i(2237);let l=(e,t)=>{let i=(t-e.createdAt)/1e3,n=300*i*e.direction.x,s=300*i*e.direction.y,a=e.createdPosition.x+n,r=e.createdPosition.y+s;return[a,r]},o=e=>{let{bullet:t,currentTime:i}=e,[s,a]=l(t,i);return(0,n.jsx)(r.Cd,{x:s,y:a,radius:5,fill:"red"})};var u=i(1290),d=i(6850),c=i.n(d);let y=()=>{let e=(0,s.useRouter)(),[t,i]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let t=async()=>{let t=await u.x.game.config.$get();null!==t&&i(t),0===t&&e.push("/game/config")};t()},[e]),(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsxs)("div",{className:c().title,children:[(0,n.jsx)("h1",{children:"Gradius"}),(0,n.jsx)("h2",{children:"Config"})]}),(0,n.jsx)("div",{className:c().buttons,children:[...Array(t)].map((t,i)=>(0,n.jsx)("button",{className:c().button,onClick:()=>e.push({query:{display:i}}),children:i},i))}),(0,n.jsx)("p",{className:c().text,children:"画面を選択してください"})]})};var h=i(1733),x=i(4420),p=i.n(x);let m=()=>{let e=(0,s.useRouter)(),t=void 0===e.query.display?null:Number(e.query.display);if(null===t)return(0,n.jsx)(y,{});let i=()=>{let[e,i]=(0,a.useState)([]),[s,d]=(0,a.useState)([]),[c,y]=(0,a.useState)([]),[x,m]=(0,a.useState)([]),[_,f]=(0,a.useState)(Date.now()),[b]=p()(h.D.images.spaceship_png),[g]=p()(h.D.images.ufo_jpg),[j]=p()(h.D.images.ufo_2_PNG),[w]=p()(h.D.images.ufo_3_PNG),N=async e=>{let t=await u.x.player.$get({query:{display:e}});null!==t&&i(t)},P=async e=>{let t=await u.x.enemy.$get({query:{display:e}});null!==t&&d(t)},v=async e=>{let t=await u.x.bullet.$get({query:{display:e}});null!==t&&(y(t.players),m(t.enemies))},E=async()=>{let e=[];for(let t of s){let i=c.find(e=>{let i=l(e,_),n=Math.pow(t.createdPosition.x-i[0],2)+Math.pow(t.createdPosition.y-i[1],2);return n<2500});i&&i.playerId?(await u.x.enemy.$delete({body:{enemyId:t.id,userId:i.playerId}}),await u.x.bullet.$delete({body:{bulletId:i.id}})):e.push(t)}},q=async()=>{let t=[];for(let i of s){let n=e.find(e=>{let t=Math.pow(i.createdPosition.x-e.position.x,2)+Math.pow(i.createdPosition.y-e.position.y,2);return t<2500});n?u.x.game.$post({body:{player:n,enemy:i}}):t.push(i)}};return(0,a.useEffect)(()=>{let e=requestAnimationFrame(()=>{N(t),P(t),v(t),E(),q(),f(Date.now())});return()=>cancelAnimationFrame(e)}),(0,n.jsx)("div",{children:(0,n.jsxs)(r.Hf,{width:1920,height:1080,children:[(0,n.jsx)(r.mh,{children:c.map(e=>(0,n.jsx)(o,{bullet:e,currentTime:_},e.id))}),(0,n.jsx)(r.mh,{children:x.map(e=>(0,n.jsx)(o,{bullet:e,currentTime:_},e.id))}),(0,n.jsx)(r.mh,{children:e.map(e=>(0,n.jsx)(r.Ee,{image:b,width:100,height:100,rotation:"red"===e.team?90:-90,x:e.position.x+50,y:e.position.y-50},e.id))}),(0,n.jsx)(r.mh,{children:s.map(e=>(0,n.jsx)(r.Ee,{image:1===e.type?g:2===e.type?j:w,width:80,height:80,x:e.createdPosition.x,y:e.createdPosition.y},e.id))})]})})};return(0,n.jsx)(i,{})};var _=m},6850:function(e){e.exports={container:"Lobby_container__Z__4u",button:"Lobby_button__HHfXL",buttons:"Lobby_buttons__F_DSz",title:"Lobby_title__Twjsl",text:"Lobby_text__csIbQ"}}},function(e){e.O(0,[289,774,888,179],function(){return e(e.s=171)}),_N_E=e.O()}]);
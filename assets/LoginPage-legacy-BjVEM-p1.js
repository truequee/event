System.register(["./index-legacy-CYGbWi8u.js","./el-col-legacy-Cjyn6Cd_.js","./el-checkbox-legacy-DjuR6osd.js","./el-form-item-legacy-BcXlNWST.js","./el-link-legacy-DW4jwOzx.js","./_plugin-vue_export-helper-legacy-CMsiKS-o.js","./el-input-legacy-B_Ju122l.js","./el-message-legacy-CnYKPQeP.js","./isEqual-legacy-AU-1mi9o.js"],(function(e,a){"use strict";var l,r,u,o,s,t,n,d,p,i,c,f,g,m,v,_,y,w,b,x,h,k,V,j,E,C,U;return{setters:[e=>{l=e.r,r=e.u,u=e.a,o=e.w,s=e.o,t=e.c,n=e.b,d=e.d,p=e.e,i=e.f,c=e.g,f=e.h,g=e.E,m=e.i,v=e.j,_=e.l,y=e.p,w=e.k},e=>{b=e.E,x=e.a},e=>{h=e.E},e=>{k=e.E,V=e.a},e=>{j=e.E},e=>{E=e._,C=e.E},e=>{U=e.E},null,null],execute:function(){var q=document.createElement("style");q.textContent=".login-page[data-v-9059b411]{height:100vh;background-color:#fff}.login-page .bg[data-v-9059b411]{background:url("+new URL("logo2-NlmRCu_m.png",a.meta.url).href+") no-repeat 60% center/240px auto,url("+new URL("login_bg-DtRzsrKg.jpg",a.meta.url).href+") no-repeat center/cover;border-radius:0 20px 20px 0}.login-page .form[data-v-9059b411]{display:flex;flex-direction:column;justify-content:center;user-select:none}.login-page .form .title[data-v-9059b411]{margin:0 auto}.login-page .form .button[data-v-9059b411]{width:100%}.login-page .form .flex[data-v-9059b411]{width:100%;display:flex;justify-content:space-between}\n",document.head.appendChild(q);const R=e=>(y("data-v-9059b411"),e=e(),w(),e),z=R((()=>c("h1",null,"注册",-1))),L=R((()=>c("h1",null,"登录",-1))),S={class:"flex"};e("default",E({__name:"LoginPage",setup(e){const a=l(!1),y=l(),w=l({username:"",password:"",repassword:""}),E={username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,max:10,message:"用户名必须是5-10位的字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码必须是6-15位的非空字符",trigger:"blur"}],repassword:[{required:!0,message:"请再次输入密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码必须是6-15的非空字符",trigger:"blur"},{validator:(e,a,l)=>{a!==w.value.password?l(new Error("两次输入密码不一致!")):l()},trigger:"blur"}]},q=async()=>{await y.value.validate(),await f(w.value),g.success("注册成功"),a.value=!1},R=r(),$=u(),D=async()=>{await y.value.validate();const e=await m(w.value);R.setToken(e.data.token),g.success("登录成功"),$.push("/")};return o(a,(()=>{w.value={username:"",password:"",repassword:""}})),(e,l)=>{const r=x,u=k,o=U,f=C,g=j,m=V,R=h,$=b;return s(),t($,{class:"login-page"},{default:n((()=>[d(r,{span:12,class:"bg"}),d(r,{span:6,offset:3,class:"form"},{default:n((()=>[a.value?(s(),t(m,{key:0,model:w.value,rules:E,ref_key:"form",ref:y,size:"large",autocomplete:"off"},{default:n((()=>[d(u,null,{default:n((()=>[z])),_:1}),d(u,{prop:"username"},{default:n((()=>[d(o,{modelValue:w.value.username,"onUpdate:modelValue":l[0]||(l[0]=e=>w.value.username=e),"prefix-icon":p(v),placeholder:"请输入用户名"},null,8,["modelValue","prefix-icon"])])),_:1}),d(u,{prop:"password"},{default:n((()=>[d(o,{modelValue:w.value.password,"onUpdate:modelValue":l[1]||(l[1]=e=>w.value.password=e),"prefix-icon":p(_),type:"password",placeholder:"请输入密码"},null,8,["modelValue","prefix-icon"])])),_:1}),d(u,{prop:"repassword"},{default:n((()=>[d(o,{modelValue:w.value.repassword,"onUpdate:modelValue":l[2]||(l[2]=e=>w.value.repassword=e),"prefix-icon":p(_),type:"password",placeholder:"请输入再次密码"},null,8,["modelValue","prefix-icon"])])),_:1}),d(u,null,{default:n((()=>[d(f,{onClick:q,class:"button",type:"primary","auto-insert-space":""},{default:n((()=>[i(" 注册 ")])),_:1})])),_:1}),d(u,{class:"flex"},{default:n((()=>[d(g,{type:"info",underline:!1,onClick:l[3]||(l[3]=e=>a.value=!1)},{default:n((()=>[i(" ← 返回 ")])),_:1})])),_:1})])),_:1},8,["model"])):(s(),t(m,{key:1,model:w.value,rules:E,ref_key:"form",ref:y,size:"large",autocomplete:"off"},{default:n((()=>[d(u,null,{default:n((()=>[L])),_:1}),d(u,{prop:"username"},{default:n((()=>[d(o,{modelValue:w.value.username,"onUpdate:modelValue":l[4]||(l[4]=e=>w.value.username=e),"prefix-icon":p(v),placeholder:"请输入用户名"},null,8,["modelValue","prefix-icon"])])),_:1}),d(u,{prop:"password"},{default:n((()=>[d(o,{modelValue:w.value.password,"onUpdate:modelValue":l[5]||(l[5]=e=>w.value.password=e),name:"password","prefix-icon":p(_),type:"password",placeholder:"请输入密码"},null,8,["modelValue","prefix-icon"])])),_:1}),d(u,{class:"flex"},{default:n((()=>[c("div",S,[d(R,null,{default:n((()=>[i("记住我")])),_:1}),d(g,{type:"primary",underline:!1},{default:n((()=>[i("忘记密码？")])),_:1})])])),_:1}),d(u,null,{default:n((()=>[d(f,{onClick:D,class:"button",type:"primary","auto-insert-space":""},{default:n((()=>[i("登录")])),_:1})])),_:1}),d(u,{class:"flex"},{default:n((()=>[d(g,{type:"info",underline:!1,onClick:l[6]||(l[6]=e=>a.value=!0)},{default:n((()=>[i(" 注册 → ")])),_:1})])),_:1})])),_:1},8,["model"]))])),_:1})])),_:1})}}},[["__scopeId","data-v-9059b411"]]))}}}));

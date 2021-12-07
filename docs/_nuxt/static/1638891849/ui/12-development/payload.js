__NUXT_JSONP__("/ui/12-development", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab){return {data:[{document:{slug:"12-development",description:"",title:"Local Development",position:12,category:"Policy Reporter UI",toc:[{id:H,depth:A,text:I},{id:J,depth:m,text:x},{id:K,depth:m,text:L},{id:M,depth:m,text:N},{id:O,depth:A,text:y},{id:P,depth:m,text:Q},{id:R,depth:m,text:S},{id:T,depth:A,text:U},{id:V,depth:m,text:x},{id:W,depth:m,text:X},{id:Y,depth:m,text:Z},{id:_,depth:m,text:y}],body:{type:"root",children:[{type:a,tag:B,props:{id:H},children:[{type:a,tag:f,props:{href:"#go-backend",ariaHidden:h,tabIndex:i},children:[{type:a,tag:g,props:{className:[j,k]},children:[]}]},{type:b,value:I}]},{type:b,value:c},{type:a,tag:l,props:{},children:[{type:b,value:"The Go Backend acts as:"}]},{type:b,value:c},{type:a,tag:C,props:{},children:[{type:b,value:c},{type:a,tag:n,props:{},children:[{type:b,value:"Backend Store and API for the Policy Report pushes"}]},{type:b,value:c},{type:a,tag:n,props:{},children:[{type:b,value:"FileServer for the NuxtJS Single Plage Application (the actual UI)"}]},{type:b,value:c},{type:a,tag:n,props:{},children:[{type:b,value:"HTTP Proxy for the Policy Reporter REST API"}]},{type:b,value:c},{type:a,tag:n,props:{},children:[{type:b,value:"HTTP Proxy for the Kyverno Plugin REST API (if enabled)"}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:o,props:{id:J},children:[{type:a,tag:f,props:{href:"#requirements",ariaHidden:h,tabIndex:i},children:[{type:a,tag:g,props:{className:[j,k]},children:[]}]},{type:b,value:x}]},{type:b,value:c},{type:a,tag:C,props:{},children:[{type:b,value:c},{type:a,tag:n,props:{},children:[{type:b,value:"Go \u003E= v1.17"}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:o,props:{id:K},children:[{type:a,tag:f,props:{href:"#getting-started",ariaHidden:h,tabIndex:i},children:[{type:a,tag:g,props:{className:[j,k]},children:[]}]},{type:b,value:L}]},{type:b,value:c},{type:a,tag:l,props:{},children:[{type:b,value:"Fork and\u002For checkout "},{type:a,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter-ui",target:w},children:[{type:b,value:"Policy Reporter UI on GitHub"}]}]},{type:b,value:c},{type:a,tag:l,props:{},children:[{type:b,value:"The Go Backend is located in the "},{type:a,tag:d,props:{},children:[{type:b,value:".\u002Fserver"}]},{type:b,value:" directory"}]},{type:b,value:c},{type:a,tag:o,props:{id:M},children:[{type:a,tag:f,props:{href:"#install-dependencies",ariaHidden:h,tabIndex:i},children:[{type:a,tag:g,props:{className:[j,k]},children:[]}]},{type:b,value:N}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s]},children:[{type:a,tag:d,props:{className:[t,u]},children:[{type:a,tag:g,props:{className:[D]},children:[{type:b,value:"cd"}]},{type:b,value:" server\n\ngo get .\u002F...\n"}]}]}]},{type:b,value:c},{type:a,tag:B,props:{id:O},children:[{type:a,tag:f,props:{href:"#running-policy-reporter-ui",ariaHidden:h,tabIndex:i},children:[{type:a,tag:g,props:{className:[j,k]},children:[]}]},{type:b,value:y}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s]},children:[{type:a,tag:d,props:{className:[t,u]},children:[{type:b,value:"go run main.go -no-ui -dev -port=8082\n"}]}]}]},{type:b,value:c},{type:a,tag:o,props:{id:P},children:[{type:a,tag:f,props:{href:"#argument-referece",ariaHidden:h,tabIndex:i},children:[{type:a,tag:g,props:{className:[j,k]},children:[]}]},{type:b,value:Q}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:"table",props:{},children:[{type:a,tag:"thead",props:{},children:[{type:a,tag:v,props:{},children:[{type:a,tag:E,props:{},children:[{type:b,value:"Argument"}]},{type:a,tag:E,props:{},children:[{type:b,value:"Discription"}]},{type:a,tag:E,props:{},children:[{type:b,value:"Default"}]}]}]},{type:a,tag:"tbody",props:{},children:[{type:a,tag:v,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"-config"}]}]},{type:a,tag:e,props:{},children:[{type:b,value:"path to the Policy Reporter UI config file"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"config.yaml"}]}]}]},{type:a,tag:v,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"-dev"}]}]},{type:a,tag:e,props:{},children:[{type:b,value:"add the "},{type:a,tag:"strong",props:{},children:[{type:b,value:"Access-Control-Allow-Origin"}]},{type:b,value:" HTTP Header"},{type:a,tag:z,props:{},children:[]},{type:b,value:"to all APIs to avaid CORS errors"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:$}]}]}]},{type:a,tag:v,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"-no-ui"}]}]},{type:a,tag:e,props:{},children:[{type:b,value:"disable the SPA Handler to start the backend without the UI,"},{type:a,tag:z,props:{},children:[]},{type:b,value:"only for development purpose"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:$}]}]}]},{type:a,tag:v,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"-policy-reporter"}]}]},{type:a,tag:e,props:{},children:[{type:b,value:"Host URL to Policy Reporter,"},{type:a,tag:z,props:{},children:[]},{type:b,value:aa}]},{type:a,tag:e,props:{},children:[]}]},{type:a,tag:v,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"-kyverno-plugin"}]}]},{type:a,tag:e,props:{},children:[{type:b,value:"Host URL to Policy Reporter Kyverno Plugin,"},{type:a,tag:z,props:{},children:[]},{type:b,value:aa}]},{type:a,tag:e,props:{},children:[]}]},{type:a,tag:v,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"-port"}]}]},{type:a,tag:e,props:{},children:[{type:b,value:"used port for the HTTP Server"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"8080"}]}]}]}]}]},{type:b,value:c},{type:a,tag:o,props:{id:R},children:[{type:a,tag:f,props:{href:"#compile-and-run-policy-reporter-ui",ariaHidden:h,tabIndex:i},children:[{type:a,tag:g,props:{className:[j,k]},children:[]}]},{type:b,value:S}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s]},children:[{type:a,tag:d,props:{className:[t,u]},children:[{type:b,value:"make build\n\n.\u002Fbuild\u002Fpolicyreporter-ui -no-ui -dev -port=8082\n"}]}]}]},{type:b,value:c},{type:a,tag:B,props:{id:T},children:[{type:a,tag:f,props:{href:"#nuxtjs-frontend",ariaHidden:h,tabIndex:i},children:[{type:a,tag:g,props:{className:[j,k]},children:[]}]},{type:b,value:U}]},{type:b,value:c},{type:a,tag:l,props:{},children:[{type:b,value:"The actual frontend is a single page application based on "},{type:a,tag:f,props:{href:"https:\u002F\u002Fnuxtjs.org\u002F",target:w},children:[{type:b,value:"NuxtJS"}]},{type:b,value:" and "},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.typescriptlang.org\u002F",target:w},children:[{type:b,value:"TypeScript"}]},{type:b,value:F}]},{type:b,value:c},{type:a,tag:o,props:{id:V},children:[{type:a,tag:f,props:{href:"#requirements-1",ariaHidden:h,tabIndex:i},children:[{type:a,tag:g,props:{className:[j,k]},children:[]}]},{type:b,value:x}]},{type:b,value:c},{type:a,tag:C,props:{},children:[{type:b,value:c},{type:a,tag:n,props:{},children:[{type:b,value:"NodeJS \u003E= v16"}]},{type:b,value:c},{type:a,tag:n,props:{},children:[{type:b,value:"Local running Policy Reporter UI Backend"}]},{type:b,value:c},{type:a,tag:n,props:{},children:[{type:b,value:"Accessable Policy Reporter REST API"}]},{type:b,value:c},{type:a,tag:n,props:{},children:[{type:b,value:"Accessable Kyverno Plugin REST API (optional)"}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:o,props:{id:W},children:[{type:a,tag:f,props:{href:"#preparation",ariaHidden:h,tabIndex:i},children:[{type:a,tag:g,props:{className:[j,k]},children:[]}]},{type:b,value:X}]},{type:b,value:c},{type:a,tag:l,props:{},children:[{type:b,value:"Access Policy Reporter via Port Forward:"}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s]},children:[{type:a,tag:d,props:{className:[t,u]},children:[{type:b,value:"kubectl port-forward service\u002Fpolicy-reporter 8080:8080 -n policy-reporter\n"}]}]}]},{type:b,value:c},{type:a,tag:l,props:{},children:[{type:b,value:"Access Policy Reporter Kyverno Plugin via Port Forward:"}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s]},children:[{type:a,tag:d,props:{className:[t,u]},children:[{type:b,value:"kubectl port-forward service\u002Fpolicy-reporter-kyverno-plugin 8083:8080 -n policy-reporter\n"}]}]}]},{type:b,value:c},{type:a,tag:l,props:{},children:[{type:b,value:"Start the Policy Reporter UI Server in development mode without the UI. The server has to be started in the "},{type:a,tag:d,props:{},children:[{type:b,value:"server"}]},{type:b,value:" directory of the Policy Reporter UI project."}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s]},children:[{type:a,tag:d,props:{className:[t,u]},children:[{type:b,value:"go run main.go -no-ui -dev -port=8082 -policy-reporter http:\u002F\u002Flocalhost:8080 -kyverno-plugin http:\u002F\u002Flocalhost:8083\n"}]}]}]},{type:b,value:c},{type:a,tag:o,props:{id:Y},children:[{type:a,tag:f,props:{href:"#install-dependencies-1",ariaHidden:h,tabIndex:i},children:[{type:a,tag:g,props:{className:[j,k]},children:[]}]},{type:b,value:Z}]},{type:b,value:c},{type:a,tag:l,props:{},children:[{type:b,value:"Dependencies are managed with NPM."}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s]},children:[{type:a,tag:d,props:{className:[t,u]},children:[{type:b,value:"npm install\n"}]}]}]},{type:b,value:c},{type:a,tag:o,props:{id:_},children:[{type:a,tag:f,props:{href:"#running-policy-reporter-ui-1",ariaHidden:h,tabIndex:i},children:[{type:a,tag:g,props:{className:[j,k]},children:[]}]},{type:b,value:y}]},{type:b,value:c},{type:a,tag:l,props:{},children:[{type:b,value:"Create a .env File to configure the Policy Reporter UI - Backend URL. With this setup you can just copy the prepared "},{type:a,tag:d,props:{},children:[{type:b,value:".env.example"}]},{type:b,value:F}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s]},children:[{type:a,tag:d,props:{className:[t,u]},children:[{type:a,tag:g,props:{className:[D]},children:[{type:b,value:"cp"}]},{type:b,value:" .env.example ."},{type:a,tag:g,props:{className:[D]},children:[{type:b,value:"env"}]},{type:b,value:c}]}]}]},{type:b,value:c},{type:a,tag:l,props:{},children:[{type:b,value:"Start the NuxtJS development server"}]},{type:b,value:c},{type:a,tag:p,props:{className:[q]},children:[{type:a,tag:r,props:{className:[s]},children:[{type:a,tag:d,props:{className:[t,u]},children:[{type:b,value:"npm run dev\n"}]}]}]},{type:b,value:c},{type:a,tag:l,props:{},children:[{type:b,value:"Open "},{type:a,tag:f,props:{href:G,target:w},children:[]},{type:a,tag:f,props:{href:G,rel:["nofollow","noopener","noreferrer"],target:w},children:[{type:b,value:G}]},{type:b,value:F}]},{type:b,value:c},{type:a,tag:l,props:{},children:[{type:b,value:"Check the output of the "},{type:a,tag:d,props:{},children:[{type:b,value:"npm run dev"}]},{type:b,value:" command if this port is not working."}]}]},dir:"\u002Fen\u002Fui",path:"\u002Fen\u002Fui\u002F12-development",extension:".md",createdAt:ab,updatedAt:ab,to:"\u002Fui\u002F12-development"},prev:{title:"API Reference",path:"\u002Fen\u002Fui\u002F11-api-reference",to:"\u002Fui\u002F11-api-reference"},next:{title:"Config Reference",path:"\u002Fen\u002Fui\u002F13-config-reference",to:"\u002Fui\u002F13-config-reference"}}],fetch:{},mutations:[]}}("element","text","\n","code","td","a","span","true",-1,"icon","icon-link","p",3,"li","h3","div","nuxt-content-highlight","pre","highlight-pre-container","language-bash","hljs","tr","_blank","Requirements","Running Policy Reporter UI","br",2,"h2","ul","hljs-built_in","th",".","http:\u002F\u002Flocalhost:3000","go-backend","Go Backend","requirements","getting-started","Getting started","install-dependencies","Install dependencies","running-policy-reporter-ui","argument-referece","Argument Referece","compile-and-run-policy-reporter-ui","Compile and run Policy Reporter UI","nuxtjs-frontend","NuxtJS Frontend","requirements-1","preparation","Preparation","install-dependencies-1","Install Dependencies","running-policy-reporter-ui-1","false","used to proxy API requests to from the UI","2021-12-07T15:43:00.875Z")));
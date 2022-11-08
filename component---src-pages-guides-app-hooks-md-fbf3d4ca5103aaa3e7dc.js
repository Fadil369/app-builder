"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[8079],{52456:function(e,a,p){p.r(a),p.d(a,{_frontmatter:function(){return d},default:function(){return c}});var i=p(87462),t=p(63366),n=(p(15007),p(64983)),o=p(91515),l=["components"],d={},s={_frontmatter:d},r=o.Z;function c(e){var a=e.components,p=(0,t.Z)(e,l);return(0,n.mdx)(r,(0,i.Z)({},s,p,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"app-builder-application-tooling-lifecycle-event-hooks"},"App Builder application tooling lifecycle event hooks"),(0,n.mdx)("p",null,"Hooks can be defined to run before, after, or in place of many of the app plugin commands in the app.config.yaml or ext.config.yaml file of your app. "),(0,n.mdx)("h2",{id:"command-support"},"Command Support"),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"aio app run")," supports:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-yaml"},"hooks:\n  pre-app-run: echo pre-app-run\n  post-app-run: echo post-app-run\n  pre-app-build: echo pre-app-build\n  post-app-build: echo post-app-build\n  pre-app-deploy: echo pre-app-deploy\n  post-app-deploy: echo post-app-deploy\n  build-actions: echo build-actions\n  deploy-actions: echo deploy-actions\n  build-static: echo build-static\n  serve-static: echo serve-static\n  pre-app-undeploy: echo pre-app-undeploy\n  post-app-undeploy: echo post-app-undeploy\n  undeploy-actions: echo undeploy-actions\n  undeploy-static: echo undeploy-static\n")),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"aio app build")," supports:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-yaml"},"hooks:\n  pre-app-build: echo pre-app-build\n  post-app-build: echo post-app-build\n  build-actions: echo build-actions\n  build-static: echo build-static\n")),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"aio app deploy")," supports:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-yaml"},"hooks:\n  pre-app-build: echo pre-app-build\n  post-app-build: echo post-app-build\n  pre-app-deploy: echo pre-app-deploy\n  post-app-deploy: echo post-app-deploy\n  build-actions: echo build-actions\n  build-static: echo build-static\n  deploy-actions: echo deploy-actions\n  deploy-static: echo deploy-static\n")),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"aio app undeploy")," supports:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-yaml"},"hooks:\n  pre-app-undeploy: echo pre-app-undeploy\n  post-app-undeploy: echo post-app-undeploy\n  undeploy-actions: echo undeploy-actions\n  undeploy-static: echo undeploy-static\n")),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"aio app test")," supports:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-yaml"},"hooks:\n  test: echo this is your custom test runner\n")),(0,n.mdx)("h2",{id:"use-cases"},"Use cases"),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"aio app run")," hooks:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"manage additional local development tooling that is not managed by the out-of-the-box flow")),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"aio app build")," ",(0,n.mdx)("strong",{parentName:"p"},"build-static")," and ",(0,n.mdx)("strong",{parentName:"p"},"build-actions")," hooks:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"build actions to include static files with the action zipfile (for templates like in server-side rendering)"),(0,n.mdx)("li",{parentName:"ul"},"build the web assets with a different bundler and configuration, for example webpack")),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"aio app deploy")," ",(0,n.mdx)("strong",{parentName:"p"},"deploy-static")," and ",(0,n.mdx)("strong",{parentName:"p"},"deploy-actions")," hooks:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"support additional deployment steps (e.g. deploy to multiple servers or locations)")),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"aio app undeploy")," ",(0,n.mdx)("strong",{parentName:"p"},"undeploy-static")," and ",(0,n.mdx)("strong",{parentName:"p"},"undeploy-actions")," hooks:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"support additional un-deployment steps (e.g. un-deploy from multiple servers or locations)")),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"aio app test")," ",(0,n.mdx)("strong",{parentName:"p"},"test")," hook:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"support a custom test runner for your app or extension")),(0,n.mdx)("h2",{id:"legacy-app-no-extensions"},"Legacy App (no extensions)"),(0,n.mdx)("p",null,"In the root of your app, you will have to add a ",(0,n.mdx)("inlineCode",{parentName:"p"},"hooks")," key in the ",(0,n.mdx)("inlineCode",{parentName:"p"},"app.config.yaml")," file, under the ",(0,n.mdx)("inlineCode",{parentName:"p"},"application")," key. Example:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"application:\n  hooks:\n    pre-app-run: echo pre-app-run\n")),(0,n.mdx)("p",null,"If you add extensions to a standalone app via ",(0,n.mdx)("inlineCode",{parentName:"p"},"aio app add extension"),", note that your ",(0,n.mdx)("inlineCode",{parentName:"p"},"app.config.yaml")," hooks will always run first, then your extension hooks in each ",(0,n.mdx)("inlineCode",{parentName:"p"},"ext.config.yaml")," will be run."),(0,n.mdx)("h2",{id:"app-with-extensions"},"App with Extensions"),(0,n.mdx)("p",null,"In your app extension folder (typically at ",(0,n.mdx)("inlineCode",{parentName:"p"},"src/EXTENSION_NAME"),"), find the ",(0,n.mdx)("inlineCode",{parentName:"p"},"ext.config.yaml")," file, and add in a ",(0,n.mdx)("inlineCode",{parentName:"p"},"hooks")," key. Example:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"hooks:\n  pre-app-run: echo pre-app-run\n")),(0,n.mdx)("h2",{id:"hooks-flow"},"Hooks flow"),(0,n.mdx)("p",null,"The following diagram illustrates how your custom hooks will be executed within the application via the various commands:"),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"145.31249999999997%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/35137a2449e13c61f7075bf368b161a5/5530d/aio-app-run.webp 320w","/app-builder/static/35137a2449e13c61f7075bf368b161a5/0c8fb/aio-app-run.webp 640w","/app-builder/static/35137a2449e13c61f7075bf368b161a5/94b1e/aio-app-run.webp 1280w","/app-builder/static/35137a2449e13c61f7075bf368b161a5/42392/aio-app-run.webp 1835w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/35137a2449e13c61f7075bf368b161a5/dd4a7/aio-app-run.png 320w","/app-builder/static/35137a2449e13c61f7075bf368b161a5/0f09e/aio-app-run.png 640w","/app-builder/static/35137a2449e13c61f7075bf368b161a5/bbbf7/aio-app-run.png 1280w","/app-builder/static/35137a2449e13c61f7075bf368b161a5/2e51b/aio-app-run.png 1835w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/35137a2449e13c61f7075bf368b161a5/bbbf7/aio-app-run.png",alt:"aio-app-run lifecycle",title:"aio-app-run lifecycle",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1137px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"114.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/d2e104785599f21056ffb10e5cf34f01/5530d/aio-app-build.webp 320w","/app-builder/static/d2e104785599f21056ffb10e5cf34f01/0c8fb/aio-app-build.webp 640w","/app-builder/static/d2e104785599f21056ffb10e5cf34f01/71a59/aio-app-build.webp 1137w"],sizes:"(max-width: 1137px) 100vw, 1137px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/d2e104785599f21056ffb10e5cf34f01/dd4a7/aio-app-build.png 320w","/app-builder/static/d2e104785599f21056ffb10e5cf34f01/0f09e/aio-app-build.png 640w","/app-builder/static/d2e104785599f21056ffb10e5cf34f01/7ec87/aio-app-build.png 1137w"],sizes:"(max-width: 1137px) 100vw, 1137px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/d2e104785599f21056ffb10e5cf34f01/7ec87/aio-app-build.png",alt:"aio-app-build lifecycle",title:"aio-app-build lifecycle",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1137px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"205.93749999999997%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/963f71d986927ba071ea6a53a8778900/5530d/aio-app-deploy.webp 320w","/app-builder/static/963f71d986927ba071ea6a53a8778900/0c8fb/aio-app-deploy.webp 640w","/app-builder/static/963f71d986927ba071ea6a53a8778900/71a59/aio-app-deploy.webp 1137w"],sizes:"(max-width: 1137px) 100vw, 1137px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/963f71d986927ba071ea6a53a8778900/dd4a7/aio-app-deploy.png 320w","/app-builder/static/963f71d986927ba071ea6a53a8778900/0f09e/aio-app-deploy.png 640w","/app-builder/static/963f71d986927ba071ea6a53a8778900/7ec87/aio-app-deploy.png 1137w"],sizes:"(max-width: 1137px) 100vw, 1137px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/963f71d986927ba071ea6a53a8778900/7ec87/aio-app-deploy.png",alt:"aio-app-deploy lifecycle",title:"aio-app-deploy lifecycle",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"107.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/ef110619eb7830180cf9a2388818bcf3/5530d/aio-app-undeploy.webp 320w","/app-builder/static/ef110619eb7830180cf9a2388818bcf3/0c8fb/aio-app-undeploy.webp 640w","/app-builder/static/ef110619eb7830180cf9a2388818bcf3/94b1e/aio-app-undeploy.webp 1280w","/app-builder/static/ef110619eb7830180cf9a2388818bcf3/633a6/aio-app-undeploy.webp 1302w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/ef110619eb7830180cf9a2388818bcf3/dd4a7/aio-app-undeploy.png 320w","/app-builder/static/ef110619eb7830180cf9a2388818bcf3/0f09e/aio-app-undeploy.png 640w","/app-builder/static/ef110619eb7830180cf9a2388818bcf3/bbbf7/aio-app-undeploy.png 1280w","/app-builder/static/ef110619eb7830180cf9a2388818bcf3/3b5a6/aio-app-undeploy.png 1302w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/ef110619eb7830180cf9a2388818bcf3/bbbf7/aio-app-undeploy.png",alt:"aio-app-undeploy lifecycle",title:"aio-app-undeploy lifecycle",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-app-hooks-md-fbf3d4ca5103aaa3e7dc.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return A});a(32);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(153),l=a.n(c),u=a(144),s=a(148),d=a(147),p=a(143),m=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,a=t.excerpt,n=this.props.pageContext,r=n.previous,i=n.next;return o.a.createElement(d.a,{location:this.props.location,title:e},o.a.createElement(l.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:a}],title:t.frontmatter.title+" | "+e}),o.a.createElement("h1",null,t.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(p.b)(-.2),{display:"block",marginBottom:Object(p.a)(1),marginTop:Object(p.a)(-1)})},t.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement("hr",{style:{marginBottom:Object(p.a)(1)}}),o.a.createElement(s.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,r&&o.a.createElement(u.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,i&&o.a.createElement(u.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))},e}(o.a.Component);e.default=m;var A="3804820323"},143:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return d});var n=a(150),r=a.n(n),i=a(151),o=a.n(i),c=a(152),l=a.n(c);l.a.plugins=[new o.a],delete l.a.googleFonts;var u=new r.a(l.a);var s=u.rhythm,d=u.scale},144:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return A}),a.d(e,"StaticQueryContext",function(){return p}),a.d(e,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(142),l=a.n(c);a.d(e,"Link",function(){return l.a}),a.d(e,"withPrefix",function(){return c.withPrefix}),a.d(e,"navigate",function(){return c.navigate}),a.d(e,"push",function(){return c.push}),a.d(e,"replace",function(){return c.replace}),a.d(e,"navigateTo",function(){return c.navigateTo});var u=a(145),s=a.n(u);a.d(e,"PageRenderer",function(){return s.a});var d=a(33);a.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function A(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(t,e,a){var n;t.exports=(n=a(146))&&n.default||n},146:function(t,e,a){"use strict";a.r(e);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(50),l=a(2),u=function(t){var e=t.location,a=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},147:function(t,e,a){"use strict";a(32);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(144),l=a(143),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(-1)}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},t,r)},e}(o.a.Component);e.a=u},148:function(t,e,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=(a(155),a(156),a(149)),l=a.n(c),u=a(143),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(u.a)(2.5)}},o.a.createElement("img",{src:l.a,alt:"Jason Galea",style:{marginRight:Object(u.a)(.5),marginBottom:0,width:Object(u.a)(2),height:Object(u.a)(2)}}),o.a.createElement("div",null,o.a.createElement("p",null,"Written by ",o.a.createElement("strong",null,"Jason Galea")," from Cairns, Australia."),o.a.createElement("p",null,"I work at"," ",o.a.createElement("a",{href:"https://safetyculture.com",target:"_blank"},"SafetyCulture")," ","on the"," ",o.a.createElement("a",{href:"https://app.safetyculture.io"},"SafetyCulture web app"),","," ","with React & Nodem, backing the awsome"," ",o.a.createElement("a",{href:"http://www.safetyculture.com.au/iAuditor/"},"iAuditor")," ","mobile app for"," ",o.a.createElement("a",{href:"https://itunes.apple.com/au/app/iauditor-safety-audit-checklist/id499999532?mt=8"},"iOS")," ","and"," ",o.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.safetyculture.iauditor&hl=en"},"Android"),".",o.a.createElement("br",null)),o.a.createElement("p",null,o.a.createElement("a",{href:"https://twitter.com/lecstor"},"Twitter")," |"," ",o.a.createElement("a",{href:"https://github.com/lecstor"},"Github"))))},e}(o.a.Component);e.a=s},149:function(t,e){t.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9d85e4839f99d2ac924a.js.map
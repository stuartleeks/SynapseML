"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[1010],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5912:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],u={title:"Contributing Guide",hide_title:!0,sidebar_label:"Contributing Guide",description:"Contributing Guide"},l={unversionedId:"reference/contributing_guide",id:"version-0.9.1/reference/contributing_guide",isDocsHomePage:!1,title:"Contributing Guide",description:"Contributing Guide",source:"@site/versioned_docs/version-0.9.1/reference/contributing_guide.md",sourceDirName:"reference",slug:"/reference/contributing_guide",permalink:"/SynapseML/docs/reference/contributing_guide",version:"0.9.1",sidebar_label:"Contributing Guide",frontMatter:{title:"Contributing Guide",hide_title:!0,sidebar_label:"Contributing Guide",description:"Contributing Guide"},sidebar:"version-0.9.1/docs",previous:{title:"SynapseML Development Setup",permalink:"/SynapseML/docs/reference/developer-readme"},next:{title:"Using the MMLSpark Docker Image",permalink:"/SynapseML/docs/reference/docker"}},s=[{value:"Interested in contributing to SynapseML?  We&#39;re excited to work with you.",id:"interested-in-contributing-to-synapseml--were-excited-to-work-with-you",children:[{value:"You can contribute in many ways:",id:"you-can-contribute-in-many-ways",children:[]},{value:"How to contribute?",id:"how-to-contribute",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"interested-in-contributing-to-synapseml--were-excited-to-work-with-you"},"Interested in contributing to SynapseML?  We're excited to work with you."),(0,o.kt)("h3",{id:"you-can-contribute-in-many-ways"},"You can contribute in many ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use the library and give feedback: report bugs, request features."),(0,o.kt)("li",{parentName:"ul"},"Add sample Jupyter notebooks, Python or Scala code examples, documentation\npages."),(0,o.kt)("li",{parentName:"ul"},"Fix bugs and issues."),(0,o.kt)("li",{parentName:"ul"},"Add new features, such as data transformations or machine learning algorithms."),(0,o.kt)("li",{parentName:"ul"},"Review pull requests from other contributors.")),(0,o.kt)("h3",{id:"how-to-contribute"},"How to contribute?"),(0,o.kt)("p",null,"You can give feedback, report bugs and request new features anytime by opening\nan issue.  Also, you can up-vote or comment on existing issues."),(0,o.kt)("p",null,"If you want to add code, examples or documentation to the repository, follow\nthis process:"),(0,o.kt)("h4",{id:"propose-a-contribution"},"Propose a contribution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Preferably, get started by tackling existing issues to get yourself acquainted\nwith the library source and the process."),(0,o.kt)("li",{parentName:"ul"},"Open an issue, or comment on an existing issue to discuss your contribution\nand design, to ensure your contribution is a good fit and doesn't duplicate\non-going work."),(0,o.kt)("li",{parentName:"ul"},"Any algorithm you're planning to contribute should be well known and accepted\nfor production use, and backed by research papers."),(0,o.kt)("li",{parentName:"ul"},"Algorithms should be highly scalable and suitable for very large datasets."),(0,o.kt)("li",{parentName:"ul"},"All contributions need to comply with the MIT License.  Contributors external\nto Microsoft need to sign CLA.")),(0,o.kt)("h4",{id:"implement-your-contribution"},"Implement your contribution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fork the SynapseML repository."),(0,o.kt)("li",{parentName:"ul"},"Implement your algorithm in Scala, using our wrapper generation mechanism to\nproduce PySpark bindings."),(0,o.kt)("li",{parentName:"ul"},"Use SparkML ",(0,o.kt)("inlineCode",{parentName:"li"},"PipelineStage"),"s so your algorithm can be used as a part of\npipeline."),(0,o.kt)("li",{parentName:"ul"},"For parameters use ",(0,o.kt)("inlineCode",{parentName:"li"},"MMLParam"),"s."),(0,o.kt)("li",{parentName:"ul"},"Implement model saving and loading by extending SparkML ",(0,o.kt)("inlineCode",{parentName:"li"},"MLReadable"),"."),(0,o.kt)("li",{parentName:"ul"},"Use good Scala style."),(0,o.kt)("li",{parentName:"ul"},"Binary dependencies should be on Maven Central."),(0,o.kt)("li",{parentName:"ul"},"See this ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/SynapseML/pull/22"},"pull request")," for an\nexample contribution.")),(0,o.kt)("h4",{id:"implement-tests"},"Implement tests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set up build environment.  Use a Linux machine or VM (we use Ubuntu, but other\ndistros should work too)."),(0,o.kt)("li",{parentName:"ul"},"Test your code locally."),(0,o.kt)("li",{parentName:"ul"},"Add tests using ScalaTests \u2014 unit tests are required."),(0,o.kt)("li",{parentName:"ul"},"A sample notebook is required as an end-to-end test.")),(0,o.kt)("h4",{id:"implement-documentation"},"Implement documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/SynapseML/tree/master/notebooks"},"sample Jupyter notebook")," that shows the intended use\ncase of your algorithm, with instructions in step-by-step manner.  (The same\nnotebook could be used for testing the code.)"),(0,o.kt)("li",{parentName:"ul"},"Add in-line ScalaDoc comments to your source code, to generate the ",(0,o.kt)("a",{parentName:"li",href:"https://mmlspark.azureedge.net/docs/pyspark/"},"API\nreference documentation"))),(0,o.kt)("h4",{id:"open-a-pull-request"},"Open a pull request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In most cases, you should squash your commits into one."),(0,o.kt)("li",{parentName:"ul"},"Open a pull request, and link it to the discussion issue you created earlier."),(0,o.kt)("li",{parentName:"ul"},"An SynapseML core team member will trigger a build to test your changes."),(0,o.kt)("li",{parentName:"ul"},"Fix any build failures.  (The pull request will have comments from the build\nwith useful links.)"),(0,o.kt)("li",{parentName:"ul"},"Wait for code reviews from core team members and others."),(0,o.kt)("li",{parentName:"ul"},"Fix issues found in code review and re-iterate.")),(0,o.kt)("h4",{id:"build-and-check-in"},"Build and check-in"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Wait for a core team member to merge your code in."),(0,o.kt)("li",{parentName:"ul"},"Your feature will be available through a Docker image and script installation\nin the next release, which typically happens around once a month.  You can try\nout your features sooner by using build artifacts for the version that has\nyour changes merged in (such versions end with a ",(0,o.kt)("inlineCode",{parentName:"li"},".devN"),").")),(0,o.kt)("p",null,"If in doubt about how to do something, see how it was done in existing code or\npull requests, and don't hesitate to ask."))}p.isMDXComponent=!0}}]);
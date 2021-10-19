"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[1043],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1332:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},445:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(4806),o=n(6010),l="tabItem_2kG2",c="tabItemActive_3NDg";var s=37,i=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,m=e.values,p=e.groupId,f=e.className,d=(0,a.Z)(),y=d.tabGroupChoices,v=d.setTabGroupChoices,b=(0,r.useState)(u),N=b[0],h=b[1],k=r.Children.toArray(e.children),g=[];if(null!=p){var O=y[p];null!=O&&O!==N&&m.some((function(e){return e.value===O}))&&h(O)}var C=function(e){var t=e.currentTarget,n=g.indexOf(t),r=m[n].value;h(r),null!=p&&(v(p,r),setTimeout((function(){var e,n,r,a,o,l,s,i;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,s=l.innerHeight,i=l.innerWidth,n>=0&&o<=i&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},E=function(e){var t,n;switch(e.keyCode){case i:var r=g.indexOf(e.target)+1;n=g[r]||g[0];break;case s:var a=g.indexOf(e.target)-1;n=g[a]||g[g.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:E,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},8578:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},4806:function(e,t,n){var r=n(7294),a=n(8578);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1989:function(e,t,n){var r=n(7294),a=n(2263);t.Z=function(e){var t=e.className,n=e.py,o=e.scala,l=e.sourceLink,c=(0,a.Z)().siteConfig.customFields.version,s="https://mmlspark.blob.core.windows.net/docs/"+c+"/pyspark/"+n,i="https://mmlspark.blob.core.windows.net/docs/"+c+"/scala/"+o;return r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Python API: "),r.createElement("a",{href:s},t)),r.createElement("td",null,r.createElement("strong",null,"Scala API: "),r.createElement("a",{href:i},t)),r.createElement("td",null,r.createElement("strong",null,"Source: "),r.createElement("a",{href:l},t)))))}},7278:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(445),c=n(1332),s=n(1989),i=["components"],u={},m={unversionedId:"documentation/estimators/core/_NN",id:"version-0.9.1/documentation/estimators/core/_NN",isDocsHomePage:!1,title:"_NN",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.1/documentation/estimators/core/_NN.md",sourceDirName:"documentation/estimators/core",slug:"/documentation/estimators/core/_NN",permalink:"/SynapseML/docs/documentation/estimators/core/_NN",version:"0.9.1",frontMatter:{}},p=[{value:"NN",id:"nn",children:[{value:"ConditionalKNN",id:"conditionalknn",children:[]},{value:"KNN",id:"knn",children:[]}]}],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"nn"},"NN"),(0,o.kt)("h3",{id:"conditionalknn"},"ConditionalKNN"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.nn import *\n\ncknn = (ConditionalKNN()\n      .setOutputCol("matches")\n      .setFeaturesCol("features"))\n'))),(0,o.kt)(c.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.nn._\nimport spark.implicits._\n\nval cknn = (new ConditionalKNN()\n            .setOutputCol("matches")\n            .setFeaturesCol("features"))\n')))),(0,o.kt)(s.Z,{className:"ConditionalKNN",py:"mmlspark.nn.html#module-mmlspark.nn.ConditionalKNN",scala:"com/microsoft/azure/synapse/ml/nn/ConditionalKNN.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/core/src/main/scala/com/microsoft/azure/synapse/ml/nn/ConditionalKNN.scala",mdxType:"DocTable"}),(0,o.kt)("h3",{id:"knn"},"KNN"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.nn import *\n\nknn = (KNN()\n      .setOutputCol("matches"))\n'))),(0,o.kt)(c.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.nn._\nimport spark.implicits._\n\nval knn = (new KNN()\n      .setOutputCol("matches"))\n')))),(0,o.kt)(s.Z,{className:"KNN",py:"mmlspark.nn.html#module-mmlspark.nn.KNN",scala:"com/microsoft/azure/synapse/ml/nn/KNN.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/core/src/main/scala/com/microsoft/azure/synapse/ml/nn/KNN.scala",mdxType:"DocTable"}))}d.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);
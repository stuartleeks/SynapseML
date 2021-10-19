"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[991,4225],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1332:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},445:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(7294),o=t(4806),a=t(6010),l="tabItem_2kG2",i="tabItemActive_3NDg";var s=37,c=39;var u=function(e){var n=e.lazy,t=e.block,u=e.defaultValue,m=e.values,p=e.groupId,d=e.className,f=(0,o.Z)(),v=f.tabGroupChoices,b=f.setTabGroupChoices,y=(0,r.useState)(u),g=y[0],N=y[1],_=r.Children.toArray(e.children),h=[];if(null!=p){var O=v[p];null!=O&&O!==g&&m.some((function(e){return e.value===O}))&&N(O)}var k=function(e){var n=e.currentTarget,t=h.indexOf(n),r=m[t].value;N(r),null!=p&&(b(p,r),setTimeout((function(){var e,t,r,o,a,l,s,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,o=e.bottom,a=e.right,l=window,s=l.innerHeight,c=l.innerWidth,t>=0&&a<=c&&o<=s&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(i),setTimeout((function(){return n.classList.remove(i)}),2e3))}),150))},M=function(e){var n,t;switch(e.keyCode){case c:var r=h.indexOf(e.target)+1;t=h[r]||h[0];break;case s:var o=h.indexOf(e.target)-1;t=h[o]||h[h.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},d)},m.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,className:(0,a.Z)("tabs__item",l,{"tabs__item--active":g===n}),key:n,ref:function(e){return h.push(e)},onKeyDown:M,onFocus:k,onClick:k},t)}))),n?(0,r.cloneElement)(_.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},_.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},8578:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},4806:function(e,n,t){var r=t(7294),o=t(8578);n.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1989:function(e,n,t){var r=t(7294),o=t(2263);n.Z=function(e){var n=e.className,t=e.py,a=e.scala,l=e.sourceLink,i=(0,o.Z)().siteConfig.customFields.version,s="https://mmlspark.blob.core.windows.net/docs/"+i+"/pyspark/"+t,c="https://mmlspark.blob.core.windows.net/docs/"+i+"/scala/"+a;return r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement("strong",null,"Python API: "),r.createElement("a",{href:s},n)),r.createElement("td",null,r.createElement("strong",null,"Scala API: "),r.createElement("a",{href:c},n)),r.createElement("td",null,r.createElement("strong",null,"Source: "),r.createElement("a",{href:l},n)))))}},6378:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return f}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=t(445),i=t(1332),s=t(1989),c=["components"],u={},m={unversionedId:"documentation/transformers/deep_learning/_ONNXModel",id:"version-0.9.1/documentation/transformers/deep_learning/_ONNXModel",isDocsHomePage:!1,title:"_ONNXModel",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.1/documentation/transformers/deep_learning/_ONNXModel.md",sourceDirName:"documentation/transformers/deep_learning",slug:"/documentation/transformers/deep_learning/_ONNXModel",permalink:"/SynapseML/docs/documentation/transformers/deep_learning/_ONNXModel",version:"0.9.1",frontMatter:{}},p=[{value:"ONNXModel",id:"onnxmodel",children:[]}],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"onnxmodel"},"ONNXModel"),(0,a.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"py",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'import synapse.ml\nfrom synapse.ml.onnx import ONNXModel\n\nmodel_path = "PUT_YOUR_MODEL_PATH"\nonnx_ml = (ONNXModel()\n            .setModelLocation(model_path)\n            .setFeedDict({"float_input": "features"})\n            .setFetchDict({"prediction": "output_label", "rawProbability": "output_probability"})\n'))),(0,a.kt)(i.Z,{value:"scala",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.onnx._\n\nval model_path = "PUT_YOUR_MODEL_PATH"\nval onnx_ml = new ONNXModel()\n                  .setModelLocation(model_path)\n                  .setFeedDict(Map("float_input" -> "features"))\n                  .setFetchDict(Map("prediction" -> "output_label", "rawProbability" -> "output_probability"))\n')))),(0,a.kt)(s.Z,{className:"ONNXModel",py:"mmlspark.onnx.html#module-mmlspark.onnx.ONNXModel",scala:"com/microsoft/azure/synapse/ml/onnx/ONNXModel.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/deep-learning/src/main/scala/com/microsoft/azure/synapse/ml/onnx/ONNXModel.scala",mdxType:"DocTable"}))}f.isMDXComponent=!0},6316:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=t(6378),i=["components"],s={title:"Deep Learning",sidebar_label:"Deep Learning"},c={unversionedId:"documentation/transformers/transformers_deep_learning",id:"version-0.9.1/documentation/transformers/transformers_deep_learning",isDocsHomePage:!1,title:"Deep Learning",description:"export const toc = [...ONNXModelTOC]",source:"@site/versioned_docs/version-0.9.1/documentation/transformers/transformers_deep_learning.md",sourceDirName:"documentation/transformers",slug:"/documentation/transformers/transformers_deep_learning",permalink:"/SynapseML/docs/documentation/transformers/transformers_deep_learning",version:"0.9.1",sidebar_label:"Deep Learning",frontMatter:{title:"Deep Learning",sidebar_label:"Deep Learning"},sidebar:"version-0.9.1/docs",previous:{title:"Vowpal Wabbit",permalink:"/SynapseML/docs/documentation/transformers/transformers_vw"},next:{title:"Estimators - Core",permalink:"/SynapseML/docs/documentation/estimators/estimators_core"}},u=[].concat(l.toc),m={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(l.default,{mdxType:"ONNXModel"}))}p.isMDXComponent=!0},6010:function(e,n,t){function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})}}]);
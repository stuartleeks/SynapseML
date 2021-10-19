"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[8617],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1332:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},445:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(4806),o=n(6010),l="tabItem_2kG2",s="tabItemActive_3NDg";var i=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,m=e.values,p=e.groupId,f=e.className,d=(0,r.Z)(),b=d.tabGroupChoices,y=d.setTabGroupChoices,v=(0,a.useState)(c),h=v[0],k=v[1],g=a.Children.toArray(e.children),w=[];if(null!=p){var x=b[p];null!=x&&x!==h&&m.some((function(e){return e.value===x}))&&k(x)}var j=function(e){var t=e.currentTarget,n=w.indexOf(t),a=m[n].value;k(a),null!=p&&(y(p,a),setTimeout((function(){var e,n,a,r,o,l,i,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,l=window,i=l.innerHeight,u=l.innerWidth,n>=0&&o<=u&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case i:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:j,onClick:j},n)}))),t?(0,a.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},8578:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},4806:function(e,t,n){var a=n(7294),r=n(8578);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1989:function(e,t,n){var a=n(7294),r=n(2263);t.Z=function(e){var t=e.className,n=e.py,o=e.scala,l=e.sourceLink,s=(0,r.Z)().siteConfig.customFields.version,i="https://mmlspark.blob.core.windows.net/docs/"+s+"/pyspark/"+n,u="https://mmlspark.blob.core.windows.net/docs/"+s+"/scala/"+o;return a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement("strong",null,"Python API: "),a.createElement("a",{href:i},t)),a.createElement("td",null,a.createElement("strong",null,"Scala API: "),a.createElement("a",{href:u},t)),a.createElement("td",null,a.createElement("strong",null,"Source: "),a.createElement("a",{href:l},t)))))}},8394:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(445),s=n(1332),i=n(1989),u=["components"],c={},m={unversionedId:"documentation/transformers/core/_Featurize",id:"documentation/transformers/core/_Featurize",isDocsHomePage:!1,title:"_Featurize",description:"\x3c!--",source:"@site/docs/documentation/transformers/core/_Featurize.md",sourceDirName:"documentation/transformers/core",slug:"/documentation/transformers/core/_Featurize",permalink:"/SynapseML/docs/next/documentation/transformers/core/_Featurize",version:"current",frontMatter:{}},p=[{value:"Featurize",id:"featurize",children:[{value:"DataConversion",id:"dataconversion",children:[]},{value:"IndexToValue",id:"indextovalue",children:[]}]},{value:"Featurize Text",id:"featurize-text",children:[{value:"MultiNGram",id:"multingram",children:[]},{value:"PageSplitter",id:"pagesplitter",children:[]}]}],f={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"featurize"},"Featurize"),(0,o.kt)("h3",{id:"dataconversion"},"DataConversion"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.featurize import *\n\ndf = spark.createDataFrame([\n    (True, 1, 2, 3, 4, 5.0, 6.0, "7", "8.0"),\n    (False, 9, 10, 11, 12, 14.5, 15.5, "16", "17.456"),\n    (True, -127, 345, 666, 1234, 18.91, 20.21, "100", "200.12345")\n], ["bool", "byte", "short", "int", "long", "float", "double", "intstring", "doublestring"])\n\ndc = (DataConversion()\n        .setCols(["byte"])\n        .setConvertTo("boolean"))\n\ndisplay(dc.transform(df))\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.featurize._\nimport spark.implicits._\n\nval df = Seq(\n    (true: Boolean, 1: Byte, 2: Short, 3: Integer, 4: Long, 5.0F, 6.0, "7", "8.0"),\n    (false, 9: Byte, 10: Short, 11: Integer, 12: Long, 14.5F, 15.5, "16", "17.456"),\n    (true, -127: Byte, 345: Short, Short.MaxValue + 100, (Int.MaxValue).toLong + 100, 18.91F, 20.21, "100", "200.12345"))\n    .toDF("bool", "byte", "short", "int", "long", "float", "double", "intstring", "doublestring")\n\nval dc = (new DataConversion()\n        .setCols(Array("byte"))\n        .setConvertTo("boolean"))\n\ndisplay(dc.transform(df))\n')))),(0,o.kt)(i.Z,{className:"DataConversion",py:"synapse.ml.featurize.html#module-synapse.ml.featurize.DataConversion",scala:"com/microsoft/azure/synapse/ml/featurize/DataConversion.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/core/src/main/scala/com/microsoft/azure/synapse/ml/featurize/DataConversion.scala",mdxType:"DocTable"}),(0,o.kt)("h3",{id:"indextovalue"},"IndexToValue"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.featurize import *\n\ndf = spark.createDataFrame([\n    (-3, 24, 0.32534, True, "piano"),\n    (1, 5, 5.67, False, "piano"),\n    (-3, 5, 0.32534, False, "guitar")\n], ["int", "long", "double", "bool", "string"])\n\ndf2 = ValueIndexer().setInputCol("string").setOutputCol("string_cat").fit(df).transform(df)\n\nitv = (IndexToValue()\n        .setInputCol("string_cat")\n        .setOutputCol("string_noncat"))\n\ndisplay(itv.transform(df2))\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.featurize._\nimport spark.implicits._\n\nval df = Seq[(Int, Long, Double, Boolean, String)](\n    (-3, 24L, 0.32534, true, "piano"),\n    (1, 5L, 5.67, false, "piano"),\n    (-3, 5L, 0.32534, false, "guitar")).toDF("int", "long", "double", "bool", "string")\n\nval df2 = new ValueIndexer().setInputCol("string").setOutputCol("string_cat").fit(df).transform(df)\n\nval itv = (new IndexToValue()\n        .setInputCol("string_cat")\n        .setOutputCol("string_noncat"))\n\ndisplay(itv.transform(df2))\n')))),(0,o.kt)(i.Z,{className:"IndexToValue",py:"synapse.ml.featurize.html#module-synapse.ml.featurize.IndexToValue",scala:"com/microsoft/azure/synapse/ml/featurize/IndexToValue.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/core/src/main/scala/com/microsoft/azure/synapse/ml/featurize/IndexToValue.scala",mdxType:"DocTable"}),(0,o.kt)("h2",{id:"featurize-text"},"Featurize Text"),(0,o.kt)("h3",{id:"multingram"},"MultiNGram"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.featurize.text import *\nfrom pyspark.ml.feature import Tokenizer\n\ndfRaw = spark.createDataFrame([\n    (0, "Hi I"),\n    (1, "I wish for snow today"),\n    (2, "we Cant go to the park, because of the snow!"),\n    (3, ""),\n    (4, "1 2 3 4 5 6 7 8 9")\n], ["label", "sentence"])\n\ndfTok = (Tokenizer()\n    .setInputCol("sentence")\n    .setOutputCol("tokens")\n    .transform(dfRaw))\n\nmng = (MultiNGram()\n    .setLengths([1, 3, 4])\n    .setInputCol("tokens")\n    .setOutputCol("ngrams"))\n\ndisplay(mng.transform(dfTok))\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.featurize.text._\nimport org.apache.spark.ml.feature.Tokenizer\nimport spark.implicits._\n\nval dfRaw = (Seq(\n    (0, "Hi I"),\n    (1, "I wish for snow today"),\n    (2, "we Cant go to the park, because of the snow!"),\n    (3, ""),\n    (4, (1 to 10).map(_.toString).mkString(" ")))\n    .toDF("label", "sentence"))\n\nval dfTok = (new Tokenizer()\n    .setInputCol("sentence")\n    .setOutputCol("tokens")\n    .transform(dfRaw))\n\nval mng = (new MultiNGram()\n    .setLengths(Array(1, 3, 4))\n    .setInputCol("tokens")\n    .setOutputCol("ngrams"))\n\ndisplay(mng.transform(dfTok))\n')))),(0,o.kt)(i.Z,{className:"MultiNGram",py:"synapse.ml.featurize.text.html#module-synapse.ml.featurize.text.MultiNGram",scala:"com/microsoft/azure/synapse/ml/featurize/text/MultiNGram.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/core/src/main/scala/com/microsoft/azure/synapse/ml/featurize/text/MultiNGram.scala",mdxType:"DocTable"}),(0,o.kt)("h3",{id:"pagesplitter"},"PageSplitter"),(0,o.kt)(l.Z,{defaultValue:"py",values:[{label:"Python",value:"py"},{label:"Scala",value:"scala"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.featurize.text import *\n\ndf = spark.createDataFrame([\n    ("words words  words     wornssaa ehewjkdiw weijnsikjn xnh", ),\n    ("s s  s   s     s           s", ),\n    ("hsjbhjhnskjhndwjnbvckjbnwkjwenbvfkjhbnwevkjhbnwejhkbnvjkhnbndjkbnd", ),\n    ("hsjbhjhnskjhndwjnbvckjbnwkjwenbvfkjhbnwevkjhbnwejhkbnvjkhnbndjkbnd 190872340870271091309831097813097130i3u709781", ),\n    ("", ),\n    (None, )\n], ["text"])\n\nps = (PageSplitter()\n    .setInputCol("text")\n    .setMaximumPageLength(20)\n    .setMinimumPageLength(10)\n    .setOutputCol("pages"))\n\ndisplay(ps.transform(df))\n'))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import com.microsoft.azure.synapse.ml.featurize.text._\nimport spark.implicits._\n\nval df = Seq(\n    "words words  words     wornssaa ehewjkdiw weijnsikjn xnh",\n    "s s  s   s     s           s",\n    "hsjbhjhnskjhndwjnbvckjbnwkjwenbvfkjhbnwevkjhbnwejhkbnvjkhnbndjkbnd",\n    "hsjbhjhnskjhndwjnbvckjbnwkjwenbvfkjhbnwevkjhbnwejhkbnvjkhnbndjkbnd " +\n      "190872340870271091309831097813097130i3u709781",\n    "",\n    null\n  ).toDF("text")\n\nval ps = (new PageSplitter()\n    .setInputCol("text")\n    .setMaximumPageLength(20)\n    .setMinimumPageLength(10)\n    .setOutputCol("pages"))\n\ndisplay(ps.transform(df))\n')))),(0,o.kt)(i.Z,{className:"PageSplitter",py:"synapse.ml.featurize.text.html#module-synapse.ml.featurize.text.PageSplitter",scala:"com/microsoft/azure/synapse/ml/featurize/text/PageSplitter.html",sourceLink:"https://github.com/microsoft/SynapseML/blob/master/core/src/main/scala/com/microsoft/azure/synapse/ml/featurize/text/PageSplitter.scala",mdxType:"DocTable"}))}d.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);